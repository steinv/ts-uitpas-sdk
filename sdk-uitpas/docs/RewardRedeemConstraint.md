
# RewardRedeemConstraint

Defines how many times this reward can be redeemed by the same passholder in a specific period.

## Properties

Name | Type
------------ | -------------
`volume` | number
`period` | string

## Example

```typescript
import type { RewardRedeemConstraint } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "volume": null,
  "period": null,
} satisfies RewardRedeemConstraint

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RewardRedeemConstraint
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


