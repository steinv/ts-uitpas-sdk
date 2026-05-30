
# PlaceTypicalAgeRangePut

Describes the request body to set the typical age range of a [place](./models/place.json).

## Properties

Name | Type
------------ | -------------
`typicalAgeRange` | string

## Example

```typescript
import type { PlaceTypicalAgeRangePut } from ''

// TODO: Update the object below with actual values
const example = {
  "typicalAgeRange": null,
} satisfies PlaceTypicalAgeRangePut

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaceTypicalAgeRangePut
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


