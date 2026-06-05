
# CardSystemMembershipCard

Representation of an UiTPAS card embedded in a CardSystemMembership.

## Properties

Name | Type
------------ | -------------
`uitpasNumber` | string
`cardType` | string
`status` | string

## Example

```typescript
import type { CardSystemMembershipCard } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "uitpasNumber": null,
  "cardType": null,
  "status": null,
} satisfies CardSystemMembershipCard

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CardSystemMembershipCard
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


