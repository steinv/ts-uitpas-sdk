
# EventCalendarPutDeprecated

Request body to update the calendar information of an event (deprecated format).

## Properties

Name | Type
------------ | -------------
`calendarType` | [EventCalendarType](EventCalendarType.md)
`status` | [EventStatus](EventStatus.md)
`bookingAvailability` | [EventBookingAvailability](EventBookingAvailability.md)
`timeSpans` | [Array&lt;EventCalendarPutDeprecatedTimeSpansInner&gt;](EventCalendarPutDeprecatedTimeSpansInner.md)
`openingHours` | [EventOpeningHours](EventOpeningHours.md)
`startDate` | Date
`endDate` | Date

## Example

```typescript
import type { EventCalendarPutDeprecated } from ''

// TODO: Update the object below with actual values
const example = {
  "calendarType": null,
  "status": null,
  "bookingAvailability": null,
  "timeSpans": null,
  "openingHours": null,
  "startDate": null,
  "endDate": null,
} satisfies EventCalendarPutDeprecated

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventCalendarPutDeprecated
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


