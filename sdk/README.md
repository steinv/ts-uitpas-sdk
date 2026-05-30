# @steinv/uitpas-sdk@1.0.0

A TypeScript SDK client for the search-test.uitdatabank.be API.

## Usage

First, install the SDK from npm.

```bash
npm install @steinv/uitpas-sdk --save
```

Next, try it out.


```ts
import {
  Configuration,
  EventsPlacesApi,
} from '@steinv/uitpas-sdk';
import type { GetEventsRequest } from '@steinv/uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CLIENT_IDENTIFICATION
    apiKey: "YOUR API KEY",
  });
  const api = new EventsPlacesApi(config);

  const body = {
    // string | The client id of your project (if not using an API key). May also be replaced with a `clientId` query parameter. (optional)
    xClientId: xClientId_example,
    // string | The API key of your project on https://projectaanvraag.uitdatabank.be (if not using a client id). May also be replaced with an `apiKey` query parameter. Will be deprecated in favour of `x-client-id` in the future, but will still be supported. (optional)
    xApiKey: xApiKey_example,
    // string | Free text search terms. Returns results that match all or some of the given terms. May contain `AND` and `OR` operators, and brackets for grouping. Can not filter on specific fields (contrary to the `q` parameter). Typically used to search on user-provided keywords. (optional)
    text:  dijle (wandelen OR fietsen),
    // string | An advanced query in Lucene syntax, allowing you to construct complex AND/OR filters on specific fields. (optional)
    q: labels:"ook voor kinderen" OR labels:"ook voor jongeren",
    // string | Returns only results that have the exact same postal code in their address. Typically 4 digits for Belgian addresses but can also be a different format for international addresses. (optional)
    postalCode: 1000,
    // string | Returns only results that have the exact same country code in their address. Formatted as an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code. The default value can be disabled by setting the value to `*` or by using the `disableDefaultFilters` query parameter. (optional)
    addressCountry: BE,
    // number | Returns only results that are targeted to participants/visitors of at most the given age (in years). The given age will be included in results. (optional)
    maxAge: 18,
    // number | Returns only results that are targeted to participants/visitors of at least the given age (in years). The given age will be included in results. (optional)
    minAge: 12,
    // boolean | Returns only results that are suitable for participants/visitors of all ages if set to `true`, or only returns results that are suitable for a specific age group if set to `false`. (optional)
    allAges: true,
    // 'everyone' | 'members' | 'education' | '*' | Returns only results with the given enum value as their targeted audience. Results with audienceType `everyone` are targeted to any participant/visitor. Results with audienceType `members` are only targeted towards members of the organizer of the event. Results with audienceType `education` are targeted towards [CultuurKuur](https://www.cultuurkuur.be/). (optional)
    audienceType: audienceType_example,
    // Date | Returns only results that should (still) be visible on online calendars after the given date-time. Defaults to the current date-time of the request. The default value can be disabled by setting the value to `*` or by using the `disableDefaultFilters` query parameter. See (the guide about default filters)[../docs/search-api/common-filters/default-filters.md] for more information. (optional)
    availableFrom: 2022-03-04T10:30:00+01:00,
    // Date | Returns only results that should be visible on online calendars up until the given date-time. Defaults to the current date-time of the request. The default value can be disabled by setting the value to `*` or by using the `disableDefaultFilters` query parameter. See (the guide about default filters)[../docs/search-api/common-filters/default-filters.md] for more information. (optional)
    availableTo: 2022-03-05T10:30:00+01:00,
    // Array<'online' | 'offline' | 'mixed'> | Returns only results with the given enum value as their attendance mode. Results with attendanceMode `online` are only happening online (e.g. via a video stream). Results with attendanceMode `offline` are only happening on a physical location. Results with attendanceMode `mixed` can be attended both online or offline. Note that when filtering on `mixed`, _only_ results that are both happening online and offline will be included. Accepts multiple comma-separated values to return results that have one of the given attendance modes. (optional)
    attendanceMode: ...,
    // 'Available' | 'Unavailable' | Returns only results with the given enum value as their bookingAvailability type. Results with bookingAvailability `Available` still have tickets/reservations available. Results with bookingAvailability `Unavailable` are sold out / fully booked. (optional)
    bookingAvailability: bookingAvailability_example,
    // Array<'single' | 'multiple' | 'periodic' | 'permanent'> | Returns only results with the given enum value as their calendarType. Accepts multiple comma-separated values to return results that have one of the given calendar types. [Here is a detailed guide](./entry-api/shared/calendar-info#calendartype) with more information. (optional)
    calendarType: ...,
    // Date | Returns only results that were created at or after the given date-time. (optional)
    createdFrom: 2022-03-04T10:30:00+01:00,
    // Date | Returns only results that were created at or before the given date-time. (optional)
    createdTo: 2022-03-05T10:30:00+01:00,
    // Date | Returns only results that were last modified at or after the given date-time. If the result has never been modified, the `created` date-time will be used as `modified` instead. (optional)
    modifiedFrom: 2022-03-04T10:30:00+01:00,
    // Date | Returns only results that were last modified at or before the given date-time. If the result has never been modified, the `created` date-time will be used as `modified` instead. (optional)
    modifiedTo: 2022-03-05T10:30:00+01:00,
    // string | Returns results for which a particular user / email address is a contributor (optional)
    contributors: technical-support@publiq.be,
    // string | Returns only results that have a creator with the given user identifier. Due to historic reasons and evolutions in the id management systems, a user identifier can be one of: a UUID (for creators that had an UiTiD v1), an Auth0 user id (for new UiTiD v2 creators), or in some very old cases even an email address or nickname. (No new events or places are created with an email address or nickname as creator.) Can also be a client id suffixed with `@clients` in the case of results created with a client access token instead of a user access token. (optional)
    creator: lxBfdgJwUaJUgm7CBCeKF2eE2fnsyLCB@clients,
    // Date | Returns only events that are happening at some point after the given date-time, and places that are open at some point after the given date-time. Permanent events or places are always returned by this parameter. (optional)
    dateFrom: 2022-03-04T10:30:00+01:00,
    // Date | Returns only events that are happening at some point before the given date-time, and places that are open at some point before the given date-time. Permanent events or places are always returned by this parameter. (optional)
    dateTo: 2022-03-05T10:30:00+01:00,
    // string | Returns only events that are happening at some point after the given time, and places that are open at some point after the given time. Dates and timezones are not taken into account by this parameter. Permanent events or places are always returned by this parameter. (optional)
    localTimeFrom: 08:30,
    // string | Returns only events that are happening at some point before the given time, and places that are open at some point before the given time. Dates and timezones are not taken into account by this parameter. Permanent events or places are always returned by this parameter. (optional)
    localTimeTo: 23:59,
    // boolean | Returns the results with the actual JSON bodies of the individual items (optional)
    embed: true,
    // Array<'xs-text' | 'sm-text' | 'md-text' | 'lg-text' | 'xs-html' | 'sm-html' | 'md-html' | 'lg-html'> | Adds an extra `calendarSummary` property to the results that contains one or more formatted human-readable summaries of the date/time info of the result. May be repeated to include multiple summaries per result. See the operation\'s description above for more info on how to repeat parameters. (optional)
    embedCalendarSummaries: ...,
    // boolean | Returns the results with the UiTPAS prices included (if applicable) (optional)
    embedUitpasPrices: true,
    // Array<'regions' | 'types' | 'themes' | 'facilities' | 'labels'> | Adds an extra `facet` property in the response with possible values for a given filter, and a prediction of the total results if applied. May be repeated to include facet counts for multiple filters. See the operation\'s description above for more info on how to repeat parameters. See (the guide about facets)[../docs/search-api/advanced/facets.md] for more information. (optional)
    facets: ...,
    // 'productionId' | Groups the results by their production. Grouping by productions ensures that for every production, only 1 event is returned in the search results (optional)
    groupBy: groupBy_example,
    // Array<string> | Returns only results that are geographically located in the given region. Regions may be fetched programmatically from [https://search.uitdatabank.be/autocomplete.json](https://search.uitdatabank.be/autocomplete.json). (optional)
    regions: ...,
    // string | A pair of latitude and longitude coordinates to find results that are located within a distance of the given geographical point. Must be used in combination with the `distance` parameter. (optional)
    coordinates: 50.8511740,4.338674,
    // string | Returns only results that are geographically located within the given distance from the `coordinates` parameter. (optional)
    distance: 10km,
    // string | Returns only results that are located in a specific geographical area defined by a pair of south-west coordinates and north-east coordinates. The two pairs of coordinates are separated by a pipe character (`|`). (optional)
    bounds: 34.172684,-118.604794|34.236144,-118.500938,
    // string | Returns only results that have the exact same id. An id can be extracted from an event, place, or organizer URI by taking all the characters after the last `/`. For example for the URI `https://io-test.uitdatabank.be/events/75573a64-ddc8-4fd0-8b07-d258939dd74f` the id is `75573a64-ddc8-4fd0-8b07-d258939dd74f`. Note that while it will be a UUID in most cases, it is not guaranteed to always be one! (optional)
    id: f29d2182-2db0-4f99-831a-8e6a64c1c9c1,
    // string | Returns only results that are related to the given location id (= place id). A place\'s id can be extracted from its URI by taking all the characters after the last `/`. For example for the URI `https://io-test.uitdatabank.be/places/75573a64-ddc8-4fd0-8b07-d258939dd74f` the id is `75573a64-ddc8-4fd0-8b07-d258939dd74f`. Note that while it will be a UUID in most cases, it is not guaranteed to always be one! (optional)
    locationId: a0368d10-ded0-4925-b94a-2835f73e255e,
    // string | Returns only results that are related to the given organizer id. An organizer\'s id can be extracted from its URI by taking all the characters after the last `/`. For example for the URI `https://io-test.uitdatabank.be/organizers/75573a64-ddc8-4fd0-8b07-d258939dd74f` the id is `75573a64-ddc8-4fd0-8b07-d258939dd74f`. Note that while it will be a UUID in most cases, it is not guaranteed to always be one! (optional)
    organizerId: 4fa5dddf-73d5-47f8-b54f-45d88cc1661a,
    // Array<string> | Returns only results that have the given label(s) in either their `labels` or `hiddenLabels` properties. May be repeated to only return results that have all the given labels. See the operation\'s description above for more info on how to repeat parameters. (optional)
    labels: ...,
    // Array<string> | Returns only results that have the given label(s) in their location\'s `labels` or `hiddenLabels` properties. May be repeated to only return results with a location that has all the given labels. See the operation\'s description above for more info on how to repeat parameters. (optional)
    locationLabels: ...,
    // Array<string> | Returns only results that have the given label(s) in their organizer\'s `labels` or `hiddenLabels` properties. May be repeated to only return results with an organizer that has all the given labels. See the operation\'s description above for more info on how to repeat parameters. (optional)
    organizerLabels: ...,
    // 'nl' | 'fr' | 'de' | 'en' | Returns only results that have the given language code as their main (= original) language. (optional)
    mainLanguage: mainLanguage_example,
    // Array<'nl' | 'fr' | 'de' | 'en'> | Returns only results that have a localised value in the given language for one or more translatable fields like `name`. May be repeated to only return results that have localised values for all the given languages. See the operation\'s description above for more info on how to repeat parameters. (optional)
    languages: ...,
    // Array<'nl' | 'fr' | 'de' | 'en'> | Returns only results that have a localised value in the given language for every translatable field. May be repeated to only return results that have localised values for all the given languages. See the operation\'s description above for more info on how to repeat parameters. (optional)
    completedLanguages: ...,
    // boolean | Returns only results that have one or more items inside their `mediaObject` property if set to `true`. Returns only results without `mediaObject` property if set to `false`. (optional)
    hasMediaObjects: true,
    // number | Returns only results with exactly the same price for the base tariff (in EUR). (optional)
    price: 5.75,
    // number | Returns only results with a price for the base tariff that is equal to or higher than the given price (in EUR). (optional)
    minPrice: 5.75,
    // number | Returns only results with a price for the base tariff that is equal to or lower than the given price (in EUR). (optional)
    maxPrice: 8.14,
    // 'asc' | 'desc' | Sorts the results by their score (relevance), either with the lowest score first (`asc`) or the highest score first (`desc`). See (the guide about sorting)[../docs/search-api/sorting.md] for more information. (optional)
    sortScore: sortScore_example,
    // 'asc' | 'desc' | Sorts the results by their `availableTo` date-time, either with the oldest date-time first (`asc`) or the highest date-time first (`desc`). Most commonly used to show events and/or places that will end or become unavailable soon. See (the guide about sorting)[../docs/search-api/sorting.md] for more information. (optional)
    sortAvailableTo: sortAvailableTo_example,
    // 'asc' | 'desc' | Sorts the results by their `created` date-time, either with the oldest results first (`asc`) or the newest results first (`desc`). See (the guide about sorting)[../docs/search-api/sorting.md] for more information. (optional)
    sortCreated: sortCreated_example,
    // 'asc' | 'desc' | Sorts the results by their `modified` date-time, either with the least recently modified results first (`asc`) or the most recently modified results first (`desc`). See (the guide about sorting)[../docs/search-api/sorting.md] for more information. (optional)
    sortModified: sortModified_example,
    // 'asc' | 'desc' | Sorts the results by their distance from the `coordinates` parameter. Can only be used if `coordinates` and `distance` are also set. You may use multiple sort parameters. See (the guide about sorting)[../docs/search-api/sorting.md] for more information. (optional)
    sortDistance: sortDistance_example,
    // Array<'Available' | 'TemporarilyUnavailable' | 'Unavailable'> | Returns only results with exactly the same status type as the given enum value. `Available` means an event is happening as planned, and a place can be visited during its normal opening hours. `TemporarilyUnavailable` means an event has been postponed to a later date (yet to be determined), and a place is temporarily closed (for example due to renovations). `Unavailable` means an event is cancelled, or a place is permanently closed. If combined with `dateFrom` and/or `dateTo`, only results that have the given status in that time period will be returned. Accepts multiple comma-separated values to return results that have one of the given status types. (optional)
    status: ...,
    // Array<string> | Returns only results that have the given term id(s) in either their `terms` property items. May be repeated to only return results that have all the given term ids. See the operation\'s description above for more info on how to repeat parameters. (optional)
    termIds: ...,
    // boolean | Returns only results that are related to UiTPAS if set to `true`. Returns only results that are not related to UiTPAS if set to `false`. (optional)
    uitpas: true,
    // boolean | Returns only results that have one or more items in their `videos` property if set to `true`. Returns only results that have no `videos` property if set to `false`. (optional)
    hasVideos: true,
    // Array<'DRAFT' | 'READY_FOR_VALIDATION' | 'APPROVED' | 'REJECTED' | 'DELETED' | '*'> | Returns only results with exactly the same workflow status as the given enum value. Accepts multiple comma-separated values to return results that have one of the given workflow statuses. Defaults to only return results that either have the workflow status `READY_FOR_VALIDATION` or `APPROVED`. The default value can be reset by setting the parameter to `*`. See (the guide about default filters)[../docs/search-api/common-filters/default-filters.md] for more information. (optional)
    workflowStatus: ...,
  } satisfies GetEventsRequest;

  try {
    const data = await api.getEvents(body);
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

All URIs are relative to *https://search-test.uitdatabank.be*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*EventsPlacesApi* | [**getEvents**](docs/EventsPlacesApi.md#getevents) | **GET** /events | Search events
*EventsPlacesApi* | [**getOffers**](docs/EventsPlacesApi.md#getoffers) | **GET** /offers | Search events &amp; places (offers)
*EventsPlacesApi* | [**getPlaces**](docs/EventsPlacesApi.md#getplaces) | **GET** /places | Search places
*EventsPlacesApi* | [**postEvents**](docs/EventsPlacesApi.md#postevents) | **POST** /events | Search events
*EventsPlacesApi* | [**postOffers**](docs/EventsPlacesApi.md#postoffers) | **POST** /offers | Search events &amp; places (offers)
*EventsPlacesApi* | [**postPlaces**](docs/EventsPlacesApi.md#postplaces) | **POST** /places | Search places
*OrganizersApi* | [**getOrganizers**](docs/OrganizersApi.md#getorganizers) | **GET** /organizers | Search organizers
*OrganizersApi* | [**postOrganizers**](docs/OrganizersApi.md#postorganizers) | **POST** /organizers | Search organizers


### Models

- [CommonAddressLocalized](docs/CommonAddressLocalized.md)
- [CommonBookingAvailabilityType](docs/CommonBookingAvailabilityType.md)
- [CommonFacet](docs/CommonFacet.md)
- [CommonLanguage](docs/CommonLanguage.md)
- [CommonName](docs/CommonName.md)
- [CommonOpeningHoursAdjustedDaysInner](docs/CommonOpeningHoursAdjustedDaysInner.md)
- [CommonOpeningHoursAdjustedDaysInnerDescription](docs/CommonOpeningHoursAdjustedDaysInnerDescription.md)
- [CommonOpeningHoursClosedDaysInner](docs/CommonOpeningHoursClosedDaysInner.md)
- [CommonOpeningHoursClosedDaysInnerDescription](docs/CommonOpeningHoursClosedDaysInnerDescription.md)
- [CommonOpeningHoursInner](docs/CommonOpeningHoursInner.md)
- [ErrorEndUserMessage](docs/ErrorEndUserMessage.md)
- [ErrorSchemaErrorsInner](docs/ErrorSchemaErrorsInner.md)
- [Event](docs/Event.md)
- [EventAttendanceMode](docs/EventAttendanceMode.md)
- [EventAudience](docs/EventAudience.md)
- [EventBirthdateRange](docs/EventBirthdateRange.md)
- [EventBookingAvailability](docs/EventBookingAvailability.md)
- [EventBookingInfo](docs/EventBookingInfo.md)
- [EventBookingInfoUrlLabel](docs/EventBookingInfoUrlLabel.md)
- [EventCalendarSummary](docs/EventCalendarSummary.md)
- [EventCalendarType](docs/EventCalendarType.md)
- [EventContactPoint](docs/EventContactPoint.md)
- [EventDeparturePlaces](docs/EventDeparturePlaces.md)
- [EventDescription](docs/EventDescription.md)
- [EventLocation](docs/EventLocation.md)
- [EventMainLanguage](docs/EventMainLanguage.md)
- [EventName](docs/EventName.md)
- [EventOpeningHours](docs/EventOpeningHours.md)
- [EventOpeningHoursAdjustedDays](docs/EventOpeningHoursAdjustedDays.md)
- [EventOpeningHoursChildcare](docs/EventOpeningHoursChildcare.md)
- [EventOrganizer](docs/EventOrganizer.md)
- [EventPriceInfoInner](docs/EventPriceInfoInner.md)
- [EventProduction](docs/EventProduction.md)
- [EventStatus](docs/EventStatus.md)
- [EventStatusReason](docs/EventStatusReason.md)
- [EventSubEventBookingAvailability](docs/EventSubEventBookingAvailability.md)
- [EventSubEventChildcare](docs/EventSubEventChildcare.md)
- [EventSubEventInner](docs/EventSubEventInner.md)
- [EventTermsInner](docs/EventTermsInner.md)
- [EventVideosInner](docs/EventVideosInner.md)
- [EventWorkflowStatus](docs/EventWorkflowStatus.md)
- [Faq](docs/Faq.md)
- [FaqDe](docs/FaqDe.md)
- [FaqEn](docs/FaqEn.md)
- [FaqFr](docs/FaqFr.md)
- [FaqNl](docs/FaqNl.md)
- [GetEvents200Response](docs/GetEvents200Response.md)
- [GetEvents200ResponseFacet](docs/GetEvents200ResponseFacet.md)
- [GetOffers200Response](docs/GetOffers200Response.md)
- [GetOffers200ResponseMemberInner](docs/GetOffers200ResponseMemberInner.md)
- [GetOrganizers200Response](docs/GetOrganizers200Response.md)
- [GetOrganizers200ResponseFacet](docs/GetOrganizers200ResponseFacet.md)
- [GetPlaces200Response](docs/GetPlaces200Response.md)
- [Image](docs/Image.md)
- [ModelError](docs/ModelError.md)
- [OfferCalendarSummaryDetail](docs/OfferCalendarSummaryDetail.md)
- [OfferCalendarSummaryDetailHtml](docs/OfferCalendarSummaryDetailHtml.md)
- [OfferCalendarSummaryDetailText](docs/OfferCalendarSummaryDetailText.md)
- [Organizer](docs/Organizer.md)
- [OrganizerAddress](docs/OrganizerAddress.md)
- [OrganizerContactPoint](docs/OrganizerContactPoint.md)
- [OrganizerDescription](docs/OrganizerDescription.md)
- [OrganizerEducationalDescription](docs/OrganizerEducationalDescription.md)
- [OrganizerGeo](docs/OrganizerGeo.md)
- [OrganizerMainLanguage](docs/OrganizerMainLanguage.md)
- [OrganizerName](docs/OrganizerName.md)
- [OrganizerWorkflowStatus](docs/OrganizerWorkflowStatus.md)
- [Place](docs/Place.md)
- [PlaceAddress](docs/PlaceAddress.md)
- [PlaceBookingAvailability](docs/PlaceBookingAvailability.md)
- [PlaceBookingInfo](docs/PlaceBookingInfo.md)
- [PlaceCalendarSummary](docs/PlaceCalendarSummary.md)
- [PlaceCalendarType](docs/PlaceCalendarType.md)
- [PlaceContactPoint](docs/PlaceContactPoint.md)
- [PlaceDescription](docs/PlaceDescription.md)
- [PlaceGeo](docs/PlaceGeo.md)
- [PlaceMainLanguage](docs/PlaceMainLanguage.md)
- [PlaceName](docs/PlaceName.md)
- [PlaceOpeningHoursAdjustedDays](docs/PlaceOpeningHoursAdjustedDays.md)
- [PlaceOrganizer](docs/PlaceOrganizer.md)
- [PlaceStatus](docs/PlaceStatus.md)
- [PlaceTermsInner](docs/PlaceTermsInner.md)
- [PlaceWorkflowStatus](docs/PlaceWorkflowStatus.md)

### Authorization


Authentication schemes defined for the API:
<a id="CLIENT_IDENTIFICATION"></a>
#### CLIENT_IDENTIFICATION


- **Type**: API key
- **API key parameter name**: `x-client-id`
- **Location**: HTTP header

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
