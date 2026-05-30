
# OrganizerContactPoint

Contact info of the [organizer](./models/organizer.json), containing one or more phone numbers, email addresses, and/or website URLs. [Here is a detailed guide](./entry-api/shared/booking-and-contact-info#contactpoint) with more information.

## Properties

Name | Type
------------ | -------------
`phone` | Array&lt;string&gt;
`email` | Array&lt;string&gt;
`url` | Array&lt;string&gt;

## Example

```typescript
import type { OrganizerContactPoint } from '@steinv/uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "phone": null,
  "email": null,
  "url": null,
} satisfies OrganizerContactPoint

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizerContactPoint
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


