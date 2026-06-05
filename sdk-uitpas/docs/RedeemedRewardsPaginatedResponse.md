
# RedeemedRewardsPaginatedResponse

Paginated response object for rewards

## Properties

Name | Type
------------ | -------------
`totalItems` | number
`member` | [Array&lt;RedeemedReward&gt;](RedeemedReward.md)

## Example

```typescript
import type { RedeemedRewardsPaginatedResponse } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "totalItems": null,
  "member": null,
} satisfies RedeemedRewardsPaginatedResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RedeemedRewardsPaginatedResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


