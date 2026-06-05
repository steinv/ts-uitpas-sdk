
# EventSubEventPatchInner


## Properties

Name | Type
------------ | -------------
`id` | number
`startDate` | Date
`endDate` | Date
`childcare` | [EventSubEventChildcare](EventSubEventChildcare.md)
`status` | [EventSubEventPatchInnerStatus](EventSubEventPatchInnerStatus.md)
`bookingAvailability` | [EventSubEventPatchInnerBookingAvailability](EventSubEventPatchInnerBookingAvailability.md)
`bookingInfo` | [EventBookingInfo](EventBookingInfo.md)
`overnight` | boolean

## Example

```typescript
import type { EventSubEventPatchInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 0,
  "startDate": 2021-05-17T22:00:00+00:00,
  "endDate": 2021-05-17T22:00:00+00:00,
  "childcare": null,
  "status": null,
  "bookingAvailability": null,
  "bookingInfo": null,
  "overnight": true,
} satisfies EventSubEventPatchInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventSubEventPatchInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


