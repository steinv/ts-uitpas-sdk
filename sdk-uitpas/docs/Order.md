
# Order

Order object

## Properties

Name | Type
------------ | -------------
`id` | string
`status` | string
`paymentUrl` | string
`email` | string
`totalPrice` | number
`registrationToken` | string
`customToken` | string
`mainPassholderRegistration` | [PassholderRegistration](PassholderRegistration.md)
`extraPassholderRegistrations` | [Array&lt;PassholderRegistration&gt;](PassholderRegistration.md)
`redirectUrlAfterPayment` | string
`redirectUrlAfterCancelPayment` | string

## Example

```typescript
import type { Order } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "paymentUrl": null,
  "email": null,
  "totalPrice": null,
  "registrationToken": null,
  "customToken": null,
  "mainPassholderRegistration": null,
  "extraPassholderRegistrations": null,
  "redirectUrlAfterPayment": null,
  "redirectUrlAfterCancelPayment": null,
} satisfies Order

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Order
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


