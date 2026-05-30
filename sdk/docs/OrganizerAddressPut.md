
# OrganizerAddressPut

New address of the organizer, localized in a single language.

## Properties

Name | Type
------------ | -------------
`addressCountry` | string
`addressLocality` | string
`postalCode` | string
`streetAddress` | string

## Example

```typescript
import type { OrganizerAddressPut } from ''

// TODO: Update the object below with actual values
const example = {
  "addressCountry": null,
  "addressLocality": null,
  "postalCode": null,
  "streetAddress": null,
} satisfies OrganizerAddressPut

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizerAddressPut
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


