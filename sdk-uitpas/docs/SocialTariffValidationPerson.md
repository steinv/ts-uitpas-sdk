
# SocialTariffValidationPerson

SocialTariffValidationPerson

## Properties

Name | Type
------------ | -------------
`inszNumber` | string
`familyName` | string
`givenName` | string
`hasSocialTariff` | boolean
`uitpasNumber` | string
`street` | string
`postalCode` | string
`city` | string
`idToken` | string
`idTokenExpiresAt` | Date

## Example

```typescript
import type { SocialTariffValidationPerson } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "inszNumber": null,
  "familyName": null,
  "givenName": null,
  "hasSocialTariff": null,
  "uitpasNumber": null,
  "street": null,
  "postalCode": null,
  "city": null,
  "idToken": null,
  "idTokenExpiresAt": null,
} satisfies SocialTariffValidationPerson

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SocialTariffValidationPerson
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


