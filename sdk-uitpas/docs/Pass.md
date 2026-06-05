
# Pass

The `Pass` entity includes basic information about the UiTPAS and its related `Passholder`.  

## Properties

Name | Type
------------ | -------------
`passholderId` | string
`passType` | string
`uitpasNumber` | string
`firstName` | string
`points` | number
`postalCode` | string
`socialTariff` | [PassSocialTariff](PassSocialTariff.md)
`messages` | [Array&lt;PassMessagesInner&gt;](PassMessagesInner.md)

## Example

```typescript
import type { Pass } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "passholderId": null,
  "passType": null,
  "uitpasNumber": null,
  "firstName": null,
  "points": null,
  "postalCode": null,
  "socialTariff": null,
  "messages": null,
} satisfies Pass

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Pass
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


