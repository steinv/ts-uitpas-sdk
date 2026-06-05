
# EventSubEventPutInner


## Properties

Name | Type
------------ | -------------
`startDate` | Date
`endDate` | Date
`childcare` | [EventSubEventChildcare](EventSubEventChildcare.md)
`status` | [EventStatus](EventStatus.md)
`bookingAvailability` | [EventBookingAvailability](EventBookingAvailability.md)
`bookingInfo` | [EventBookingInfo](EventBookingInfo.md)
`overnight` | boolean

## Example

```typescript
import type { EventSubEventPutInner } from ''

// TODO: Update the object below with actual values
const example = {
  "startDate": null,
  "endDate": null,
  "childcare": null,
  "status": null,
  "bookingAvailability": null,
  "bookingInfo": null,
  "overnight": true,
} satisfies EventSubEventPutInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventSubEventPutInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


