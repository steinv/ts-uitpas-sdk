
# CardSystemMembership

Membership info of an individual passholder in a specific card system.

## Properties

Name | Type
------------ | -------------
`cardSystem` | [CardSystem](CardSystem.md)
`uitpasNumber` | string
`currentCard` | [CardSystemMembershipCard](CardSystemMembershipCard.md)
`status` | string
`socialTariff` | [CardSystemMembershipSocialTariff](CardSystemMembershipSocialTariff.md)

## Example

```typescript
import type { CardSystemMembership } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "cardSystem": null,
  "uitpasNumber": null,
  "currentCard": null,
  "status": null,
  "socialTariff": null,
} satisfies CardSystemMembership

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CardSystemMembership
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


