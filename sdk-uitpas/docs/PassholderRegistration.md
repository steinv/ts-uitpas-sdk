
# PassholderRegistration

Registration request of a passholder, mainly used in the online order flow.  A `PassholderRegistration` is not yet `Passholder` but one can be created (e.g. when the order is paid) using the information from the `PassholderRegistration`.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`firstName` | string
`inszNumber` | string
`email` | string
`creationDate` | Date
`dateOfBirth` | Date
`gender` | string
`registrationOrganizer` | [Organizer](Organizer.md)
`address` | [PassholderRegistrationAddress](PassholderRegistrationAddress.md)
`phoneNumber` | string
`optInPreferences` | [PassholderOptInPreferences](PassholderOptInPreferences.md)
`parentalConsent` | boolean
`legalTermsPaper` | boolean
`legalTermsDigital` | boolean
`registrationCardSystemId` | number
`registrationVoucher` | string
`registrationSocialTariff` | [PassholderRegistrationRegistrationSocialTariff](PassholderRegistrationRegistrationSocialTariff.md)

## Example

```typescript
import type { PassholderRegistration } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "firstName": null,
  "inszNumber": null,
  "email": null,
  "creationDate": null,
  "dateOfBirth": null,
  "gender": null,
  "registrationOrganizer": null,
  "address": null,
  "phoneNumber": null,
  "optInPreferences": null,
  "parentalConsent": null,
  "legalTermsPaper": null,
  "legalTermsDigital": null,
  "registrationCardSystemId": null,
  "registrationVoucher": null,
  "registrationSocialTariff": null,
} satisfies PassholderRegistration

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PassholderRegistration
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


