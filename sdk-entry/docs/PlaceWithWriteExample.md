
# PlaceWithWriteExample

A cultural, pastime, or sports-related location that can be visited or where an event can be located at.  For more information: <a href=\"https://docs.publiq.be/docs/uitdatabank/entry-api/places/what-are-places\">What are places?</a>

## Properties

Name | Type
------------ | -------------
`id` | string
`mainLanguage` | [PlaceMainLanguage](PlaceMainLanguage.md)
`name` | [PlaceName](PlaceName.md)
`terms` | [Array&lt;PlaceTermsInner&gt;](PlaceTermsInner.md)
`calendarType` | [PlaceCalendarType](PlaceCalendarType.md)
`address` | [PlaceAddress](PlaceAddress.md)
`geo` | [PlaceGeo](PlaceGeo.md)
`organizer` | [PlaceOrganizer](PlaceOrganizer.md)
`startDate` | Date
`endDate` | Date
`status` | [PlaceStatus](PlaceStatus.md)
`openingHours` | [Array&lt;CommonOpeningHoursInner&gt;](CommonOpeningHoursInner.md)
`openingHoursClosedDays` | [Array&lt;CommonOpeningHoursClosedDaysInner&gt;](CommonOpeningHoursClosedDaysInner.md)
`openingHoursAdjustedDays` | [PlaceOpeningHoursAdjustedDays](PlaceOpeningHoursAdjustedDays.md)
`availableFrom` | Date
`availableTo` | Date
`workflowStatus` | [PlaceWorkflowStatus](PlaceWorkflowStatus.md)
`languages` | Array&lt;string&gt;
`completedLanguages` | Array&lt;string&gt;
`typicalAgeRange` | string
`description` | [PlaceDescription](PlaceDescription.md)
`priceInfo` | [Array&lt;EventPriceInfoInner&gt;](EventPriceInfoInner.md)
`contactPoint` | [PlaceContactPoint](PlaceContactPoint.md)
`bookingInfo` | [PlaceBookingInfo](PlaceBookingInfo.md)
`mediaObject` | [Array&lt;Image&gt;](Image.md)
`image` | string
`videos` | [Array&lt;EventVideosInner&gt;](EventVideosInner.md)
`labels` | Array&lt;string&gt;
`hiddenLabels` | Array&lt;string&gt;
`bookingAvailability` | [PlaceBookingAvailability](PlaceBookingAvailability.md)
`creator` | string
`created` | Date
`modified` | Date
`sameAs` | Array&lt;string&gt;
`contributors` | Array&lt;string&gt;
`completeness` | number
`calendarSummary` | [PlaceCalendarSummary](PlaceCalendarSummary.md)

## Example

```typescript
import type { PlaceWithWriteExample } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "mainLanguage": null,
  "name": null,
  "terms": null,
  "calendarType": null,
  "address": null,
  "geo": null,
  "organizer": null,
  "startDate": null,
  "endDate": null,
  "status": null,
  "openingHours": null,
  "openingHoursClosedDays": null,
  "openingHoursAdjustedDays": null,
  "availableFrom": null,
  "availableTo": null,
  "workflowStatus": null,
  "languages": null,
  "completedLanguages": null,
  "typicalAgeRange": null,
  "description": null,
  "priceInfo": null,
  "contactPoint": null,
  "bookingInfo": null,
  "mediaObject": null,
  "image": null,
  "videos": null,
  "labels": null,
  "hiddenLabels": null,
  "bookingAvailability": null,
  "creator": null,
  "created": null,
  "modified": null,
  "sameAs": null,
  "contributors": null,
  "completeness": 56,
  "calendarSummary": null,
} satisfies PlaceWithWriteExample

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaceWithWriteExample
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


