
# PassholderSelfRegistration


## Properties

Name | Type
------------ | -------------
`name` | string
`firstName` | string
`dateOfBirth` | Date
`email` | string
`postalCode` | string
`city` | string
`cardSystem` | [CardSystem](CardSystem.md)
`registrationOrganizer` | [Organizer](Organizer.md)

## Example

```typescript
import type { PassholderSelfRegistration } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "firstName": null,
  "dateOfBirth": null,
  "email": null,
  "postalCode": null,
  "city": null,
  "cardSystem": null,
  "registrationOrganizer": null,
} satisfies PassholderSelfRegistration

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PassholderSelfRegistration
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


