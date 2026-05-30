
# OrganizerGeo

Geographic coordinates corresponding to the [address](./models/organizer-address.json) the organizer is located at. Calculated automatically by UiTdatabank.

## Properties

Name | Type
------------ | -------------
`latitude` | number
`longitude` | number

## Example

```typescript
import type { OrganizerGeo } from ''

// TODO: Update the object below with actual values
const example = {
  "latitude": null,
  "longitude": null,
} satisfies OrganizerGeo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizerGeo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


