
# Passholder

Person who holds an UiTPAS, the end-user of an UiTPAS.   A `Passholder` can be identified by its `id`. However, there are cases where the passholder identifies using one of its UiTPAS numbers. That number is CardSystem specific, so it can be found under `cardSystemMemberships`. Every passholder should have at least one cardsystem membership.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`firstName` | string
`inszNumber` | string
`uitpasNumber` | string
`cardSystemMemberships` | [Array&lt;CardSystemMembership&gt;](CardSystemMembership.md)
`email` | string
`creationDate` | Date
`dateOfBirth` | Date
`gender` | string
`registrationOrganizer` | [Organizer](Organizer.md)
`points` | number
`uitidStatus` | string
`address` | [PassholderAddress](PassholderAddress.md)
`postalCode` | string
`city` | string
`phoneNumber` | string
`optInPreferences` | [PassholderOptInPreferences](PassholderOptInPreferences.md)
`nationality` | string
`parentalConsent` | boolean
`legalTermsPaper` | boolean
`legalTermsDigital` | boolean
`registrationCardSystemId` | number
`registrationVoucher` | string
`registrationCardType` | string
`registrationUitpasNumber` | string
`registrationSocialTariffEndDate` | Date

## Example

```typescript
import type { Passholder } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "firstName": null,
  "inszNumber": null,
  "uitpasNumber": null,
  "cardSystemMemberships": null,
  "email": null,
  "creationDate": null,
  "dateOfBirth": null,
  "gender": null,
  "registrationOrganizer": null,
  "points": null,
  "uitidStatus": null,
  "address": null,
  "postalCode": null,
  "city": null,
  "phoneNumber": null,
  "optInPreferences": null,
  "nationality": null,
  "parentalConsent": null,
  "legalTermsPaper": null,
  "legalTermsDigital": null,
  "registrationCardSystemId": null,
  "registrationVoucher": null,
  "registrationCardType": null,
  "registrationUitpasNumber": null,
  "registrationSocialTariffEndDate": null,
} satisfies Passholder

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Passholder
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


