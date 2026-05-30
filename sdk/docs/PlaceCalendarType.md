
# PlaceCalendarType

Determines how long the [place](./models/place) exists.  Possible values: `periodic`, `permanent`.  - **periodic**: For places that only exist for a specific period. **Must** have a [startDate](./models/place-startDate.json) and [endDate](./models/place-endDate.json). Can optionally have [openingHours](./models/place-openingHours.json).  - **permanent**: For places that exist permanently. Can optionally have [openingHours](./models/place-openingHours.json). [Here is a detailed guide](./entry-api/shared/calendar-info#calendartype) with more information.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { PlaceCalendarType } from '@steinv/uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
} satisfies PlaceCalendarType

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaceCalendarType
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


