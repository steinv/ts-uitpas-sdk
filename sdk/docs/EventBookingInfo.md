
# EventBookingInfo

Booking info of the [event](./models/event.json). Can contain a phone number, and/or an email address, and/or a website URL. [Here is a detailed guide](./entry-api/shared/booking-and-contact-info#contactpoint) with more information.

## Properties

Name | Type
------------ | -------------
`phone` | string
`email` | string
`url` | string
`urlLabel` | [EventBookingInfoUrlLabel](EventBookingInfoUrlLabel.md)
`availabilityStarts` | Date
`availabilityEnds` | Date

## Example

```typescript
import type { EventBookingInfo } from ''

// TODO: Update the object below with actual values
const example = {
  "phone": null,
  "email": info@example.com,
  "url": null,
  "urlLabel": null,
  "availabilityStarts": 2021-05-17T22:00:00+00:00,
  "availabilityEnds": 2021-05-17T22:00:00+00:00,
} satisfies EventBookingInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventBookingInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


