
# CommonName

Name of a tariff inside priceInfo. Required if category is set to `tariff`. For the `base` category UiTdatabank will set a default. Requires at least one value, for the language specified in the `mainLanguage` property. Names must be unique (per language) when using multiple tarrifs.

## Properties

Name | Type
------------ | -------------
`nl` | string
`fr` | string
`de` | string
`en` | string

## Example

```typescript
import type { CommonName } from ''

// TODO: Update the object below with actual values
const example = {
  "nl": null,
  "fr": null,
  "de": null,
  "en": null,
} satisfies CommonName

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommonName
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


