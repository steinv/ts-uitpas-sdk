# @steinv/uitpas-sdk

A TypeScript SDK client for the io-test.uitdatabank.be API.

## Usage

First, install the SDK from npm.

```bash
npm install @steinv/uitpas-sdk --save
```

Next, try it out.


```ts
import {
  Configuration,
  EventsApi,
} from '@steinv/uitpas-sdk';
import type { EventAttendanceModePutRequest } from '@steinv/uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // EventAttendanceModePut | New attendanceMode to set on the event, and optionally a new location (when moving from attendanceMode `online` to `mixed` or `offline`). (optional)
    eventAttendanceModePut: {"attendanceMode":"online"},
  } satisfies EventAttendanceModePutRequest;

  try {
    const data = await api.eventAttendanceModePut(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://io-test.uitdatabank.be*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*EventsApi* | [**eventAttendanceModePut**](docs/EventsApi.md#eventattendancemodeput) | **PUT** /events/{eventId}/attendance-mode | attendanceMode - update
*EventsApi* | [**eventAudiencePut**](docs/EventsApi.md#eventaudienceput) | **PUT** /events/{eventId}/audience | audience - update
*EventsApi* | [**eventAvailableFromPut**](docs/EventsApi.md#eventavailablefromput) | **PUT** /events/{eventId}/available-from | availableFrom - update
*EventsApi* | [**eventBirthdateRangeDelete**](docs/EventsApi.md#eventbirthdaterangedelete) | **DELETE** /events/{eventId}/birthdate-range | birthdateRange - delete
*EventsApi* | [**eventBirthdateRangePut**](docs/EventsApi.md#eventbirthdaterangeput) | **PUT** /events/{eventId}/birthdate-range | birthdateRange - update
*EventsApi* | [**eventBookingAvailabilityPut**](docs/EventsApi.md#eventbookingavailabilityput) | **PUT** /events/{eventId}/booking-availability | bookingAvailability - update
*EventsApi* | [**eventBookingInfoPut**](docs/EventsApi.md#eventbookinginfoput) | **PUT** /events/{eventId}/booking-info | bookingInfo - update
*EventsApi* | [**eventCalendarPut**](docs/EventsApi.md#eventcalendarput) | **PUT** /events/{eventId}/calendar | calendar - put
*EventsApi* | [**eventCalendarSummaryGet**](docs/EventsApi.md#eventcalendarsummaryget) | **GET** /events/{eventId}/calendar-summary | calendar summary - get
*EventsApi* | [**eventContactPointPut**](docs/EventsApi.md#eventcontactpointput) | **PUT** /events/{eventId}/contact-point | contactPoint - update
*EventsApi* | [**eventCopiesPost**](docs/EventsApi.md#eventcopiespostoperation) | **POST** /events/{eventId}/copies | event - copy
*EventsApi* | [**eventDelete**](docs/EventsApi.md#eventdelete) | **DELETE** /events/{eventId} | event - delete
*EventsApi* | [**eventDeparturePlacesPut**](docs/EventsApi.md#eventdepartureplacesput) | **PUT** /events/{eventId}/departurePlaces | departurePlaces - update
*EventsApi* | [**eventDescriptionDelete**](docs/EventsApi.md#eventdescriptiondelete) | **DELETE** /events/{eventId}/description/{language} | description - delete
*EventsApi* | [**eventDescriptionPut**](docs/EventsApi.md#eventdescriptionput) | **PUT** /events/{eventId}/description/{language} | description - update
*EventsApi* | [**eventFacilitiesPut**](docs/EventsApi.md#eventfacilitiesput) | **PUT** /events/{eventId}/facilities | facilities - update
*EventsApi* | [**eventFaqsPut**](docs/EventsApi.md#eventfaqsput) | **PUT** /events/{eventId}/faqs | faqs - update
*EventsApi* | [**eventGet**](docs/EventsApi.md#eventget) | **GET** /events/{eventId} | event - get
*EventsApi* | [**eventImageDelete**](docs/EventsApi.md#eventimagedelete) | **DELETE** /events/{eventId}/images/{imageId} | images - delete
*EventsApi* | [**eventImagePut**](docs/EventsApi.md#eventimageput) | **PUT** /events/{eventId}/images/{imageId} | images - update
*EventsApi* | [**eventImagesPost**](docs/EventsApi.md#eventimagespost) | **POST** /events/{eventId}/images | images - add
*EventsApi* | [**eventImportNew**](docs/EventsApi.md#eventimportnew) | **POST** /imports/events | event - import (create)
*EventsApi* | [**eventImportUpdate**](docs/EventsApi.md#eventimportupdate) | **PUT** /imports/events/{eventId} | event - import (update)
*EventsApi* | [**eventLabelsAdd**](docs/EventsApi.md#eventlabelsadd) | **PUT** /events/{eventId}/labels/{labelName} | labels - add
*EventsApi* | [**eventLabelsDelete**](docs/EventsApi.md#eventlabelsdelete) | **DELETE** /events/{eventId}/labels/{labelName} | labels - delete
*EventsApi* | [**eventLocationPut**](docs/EventsApi.md#eventlocationput) | **PUT** /events/{eventId}/location/{placeId} | location - update
*EventsApi* | [**eventMainImagePut**](docs/EventsApi.md#eventmainimageput) | **PUT** /events/{eventId}/images/main | images main - update
*EventsApi* | [**eventMajorInfoPut**](docs/EventsApi.md#eventmajorinfoputoperation) | **PUT** /events/{eventId}/major-info | major-info - update
*EventsApi* | [**eventNamePut**](docs/EventsApi.md#eventnameput) | **PUT** /events/{eventId}/name/{language} | name - update
*EventsApi* | [**eventOnlineUrlDelete**](docs/EventsApi.md#eventonlineurldelete) | **DELETE** /events/{eventId}/online-url | onlineUrl - delete
*EventsApi* | [**eventOnlineUrlPut**](docs/EventsApi.md#eventonlineurlput) | **PUT** /events/{eventId}/online-url | onlineUrl - update
*EventsApi* | [**eventOrganizerDelete**](docs/EventsApi.md#eventorganizerdelete) | **DELETE** /events/{eventId}/organizer/{organizerId} | organizer - delete
*EventsApi* | [**eventOrganizerUpdate**](docs/EventsApi.md#eventorganizerupdate) | **PUT** /events/{eventId}/organizer/{organizerId} | organizer - update
*EventsApi* | [**eventPost**](docs/EventsApi.md#eventpost) | **POST** /events | event - create
*EventsApi* | [**eventPriceInfoPut**](docs/EventsApi.md#eventpriceinfoput) | **PUT** /events/{eventId}/price-info | priceInfo - update
*EventsApi* | [**eventPut**](docs/EventsApi.md#eventput) | **PUT** /events/{eventId} | event - update
*EventsApi* | [**eventStatusPut**](docs/EventsApi.md#eventstatusput) | **PUT** /events/{eventId}/status | status - update
*EventsApi* | [**eventSubEventPatch**](docs/EventsApi.md#eventsubeventpatch) | **PATCH** /events/{eventId}/sub-events | subEvent - patch
*EventsApi* | [**eventTermsEventtypePut**](docs/EventsApi.md#eventtermseventtypeput) | **PUT** /events/{eventId}/type/{termId} | terms &gt; eventtype - update
*EventsApi* | [**eventTermsThemeDelete**](docs/EventsApi.md#eventtermsthemedelete) | **DELETE** /events/{eventId}/theme | terms &gt; theme - delete
*EventsApi* | [**eventTermsThemePut**](docs/EventsApi.md#eventtermsthemeput) | **PUT** /events/{eventId}/theme/{termId} | terms &gt; theme - update
*EventsApi* | [**eventTypicalAgeRangeDelete**](docs/EventsApi.md#eventtypicalagerangedelete) | **DELETE** /events/{eventId}/typical-age-range | typicalAgeRange - delete
*EventsApi* | [**eventTypicalAgeRangePut**](docs/EventsApi.md#eventtypicalagerangeput) | **PUT** /events/{eventId}/typical-age-range | typicalAgeRange - update
*EventsApi* | [**eventVideosDelete**](docs/EventsApi.md#eventvideosdelete) | **DELETE** /events/{eventId}/videos/{videoId} | videos - delete
*EventsApi* | [**eventVideosPatch**](docs/EventsApi.md#eventvideospatch) | **PATCH** /events/{eventId}/videos | videos - patch
*EventsApi* | [**eventVideosPost**](docs/EventsApi.md#eventvideospost) | **POST** /events/{eventId}/videos | videos - add
*EventsApi* | [**eventWorkflowStatusPut**](docs/EventsApi.md#eventworkflowstatusput) | **PUT** /events/{eventId}/workflow-status | workflowStatus - update
*ImagesApi* | [**imageGet**](docs/ImagesApi.md#imageget) | **GET** /images/{imageId} | image - get
*ImagesApi* | [**imagePost**](docs/ImagesApi.md#imagepost) | **POST** /images | image - upload
*OrganizersApi* | [**organizerAddressNlPut**](docs/OrganizersApi.md#organizeraddressnlput) | **PUT** /organizers/{organizerId}/address | address.nl - update
*OrganizersApi* | [**organizerAddressPut**](docs/OrganizersApi.md#organizeraddressput) | **PUT** /organizers/{organizerId}/address/{language} | address - update
*OrganizersApi* | [**organizerContactPointPut**](docs/OrganizersApi.md#organizercontactpointput) | **PUT** /organizers/{organizerId}/contact-point | contactPoint - update
*OrganizersApi* | [**organizerDescriptionDelete**](docs/OrganizersApi.md#organizerdescriptiondelete) | **DELETE** /organizers/{organizerId}/description/{language} | description - delete
*OrganizersApi* | [**organizerDescriptionPut**](docs/OrganizersApi.md#organizerdescriptionput) | **PUT** /organizers/{organizerId}/description/{language} | description - update
*OrganizersApi* | [**organizerEducationalDescriptionDelete**](docs/OrganizersApi.md#organizereducationaldescriptiondelete) | **DELETE** /organizers/{organizerId}/educational-description/{language} | educational description - delete
*OrganizersApi* | [**organizerEducationalDescriptionPut**](docs/OrganizersApi.md#organizereducationaldescriptionput) | **PUT** /organizers/{organizerId}/educational-description/{language} | educational description - update
*OrganizersApi* | [**organizerGet**](docs/OrganizersApi.md#organizerget) | **GET** /organizers/{organizerId} | organizer - get
*OrganizersApi* | [**organizerImageDelete**](docs/OrganizersApi.md#organizerimagedelete) | **DELETE** /organizers/{organizerId}/images/{imageId} | images - delete
*OrganizersApi* | [**organizerImagesPatch**](docs/OrganizersApi.md#organizerimagespatch) | **PATCH** /organizers/{organizerId}/images | images - patch
*OrganizersApi* | [**organizerImagesPost**](docs/OrganizersApi.md#organizerimagespost) | **POST** /organizers/{organizerId}/images | images - add
*OrganizersApi* | [**organizerLabelsAdd**](docs/OrganizersApi.md#organizerlabelsadd) | **PUT** /organizers/{organizerId}/labels/{labelName} | labels - add
*OrganizersApi* | [**organizerLabelsDelete**](docs/OrganizersApi.md#organizerlabelsdelete) | **DELETE** /organizers/{organizerId}/labels/{labelName} | labels - delete
*OrganizersApi* | [**organizerMainImageUpdate**](docs/OrganizersApi.md#organizermainimageupdate) | **PUT** /organizers/{organizerId}/images/main | mainImage - update
*OrganizersApi* | [**organizerNameNlPut**](docs/OrganizersApi.md#organizernamenlput) | **PUT** /organizers/{organizerId}/name | name.nl - update
*OrganizersApi* | [**organizerNamePut**](docs/OrganizersApi.md#organizernameput) | **PUT** /organizers/{organizerId}/name/{language} | name - update
*OrganizersApi* | [**organizerPost**](docs/OrganizersApi.md#organizerpostoperation) | **POST** /organizers | organizer - create
*OrganizersApi* | [**organizerPut**](docs/OrganizersApi.md#organizerput) | **PUT** /organizers/{organizerId} | organizer - update
*OrganizersApi* | [**organizerUrlPut**](docs/OrganizersApi.md#organizerurlput) | **PUT** /organizers/{organizerId}/url | url - update
*PlacesApi* | [**placeAddressPut**](docs/PlacesApi.md#placeaddressput) | **PUT** /places/{placeId}/address/{language} | address - update
*PlacesApi* | [**placeAvailableFromPut**](docs/PlacesApi.md#placeavailablefromput) | **PUT** /places/{placeId}/available-from | availableFrom - update
*PlacesApi* | [**placeBookingInfoPut**](docs/PlacesApi.md#placebookinginfoput) | **PUT** /places/{placeId}/booking-info | bookingInfo - update
*PlacesApi* | [**placeCalendarPut**](docs/PlacesApi.md#placecalendarput) | **PUT** /places/{placeId}/calendar | calendar - update
*PlacesApi* | [**placeCalendarSummaryGet**](docs/PlacesApi.md#placecalendarsummaryget) | **GET** /places/{placeId}/calendar-summary | calendar summary - get
*PlacesApi* | [**placeContactPointPut**](docs/PlacesApi.md#placecontactpointput) | **PUT** /places/{placeId}/contact-point | contactPoint - update
*PlacesApi* | [**placeDelete**](docs/PlacesApi.md#placedelete) | **DELETE** /places/{placeId} | place - delete
*PlacesApi* | [**placeDescriptionDelete**](docs/PlacesApi.md#placedescriptiondelete) | **DELETE** /places/{placeId}/description/{language} | description - delete
*PlacesApi* | [**placeDescriptionPut**](docs/PlacesApi.md#placedescriptionput) | **PUT** /places/{placeId}/description/{language} | description - update
*PlacesApi* | [**placeFacilitiesPut**](docs/PlacesApi.md#placefacilitiesput) | **PUT** /places/{placeId}/facilities | facilities - update
*PlacesApi* | [**placeGet**](docs/PlacesApi.md#placeget) | **GET** /places/{placeId} | place - get
*PlacesApi* | [**placeImageDelete**](docs/PlacesApi.md#placeimagedelete) | **DELETE** /places/{placeId}/images/{imageId} | images - delete
*PlacesApi* | [**placeImagePut**](docs/PlacesApi.md#placeimageput) | **PUT** /places/{placeId}/images/{imageId} | images - update
*PlacesApi* | [**placeImagesPost**](docs/PlacesApi.md#placeimagespost) | **POST** /places/{placeId}/images | images - add
*PlacesApi* | [**placeImportCreate**](docs/PlacesApi.md#placeimportcreateoperation) | **POST** /imports/places | place - import (create)
*PlacesApi* | [**placeImportUpdate**](docs/PlacesApi.md#placeimportupdate) | **PUT** /imports/places/{placeId} | place - import (update)
*PlacesApi* | [**placeLabelsDelete**](docs/PlacesApi.md#placelabelsdelete) | **DELETE** /places/{placeId}/labels/{labelName} | labels - delete
*PlacesApi* | [**placeMainImagePut**](docs/PlacesApi.md#placemainimageput) | **PUT** /places/{placeId}/images/main | images main - update
*PlacesApi* | [**placeMajorInfoPut**](docs/PlacesApi.md#placemajorinfoputoperation) | **PUT** /places/{placeId}/major-info | major-info - update
*PlacesApi* | [**placeNamePut**](docs/PlacesApi.md#placenameput) | **PUT** /places/{placeId}/name/{language} | name - update
*PlacesApi* | [**placeOrganizerDelete**](docs/PlacesApi.md#placeorganizerdelete) | **DELETE** /places/{placeId}/organizer/{organizerId} | organizer - delete
*PlacesApi* | [**placeOrganizerUpdate**](docs/PlacesApi.md#placeorganizerupdate) | **PUT** /places/{placeId}/organizer/{organizerId} | organizer - update
*PlacesApi* | [**placePost**](docs/PlacesApi.md#placepost) | **POST** /places | place - create
*PlacesApi* | [**placePriceInfoPut**](docs/PlacesApi.md#placepriceinfoput) | **PUT** /places/{placeId}/price-info | priceInfo - update
*PlacesApi* | [**placePut**](docs/PlacesApi.md#placeput) | **PUT** /places/{placeId} | place - update
*PlacesApi* | [**placeStatusPut**](docs/PlacesApi.md#placestatusput) | **PUT** /places/{placeId}/status | status - update
*PlacesApi* | [**placeTypePut**](docs/PlacesApi.md#placetypeput) | **PUT** /places/{placeId}/type/{termId} | type - update
*PlacesApi* | [**placeTypicalAgeRangeDelete**](docs/PlacesApi.md#placetypicalagerangedelete) | **DELETE** /places/{placeId}/typical-age-range | typicalAgeRange - delete
*PlacesApi* | [**placeTypicalAgeRangePut**](docs/PlacesApi.md#placetypicalagerangeput) | **PUT** /places/{placeId}/typical-age-range | typicalAgeRange - update
*PlacesApi* | [**placeVideosDelete**](docs/PlacesApi.md#placevideosdelete) | **DELETE** /places/{placeId}/videos/{videoId} | videos - delete
*PlacesApi* | [**placeVideosPost**](docs/PlacesApi.md#placevideospost) | **POST** /places/{placeId}/videos | videos - add
*PlacesApi* | [**placeWorkflowStatusPut**](docs/PlacesApi.md#placeworkflowstatusput) | **PUT** /places/{placeId}/workflow-status | workflowStatus - update
*PlacesApi* | [**placesLabelsAdd**](docs/PlacesApi.md#placeslabelsadd) | **PUT** /places/{placeId}/labels/{labelName} | labels - add
*PlacesApi* | [**placesVideosPatch**](docs/PlacesApi.md#placesvideospatch) | **PATCH** /places/{placeId}/videos | videos - patch
*UsersApi* | [**userGet**](docs/UsersApi.md#userget) | **GET** /user | current user - get


### Models

- [CommonAddressLocalized](docs/CommonAddressLocalized.md)
- [CommonBookingAvailabilityType](docs/CommonBookingAvailabilityType.md)
- [CommonItemType](docs/CommonItemType.md)
- [CommonLanguage](docs/CommonLanguage.md)
- [CommonName](docs/CommonName.md)
- [CommonNewsArticleImage](docs/CommonNewsArticleImage.md)
- [CommonOfferContactPoint](docs/CommonOfferContactPoint.md)
- [CommonOpeningHoursAdjustedDaysInner](docs/CommonOpeningHoursAdjustedDaysInner.md)
- [CommonOpeningHoursAdjustedDaysInnerDescription](docs/CommonOpeningHoursAdjustedDaysInnerDescription.md)
- [CommonOpeningHoursClosedDaysInner](docs/CommonOpeningHoursClosedDaysInner.md)
- [CommonOpeningHoursClosedDaysInnerDescription](docs/CommonOpeningHoursClosedDaysInnerDescription.md)
- [CommonOpeningHoursInner](docs/CommonOpeningHoursInner.md)
- [ErrorEndUserMessage](docs/ErrorEndUserMessage.md)
- [ErrorSchemaErrorsInner](docs/ErrorSchemaErrorsInner.md)
- [Event](docs/Event.md)
- [EventAttendanceMode](docs/EventAttendanceMode.md)
- [EventAttendanceModePut](docs/EventAttendanceModePut.md)
- [EventAudience](docs/EventAudience.md)
- [EventAvailableFromPut](docs/EventAvailableFromPut.md)
- [EventBirthdateRange](docs/EventBirthdateRange.md)
- [EventBirthdateRangePut](docs/EventBirthdateRangePut.md)
- [EventBookingAvailability](docs/EventBookingAvailability.md)
- [EventBookingInfo](docs/EventBookingInfo.md)
- [EventBookingInfoUrlLabel](docs/EventBookingInfoUrlLabel.md)
- [EventCalendarPut](docs/EventCalendarPut.md)
- [EventCalendarPutDeprecated](docs/EventCalendarPutDeprecated.md)
- [EventCalendarPutDeprecatedTimeSpansInner](docs/EventCalendarPutDeprecatedTimeSpansInner.md)
- [EventCalendarSummary](docs/EventCalendarSummary.md)
- [EventCalendarType](docs/EventCalendarType.md)
- [EventContactPoint](docs/EventContactPoint.md)
- [EventCopiesPost201Response](docs/EventCopiesPost201Response.md)
- [EventCopiesPostRequest](docs/EventCopiesPostRequest.md)
- [EventDeparturePlaces](docs/EventDeparturePlaces.md)
- [EventDescription](docs/EventDescription.md)
- [EventDescriptionPut](docs/EventDescriptionPut.md)
- [EventImagePost](docs/EventImagePost.md)
- [EventImagePut](docs/EventImagePut.md)
- [EventLabelsPut](docs/EventLabelsPut.md)
- [EventLocation](docs/EventLocation.md)
- [EventMainImagePut](docs/EventMainImagePut.md)
- [EventMainLanguage](docs/EventMainLanguage.md)
- [EventMajorInfoPutRequest](docs/EventMajorInfoPutRequest.md)
- [EventMajorInfoPutRequestLocation](docs/EventMajorInfoPutRequestLocation.md)
- [EventName](docs/EventName.md)
- [EventNamePut](docs/EventNamePut.md)
- [EventOnlineUrlPut](docs/EventOnlineUrlPut.md)
- [EventOpeningHours](docs/EventOpeningHours.md)
- [EventOpeningHoursAdjustedDays](docs/EventOpeningHoursAdjustedDays.md)
- [EventOpeningHoursChildcare](docs/EventOpeningHoursChildcare.md)
- [EventOrganizer](docs/EventOrganizer.md)
- [EventPost](docs/EventPost.md)
- [EventPost201Response](docs/EventPost201Response.md)
- [EventPostDeprecated](docs/EventPostDeprecated.md)
- [EventPostDeprecatedType](docs/EventPostDeprecatedType.md)
- [EventPriceInfoInner](docs/EventPriceInfoInner.md)
- [EventProduction](docs/EventProduction.md)
- [EventPut200Response](docs/EventPut200Response.md)
- [EventStatus](docs/EventStatus.md)
- [EventStatusReason](docs/EventStatusReason.md)
- [EventSubEventBookingAvailability](docs/EventSubEventBookingAvailability.md)
- [EventSubEventChildcare](docs/EventSubEventChildcare.md)
- [EventSubEventInner](docs/EventSubEventInner.md)
- [EventSubEventPatchInner](docs/EventSubEventPatchInner.md)
- [EventSubEventPatchInnerBookingAvailability](docs/EventSubEventPatchInnerBookingAvailability.md)
- [EventSubEventPatchInnerStatus](docs/EventSubEventPatchInnerStatus.md)
- [EventSubEventPatchInnerStatusReason](docs/EventSubEventPatchInnerStatusReason.md)
- [EventSubEventPutInner](docs/EventSubEventPutInner.md)
- [EventTermsInner](docs/EventTermsInner.md)
- [EventTypicalAgeRangePut](docs/EventTypicalAgeRangePut.md)
- [EventVideosInner](docs/EventVideosInner.md)
- [EventVideosPatchInner](docs/EventVideosPatchInner.md)
- [EventVideosPost](docs/EventVideosPost.md)
- [EventVideosPost200Response](docs/EventVideosPost200Response.md)
- [EventWithReadExample](docs/EventWithReadExample.md)
- [EventWithWriteExample](docs/EventWithWriteExample.md)
- [EventWorkflowStatus](docs/EventWorkflowStatus.md)
- [EventWorkflowStatusPut](docs/EventWorkflowStatusPut.md)
- [Faq](docs/Faq.md)
- [FaqDe](docs/FaqDe.md)
- [FaqEn](docs/FaqEn.md)
- [FaqFr](docs/FaqFr.md)
- [FaqNl](docs/FaqNl.md)
- [Image](docs/Image.md)
- [ImagePost](docs/ImagePost.md)
- [ImagePost201Response](docs/ImagePost201Response.md)
- [ModelError](docs/ModelError.md)
- [OfferCalendarSummaryDetail](docs/OfferCalendarSummaryDetail.md)
- [OfferCalendarSummaryDetailHtml](docs/OfferCalendarSummaryDetailHtml.md)
- [OfferCalendarSummaryDetailText](docs/OfferCalendarSummaryDetailText.md)
- [Organizer](docs/Organizer.md)
- [OrganizerAddress](docs/OrganizerAddress.md)
- [OrganizerAddressPut](docs/OrganizerAddressPut.md)
- [OrganizerContactInner](docs/OrganizerContactInner.md)
- [OrganizerContactPoint](docs/OrganizerContactPoint.md)
- [OrganizerContactPointPut](docs/OrganizerContactPointPut.md)
- [OrganizerDescription](docs/OrganizerDescription.md)
- [OrganizerDescriptionPut](docs/OrganizerDescriptionPut.md)
- [OrganizerEducationalDescription](docs/OrganizerEducationalDescription.md)
- [OrganizerEducationalDescriptionPut](docs/OrganizerEducationalDescriptionPut.md)
- [OrganizerGeo](docs/OrganizerGeo.md)
- [OrganizerImagePost](docs/OrganizerImagePost.md)
- [OrganizerImagesPatchInner](docs/OrganizerImagesPatchInner.md)
- [OrganizerLabelsPut](docs/OrganizerLabelsPut.md)
- [OrganizerMainImagePut](docs/OrganizerMainImagePut.md)
- [OrganizerMainLanguage](docs/OrganizerMainLanguage.md)
- [OrganizerName](docs/OrganizerName.md)
- [OrganizerNamePut](docs/OrganizerNamePut.md)
- [OrganizerPost201Response](docs/OrganizerPost201Response.md)
- [OrganizerPostDeprecated](docs/OrganizerPostDeprecated.md)
- [OrganizerPostRequest](docs/OrganizerPostRequest.md)
- [OrganizerPut200Response](docs/OrganizerPut200Response.md)
- [OrganizerUrlPut](docs/OrganizerUrlPut.md)
- [OrganizerWithReadExample](docs/OrganizerWithReadExample.md)
- [OrganizerWorkflowStatus](docs/OrganizerWorkflowStatus.md)
- [Ownership](docs/Ownership.md)
- [OwnershipState](docs/OwnershipState.md)
- [Permission](docs/Permission.md)
- [Place](docs/Place.md)
- [PlaceAddress](docs/PlaceAddress.md)
- [PlaceAddressPut](docs/PlaceAddressPut.md)
- [PlaceAvailableFromPut](docs/PlaceAvailableFromPut.md)
- [PlaceBookingAvailability](docs/PlaceBookingAvailability.md)
- [PlaceBookingInfo](docs/PlaceBookingInfo.md)
- [PlaceCalendarPut](docs/PlaceCalendarPut.md)
- [PlaceCalendarSummary](docs/PlaceCalendarSummary.md)
- [PlaceCalendarType](docs/PlaceCalendarType.md)
- [PlaceContactPoint](docs/PlaceContactPoint.md)
- [PlaceDescription](docs/PlaceDescription.md)
- [PlaceDescriptionPut](docs/PlaceDescriptionPut.md)
- [PlaceGeo](docs/PlaceGeo.md)
- [PlaceImagePost](docs/PlaceImagePost.md)
- [PlaceImagePut](docs/PlaceImagePut.md)
- [PlaceImportCreateRequest](docs/PlaceImportCreateRequest.md)
- [PlaceLabelsPut](docs/PlaceLabelsPut.md)
- [PlaceMainImagePut](docs/PlaceMainImagePut.md)
- [PlaceMainLanguage](docs/PlaceMainLanguage.md)
- [PlaceMajorInfoPutRequest](docs/PlaceMajorInfoPutRequest.md)
- [PlaceName](docs/PlaceName.md)
- [PlaceNamePut](docs/PlaceNamePut.md)
- [PlaceOpeningHoursAdjustedDays](docs/PlaceOpeningHoursAdjustedDays.md)
- [PlaceOrganizer](docs/PlaceOrganizer.md)
- [PlacePost](docs/PlacePost.md)
- [PlacePost201Response](docs/PlacePost201Response.md)
- [PlacePost409Response](docs/PlacePost409Response.md)
- [PlacePostDeprecated](docs/PlacePostDeprecated.md)
- [PlacePostDeprecatedType](docs/PlacePostDeprecatedType.md)
- [PlacePut200Response](docs/PlacePut200Response.md)
- [PlaceStatus](docs/PlaceStatus.md)
- [PlaceTermsInner](docs/PlaceTermsInner.md)
- [PlaceTypicalAgeRangePut](docs/PlaceTypicalAgeRangePut.md)
- [PlaceVideosPost](docs/PlaceVideosPost.md)
- [PlaceVideosPost200Response](docs/PlaceVideosPost200Response.md)
- [PlaceWithReadExample](docs/PlaceWithReadExample.md)
- [PlaceWithWriteExample](docs/PlaceWithWriteExample.md)
- [PlaceWorkflowStatus](docs/PlaceWorkflowStatus.md)
- [PlaceWorkflowStatusPut](docs/PlaceWorkflowStatusPut.md)
- [UserGet200Response](docs/UserGet200Response.md)

### Authorization

Endpoints do not require authorization.


## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `3.0`
- Package version: `1.0.0`
- Generator version: `7.22.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system

For more information, please visit [https://docs.publiq.be](https://docs.publiq.be)

## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
