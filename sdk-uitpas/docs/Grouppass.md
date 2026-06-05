
# Grouppass

Grouppass is a special kind of UiTPAS concept: it has an `uitpasNumber` like regular passholders, but it can only participate in ticket sale flows (either social tariff or using coupons).   The social tariff for grouppasses is a little bit different from regular passholders, because a grouppass is entitled to buy a certain amount of `totalTicketsPerYear`, of which the remaining amount is indicated by `availableTickets`.  A grouppass cannot check-in at events, or redeem rewards.  A `Grouppass` can be identified by its `id`. However, there are cases where the grouppass is identified using its UiTPAS number. Every grouppass has one (and only one) uitpas number.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`uitpasNumber` | string
`cardStatus` | string
`email` | string
`creationDate` | Date
`socialTariff` | [GrouppassSocialTariff](GrouppassSocialTariff.md)
`cardSystem` | [CardSystem](CardSystem.md)
`address` | [GrouppassAddress](GrouppassAddress.md)
`telephone` | string

## Example

```typescript
import type { Grouppass } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "uitpasNumber": null,
  "cardStatus": null,
  "email": null,
  "creationDate": null,
  "socialTariff": null,
  "cardSystem": null,
  "address": null,
  "telephone": null,
} satisfies Grouppass

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Grouppass
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


