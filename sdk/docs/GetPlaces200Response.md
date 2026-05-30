
# GetPlaces200Response


## Properties

Name | Type
------------ | -------------
`itemsPerPage` | number
`totalItems` | number
`member` | [Array&lt;Place&gt;](Place.md)
`facet` | [GetEvents200ResponseFacet](GetEvents200ResponseFacet.md)

## Example

```typescript
import type { GetPlaces200Response } from '@steinv/uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "itemsPerPage": 30,
  "totalItems": 2345,
  "member": null,
  "facet": null,
} satisfies GetPlaces200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetPlaces200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


