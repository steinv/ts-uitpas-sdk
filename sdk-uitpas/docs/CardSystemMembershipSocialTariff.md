
# CardSystemMembershipSocialTariff

If the passholder has (or had) right to a social tariff, this object contains details like the  end date. Check the `status` of the `socialTariff`: the passholder is only currently entitled to a social tariff is `status` is `ACTIVE`. 

## Properties

Name | Type
------------ | -------------
`status` | string
`endDate` | Date
`inGracePeriod` | boolean
`suspendedUntilDate` | Date
`expired` | boolean

## Example

```typescript
import type { CardSystemMembershipSocialTariff } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "endDate": null,
  "inGracePeriod": null,
  "suspendedUntilDate": null,
  "expired": null,
} satisfies CardSystemMembershipSocialTariff

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CardSystemMembershipSocialTariff
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


