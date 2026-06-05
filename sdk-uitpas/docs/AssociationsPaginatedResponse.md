
# AssociationsPaginatedResponse

Paginated response object for associations

## Properties

Name | Type
------------ | -------------
`totalItems` | number
`member` | [Array&lt;Association&gt;](Association.md)

## Example

```typescript
import type { AssociationsPaginatedResponse } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "totalItems": null,
  "member": null,
} satisfies AssociationsPaginatedResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssociationsPaginatedResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


