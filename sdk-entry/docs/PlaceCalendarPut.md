
# PlaceCalendarPut

Request body to update the calendar information of a place.

## Properties

Name | Type
------------ | -------------
`calendarType` | [PlaceCalendarType](PlaceCalendarType.md)
`status` | [PlaceStatus](PlaceStatus.md)
`bookingAvailability` | [PlaceBookingAvailability](PlaceBookingAvailability.md)
`openingHours` | [Array&lt;CommonOpeningHoursInner&gt;](CommonOpeningHoursInner.md)
`openingHoursClosedDays` | [Array&lt;CommonOpeningHoursClosedDaysInner&gt;](CommonOpeningHoursClosedDaysInner.md)
`openingHoursAdjustedDays` | [PlaceOpeningHoursAdjustedDays](PlaceOpeningHoursAdjustedDays.md)
`startDate` | Date
`endDate` | Date

## Example

```typescript
import type { PlaceCalendarPut } from ''

// TODO: Update the object below with actual values
const example = {
  "calendarType": null,
  "status": null,
  "bookingAvailability": null,
  "openingHours": null,
  "openingHoursClosedDays": null,
  "openingHoursAdjustedDays": null,
  "startDate": null,
  "endDate": null,
} satisfies PlaceCalendarPut

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaceCalendarPut
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


