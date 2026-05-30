# EventsPlacesApi

All URIs are relative to *https://search-test.uitdatabank.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getEvents**](EventsPlacesApi.md#getevents) | **GET** /events | Search events |
| [**getOffers**](EventsPlacesApi.md#getoffers) | **GET** /offers | Search events &amp; places (offers) |
| [**getPlaces**](EventsPlacesApi.md#getplaces) | **GET** /places | Search places |
| [**postEvents**](EventsPlacesApi.md#postevents) | **POST** /events | Search events |
| [**postOffers**](EventsPlacesApi.md#postoffers) | **POST** /offers | Search events &amp; places (offers) |
| [**postPlaces**](EventsPlacesApi.md#postplaces) | **POST** /places | Search places |



## getEvents

> GetEvents200Response getEvents(xClientId, xApiKey, text, q, postalCode, addressCountry, maxAge, minAge, allAges, audienceType, availableFrom, availableTo, attendanceMode, bookingAvailability, calendarType, createdFrom, createdTo, modifiedFrom, modifiedTo, contributors, creator, dateFrom, dateTo, localTimeFrom, localTimeTo, embed, embedCalendarSummaries, embedUitpasPrices, facets, groupBy, regions, coordinates, distance, bounds, id, locationId, organizerId, labels, locationLabels, organizerLabels, mainLanguage, languages, completedLanguages, hasMediaObjects, price, minPrice, maxPrice, sortScore, sortAvailableTo, sortCreated, sortModified, sortDistance, status, termIds, uitpas, hasVideos, workflowStatus)

Search events

Returns a paginated list of events that match the given filters.  ### Repeating query parameters  Parameters that have the type &#x60;array[string]&#x60; and &#x60;[]&#x60; as a suffix in their name in the list of query parameters below can be repeated to filter on multiple values with an &#x60;AND&#x60; operator. For example:  *  &#x60;?labels[]&#x3D;uitpas&#x60; to only include results that have the label &#x60;uitpas&#x60; *  &#x60;?labels[]&#x3D;uitpas&amp;labels[]&#x3D;paspartoe&#x60; to only include results that have both the labels &#x60;uitpas&#x60; and &#x60;paspartoe&#x60;  Other &#x60;array[string]&#x60; parameters without the &#x60;[]&#x60; suffix support multiple comma-separated values for &#x60;OR&#x60; filtering. For example:  *  &#x60;?workflowStatus&#x3D;DRAFT&#x60; to return all results with the draft workflow status. *  &#x60;?workflowStatus&#x3D;REJECTED,DELETED&#x60; to return results with the rejected or deleted workflow status.  Add &#x60;embedCalendarSummaries&#x60; to have an extra property &#x60;calendarSummary&#x60; in the results that contains one or more formatted human-readable summaries of the date/time info of the result. See &lt;a href&#x3D;\&quot;search-api/calendar-summaries\&quot;&gt;the guide about embedding the calendar summaries&lt;/a&gt; for more details.

### Example

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

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **xClientId** | `string` | The client id of your project (if not using an API key). May also be replaced with a &#x60;clientId&#x60; query parameter. | [Optional] [Defaults to `undefined`] |
| **xApiKey** | `string` | The API key of your project on https://projectaanvraag.uitdatabank.be (if not using a client id). May also be replaced with an &#x60;apiKey&#x60; query parameter. Will be deprecated in favour of &#x60;x-client-id&#x60; in the future, but will still be supported. | [Optional] [Defaults to `undefined`] |
| **text** | `string` | Free text search terms. Returns results that match all or some of the given terms. May contain &#x60;AND&#x60; and &#x60;OR&#x60; operators, and brackets for grouping. Can not filter on specific fields (contrary to the &#x60;q&#x60; parameter). Typically used to search on user-provided keywords. | [Optional] [Defaults to `undefined`] |
| **q** | `string` | An advanced query in Lucene syntax, allowing you to construct complex AND/OR filters on specific fields. | [Optional] [Defaults to `undefined`] |
| **postalCode** | `string` | Returns only results that have the exact same postal code in their address. Typically 4 digits for Belgian addresses but can also be a different format for international addresses. | [Optional] [Defaults to `undefined`] |
| **addressCountry** | `string` | Returns only results that have the exact same country code in their address. Formatted as an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code. The default value can be disabled by setting the value to &#x60;*&#x60; or by using the &#x60;disableDefaultFilters&#x60; query parameter. | [Optional] [Defaults to `&#39;BE&#39;`] |
| **maxAge** | `number` | Returns only results that are targeted to participants/visitors of at most the given age (in years). The given age will be included in results. | [Optional] [Defaults to `undefined`] |
| **minAge** | `number` | Returns only results that are targeted to participants/visitors of at least the given age (in years). The given age will be included in results. | [Optional] [Defaults to `undefined`] |
| **allAges** | `boolean` | Returns only results that are suitable for participants/visitors of all ages if set to &#x60;true&#x60;, or only returns results that are suitable for a specific age group if set to &#x60;false&#x60;. | [Optional] [Defaults to `undefined`] |
| **audienceType** | `everyone`, `members`, `education`, `*` | Returns only results with the given enum value as their targeted audience. Results with audienceType &#x60;everyone&#x60; are targeted to any participant/visitor. Results with audienceType &#x60;members&#x60; are only targeted towards members of the organizer of the event. Results with audienceType &#x60;education&#x60; are targeted towards [CultuurKuur](https://www.cultuurkuur.be/). | [Optional] [Defaults to `&#39;everyone&#39;`] [Enum: everyone, members, education, *] |
| **availableFrom** | `Date` | Returns only results that should (still) be visible on online calendars after the given date-time. Defaults to the current date-time of the request. The default value can be disabled by setting the value to &#x60;*&#x60; or by using the &#x60;disableDefaultFilters&#x60; query parameter. See (the guide about default filters)[../docs/search-api/common-filters/default-filters.md] for more information. | [Optional] [Defaults to `undefined`] |
| **availableTo** | `Date` | Returns only results that should be visible on online calendars up until the given date-time. Defaults to the current date-time of the request. The default value can be disabled by setting the value to &#x60;*&#x60; or by using the &#x60;disableDefaultFilters&#x60; query parameter. See (the guide about default filters)[../docs/search-api/common-filters/default-filters.md] for more information. | [Optional] [Defaults to `undefined`] |
| **attendanceMode** | `online`, `offline`, `mixed` | Returns only results with the given enum value as their attendance mode. Results with attendanceMode &#x60;online&#x60; are only happening online (e.g. via a video stream). Results with attendanceMode &#x60;offline&#x60; are only happening on a physical location. Results with attendanceMode &#x60;mixed&#x60; can be attended both online or offline. Note that when filtering on &#x60;mixed&#x60;, _only_ results that are both happening online and offline will be included. Accepts multiple comma-separated values to return results that have one of the given attendance modes. | [Optional] [Enum: online, offline, mixed] |
| **bookingAvailability** | `Available`, `Unavailable` | Returns only results with the given enum value as their bookingAvailability type. Results with bookingAvailability &#x60;Available&#x60; still have tickets/reservations available. Results with bookingAvailability &#x60;Unavailable&#x60; are sold out / fully booked. | [Optional] [Defaults to `undefined`] [Enum: Available, Unavailable] |
| **calendarType** | `single`, `multiple`, `periodic`, `permanent` | Returns only results with the given enum value as their calendarType. Accepts multiple comma-separated values to return results that have one of the given calendar types. [Here is a detailed guide](./entry-api/shared/calendar-info#calendartype) with more information. | [Optional] [Enum: single, multiple, periodic, permanent] |
| **createdFrom** | `Date` | Returns only results that were created at or after the given date-time. | [Optional] [Defaults to `undefined`] |
| **createdTo** | `Date` | Returns only results that were created at or before the given date-time. | [Optional] [Defaults to `undefined`] |
| **modifiedFrom** | `Date` | Returns only results that were last modified at or after the given date-time. If the result has never been modified, the &#x60;created&#x60; date-time will be used as &#x60;modified&#x60; instead. | [Optional] [Defaults to `undefined`] |
| **modifiedTo** | `Date` | Returns only results that were last modified at or before the given date-time. If the result has never been modified, the &#x60;created&#x60; date-time will be used as &#x60;modified&#x60; instead. | [Optional] [Defaults to `undefined`] |
| **contributors** | `string` | Returns results for which a particular user / email address is a contributor | [Optional] [Defaults to `undefined`] |
| **creator** | `string` | Returns only results that have a creator with the given user identifier. Due to historic reasons and evolutions in the id management systems, a user identifier can be one of: a UUID (for creators that had an UiTiD v1), an Auth0 user id (for new UiTiD v2 creators), or in some very old cases even an email address or nickname. (No new events or places are created with an email address or nickname as creator.) Can also be a client id suffixed with &#x60;@clients&#x60; in the case of results created with a client access token instead of a user access token. | [Optional] [Defaults to `undefined`] |
| **dateFrom** | `Date` | Returns only events that are happening at some point after the given date-time, and places that are open at some point after the given date-time. Permanent events or places are always returned by this parameter. | [Optional] [Defaults to `undefined`] |
| **dateTo** | `Date` | Returns only events that are happening at some point before the given date-time, and places that are open at some point before the given date-time. Permanent events or places are always returned by this parameter. | [Optional] [Defaults to `undefined`] |
| **localTimeFrom** | `string` | Returns only events that are happening at some point after the given time, and places that are open at some point after the given time. Dates and timezones are not taken into account by this parameter. Permanent events or places are always returned by this parameter. | [Optional] [Defaults to `undefined`] |
| **localTimeTo** | `string` | Returns only events that are happening at some point before the given time, and places that are open at some point before the given time. Dates and timezones are not taken into account by this parameter. Permanent events or places are always returned by this parameter. | [Optional] [Defaults to `undefined`] |
| **embed** | `boolean` | Returns the results with the actual JSON bodies of the individual items | [Optional] [Defaults to `undefined`] |
| **embedCalendarSummaries** | `xs-text`, `sm-text`, `md-text`, `lg-text`, `xs-html`, `sm-html`, `md-html`, `lg-html` | Adds an extra &#x60;calendarSummary&#x60; property to the results that contains one or more formatted human-readable summaries of the date/time info of the result. May be repeated to include multiple summaries per result. See the operation\&#39;s description above for more info on how to repeat parameters. | [Optional] [Enum: xs-text, sm-text, md-text, lg-text, xs-html, sm-html, md-html, lg-html] |
| **embedUitpasPrices** | `boolean` | Returns the results with the UiTPAS prices included (if applicable) | [Optional] [Defaults to `undefined`] |
| **facets** | `regions`, `types`, `themes`, `facilities`, `labels` | Adds an extra &#x60;facet&#x60; property in the response with possible values for a given filter, and a prediction of the total results if applied. May be repeated to include facet counts for multiple filters. See the operation\&#39;s description above for more info on how to repeat parameters. See (the guide about facets)[../docs/search-api/advanced/facets.md] for more information. | [Optional] [Enum: regions, types, themes, facilities, labels] |
| **groupBy** | `productionId` | Groups the results by their production. Grouping by productions ensures that for every production, only 1 event is returned in the search results | [Optional] [Defaults to `undefined`] [Enum: productionId] |
| **regions** | `Array<string>` | Returns only results that are geographically located in the given region. Regions may be fetched programmatically from [https://search.uitdatabank.be/autocomplete.json](https://search.uitdatabank.be/autocomplete.json). | [Optional] |
| **coordinates** | `string` | A pair of latitude and longitude coordinates to find results that are located within a distance of the given geographical point. Must be used in combination with the &#x60;distance&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **distance** | `string` | Returns only results that are geographically located within the given distance from the &#x60;coordinates&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **bounds** | `string` | Returns only results that are located in a specific geographical area defined by a pair of south-west coordinates and north-east coordinates. The two pairs of coordinates are separated by a pipe character (&#x60;|&#x60;). | [Optional] [Defaults to `undefined`] |
| **id** | `string` | Returns only results that have the exact same id. An id can be extracted from an event, place, or organizer URI by taking all the characters after the last &#x60;/&#x60;. For example for the URI &#x60;https://io-test.uitdatabank.be/events/75573a64-ddc8-4fd0-8b07-d258939dd74f&#x60; the id is &#x60;75573a64-ddc8-4fd0-8b07-d258939dd74f&#x60;. Note that while it will be a UUID in most cases, it is not guaranteed to always be one! | [Optional] [Defaults to `undefined`] |
| **locationId** | `string` | Returns only results that are related to the given location id (&#x3D; place id). A place\&#39;s id can be extracted from its URI by taking all the characters after the last &#x60;/&#x60;. For example for the URI &#x60;https://io-test.uitdatabank.be/places/75573a64-ddc8-4fd0-8b07-d258939dd74f&#x60; the id is &#x60;75573a64-ddc8-4fd0-8b07-d258939dd74f&#x60;. Note that while it will be a UUID in most cases, it is not guaranteed to always be one! | [Optional] [Defaults to `undefined`] |
| **organizerId** | `string` | Returns only results that are related to the given organizer id. An organizer\&#39;s id can be extracted from its URI by taking all the characters after the last &#x60;/&#x60;. For example for the URI &#x60;https://io-test.uitdatabank.be/organizers/75573a64-ddc8-4fd0-8b07-d258939dd74f&#x60; the id is &#x60;75573a64-ddc8-4fd0-8b07-d258939dd74f&#x60;. Note that while it will be a UUID in most cases, it is not guaranteed to always be one! | [Optional] [Defaults to `undefined`] |
| **labels** | `Array<string>` | Returns only results that have the given label(s) in either their &#x60;labels&#x60; or &#x60;hiddenLabels&#x60; properties. May be repeated to only return results that have all the given labels. See the operation\&#39;s description above for more info on how to repeat parameters. | [Optional] |
| **locationLabels** | `Array<string>` | Returns only results that have the given label(s) in their location\&#39;s &#x60;labels&#x60; or &#x60;hiddenLabels&#x60; properties. May be repeated to only return results with a location that has all the given labels. See the operation\&#39;s description above for more info on how to repeat parameters. | [Optional] |
| **organizerLabels** | `Array<string>` | Returns only results that have the given label(s) in their organizer\&#39;s &#x60;labels&#x60; or &#x60;hiddenLabels&#x60; properties. May be repeated to only return results with an organizer that has all the given labels. See the operation\&#39;s description above for more info on how to repeat parameters. | [Optional] |
| **mainLanguage** | `nl`, `fr`, `de`, `en` | Returns only results that have the given language code as their main (&#x3D; original) language. | [Optional] [Defaults to `undefined`] [Enum: nl, fr, de, en] |
| **languages** | `nl`, `fr`, `de`, `en` | Returns only results that have a localised value in the given language for one or more translatable fields like &#x60;name&#x60;. May be repeated to only return results that have localised values for all the given languages. See the operation\&#39;s description above for more info on how to repeat parameters. | [Optional] [Enum: nl, fr, de, en] |
| **completedLanguages** | `nl`, `fr`, `de`, `en` | Returns only results that have a localised value in the given language for every translatable field. May be repeated to only return results that have localised values for all the given languages. See the operation\&#39;s description above for more info on how to repeat parameters. | [Optional] [Enum: nl, fr, de, en] |
| **hasMediaObjects** | `boolean` | Returns only results that have one or more items inside their &#x60;mediaObject&#x60; property if set to &#x60;true&#x60;. Returns only results without &#x60;mediaObject&#x60; property if set to &#x60;false&#x60;. | [Optional] [Defaults to `undefined`] |
| **price** | `number` | Returns only results with exactly the same price for the base tariff (in EUR). | [Optional] [Defaults to `undefined`] |
| **minPrice** | `number` | Returns only results with a price for the base tariff that is equal to or higher than the given price (in EUR). | [Optional] [Defaults to `undefined`] |
| **maxPrice** | `number` | Returns only results with a price for the base tariff that is equal to or lower than the given price (in EUR). | [Optional] [Defaults to `undefined`] |
| **sortScore** | `asc`, `desc` | Sorts the results by their score (relevance), either with the lowest score first (&#x60;asc&#x60;) or the highest score first (&#x60;desc&#x60;). See (the guide about sorting)[../docs/search-api/sorting.md] for more information. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortAvailableTo** | `asc`, `desc` | Sorts the results by their &#x60;availableTo&#x60; date-time, either with the oldest date-time first (&#x60;asc&#x60;) or the highest date-time first (&#x60;desc&#x60;). Most commonly used to show events and/or places that will end or become unavailable soon. See (the guide about sorting)[../docs/search-api/sorting.md] for more information. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortCreated** | `asc`, `desc` | Sorts the results by their &#x60;created&#x60; date-time, either with the oldest results first (&#x60;asc&#x60;) or the newest results first (&#x60;desc&#x60;). See (the guide about sorting)[../docs/search-api/sorting.md] for more information. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortModified** | `asc`, `desc` | Sorts the results by their &#x60;modified&#x60; date-time, either with the least recently modified results first (&#x60;asc&#x60;) or the most recently modified results first (&#x60;desc&#x60;). See (the guide about sorting)[../docs/search-api/sorting.md] for more information. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortDistance** | `asc`, `desc` | Sorts the results by their distance from the &#x60;coordinates&#x60; parameter. Can only be used if &#x60;coordinates&#x60; and &#x60;distance&#x60; are also set. You may use multiple sort parameters. See (the guide about sorting)[../docs/search-api/sorting.md] for more information. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **status** | `Available`, `TemporarilyUnavailable`, `Unavailable` | Returns only results with exactly the same status type as the given enum value. &#x60;Available&#x60; means an event is happening as planned, and a place can be visited during its normal opening hours. &#x60;TemporarilyUnavailable&#x60; means an event has been postponed to a later date (yet to be determined), and a place is temporarily closed (for example due to renovations). &#x60;Unavailable&#x60; means an event is cancelled, or a place is permanently closed. If combined with &#x60;dateFrom&#x60; and/or &#x60;dateTo&#x60;, only results that have the given status in that time period will be returned. Accepts multiple comma-separated values to return results that have one of the given status types. | [Optional] [Enum: Available, TemporarilyUnavailable, Unavailable] |
| **termIds** | `Array<string>` | Returns only results that have the given term id(s) in either their &#x60;terms&#x60; property items. May be repeated to only return results that have all the given term ids. See the operation\&#39;s description above for more info on how to repeat parameters. | [Optional] |
| **uitpas** | `boolean` | Returns only results that are related to UiTPAS if set to &#x60;true&#x60;. Returns only results that are not related to UiTPAS if set to &#x60;false&#x60;. | [Optional] [Defaults to `undefined`] |
| **hasVideos** | `boolean` | Returns only results that have one or more items in their &#x60;videos&#x60; property if set to &#x60;true&#x60;. Returns only results that have no &#x60;videos&#x60; property if set to &#x60;false&#x60;. | [Optional] [Defaults to `undefined`] |
| **workflowStatus** | `DRAFT`, `READY_FOR_VALIDATION`, `APPROVED`, `REJECTED`, `DELETED`, `*` | Returns only results with exactly the same workflow status as the given enum value. Accepts multiple comma-separated values to return results that have one of the given workflow statuses. Defaults to only return results that either have the workflow status &#x60;READY_FOR_VALIDATION&#x60; or &#x60;APPROVED&#x60;. The default value can be reset by setting the parameter to &#x60;*&#x60;. See (the guide about default filters)[../docs/search-api/common-filters/default-filters.md] for more information. | [Optional] [Enum: DRAFT, READY_FOR_VALIDATION, APPROVED, REJECTED, DELETED, *] |

### Return type

[**GetEvents200Response**](GetEvents200Response.md)

### Authorization

[CLIENT_IDENTIFICATION](../README.md#CLIENT_IDENTIFICATION)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A single page of search results. If &#x60;?embed&#x3D;true&#x60; is used, the search results will contain the complete JSON details. Otherwise only &#x60;@id&#x60; and &#x60;@type&#x60; will be returned. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOffers

> GetOffers200Response getOffers(xClientId, xApiKey, text, q, postalCode, addressCountry, maxAge, minAge, allAges, audienceType, availableFrom, availableTo, attendanceMode, bookingAvailability, calendarType, createdFrom, createdTo, modifiedFrom, modifiedTo, contributors, creator, dateFrom, dateTo, localTimeFrom, localTimeTo, embed, embedCalendarSummaries, embedUitpasPrices, facets, groupBy, regions, coordinates, distance, bounds, id, isDuplicate, locationId, organizerId, labels, locationLabels, organizerLabels, mainLanguage, languages, completedLanguages, hasMediaObjects, price, minPrice, maxPrice, sortScore, sortAvailableTo, sortCreated, sortModified, sortDistance, status, termIds, uitpas, hasVideos, workflowStatus)

Search events &amp; places (offers)

Returns a paginated list of both events and places that match the given filters.  ### Repeating query parameters  Parameters that have the type &#x60;array[string]&#x60; and &#x60;[]&#x60; as a suffix in their name in the list of query parameters below can be repeated to filter on multiple values with an &#x60;AND&#x60; operator. For example:  *  &#x60;?labels[]&#x3D;uitpas&#x60; to only include results that have the label &#x60;uitpas&#x60; *  &#x60;?labels[]&#x3D;uitpas&amp;labels[]&#x3D;paspartoe&#x60; to only include results that have both the labels &#x60;uitpas&#x60; and &#x60;paspartoe&#x60;  Other &#x60;array[string]&#x60; parameters without the &#x60;[]&#x60; suffix support multiple comma-separated values for &#x60;OR&#x60; filtering. For example:  *  &#x60;?workflowStatus&#x3D;DRAFT&#x60; to return all results with the draft workflow status. *  &#x60;?workflowStatus&#x3D;REJECTED,DELETED&#x60; to return results with the rejected or deleted workflow status.

### Example

```ts
import {
  Configuration,
  EventsPlacesApi,
} from '@steinv/uitpas-sdk';
import type { GetOffersRequest } from '@steinv/uitpas-sdk';

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
    // boolean | Returns only results that include or excludes duplicate places (optional)
    isDuplicate: true,
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
  } satisfies GetOffersRequest;

  try {
    const data = await api.getOffers(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **xClientId** | `string` | The client id of your project (if not using an API key). May also be replaced with a &#x60;clientId&#x60; query parameter. | [Optional] [Defaults to `undefined`] |
| **xApiKey** | `string` | The API key of your project on https://projectaanvraag.uitdatabank.be (if not using a client id). May also be replaced with an &#x60;apiKey&#x60; query parameter. Will be deprecated in favour of &#x60;x-client-id&#x60; in the future, but will still be supported. | [Optional] [Defaults to `undefined`] |
| **text** | `string` | Free text search terms. Returns results that match all or some of the given terms. May contain &#x60;AND&#x60; and &#x60;OR&#x60; operators, and brackets for grouping. Can not filter on specific fields (contrary to the &#x60;q&#x60; parameter). Typically used to search on user-provided keywords. | [Optional] [Defaults to `undefined`] |
| **q** | `string` | An advanced query in Lucene syntax, allowing you to construct complex AND/OR filters on specific fields. | [Optional] [Defaults to `undefined`] |
| **postalCode** | `string` | Returns only results that have the exact same postal code in their address. Typically 4 digits for Belgian addresses but can also be a different format for international addresses. | [Optional] [Defaults to `undefined`] |
| **addressCountry** | `string` | Returns only results that have the exact same country code in their address. Formatted as an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code. The default value can be disabled by setting the value to &#x60;*&#x60; or by using the &#x60;disableDefaultFilters&#x60; query parameter. | [Optional] [Defaults to `&#39;BE&#39;`] |
| **maxAge** | `number` | Returns only results that are targeted to participants/visitors of at most the given age (in years). The given age will be included in results. | [Optional] [Defaults to `undefined`] |
| **minAge** | `number` | Returns only results that are targeted to participants/visitors of at least the given age (in years). The given age will be included in results. | [Optional] [Defaults to `undefined`] |
| **allAges** | `boolean` | Returns only results that are suitable for participants/visitors of all ages if set to &#x60;true&#x60;, or only returns results that are suitable for a specific age group if set to &#x60;false&#x60;. | [Optional] [Defaults to `undefined`] |
| **audienceType** | `everyone`, `members`, `education`, `*` | Returns only results with the given enum value as their targeted audience. Results with audienceType &#x60;everyone&#x60; are targeted to any participant/visitor. Results with audienceType &#x60;members&#x60; are only targeted towards members of the organizer of the event. Results with audienceType &#x60;education&#x60; are targeted towards [CultuurKuur](https://www.cultuurkuur.be/). | [Optional] [Defaults to `&#39;everyone&#39;`] [Enum: everyone, members, education, *] |
| **availableFrom** | `Date` | Returns only results that should (still) be visible on online calendars after the given date-time. Defaults to the current date-time of the request. The default value can be disabled by setting the value to &#x60;*&#x60; or by using the &#x60;disableDefaultFilters&#x60; query parameter. See (the guide about default filters)[../docs/search-api/common-filters/default-filters.md] for more information. | [Optional] [Defaults to `undefined`] |
| **availableTo** | `Date` | Returns only results that should be visible on online calendars up until the given date-time. Defaults to the current date-time of the request. The default value can be disabled by setting the value to &#x60;*&#x60; or by using the &#x60;disableDefaultFilters&#x60; query parameter. See (the guide about default filters)[../docs/search-api/common-filters/default-filters.md] for more information. | [Optional] [Defaults to `undefined`] |
| **attendanceMode** | `online`, `offline`, `mixed` | Returns only results with the given enum value as their attendance mode. Results with attendanceMode &#x60;online&#x60; are only happening online (e.g. via a video stream). Results with attendanceMode &#x60;offline&#x60; are only happening on a physical location. Results with attendanceMode &#x60;mixed&#x60; can be attended both online or offline. Note that when filtering on &#x60;mixed&#x60;, _only_ results that are both happening online and offline will be included. Accepts multiple comma-separated values to return results that have one of the given attendance modes. | [Optional] [Enum: online, offline, mixed] |
| **bookingAvailability** | `Available`, `Unavailable` | Returns only results with the given enum value as their bookingAvailability type. Results with bookingAvailability &#x60;Available&#x60; still have tickets/reservations available. Results with bookingAvailability &#x60;Unavailable&#x60; are sold out / fully booked. | [Optional] [Defaults to `undefined`] [Enum: Available, Unavailable] |
| **calendarType** | `single`, `multiple`, `periodic`, `permanent` | Returns only results with the given enum value as their calendarType. Accepts multiple comma-separated values to return results that have one of the given calendar types. [Here is a detailed guide](./entry-api/shared/calendar-info#calendartype) with more information. | [Optional] [Enum: single, multiple, periodic, permanent] |
| **createdFrom** | `Date` | Returns only results that were created at or after the given date-time. | [Optional] [Defaults to `undefined`] |
| **createdTo** | `Date` | Returns only results that were created at or before the given date-time. | [Optional] [Defaults to `undefined`] |
| **modifiedFrom** | `Date` | Returns only results that were last modified at or after the given date-time. If the result has never been modified, the &#x60;created&#x60; date-time will be used as &#x60;modified&#x60; instead. | [Optional] [Defaults to `undefined`] |
| **modifiedTo** | `Date` | Returns only results that were last modified at or before the given date-time. If the result has never been modified, the &#x60;created&#x60; date-time will be used as &#x60;modified&#x60; instead. | [Optional] [Defaults to `undefined`] |
| **contributors** | `string` | Returns results for which a particular user / email address is a contributor | [Optional] [Defaults to `undefined`] |
| **creator** | `string` | Returns only results that have a creator with the given user identifier. Due to historic reasons and evolutions in the id management systems, a user identifier can be one of: a UUID (for creators that had an UiTiD v1), an Auth0 user id (for new UiTiD v2 creators), or in some very old cases even an email address or nickname. (No new events or places are created with an email address or nickname as creator.) Can also be a client id suffixed with &#x60;@clients&#x60; in the case of results created with a client access token instead of a user access token. | [Optional] [Defaults to `undefined`] |
| **dateFrom** | `Date` | Returns only events that are happening at some point after the given date-time, and places that are open at some point after the given date-time. Permanent events or places are always returned by this parameter. | [Optional] [Defaults to `undefined`] |
| **dateTo** | `Date` | Returns only events that are happening at some point before the given date-time, and places that are open at some point before the given date-time. Permanent events or places are always returned by this parameter. | [Optional] [Defaults to `undefined`] |
| **localTimeFrom** | `string` | Returns only events that are happening at some point after the given time, and places that are open at some point after the given time. Dates and timezones are not taken into account by this parameter. Permanent events or places are always returned by this parameter. | [Optional] [Defaults to `undefined`] |
| **localTimeTo** | `string` | Returns only events that are happening at some point before the given time, and places that are open at some point before the given time. Dates and timezones are not taken into account by this parameter. Permanent events or places are always returned by this parameter. | [Optional] [Defaults to `undefined`] |
| **embed** | `boolean` | Returns the results with the actual JSON bodies of the individual items | [Optional] [Defaults to `undefined`] |
| **embedCalendarSummaries** | `xs-text`, `sm-text`, `md-text`, `lg-text`, `xs-html`, `sm-html`, `md-html`, `lg-html` | Adds an extra &#x60;calendarSummary&#x60; property to the results that contains one or more formatted human-readable summaries of the date/time info of the result. May be repeated to include multiple summaries per result. See the operation\&#39;s description above for more info on how to repeat parameters. | [Optional] [Enum: xs-text, sm-text, md-text, lg-text, xs-html, sm-html, md-html, lg-html] |
| **embedUitpasPrices** | `boolean` | Returns the results with the UiTPAS prices included (if applicable) | [Optional] [Defaults to `undefined`] |
| **facets** | `regions`, `types`, `themes`, `facilities`, `labels` | Adds an extra &#x60;facet&#x60; property in the response with possible values for a given filter, and a prediction of the total results if applied. May be repeated to include facet counts for multiple filters. See the operation\&#39;s description above for more info on how to repeat parameters. See (the guide about facets)[../docs/search-api/advanced/facets.md] for more information. | [Optional] [Enum: regions, types, themes, facilities, labels] |
| **groupBy** | `productionId` | Groups the results by their production. Grouping by productions ensures that for every production, only 1 event is returned in the search results | [Optional] [Defaults to `undefined`] [Enum: productionId] |
| **regions** | `Array<string>` | Returns only results that are geographically located in the given region. Regions may be fetched programmatically from [https://search.uitdatabank.be/autocomplete.json](https://search.uitdatabank.be/autocomplete.json). | [Optional] |
| **coordinates** | `string` | A pair of latitude and longitude coordinates to find results that are located within a distance of the given geographical point. Must be used in combination with the &#x60;distance&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **distance** | `string` | Returns only results that are geographically located within the given distance from the &#x60;coordinates&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **bounds** | `string` | Returns only results that are located in a specific geographical area defined by a pair of south-west coordinates and north-east coordinates. The two pairs of coordinates are separated by a pipe character (&#x60;|&#x60;). | [Optional] [Defaults to `undefined`] |
| **id** | `string` | Returns only results that have the exact same id. An id can be extracted from an event, place, or organizer URI by taking all the characters after the last &#x60;/&#x60;. For example for the URI &#x60;https://io-test.uitdatabank.be/events/75573a64-ddc8-4fd0-8b07-d258939dd74f&#x60; the id is &#x60;75573a64-ddc8-4fd0-8b07-d258939dd74f&#x60;. Note that while it will be a UUID in most cases, it is not guaranteed to always be one! | [Optional] [Defaults to `undefined`] |
| **isDuplicate** | `boolean` | Returns only results that include or excludes duplicate places | [Optional] [Defaults to `undefined`] |
| **locationId** | `string` | Returns only results that are related to the given location id (&#x3D; place id). A place\&#39;s id can be extracted from its URI by taking all the characters after the last &#x60;/&#x60;. For example for the URI &#x60;https://io-test.uitdatabank.be/places/75573a64-ddc8-4fd0-8b07-d258939dd74f&#x60; the id is &#x60;75573a64-ddc8-4fd0-8b07-d258939dd74f&#x60;. Note that while it will be a UUID in most cases, it is not guaranteed to always be one! | [Optional] [Defaults to `undefined`] |
| **organizerId** | `string` | Returns only results that are related to the given organizer id. An organizer\&#39;s id can be extracted from its URI by taking all the characters after the last &#x60;/&#x60;. For example for the URI &#x60;https://io-test.uitdatabank.be/organizers/75573a64-ddc8-4fd0-8b07-d258939dd74f&#x60; the id is &#x60;75573a64-ddc8-4fd0-8b07-d258939dd74f&#x60;. Note that while it will be a UUID in most cases, it is not guaranteed to always be one! | [Optional] [Defaults to `undefined`] |
| **labels** | `Array<string>` | Returns only results that have the given label(s) in either their &#x60;labels&#x60; or &#x60;hiddenLabels&#x60; properties. May be repeated to only return results that have all the given labels. See the operation\&#39;s description above for more info on how to repeat parameters. | [Optional] |
| **locationLabels** | `Array<string>` | Returns only results that have the given label(s) in their location\&#39;s &#x60;labels&#x60; or &#x60;hiddenLabels&#x60; properties. May be repeated to only return results with a location that has all the given labels. See the operation\&#39;s description above for more info on how to repeat parameters. | [Optional] |
| **organizerLabels** | `Array<string>` | Returns only results that have the given label(s) in their organizer\&#39;s &#x60;labels&#x60; or &#x60;hiddenLabels&#x60; properties. May be repeated to only return results with an organizer that has all the given labels. See the operation\&#39;s description above for more info on how to repeat parameters. | [Optional] |
| **mainLanguage** | `nl`, `fr`, `de`, `en` | Returns only results that have the given language code as their main (&#x3D; original) language. | [Optional] [Defaults to `undefined`] [Enum: nl, fr, de, en] |
| **languages** | `nl`, `fr`, `de`, `en` | Returns only results that have a localised value in the given language for one or more translatable fields like &#x60;name&#x60;. May be repeated to only return results that have localised values for all the given languages. See the operation\&#39;s description above for more info on how to repeat parameters. | [Optional] [Enum: nl, fr, de, en] |
| **completedLanguages** | `nl`, `fr`, `de`, `en` | Returns only results that have a localised value in the given language for every translatable field. May be repeated to only return results that have localised values for all the given languages. See the operation\&#39;s description above for more info on how to repeat parameters. | [Optional] [Enum: nl, fr, de, en] |
| **hasMediaObjects** | `boolean` | Returns only results that have one or more items inside their &#x60;mediaObject&#x60; property if set to &#x60;true&#x60;. Returns only results without &#x60;mediaObject&#x60; property if set to &#x60;false&#x60;. | [Optional] [Defaults to `undefined`] |
| **price** | `number` | Returns only results with exactly the same price for the base tariff (in EUR). | [Optional] [Defaults to `undefined`] |
| **minPrice** | `number` | Returns only results with a price for the base tariff that is equal to or higher than the given price (in EUR). | [Optional] [Defaults to `undefined`] |
| **maxPrice** | `number` | Returns only results with a price for the base tariff that is equal to or lower than the given price (in EUR). | [Optional] [Defaults to `undefined`] |
| **sortScore** | `asc`, `desc` | Sorts the results by their score (relevance), either with the lowest score first (&#x60;asc&#x60;) or the highest score first (&#x60;desc&#x60;). See (the guide about sorting)[../docs/search-api/sorting.md] for more information. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortAvailableTo** | `asc`, `desc` | Sorts the results by their &#x60;availableTo&#x60; date-time, either with the oldest date-time first (&#x60;asc&#x60;) or the highest date-time first (&#x60;desc&#x60;). Most commonly used to show events and/or places that will end or become unavailable soon. See (the guide about sorting)[../docs/search-api/sorting.md] for more information. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortCreated** | `asc`, `desc` | Sorts the results by their &#x60;created&#x60; date-time, either with the oldest results first (&#x60;asc&#x60;) or the newest results first (&#x60;desc&#x60;). See (the guide about sorting)[../docs/search-api/sorting.md] for more information. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortModified** | `asc`, `desc` | Sorts the results by their &#x60;modified&#x60; date-time, either with the least recently modified results first (&#x60;asc&#x60;) or the most recently modified results first (&#x60;desc&#x60;). See (the guide about sorting)[../docs/search-api/sorting.md] for more information. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortDistance** | `asc`, `desc` | Sorts the results by their distance from the &#x60;coordinates&#x60; parameter. Can only be used if &#x60;coordinates&#x60; and &#x60;distance&#x60; are also set. You may use multiple sort parameters. See (the guide about sorting)[../docs/search-api/sorting.md] for more information. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **status** | `Available`, `TemporarilyUnavailable`, `Unavailable` | Returns only results with exactly the same status type as the given enum value. &#x60;Available&#x60; means an event is happening as planned, and a place can be visited during its normal opening hours. &#x60;TemporarilyUnavailable&#x60; means an event has been postponed to a later date (yet to be determined), and a place is temporarily closed (for example due to renovations). &#x60;Unavailable&#x60; means an event is cancelled, or a place is permanently closed. If combined with &#x60;dateFrom&#x60; and/or &#x60;dateTo&#x60;, only results that have the given status in that time period will be returned. Accepts multiple comma-separated values to return results that have one of the given status types. | [Optional] [Enum: Available, TemporarilyUnavailable, Unavailable] |
| **termIds** | `Array<string>` | Returns only results that have the given term id(s) in either their &#x60;terms&#x60; property items. May be repeated to only return results that have all the given term ids. See the operation\&#39;s description above for more info on how to repeat parameters. | [Optional] |
| **uitpas** | `boolean` | Returns only results that are related to UiTPAS if set to &#x60;true&#x60;. Returns only results that are not related to UiTPAS if set to &#x60;false&#x60;. | [Optional] [Defaults to `undefined`] |
| **hasVideos** | `boolean` | Returns only results that have one or more items in their &#x60;videos&#x60; property if set to &#x60;true&#x60;. Returns only results that have no &#x60;videos&#x60; property if set to &#x60;false&#x60;. | [Optional] [Defaults to `undefined`] |
| **workflowStatus** | `DRAFT`, `READY_FOR_VALIDATION`, `APPROVED`, `REJECTED`, `DELETED`, `*` | Returns only results with exactly the same workflow status as the given enum value. Accepts multiple comma-separated values to return results that have one of the given workflow statuses. Defaults to only return results that either have the workflow status &#x60;READY_FOR_VALIDATION&#x60; or &#x60;APPROVED&#x60;. The default value can be reset by setting the parameter to &#x60;*&#x60;. See (the guide about default filters)[../docs/search-api/common-filters/default-filters.md] for more information. | [Optional] [Enum: DRAFT, READY_FOR_VALIDATION, APPROVED, REJECTED, DELETED, *] |

### Return type

[**GetOffers200Response**](GetOffers200Response.md)

### Authorization

[CLIENT_IDENTIFICATION](../README.md#CLIENT_IDENTIFICATION)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A single page of search results. If &#x60;?embed&#x3D;true&#x60; is used, the search results will contain the complete JSON details. Otherwise only &#x60;@id&#x60; and &#x60;@type&#x60; will be returned. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPlaces

> GetPlaces200Response getPlaces(xClientId, xApiKey, text, q, postalCode, addressCountry, maxAge, minAge, allAges, audienceType, availableFrom, availableTo, attendanceMode, bookingAvailability, calendarType, createdFrom, createdTo, embed, embedCalendarSummaries, embedUitpasPrices, modifiedFrom, modifiedTo, contributors, creator, dateFrom, dateTo, localTimeFrom, localTimeTo, facets, groupBy, regions, coordinates, distance, bounds, id, isDuplicate, locationId, organizerId, labels, organizerLabels, mainLanguage, languages, completedLanguages, hasMediaObjects, price, minPrice, maxPrice, sortScore, sortAvailableTo, sortCreated, sortModified, sortDistance, status, termIds, uitpas, hasVideos, workflowStatus)

Search places

Returns a paginated list of places that match the given filters.  ### Repeating query parameters  Parameters that have the type &#x60;array[string]&#x60; and &#x60;[]&#x60; as a suffix in their name in the list of query parameters below can be repeated to filter on multiple values with an &#x60;AND&#x60; operator. For example:  *  &#x60;?labels[]&#x3D;uitpas&#x60; to only include results that have the label &#x60;uitpas&#x60; *  &#x60;?labels[]&#x3D;uitpas&amp;labels[]&#x3D;paspartoe&#x60; to only include results that have both the labels &#x60;uitpas&#x60; and &#x60;paspartoe&#x60;  Other &#x60;array[string]&#x60; parameters without the &#x60;[]&#x60; suffix support multiple comma-separated values for &#x60;OR&#x60; filtering. For example:  *  &#x60;?workflowStatus&#x3D;DRAFT&#x60; to return all results with the draft workflow status. *  &#x60;?workflowStatus&#x3D;REJECTED,DELETED&#x60; to return results with the rejected or deleted workflow status.  Add &#x60;embedCalendarSummaries&#x60; to have an extra property &#x60;calendarSummary&#x60; in the results that contains one or more formatted human-readable summaries of the date/time info of the result. See &lt;a href&#x3D;\&quot;search-api/calendar-summaries\&quot;&gt;the guide about embedding the calendar summaries&lt;/a&gt; for more details. 

### Example

```ts
import {
  Configuration,
  EventsPlacesApi,
} from '@steinv/uitpas-sdk';
import type { GetPlacesRequest } from '@steinv/uitpas-sdk';

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
    // boolean | Returns the results with the actual JSON bodies of the individual items (optional)
    embed: true,
    // Array<'xs-text' | 'sm-text' | 'md-text' | 'lg-text' | 'xs-html' | 'sm-html' | 'md-html' | 'lg-html'> | Adds an extra `calendarSummary` property to the results that contains one or more formatted human-readable summaries of the date/time info of the result. May be repeated to include multiple summaries per result. See the operation\'s description above for more info on how to repeat parameters. (optional)
    embedCalendarSummaries: ...,
    // boolean | Returns the results with the UiTPAS prices included (if applicable) (optional)
    embedUitpasPrices: true,
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
    // boolean | Returns only results that include or excludes duplicate places (optional)
    isDuplicate: true,
    // string | Returns only results that are related to the given location id (= place id). A place\'s id can be extracted from its URI by taking all the characters after the last `/`. For example for the URI `https://io-test.uitdatabank.be/places/75573a64-ddc8-4fd0-8b07-d258939dd74f` the id is `75573a64-ddc8-4fd0-8b07-d258939dd74f`. Note that while it will be a UUID in most cases, it is not guaranteed to always be one! (optional)
    locationId: a0368d10-ded0-4925-b94a-2835f73e255e,
    // string | Returns only results that are related to the given organizer id. An organizer\'s id can be extracted from its URI by taking all the characters after the last `/`. For example for the URI `https://io-test.uitdatabank.be/organizers/75573a64-ddc8-4fd0-8b07-d258939dd74f` the id is `75573a64-ddc8-4fd0-8b07-d258939dd74f`. Note that while it will be a UUID in most cases, it is not guaranteed to always be one! (optional)
    organizerId: 4fa5dddf-73d5-47f8-b54f-45d88cc1661a,
    // Array<string> | Returns only results that have the given label(s) in either their `labels` or `hiddenLabels` properties. May be repeated to only return results that have all the given labels. See the operation\'s description above for more info on how to repeat parameters. (optional)
    labels: ...,
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
  } satisfies GetPlacesRequest;

  try {
    const data = await api.getPlaces(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **xClientId** | `string` | The client id of your project (if not using an API key). May also be replaced with a &#x60;clientId&#x60; query parameter. | [Optional] [Defaults to `undefined`] |
| **xApiKey** | `string` | The API key of your project on https://projectaanvraag.uitdatabank.be (if not using a client id). May also be replaced with an &#x60;apiKey&#x60; query parameter. Will be deprecated in favour of &#x60;x-client-id&#x60; in the future, but will still be supported. | [Optional] [Defaults to `undefined`] |
| **text** | `string` | Free text search terms. Returns results that match all or some of the given terms. May contain &#x60;AND&#x60; and &#x60;OR&#x60; operators, and brackets for grouping. Can not filter on specific fields (contrary to the &#x60;q&#x60; parameter). Typically used to search on user-provided keywords. | [Optional] [Defaults to `undefined`] |
| **q** | `string` | An advanced query in Lucene syntax, allowing you to construct complex AND/OR filters on specific fields. | [Optional] [Defaults to `undefined`] |
| **postalCode** | `string` | Returns only results that have the exact same postal code in their address. Typically 4 digits for Belgian addresses but can also be a different format for international addresses. | [Optional] [Defaults to `undefined`] |
| **addressCountry** | `string` | Returns only results that have the exact same country code in their address. Formatted as an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code. The default value can be disabled by setting the value to &#x60;*&#x60; or by using the &#x60;disableDefaultFilters&#x60; query parameter. | [Optional] [Defaults to `&#39;BE&#39;`] |
| **maxAge** | `number` | Returns only results that are targeted to participants/visitors of at most the given age (in years). The given age will be included in results. | [Optional] [Defaults to `undefined`] |
| **minAge** | `number` | Returns only results that are targeted to participants/visitors of at least the given age (in years). The given age will be included in results. | [Optional] [Defaults to `undefined`] |
| **allAges** | `boolean` | Returns only results that are suitable for participants/visitors of all ages if set to &#x60;true&#x60;, or only returns results that are suitable for a specific age group if set to &#x60;false&#x60;. | [Optional] [Defaults to `undefined`] |
| **audienceType** | `everyone`, `members`, `education`, `*` | Returns only results with the given enum value as their targeted audience. Results with audienceType &#x60;everyone&#x60; are targeted to any participant/visitor. Results with audienceType &#x60;members&#x60; are only targeted towards members of the organizer of the event. Results with audienceType &#x60;education&#x60; are targeted towards [CultuurKuur](https://www.cultuurkuur.be/). | [Optional] [Defaults to `&#39;everyone&#39;`] [Enum: everyone, members, education, *] |
| **availableFrom** | `Date` | Returns only results that should (still) be visible on online calendars after the given date-time. Defaults to the current date-time of the request. The default value can be disabled by setting the value to &#x60;*&#x60; or by using the &#x60;disableDefaultFilters&#x60; query parameter. See (the guide about default filters)[../docs/search-api/common-filters/default-filters.md] for more information. | [Optional] [Defaults to `undefined`] |
| **availableTo** | `Date` | Returns only results that should be visible on online calendars up until the given date-time. Defaults to the current date-time of the request. The default value can be disabled by setting the value to &#x60;*&#x60; or by using the &#x60;disableDefaultFilters&#x60; query parameter. See (the guide about default filters)[../docs/search-api/common-filters/default-filters.md] for more information. | [Optional] [Defaults to `undefined`] |
| **attendanceMode** | `online`, `offline`, `mixed` | Returns only results with the given enum value as their attendance mode. Results with attendanceMode &#x60;online&#x60; are only happening online (e.g. via a video stream). Results with attendanceMode &#x60;offline&#x60; are only happening on a physical location. Results with attendanceMode &#x60;mixed&#x60; can be attended both online or offline. Note that when filtering on &#x60;mixed&#x60;, _only_ results that are both happening online and offline will be included. Accepts multiple comma-separated values to return results that have one of the given attendance modes. | [Optional] [Enum: online, offline, mixed] |
| **bookingAvailability** | `Available`, `Unavailable` | Returns only results with the given enum value as their bookingAvailability type. Results with bookingAvailability &#x60;Available&#x60; still have tickets/reservations available. Results with bookingAvailability &#x60;Unavailable&#x60; are sold out / fully booked. | [Optional] [Defaults to `undefined`] [Enum: Available, Unavailable] |
| **calendarType** | `single`, `multiple`, `periodic`, `permanent` | Returns only results with the given enum value as their calendarType. Accepts multiple comma-separated values to return results that have one of the given calendar types. [Here is a detailed guide](./entry-api/shared/calendar-info#calendartype) with more information. | [Optional] [Enum: single, multiple, periodic, permanent] |
| **createdFrom** | `Date` | Returns only results that were created at or after the given date-time. | [Optional] [Defaults to `undefined`] |
| **createdTo** | `Date` | Returns only results that were created at or before the given date-time. | [Optional] [Defaults to `undefined`] |
| **embed** | `boolean` | Returns the results with the actual JSON bodies of the individual items | [Optional] [Defaults to `undefined`] |
| **embedCalendarSummaries** | `xs-text`, `sm-text`, `md-text`, `lg-text`, `xs-html`, `sm-html`, `md-html`, `lg-html` | Adds an extra &#x60;calendarSummary&#x60; property to the results that contains one or more formatted human-readable summaries of the date/time info of the result. May be repeated to include multiple summaries per result. See the operation\&#39;s description above for more info on how to repeat parameters. | [Optional] [Enum: xs-text, sm-text, md-text, lg-text, xs-html, sm-html, md-html, lg-html] |
| **embedUitpasPrices** | `boolean` | Returns the results with the UiTPAS prices included (if applicable) | [Optional] [Defaults to `undefined`] |
| **modifiedFrom** | `Date` | Returns only results that were last modified at or after the given date-time. If the result has never been modified, the &#x60;created&#x60; date-time will be used as &#x60;modified&#x60; instead. | [Optional] [Defaults to `undefined`] |
| **modifiedTo** | `Date` | Returns only results that were last modified at or before the given date-time. If the result has never been modified, the &#x60;created&#x60; date-time will be used as &#x60;modified&#x60; instead. | [Optional] [Defaults to `undefined`] |
| **contributors** | `string` | Returns results for which a particular user / email address is a contributor | [Optional] [Defaults to `undefined`] |
| **creator** | `string` | Returns only results that have a creator with the given user identifier. Due to historic reasons and evolutions in the id management systems, a user identifier can be one of: a UUID (for creators that had an UiTiD v1), an Auth0 user id (for new UiTiD v2 creators), or in some very old cases even an email address or nickname. (No new events or places are created with an email address or nickname as creator.) Can also be a client id suffixed with &#x60;@clients&#x60; in the case of results created with a client access token instead of a user access token. | [Optional] [Defaults to `undefined`] |
| **dateFrom** | `Date` | Returns only events that are happening at some point after the given date-time, and places that are open at some point after the given date-time. Permanent events or places are always returned by this parameter. | [Optional] [Defaults to `undefined`] |
| **dateTo** | `Date` | Returns only events that are happening at some point before the given date-time, and places that are open at some point before the given date-time. Permanent events or places are always returned by this parameter. | [Optional] [Defaults to `undefined`] |
| **localTimeFrom** | `string` | Returns only events that are happening at some point after the given time, and places that are open at some point after the given time. Dates and timezones are not taken into account by this parameter. Permanent events or places are always returned by this parameter. | [Optional] [Defaults to `undefined`] |
| **localTimeTo** | `string` | Returns only events that are happening at some point before the given time, and places that are open at some point before the given time. Dates and timezones are not taken into account by this parameter. Permanent events or places are always returned by this parameter. | [Optional] [Defaults to `undefined`] |
| **facets** | `regions`, `types`, `themes`, `facilities`, `labels` | Adds an extra &#x60;facet&#x60; property in the response with possible values for a given filter, and a prediction of the total results if applied. May be repeated to include facet counts for multiple filters. See the operation\&#39;s description above for more info on how to repeat parameters. See (the guide about facets)[../docs/search-api/advanced/facets.md] for more information. | [Optional] [Enum: regions, types, themes, facilities, labels] |
| **groupBy** | `productionId` | Groups the results by their production. Grouping by productions ensures that for every production, only 1 event is returned in the search results | [Optional] [Defaults to `undefined`] [Enum: productionId] |
| **regions** | `Array<string>` | Returns only results that are geographically located in the given region. Regions may be fetched programmatically from [https://search.uitdatabank.be/autocomplete.json](https://search.uitdatabank.be/autocomplete.json). | [Optional] |
| **coordinates** | `string` | A pair of latitude and longitude coordinates to find results that are located within a distance of the given geographical point. Must be used in combination with the &#x60;distance&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **distance** | `string` | Returns only results that are geographically located within the given distance from the &#x60;coordinates&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **bounds** | `string` | Returns only results that are located in a specific geographical area defined by a pair of south-west coordinates and north-east coordinates. The two pairs of coordinates are separated by a pipe character (&#x60;|&#x60;). | [Optional] [Defaults to `undefined`] |
| **id** | `string` | Returns only results that have the exact same id. An id can be extracted from an event, place, or organizer URI by taking all the characters after the last &#x60;/&#x60;. For example for the URI &#x60;https://io-test.uitdatabank.be/events/75573a64-ddc8-4fd0-8b07-d258939dd74f&#x60; the id is &#x60;75573a64-ddc8-4fd0-8b07-d258939dd74f&#x60;. Note that while it will be a UUID in most cases, it is not guaranteed to always be one! | [Optional] [Defaults to `undefined`] |
| **isDuplicate** | `boolean` | Returns only results that include or excludes duplicate places | [Optional] [Defaults to `undefined`] |
| **locationId** | `string` | Returns only results that are related to the given location id (&#x3D; place id). A place\&#39;s id can be extracted from its URI by taking all the characters after the last &#x60;/&#x60;. For example for the URI &#x60;https://io-test.uitdatabank.be/places/75573a64-ddc8-4fd0-8b07-d258939dd74f&#x60; the id is &#x60;75573a64-ddc8-4fd0-8b07-d258939dd74f&#x60;. Note that while it will be a UUID in most cases, it is not guaranteed to always be one! | [Optional] [Defaults to `undefined`] |
| **organizerId** | `string` | Returns only results that are related to the given organizer id. An organizer\&#39;s id can be extracted from its URI by taking all the characters after the last &#x60;/&#x60;. For example for the URI &#x60;https://io-test.uitdatabank.be/organizers/75573a64-ddc8-4fd0-8b07-d258939dd74f&#x60; the id is &#x60;75573a64-ddc8-4fd0-8b07-d258939dd74f&#x60;. Note that while it will be a UUID in most cases, it is not guaranteed to always be one! | [Optional] [Defaults to `undefined`] |
| **labels** | `Array<string>` | Returns only results that have the given label(s) in either their &#x60;labels&#x60; or &#x60;hiddenLabels&#x60; properties. May be repeated to only return results that have all the given labels. See the operation\&#39;s description above for more info on how to repeat parameters. | [Optional] |
| **organizerLabels** | `Array<string>` | Returns only results that have the given label(s) in their organizer\&#39;s &#x60;labels&#x60; or &#x60;hiddenLabels&#x60; properties. May be repeated to only return results with an organizer that has all the given labels. See the operation\&#39;s description above for more info on how to repeat parameters. | [Optional] |
| **mainLanguage** | `nl`, `fr`, `de`, `en` | Returns only results that have the given language code as their main (&#x3D; original) language. | [Optional] [Defaults to `undefined`] [Enum: nl, fr, de, en] |
| **languages** | `nl`, `fr`, `de`, `en` | Returns only results that have a localised value in the given language for one or more translatable fields like &#x60;name&#x60;. May be repeated to only return results that have localised values for all the given languages. See the operation\&#39;s description above for more info on how to repeat parameters. | [Optional] [Enum: nl, fr, de, en] |
| **completedLanguages** | `nl`, `fr`, `de`, `en` | Returns only results that have a localised value in the given language for every translatable field. May be repeated to only return results that have localised values for all the given languages. See the operation\&#39;s description above for more info on how to repeat parameters. | [Optional] [Enum: nl, fr, de, en] |
| **hasMediaObjects** | `boolean` | Returns only results that have one or more items inside their &#x60;mediaObject&#x60; property if set to &#x60;true&#x60;. Returns only results without &#x60;mediaObject&#x60; property if set to &#x60;false&#x60;. | [Optional] [Defaults to `undefined`] |
| **price** | `number` | Returns only results with exactly the same price for the base tariff (in EUR). | [Optional] [Defaults to `undefined`] |
| **minPrice** | `number` | Returns only results with a price for the base tariff that is equal to or higher than the given price (in EUR). | [Optional] [Defaults to `undefined`] |
| **maxPrice** | `number` | Returns only results with a price for the base tariff that is equal to or lower than the given price (in EUR). | [Optional] [Defaults to `undefined`] |
| **sortScore** | `asc`, `desc` | Sorts the results by their score (relevance), either with the lowest score first (&#x60;asc&#x60;) or the highest score first (&#x60;desc&#x60;). See (the guide about sorting)[../docs/search-api/sorting.md] for more information. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortAvailableTo** | `asc`, `desc` | Sorts the results by their &#x60;availableTo&#x60; date-time, either with the oldest date-time first (&#x60;asc&#x60;) or the highest date-time first (&#x60;desc&#x60;). Most commonly used to show events and/or places that will end or become unavailable soon. See (the guide about sorting)[../docs/search-api/sorting.md] for more information. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortCreated** | `asc`, `desc` | Sorts the results by their &#x60;created&#x60; date-time, either with the oldest results first (&#x60;asc&#x60;) or the newest results first (&#x60;desc&#x60;). See (the guide about sorting)[../docs/search-api/sorting.md] for more information. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortModified** | `asc`, `desc` | Sorts the results by their &#x60;modified&#x60; date-time, either with the least recently modified results first (&#x60;asc&#x60;) or the most recently modified results first (&#x60;desc&#x60;). See (the guide about sorting)[../docs/search-api/sorting.md] for more information. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortDistance** | `asc`, `desc` | Sorts the results by their distance from the &#x60;coordinates&#x60; parameter. Can only be used if &#x60;coordinates&#x60; and &#x60;distance&#x60; are also set. You may use multiple sort parameters. See (the guide about sorting)[../docs/search-api/sorting.md] for more information. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **status** | `Available`, `TemporarilyUnavailable`, `Unavailable` | Returns only results with exactly the same status type as the given enum value. &#x60;Available&#x60; means an event is happening as planned, and a place can be visited during its normal opening hours. &#x60;TemporarilyUnavailable&#x60; means an event has been postponed to a later date (yet to be determined), and a place is temporarily closed (for example due to renovations). &#x60;Unavailable&#x60; means an event is cancelled, or a place is permanently closed. If combined with &#x60;dateFrom&#x60; and/or &#x60;dateTo&#x60;, only results that have the given status in that time period will be returned. Accepts multiple comma-separated values to return results that have one of the given status types. | [Optional] [Enum: Available, TemporarilyUnavailable, Unavailable] |
| **termIds** | `Array<string>` | Returns only results that have the given term id(s) in either their &#x60;terms&#x60; property items. May be repeated to only return results that have all the given term ids. See the operation\&#39;s description above for more info on how to repeat parameters. | [Optional] |
| **uitpas** | `boolean` | Returns only results that are related to UiTPAS if set to &#x60;true&#x60;. Returns only results that are not related to UiTPAS if set to &#x60;false&#x60;. | [Optional] [Defaults to `undefined`] |
| **hasVideos** | `boolean` | Returns only results that have one or more items in their &#x60;videos&#x60; property if set to &#x60;true&#x60;. Returns only results that have no &#x60;videos&#x60; property if set to &#x60;false&#x60;. | [Optional] [Defaults to `undefined`] |
| **workflowStatus** | `DRAFT`, `READY_FOR_VALIDATION`, `APPROVED`, `REJECTED`, `DELETED`, `*` | Returns only results with exactly the same workflow status as the given enum value. Accepts multiple comma-separated values to return results that have one of the given workflow statuses. Defaults to only return results that either have the workflow status &#x60;READY_FOR_VALIDATION&#x60; or &#x60;APPROVED&#x60;. The default value can be reset by setting the parameter to &#x60;*&#x60;. See (the guide about default filters)[../docs/search-api/common-filters/default-filters.md] for more information. | [Optional] [Enum: DRAFT, READY_FOR_VALIDATION, APPROVED, REJECTED, DELETED, *] |

### Return type

[**GetPlaces200Response**](GetPlaces200Response.md)

### Authorization

[CLIENT_IDENTIFICATION](../README.md#CLIENT_IDENTIFICATION)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A single page of search results. If &#x60;?embed&#x3D;true&#x60; is used, the search results will contain the complete JSON details. Otherwise only &#x60;@id&#x60; and &#x60;@type&#x60; will be returned. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postEvents

> GetEvents200Response postEvents(xClientId, xApiKey, body)

Search events

Returns a paginated list of events that match the given filters.  This endpoint works the same as &#x60;GET&#x60; but accepts all parameters in the request body as a query string instead of as URL query parameters. This is useful when the amount of parameters would make the URL too long.  The request body should use content type &#x60;text/plain&#x60; and be formatted as a query string (the same format as URL query parameters), for example: &#x60;postalCode&#x3D;9000&amp;labels[]&#x3D;uitpas&#x60;.  ### Repeating query parameters  Parameters that have the type &#x60;array[string]&#x60; and &#x60;[]&#x60; as a suffix in their name in the request body can be repeated to filter on multiple values with an &#x60;AND&#x60; operator. For example:  *  &#x60;?labels[]&#x3D;uitpas&#x60; to only include results that have the label &#x60;uitpas&#x60; *  &#x60;?labels[]&#x3D;uitpas&amp;labels[]&#x3D;paspartoe&#x60; to only include results that have both the labels &#x60;uitpas&#x60; and &#x60;paspartoe&#x60;  Other &#x60;array[string]&#x60; parameters without the &#x60;[]&#x60; suffix support multiple comma-separated values for &#x60;OR&#x60; filtering. For example:  *  &#x60;?workflowStatus&#x3D;DRAFT&#x60; to return all results with the draft workflow status. *  &#x60;?workflowStatus&#x3D;REJECTED,DELETED&#x60; to return results with the rejected or deleted workflow status.  Add &#x60;embedCalendarSummaries&#x60; to have an extra property &#x60;calendarSummary&#x60; in the results that contains one or more formatted human-readable summaries of the date/time info of the result. See &lt;a href&#x3D;\&quot;search-api/calendar-summaries\&quot;&gt;the guide about embedding the calendar summaries&lt;/a&gt; for more details.

### Example

```ts
import {
  Configuration,
  EventsPlacesApi,
} from '@steinv/uitpas-sdk';
import type { PostEventsRequest } from '@steinv/uitpas-sdk';

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
    // string | All search parameters formatted as a query string, for example: `postalCode=9000&labels[]=uitpas`. Supports the same parameters as the `GET` variant of this endpoint. (optional)
    body: body_example,
  } satisfies PostEventsRequest;

  try {
    const data = await api.postEvents(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **xClientId** | `string` | The client id of your project (if not using an API key). May also be replaced with a &#x60;clientId&#x60; query parameter. | [Optional] [Defaults to `undefined`] |
| **xApiKey** | `string` | The API key of your project on https://projectaanvraag.uitdatabank.be (if not using a client id). May also be replaced with an &#x60;apiKey&#x60; query parameter. Will be deprecated in favour of &#x60;x-client-id&#x60; in the future, but will still be supported. | [Optional] [Defaults to `undefined`] |
| **body** | `string` | All search parameters formatted as a query string, for example: &#x60;postalCode&#x3D;9000&amp;labels[]&#x3D;uitpas&#x60;. Supports the same parameters as the &#x60;GET&#x60; variant of this endpoint. | [Optional] |

### Return type

[**GetEvents200Response**](GetEvents200Response.md)

### Authorization

[CLIENT_IDENTIFICATION](../README.md#CLIENT_IDENTIFICATION)

### HTTP request headers

- **Content-Type**: `text/plain`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A single page of search results. If &#x60;?embed&#x3D;true&#x60; is used, the search results will contain the complete JSON details. Otherwise only &#x60;@id&#x60; and &#x60;@type&#x60; will be returned. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |
| **415** | The request does not work with the provided content-type. Check the detail to know which content-type you should use for this request. The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/body/unsupported-media-type&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postOffers

> GetOffers200Response postOffers(xClientId, xApiKey, body)

Search events &amp; places (offers)

Returns a paginated list of both events and places that match the given filters.  ### Repeating query parameters  Parameters that have the type &#x60;array[string]&#x60; and &#x60;[]&#x60; as a suffix in their name in the request body can be repeated to filter on multiple values with an &#x60;AND&#x60; operator. For example:  *  &#x60;?labels[]&#x3D;uitpas&#x60; to only include results that have the label &#x60;uitpas&#x60; *  &#x60;?labels[]&#x3D;uitpas&amp;labels[]&#x3D;paspartoe&#x60; to only include results that have both the labels &#x60;uitpas&#x60; and &#x60;paspartoe&#x60;  Other &#x60;array[string]&#x60; parameters without the &#x60;[]&#x60; suffix support multiple comma-separated values for &#x60;OR&#x60; filtering. For example:  *  &#x60;?workflowStatus&#x3D;DRAFT&#x60; to return all results with the draft workflow status. *  &#x60;?workflowStatus&#x3D;REJECTED,DELETED&#x60; to return results with the rejected or deleted workflow status.

### Example

```ts
import {
  Configuration,
  EventsPlacesApi,
} from '@steinv/uitpas-sdk';
import type { PostOffersRequest } from '@steinv/uitpas-sdk';

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
    // string | All search parameters formatted as a query string, for example: `postalCode=9000&labels[]=uitpas`. Supports the same parameters as the `GET` variant of this endpoint. (optional)
    body: body_example,
  } satisfies PostOffersRequest;

  try {
    const data = await api.postOffers(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **xClientId** | `string` | The client id of your project (if not using an API key). May also be replaced with a &#x60;clientId&#x60; query parameter. | [Optional] [Defaults to `undefined`] |
| **xApiKey** | `string` | The API key of your project on https://projectaanvraag.uitdatabank.be (if not using a client id). May also be replaced with an &#x60;apiKey&#x60; query parameter. Will be deprecated in favour of &#x60;x-client-id&#x60; in the future, but will still be supported. | [Optional] [Defaults to `undefined`] |
| **body** | `string` | All search parameters formatted as a query string, for example: &#x60;postalCode&#x3D;9000&amp;labels[]&#x3D;uitpas&#x60;. Supports the same parameters as the &#x60;GET&#x60; variant of this endpoint. | [Optional] |

### Return type

[**GetOffers200Response**](GetOffers200Response.md)

### Authorization

[CLIENT_IDENTIFICATION](../README.md#CLIENT_IDENTIFICATION)

### HTTP request headers

- **Content-Type**: `text/plain`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A single page of search results. If &#x60;?embed&#x3D;true&#x60; is used, the search results will contain the complete JSON details. Otherwise only &#x60;@id&#x60; and &#x60;@type&#x60; will be returned. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |
| **415** | The request does not work with the provided content-type. Check the detail to know which content-type you should use for this request. The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/body/unsupported-media-type&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postPlaces

> GetPlaces200Response postPlaces(xClientId, xApiKey, body)

Search places

Returns a paginated list of places that match the given filters.  This endpoint works the same as &#x60;GET&#x60; but accepts all parameters in the request body as a query string instead of as URL query parameters. This is useful when the amount of parameters would make the URL too long.  The request body should use content type &#x60;text/plain&#x60; and be formatted as a query string (the same format as URL query parameters), for example: &#x60;postalCode&#x3D;9000&amp;labels[]&#x3D;uitpas&#x60;.  ### Repeating query parameters  Parameters that have the type &#x60;array[string]&#x60; and &#x60;[]&#x60; as a suffix in their name in the request body can be repeated to filter on multiple values with an &#x60;AND&#x60; operator. For example:  *  &#x60;?labels[]&#x3D;uitpas&#x60; to only include results that have the label &#x60;uitpas&#x60; *  &#x60;?labels[]&#x3D;uitpas&amp;labels[]&#x3D;paspartoe&#x60; to only include results that have both the labels &#x60;uitpas&#x60; and &#x60;paspartoe&#x60;  Other &#x60;array[string]&#x60; parameters without the &#x60;[]&#x60; suffix support multiple comma-separated values for &#x60;OR&#x60; filtering. For example:  *  &#x60;?workflowStatus&#x3D;DRAFT&#x60; to return all results with the draft workflow status. *  &#x60;?workflowStatus&#x3D;REJECTED,DELETED&#x60; to return results with the rejected or deleted workflow status.  Add &#x60;embedCalendarSummaries&#x60; to have an extra property &#x60;calendarSummary&#x60; in the results that contains one or more formatted human-readable summaries of the date/time info of the result. See &lt;a href&#x3D;\&quot;search-api/calendar-summaries\&quot;&gt;the guide about embedding the calendar summaries&lt;/a&gt; for more details. 

### Example

```ts
import {
  Configuration,
  EventsPlacesApi,
} from '@steinv/uitpas-sdk';
import type { PostPlacesRequest } from '@steinv/uitpas-sdk';

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
    // string | All search parameters formatted as a query string, for example: `postalCode=9000&labels[]=uitpas`. Supports the same parameters as the `GET` variant of this endpoint. (optional)
    body: body_example,
  } satisfies PostPlacesRequest;

  try {
    const data = await api.postPlaces(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **xClientId** | `string` | The client id of your project (if not using an API key). May also be replaced with a &#x60;clientId&#x60; query parameter. | [Optional] [Defaults to `undefined`] |
| **xApiKey** | `string` | The API key of your project on https://projectaanvraag.uitdatabank.be (if not using a client id). May also be replaced with an &#x60;apiKey&#x60; query parameter. Will be deprecated in favour of &#x60;x-client-id&#x60; in the future, but will still be supported. | [Optional] [Defaults to `undefined`] |
| **body** | `string` | All search parameters formatted as a query string, for example: &#x60;postalCode&#x3D;9000&amp;labels[]&#x3D;uitpas&#x60;. Supports the same parameters as the &#x60;GET&#x60; variant of this endpoint. | [Optional] |

### Return type

[**GetPlaces200Response**](GetPlaces200Response.md)

### Authorization

[CLIENT_IDENTIFICATION](../README.md#CLIENT_IDENTIFICATION)

### HTTP request headers

- **Content-Type**: `text/plain`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A single page of search results. If &#x60;?embed&#x3D;true&#x60; is used, the search results will contain the complete JSON details. Otherwise only &#x60;@id&#x60; and &#x60;@type&#x60; will be returned. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |
| **415** | The request does not work with the provided content-type. Check the detail to know which content-type you should use for this request. The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/body/unsupported-media-type&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

