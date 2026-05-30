
# EventSubEventInner


## Properties

Name | Type
------------ | -------------
`id` | number
`startDate` | Date
`endDate` | Date
`childcare` | [EventSubEventChildcare](EventSubEventChildcare.md)
`status` | [EventStatus](EventStatus.md)
`bookingAvailability` | [EventSubEventBookingAvailability](EventSubEventBookingAvailability.md)
`bookingInfo` | [EventBookingInfo](EventBookingInfo.md)
`overnight` | boolean

## Example

```typescript
import type { EventSubEventInner } from '@steinv/uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 0,
  "startDate": null,
  "endDate": null,
  "childcare": null,
  "status": null,
  "bookingAvailability": null,
  "bookingInfo": null,
  "overnight": true,
} satisfies EventSubEventInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventSubEventInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


