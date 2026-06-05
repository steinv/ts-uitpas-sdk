#!/usr/bin/env node
// Cleans up openapi.json for OpenAPI Generator compatibility:
// 1. Renames schema names containing characters invalid for code generation
//    (specifically JSON-LD "Event-@id", "Place-@id", "Organizer-@id" schemas)
//    and updates all $ref pointers accordingly via raw string replacement.
// 2. Removes the `@id` property from the Image schema to avoid a duplicate
//    TypeScript identifier: the generator strips "@" from "@id" producing `id`,
//    which conflicts with the Image schema's own `id` (UUID) property.
//    The UUID-based `id` field is sufficient to reference images in all API calls.

const fs = require("fs");
const path = require("path");

const inputArg = process.argv[2];
if (!inputArg) {
  console.error("Usage: node cleanup-openapi.js <input.json>");
  process.exit(1);
}
const INPUT = path.resolve(inputArg);
const OUTPUT = path.join(path.dirname(INPUT), path.basename(INPUT, ".json") + ".clean.json");

// Step 1: rename schema names that contain characters invalid for OpenAPI Generator
const SCHEMA_RENAMES = {
  "Event-@id": "EventId",
  "Place-@id": "PlaceId",
  "Organizer-@id": "OrganizerId",
};

const raw = fs.readFileSync(INPUT, "utf8");

const renamed = Object.entries(SCHEMA_RENAMES).reduce((acc, [from, to]) => {
  const escapedFrom = from.replace(/[.*+?^${}()|[\]\\@]/g, "\\$&");
  return acc
    .replace(new RegExp(`"${escapedFrom}"`, "g"), `"${to}"`)
    .replace(
      new RegExp(`#/components/schemas/${escapedFrom}`, "g"),
      `#/components/schemas/${to}`
    );
}, raw);

// Step 2: parse and apply structural fixes
const data = JSON.parse(renamed);

// Remove Image.@id to prevent duplicate TypeScript `id` identifier.
// The generator converts "@id" → "id", clashing with the separate "id" (UUID) property.
const imageSchema = data.components?.schemas?.["Image"];
if (imageSchema) {
  delete imageSchema.properties?.["@id"];
  if (Array.isArray(imageSchema.required)) {
    imageSchema.required = imageSchema.required.filter((f) => f !== "@id");
    if (imageSchema.required.length === 0) delete imageSchema.required;
  }
}

// For each *-post schema that is anyOf: [Canonical, Deprecated], replace it with
// allOf: [Canonical] to drop the deprecated variant.
// The generator merges required fields from ALL anyOf branches, so keeping the
// deprecated branch causes deprecated required fields (e.g. `type`, `calendar`)
// to appear as required on the generated TypeScript interface.
// allOf with a single $ref forces the generator to create a real model file with
// exactly the canonical schema's required fields.
const DEPRECATED_SUFFIX = "-deprecated";
const schemas = data.components?.schemas ?? {};
let deprecatedVariantsDropped = 0;
for (const [name, schema] of Object.entries(schemas)) {
  if (!Array.isArray(schema.anyOf)) continue;
  // Only act if at least one variant is a deprecated $ref
  const hasDeprecatedRef = schema.anyOf.some(
    (s) => s.$ref && s.$ref.toLowerCase().endsWith(DEPRECATED_SUFFIX)
  );
  if (!hasDeprecatedRef) continue;
  // Remove deprecated $ref entries; keep all other entries (inline schemas or non-deprecated refs)
  const nonDeprecated = schema.anyOf.filter(
    (s) => !s.$ref || !s.$ref.toLowerCase().endsWith(DEPRECATED_SUFFIX)
  );
  const examples = schema.examples;
  Object.keys(schema).forEach((k) => delete schema[k]);
  if (nonDeprecated.length === 1 && nonDeprecated[0].$ref) {
    schema.allOf = [{ $ref: nonDeprecated[0].$ref }];
  } else {
    schema.anyOf = nonDeprecated;
  }
  if (examples) schema.examples = examples;
  deprecatedVariantsDropped++;
}

const deprecatedSchemasRemoved = 0; // deprecated schemas kept so inline path $refs still resolve

// Remove `uniqueItems` from all array-type schemas.
// The TypeScript generator maps `uniqueItems: true` to Set<T>, which lacks .map()
// and other Array methods used in the generated API client code.
let uniqueItemsRemoved = 0;
function removeUniqueItems(node) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    node.forEach(removeUniqueItems);
    return;
  }
  if (node.type === "array" && node.uniqueItems) {
    delete node.uniqueItems;
    uniqueItemsRemoved++;
  }
  Object.values(node).forEach(removeUniqueItems);
}
removeUniqueItems(data);

fs.writeFileSync(OUTPUT, JSON.stringify(data, null, 2), "utf8");

console.log("Schema renames:");
Object.entries(SCHEMA_RENAMES).forEach(([from, to]) => {
  const escapedFrom = from.replace(/[.*+?^${}()|[\]\\@]/g, "\\$&");
  const count = (raw.match(new RegExp(escapedFrom, "g")) || []).length;
  console.log(`  ${from} → ${to} (${count} occurrences)`);
});
console.log("Property fixes:");
console.log("  Image.@id removed (prevented duplicate TypeScript `id` identifier)");
console.log(`  Deprecated anyOf variants dropped from ${deprecatedVariantsDropped} schema(s) (prevented deprecated required fields leaking into generated types)`);
console.log(`  ${deprecatedSchemasRemoved} deprecated schema definitions removed`);
console.log(`  uniqueItems removed from ${uniqueItemsRemoved} array schema(s) (prevented Set<T> generation)`);
console.log(`\nWritten to ${OUTPUT}`);
