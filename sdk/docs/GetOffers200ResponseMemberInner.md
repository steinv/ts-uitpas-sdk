
# GetOffers200ResponseMemberInner


## Properties

Name | Type
------------ | -------------
`id` | string
`mainLanguage` | [PlaceMainLanguage](PlaceMainLanguage.md)
`name` | [PlaceName](PlaceName.md)
`terms` | [Set&lt;PlaceTermsInner&gt;](PlaceTermsInner.md)
`location` | [EventLocation](EventLocation.md)
`calendarType` | [PlaceCalendarType](PlaceCalendarType.md)
`startDate` | Date
`endDate` | Date
`attendanceMode` | [EventAttendanceMode](EventAttendanceMode.md)
`onlineUrl` | string
`status` | [PlaceStatus](PlaceStatus.md)
`subEvent` | [Array&lt;EventSubEventInner&gt;](EventSubEventInner.md)
`openingHours` | [Array&lt;CommonOpeningHoursInner&gt;](CommonOpeningHoursInner.md)
`openingHoursClosedDays` | [Array&lt;CommonOpeningHoursClosedDaysInner&gt;](CommonOpeningHoursClosedDaysInner.md)
`openingHoursAdjustedDays` | [PlaceOpeningHoursAdjustedDays](PlaceOpeningHoursAdjustedDays.md)
`availableFrom` | Date
`availableTo` | Date
`organizer` | [PlaceOrganizer](PlaceOrganizer.md)
`sameAs` | Set&lt;string&gt;
`workflowStatus` | [PlaceWorkflowStatus](PlaceWorkflowStatus.md)
`audience` | [EventAudience](EventAudience.md)
`languages` | Array&lt;string&gt;
`completedLanguages` | Array&lt;string&gt;
`typicalAgeRange` | string
`birthdateRange` | [EventBirthdateRange](EventBirthdateRange.md)
`description` | [PlaceDescription](PlaceDescription.md)
`priceInfo` | [Array&lt;EventPriceInfoInner&gt;](EventPriceInfoInner.md)
`contactPoint` | [PlaceContactPoint](PlaceContactPoint.md)
`bookingInfo` | [PlaceBookingInfo](PlaceBookingInfo.md)
`mediaObject` | [Array&lt;Image&gt;](Image.md)
`image` | string
`videos` | [Array&lt;EventVideosInner&gt;](EventVideosInner.md)
`labels` | Set&lt;string&gt;
`hiddenLabels` | Set&lt;string&gt;
`production` | [EventProduction](EventProduction.md)
`bookingAvailability` | [PlaceBookingAvailability](PlaceBookingAvailability.md)
`created` | Date
`modified` | Date
`creator` | string
`contributors` | Set&lt;string&gt;
`completeness` | number
`calendarSummary` | [PlaceCalendarSummary](PlaceCalendarSummary.md)
`faqs` | [Array&lt;Faq&gt;](Faq.md)
`departurePlaces` | [EventDeparturePlaces](EventDeparturePlaces.md)
`address` | [PlaceAddress](PlaceAddress.md)
`geo` | [PlaceGeo](PlaceGeo.md)

## Example

```typescript
import type { GetOffers200ResponseMemberInner } from '@steinv/uitpas-sdk'

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
  "address": null,
  "geo": null,
} satisfies GetOffers200ResponseMemberInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetOffers200ResponseMemberInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


