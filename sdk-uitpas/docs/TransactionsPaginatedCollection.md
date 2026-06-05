
# TransactionsPaginatedCollection

Paginated response object for transactions

## Properties

Name | Type
------------ | -------------
`totalItems` | number
`member` | [Array&lt;Transaction&gt;](Transaction.md)

## Example

```typescript
import type { TransactionsPaginatedCollection } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "totalItems": null,
  "member": null,
} satisfies TransactionsPaginatedCollection

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionsPaginatedCollection
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


