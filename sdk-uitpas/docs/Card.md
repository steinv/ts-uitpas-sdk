
# Card

Representation of an UiTPAS card.

## Properties

Name | Type
------------ | -------------
`uitpasNumber` | string
`cardSystem` | [CardSystem](CardSystem.md)
`cardType` | string
`status` | string
`socialTariff` | boolean

## Example

```typescript
import type { Card } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "uitpasNumber": null,
  "cardSystem": null,
  "cardType": null,
  "status": null,
  "socialTariff": null,
} satisfies Card

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Card
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


