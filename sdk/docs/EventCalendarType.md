
# EventCalendarType

Determines how often the [event](./models/event.json) occurs.  Possible values: `single`, `multiple`, `periodic`, `permanent`.  - **single**: For events that take place at one single day (e.g. a concert of Radiohead) and events with only one start and end date (e.g. camping from monday until sunday). **Must** have 1 [subEvent](./models/event-subEvent.json). Will automatically get a [startDate](./models/event-startDate.json) and [endDate](./models/event-endDate.json) based on the `subEvent`.  - **multiple**: For events that take place on several occasions, whether or not contiguous (e.g. a festival). **Must** have 2+ [subEvents](./models/event-subEvent.json). Will automatically get a [startDate](./models/event-startDate.json) and [endDate](./models/event-endDate.json) based on the `subEvents`.  - **periodic**: For events that take places on recurring moments (e.g. a course watercolor painting, each wednesday evening). **Must** have a [startDate](./models/event-startDate.json) and [endDate](./models/event-endDate.json). Can optionally have [openingHours](./models/event-openingHours.json).  - **permanent**: Not recommended for events, consider creating a [place](./models/place.json) instead. Can optionally have [openingHours](./models/event-openingHours.json). [Here is a detailed guide](./entry-api/shared/calendar-info#calendartype) with more information.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { EventCalendarType } from '@steinv/uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
} satisfies EventCalendarType

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventCalendarType
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


