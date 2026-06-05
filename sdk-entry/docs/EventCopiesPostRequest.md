
# EventCopiesPostRequest


## Properties

Name | Type
------------ | -------------
`calendarType` | [EventCalendarType](EventCalendarType.md)
`status` | [EventStatus](EventStatus.md)
`bookingAvailability` | [EventBookingAvailability](EventBookingAvailability.md)
`subEvent` | [Array&lt;EventSubEventPutInner&gt;](EventSubEventPutInner.md)
`openingHours` | [EventOpeningHours](EventOpeningHours.md)
`openingHoursClosedDays` | [Array&lt;CommonOpeningHoursClosedDaysInner&gt;](CommonOpeningHoursClosedDaysInner.md)
`openingHoursAdjustedDays` | [EventOpeningHoursAdjustedDays](EventOpeningHoursAdjustedDays.md)
`startDate` | Date
`endDate` | Date
`timeSpans` | [Array&lt;EventCalendarPutDeprecatedTimeSpansInner&gt;](EventCalendarPutDeprecatedTimeSpansInner.md)

## Example

```typescript
import type { EventCopiesPostRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "calendarType": null,
  "status": null,
  "bookingAvailability": null,
  "subEvent": null,
  "openingHours": null,
  "openingHoursClosedDays": null,
  "openingHoursAdjustedDays": null,
  "startDate": null,
  "endDate": null,
  "timeSpans": null,
} satisfies EventCopiesPostRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventCopiesPostRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


