
# Event

A cultural, sport, or pastime activity.  For more information: <a href=\"https://docs.publiq.be/docs/uitdatabank/entry-api/events/what-are-events\">What are events?</a>

## Properties

Name | Type
------------ | -------------
`id` | string
`mainLanguage` | [EventMainLanguage](EventMainLanguage.md)
`name` | [EventName](EventName.md)
`terms` | [Array&lt;EventTermsInner&gt;](EventTermsInner.md)
`location` | [EventLocation](EventLocation.md)
`calendarType` | [EventCalendarType](EventCalendarType.md)
`startDate` | Date
`endDate` | Date
`attendanceMode` | [EventAttendanceMode](EventAttendanceMode.md)
`onlineUrl` | string
`status` | [EventStatus](EventStatus.md)
`subEvent` | [Array&lt;EventSubEventInner&gt;](EventSubEventInner.md)
`openingHours` | [EventOpeningHours](EventOpeningHours.md)
`openingHoursClosedDays` | [Array&lt;CommonOpeningHoursClosedDaysInner&gt;](CommonOpeningHoursClosedDaysInner.md)
`openingHoursAdjustedDays` | [EventOpeningHoursAdjustedDays](EventOpeningHoursAdjustedDays.md)
`availableFrom` | Date
`availableTo` | Date
`organizer` | [EventOrganizer](EventOrganizer.md)
`sameAs` | Array&lt;string&gt;
`workflowStatus` | [EventWorkflowStatus](EventWorkflowStatus.md)
`audience` | [EventAudience](EventAudience.md)
`languages` | Array&lt;string&gt;
`completedLanguages` | Array&lt;string&gt;
`typicalAgeRange` | string
`birthdateRange` | [EventBirthdateRange](EventBirthdateRange.md)
`description` | [EventDescription](EventDescription.md)
`priceInfo` | [Array&lt;EventPriceInfoInner&gt;](EventPriceInfoInner.md)
`contactPoint` | [EventContactPoint](EventContactPoint.md)
`bookingInfo` | [EventBookingInfo](EventBookingInfo.md)
`mediaObject` | [Array&lt;Image&gt;](Image.md)
`image` | string
`videos` | [Array&lt;EventVideosInner&gt;](EventVideosInner.md)
`labels` | Array&lt;string&gt;
`hiddenLabels` | Array&lt;string&gt;
`production` | [EventProduction](EventProduction.md)
`bookingAvailability` | [EventBookingAvailability](EventBookingAvailability.md)
`created` | Date
`modified` | Date
`creator` | string
`contributors` | Array&lt;string&gt;
`completeness` | number
`calendarSummary` | [EventCalendarSummary](EventCalendarSummary.md)
`faqs` | [Array&lt;Faq&gt;](Faq.md)
`departurePlaces` | [EventDeparturePlaces](EventDeparturePlaces.md)

## Example

```typescript
import type { Event } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "mainLanguage": null,
  "name": null,
  "terms": null,
  "location": null,
  "calendarType": null,
  "startDate": null,
  "endDate": null,
  "attendanceMode": null,
  "onlineUrl": null,
  "status": null,
  "subEvent": null,
  "openingHours": null,
  "openingHoursClosedDays": null,
  "openingHoursAdjustedDays": null,
  "availableFrom": null,
  "availableTo": null,
  "organizer": null,
  "sameAs": null,
  "workflowStatus": null,
  "audience": null,
  "languages": null,
  "completedLanguages": null,
  "typicalAgeRange": null,
  "birthdateRange": null,
  "description": null,
  "priceInfo": null,
  "contactPoint": null,
  "bookingInfo": null,
  "mediaObject": null,
  "image": null,
  "videos": null,
  "labels": null,
  "hiddenLabels": null,
  "production": null,
  "bookingAvailability": null,
  "created": null,
  "modified": null,
  "creator": null,
  "contributors": null,
  "completeness": 56,
  "calendarSummary": null,
  "faqs": null,
  "departurePlaces": null,
} satisfies Event

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Event
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


