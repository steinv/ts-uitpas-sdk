
# RedeemedReward


## Properties

Name | Type
------------ | -------------
`id` | string
`reward` | [Reward](Reward.md)
`redeemDate` | Date
`redeemInfo` | [RedeemedRewardRedeemInfo](RedeemedRewardRedeemInfo.md)
`redeemCode` | string

## Example

```typescript
import type { RedeemedReward } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "reward": null,
  "redeemDate": null,
  "redeemInfo": null,
  "redeemCode": null,
} satisfies RedeemedReward

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RedeemedReward
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


