# EventsApi

All URIs are relative to *https://io-test.uitdatabank.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**eventAttendanceModePut**](EventsApi.md#eventattendancemodeput) | **PUT** /events/{eventId}/attendance-mode | attendanceMode - update |
| [**eventAudiencePut**](EventsApi.md#eventaudienceput) | **PUT** /events/{eventId}/audience | audience - update |
| [**eventAvailableFromPut**](EventsApi.md#eventavailablefromput) | **PUT** /events/{eventId}/available-from | availableFrom - update |
| [**eventBirthdateRangeDelete**](EventsApi.md#eventbirthdaterangedelete) | **DELETE** /events/{eventId}/birthdate-range | birthdateRange - delete |
| [**eventBirthdateRangePut**](EventsApi.md#eventbirthdaterangeput) | **PUT** /events/{eventId}/birthdate-range | birthdateRange - update |
| [**eventBookingAvailabilityPut**](EventsApi.md#eventbookingavailabilityput) | **PUT** /events/{eventId}/booking-availability | bookingAvailability - update |
| [**eventBookingInfoPut**](EventsApi.md#eventbookinginfoput) | **PUT** /events/{eventId}/booking-info | bookingInfo - update |
| [**eventCalendarPut**](EventsApi.md#eventcalendarput) | **PUT** /events/{eventId}/calendar | calendar - put |
| [**eventCalendarSummaryGet**](EventsApi.md#eventcalendarsummaryget) | **GET** /events/{eventId}/calendar-summary | calendar summary - get |
| [**eventContactPointPut**](EventsApi.md#eventcontactpointput) | **PUT** /events/{eventId}/contact-point | contactPoint - update |
| [**eventCopiesPost**](EventsApi.md#eventcopiespostoperation) | **POST** /events/{eventId}/copies | event - copy |
| [**eventDelete**](EventsApi.md#eventdelete) | **DELETE** /events/{eventId} | event - delete |
| [**eventDeparturePlacesPut**](EventsApi.md#eventdepartureplacesput) | **PUT** /events/{eventId}/departurePlaces | departurePlaces - update |
| [**eventDescriptionDelete**](EventsApi.md#eventdescriptiondelete) | **DELETE** /events/{eventId}/description/{language} | description - delete |
| [**eventDescriptionPut**](EventsApi.md#eventdescriptionput) | **PUT** /events/{eventId}/description/{language} | description - update |
| [**eventFacilitiesPut**](EventsApi.md#eventfacilitiesput) | **PUT** /events/{eventId}/facilities | facilities - update |
| [**eventFaqsPut**](EventsApi.md#eventfaqsput) | **PUT** /events/{eventId}/faqs | faqs - update |
| [**eventGet**](EventsApi.md#eventget) | **GET** /events/{eventId} | event - get |
| [**eventImageDelete**](EventsApi.md#eventimagedelete) | **DELETE** /events/{eventId}/images/{imageId} | images - delete |
| [**eventImagePut**](EventsApi.md#eventimageput) | **PUT** /events/{eventId}/images/{imageId} | images - update |
| [**eventImagesPost**](EventsApi.md#eventimagespost) | **POST** /events/{eventId}/images | images - add |
| [**eventImportNew**](EventsApi.md#eventimportnew) | **POST** /imports/events | event - import (create) |
| [**eventImportUpdate**](EventsApi.md#eventimportupdate) | **PUT** /imports/events/{eventId} | event - import (update) |
| [**eventLabelsAdd**](EventsApi.md#eventlabelsadd) | **PUT** /events/{eventId}/labels/{labelName} | labels - add |
| [**eventLabelsDelete**](EventsApi.md#eventlabelsdelete) | **DELETE** /events/{eventId}/labels/{labelName} | labels - delete |
| [**eventLocationPut**](EventsApi.md#eventlocationput) | **PUT** /events/{eventId}/location/{placeId} | location - update |
| [**eventMainImagePut**](EventsApi.md#eventmainimageput) | **PUT** /events/{eventId}/images/main | images main - update |
| [**eventMajorInfoPut**](EventsApi.md#eventmajorinfoputoperation) | **PUT** /events/{eventId}/major-info | major-info - update |
| [**eventNamePut**](EventsApi.md#eventnameput) | **PUT** /events/{eventId}/name/{language} | name - update |
| [**eventOnlineUrlDelete**](EventsApi.md#eventonlineurldelete) | **DELETE** /events/{eventId}/online-url | onlineUrl - delete |
| [**eventOnlineUrlPut**](EventsApi.md#eventonlineurlput) | **PUT** /events/{eventId}/online-url | onlineUrl - update |
| [**eventOrganizerDelete**](EventsApi.md#eventorganizerdelete) | **DELETE** /events/{eventId}/organizer/{organizerId} | organizer - delete |
| [**eventOrganizerUpdate**](EventsApi.md#eventorganizerupdate) | **PUT** /events/{eventId}/organizer/{organizerId} | organizer - update |
| [**eventPost**](EventsApi.md#eventpost) | **POST** /events | event - create |
| [**eventPriceInfoPut**](EventsApi.md#eventpriceinfoput) | **PUT** /events/{eventId}/price-info | priceInfo - update |
| [**eventPut**](EventsApi.md#eventput) | **PUT** /events/{eventId} | event - update |
| [**eventStatusPut**](EventsApi.md#eventstatusput) | **PUT** /events/{eventId}/status | status - update |
| [**eventSubEventPatch**](EventsApi.md#eventsubeventpatch) | **PATCH** /events/{eventId}/sub-events | subEvent - patch |
| [**eventTermsEventtypePut**](EventsApi.md#eventtermseventtypeput) | **PUT** /events/{eventId}/type/{termId} | terms &gt; eventtype - update |
| [**eventTermsThemeDelete**](EventsApi.md#eventtermsthemedelete) | **DELETE** /events/{eventId}/theme | terms &gt; theme - delete |
| [**eventTermsThemePut**](EventsApi.md#eventtermsthemeput) | **PUT** /events/{eventId}/theme/{termId} | terms &gt; theme - update |
| [**eventTypicalAgeRangeDelete**](EventsApi.md#eventtypicalagerangedelete) | **DELETE** /events/{eventId}/typical-age-range | typicalAgeRange - delete |
| [**eventTypicalAgeRangePut**](EventsApi.md#eventtypicalagerangeput) | **PUT** /events/{eventId}/typical-age-range | typicalAgeRange - update |
| [**eventVideosDelete**](EventsApi.md#eventvideosdelete) | **DELETE** /events/{eventId}/videos/{videoId} | videos - delete |
| [**eventVideosPatch**](EventsApi.md#eventvideospatch) | **PATCH** /events/{eventId}/videos | videos - patch |
| [**eventVideosPost**](EventsApi.md#eventvideospost) | **POST** /events/{eventId}/videos | videos - add |
| [**eventWorkflowStatusPut**](EventsApi.md#eventworkflowstatusput) | **PUT** /events/{eventId}/workflow-status | workflowStatus - update |



## eventAttendanceModePut

> eventAttendanceModePut(eventId, eventAttendanceModePut)

attendanceMode - update

Updates the attendance mode of an event. There are three different attendance modes: - &#x60;offline&#x60;: the event takes places on a physical location - &#x60;online&#x60;: the events takes places on an online location - &#x60;mixed&#x60;: the event takes places both on a real location and a online location  When changing from attendance mode online to either offline or mixed it is required to include the location property with the URI or UUID of the (physical) [location](/models/place.json) that the event is taking place at.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventAttendanceModePutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
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

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **eventAttendanceModePut** | [EventAttendanceModePut](EventAttendanceModePut.md) | New attendanceMode to set on the event, and optionally a new location (when moving from attendanceMode &#x60;online&#x60; to &#x60;mixed&#x60; or &#x60;offline&#x60;). | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The event\&#39;s attendance mode was successfully updated. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventAudiencePut

> eventAudiencePut(eventId, eventAudience)

audience - update

Updates the intended audience of the event, which currently only has one property &#x60;audienceType&#x60;.   By default the audienceType is set to &#x60;everyone&#x60;. If needed the audience can be updated to &#x60;members&#x60; to hide it on public channels, or &#x60;education&#x60; for CultuurKuur events for schools.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventAudiencePutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // EventAudience | New audienceType to set on the event. (optional)
    eventAudience: {"audienceType":"everyone"},
  } satisfies EventAudiencePutRequest;

  try {
    const data = await api.eventAudiencePut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **eventAudience** | [EventAudience](EventAudience.md) | New audienceType to set on the event. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The event\&#39;s audience was successfully updated. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitdatabank/incompatible-audience-type |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventAvailableFromPut

> eventAvailableFromPut(eventId, eventAvailableFromPut)

availableFrom - update

Updates the availableFrom of the event. This is the first date &amp; time that the event is allowed to be visible on publication channels.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventAvailableFromPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // EventAvailableFromPut | New availableFrom to set on the event. (optional)
    eventAvailableFromPut: {"availableFrom":"2021-05-17T22:00:00+00:00"},
  } satisfies EventAvailableFromPutRequest;

  try {
    const data = await api.eventAvailableFromPut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **eventAvailableFromPut** | [EventAvailableFromPut](EventAvailableFromPut.md) | New availableFrom to set on the event. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The event\&#39;s availableFrom was successfully updated. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventBirthdateRangeDelete

> eventBirthdateRangeDelete(eventId)

birthdateRange - delete

Deletes the birthdate range from an event.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventBirthdateRangeDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
  } satisfies EventBirthdateRangeDeleteRequest;

  try {
    const data = await api.eventBirthdateRangeDelete(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The birthdate range was successfully deleted. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventBirthdateRangePut

> eventBirthdateRangePut(eventId, eventBirthdateRangePut)

birthdateRange - update

Updates the birthdate range of the event with the given &#x60;eventId&#x60;.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventBirthdateRangePutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // EventBirthdateRangePut | The birthdate range to set on the event. (optional)
    eventBirthdateRangePut: {"from":"2021-01-31","to":"2021-12-31"},
  } satisfies EventBirthdateRangePutRequest;

  try {
    const data = await api.eventBirthdateRangePut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **eventBirthdateRangePut** | [EventBirthdateRangePut](EventBirthdateRangePut.md) | The birthdate range to set on the event. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The birthdate range was successfully updated. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventBookingAvailabilityPut

> eventBookingAvailabilityPut(eventId, eventBookingAvailability)

bookingAvailability - update

Updates the general bookingAvailability info on the top level of the event with the given &#x60;eventId&#x60;.  The type of any subEvents that the event has will also be updated to match the general type in bookingAvailability, unless these subEvents have [remainingCapacity](../docs/entry-api/events/booking-availability.md#the-bookingavailability-property) set.  &lt;!-- theme: warning --&gt;  &gt; Note that you cannot update the bookingAvailability of an event with [calendar type](/models/event-calendarType.json) &#x60;periodic&#x60; or &#x60;permanent&#x60;. For now, they can only have \&quot;Available\&quot; as bookingAvailability.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventBookingAvailabilityPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // EventBookingAvailability | New bookingAvailability to set on the event. (optional)
    eventBookingAvailability: {"type":"Available"},
  } satisfies EventBookingAvailabilityPutRequest;

  try {
    const data = await api.eventBookingAvailabilityPut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **eventBookingAvailability** | [EventBookingAvailability](EventBookingAvailability.md) | New bookingAvailability to set on the event. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The bookingAvailability has been updated successfully. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitdatabank/calendar-type-not-supported |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventBookingInfoPut

> eventBookingInfoPut(eventId, eventBookingInfo)

bookingInfo - update

Updates the bookingInfo for an event.  &lt;!-- theme: info --&gt;  &gt; There is no DELETE endpoint. To remove (specific) bookingInfo perform a PUT request with empty properties.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventBookingInfoPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // EventBookingInfo | New bookingInfo to set on the event. (optional)
    eventBookingInfo: {"phone":"+32/01234567890","email":"info@example.com","url":"https://www.example.com","urlLabel":{"nl":"Nederlandse tekst","fr":"Texte français","de":"Deutscher Text","en":"English text"},"availabilityStarts":"2021-05-17T22:00:00+00:00","availabilityEnds":"2021-05-17T22:00:00+00:00"},
  } satisfies EventBookingInfoPutRequest;

  try {
    const data = await api.eventBookingInfoPut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **eventBookingInfo** | [EventBookingInfo](EventBookingInfo.md) | New bookingInfo to set on the event. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The bookingInfo has been updated successfully.  |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventCalendarPut

> eventCalendarPut(eventId, eventCopiesPostRequest)

calendar - put

Updates the calendar information of the given &#x60;eventId&#x60;. The calendar information will be completely replaced with the new one.  The required properties depend on the &#x60;calendarType&#x60; property.  | calendarType  | required  | optional  | |---|---|---| | single  | subEvent\\[0\\].startDate, subEvent\\[0\\].endDate | subEvent\\[0\\].status, subEvent\\[0\\].bookingAvailability  | | multiple  | subEvent\\[\\*\\].startDate, subEvent[\\*\\].endDate  | subEvent\\[\\*\\].status, subEvent\\[\\*\\].bookingAvailability  | | periodic  | startDate, endDate  | openingHours, status, bookingAvailability  | | permanent  |   | openingHours, status, bookingAvailability  |  &lt;!-- theme: warning --&gt;  &gt; If &#x60;status&#x60; or &#x60;bookingAvailability&#x60; is missing on the event or a subEvent, it will default to &#x60;Available&#x60;. &gt; &gt; Although the status and bookingAvailability are optional they have a default value of &#x60;Available&#x60;. When the status and bookingAvailability is not provided an already set value will be overwritten to &#x60;Available&#x60;!  &lt;!-- theme: success --&gt;  &gt; You can use &#x60;single&#x60; and &#x60;multiple&#x60; interchangeably as long as you also include &#x60;subEvent&#x60; as well. The API will use the correct type based on the number of subEvents inside &#x60;subEvent&#x60;.  &lt;!-- theme: info --&gt;  &gt; This endpoint also supports a deprecated schema that uses &#x60;timeSpans&#x60; instead of &#x60;subEvent&#x60;. The &#x60;timeSpans&#x60; also have a slightly different structure than &#x60;subEvent&#x60;. For new integrations, it is recommended to use the schema with the &#x60;subEvent&#x60; property.  &gt;  &gt; For existing integrations the &#x60;timeSpans&#x60; property will be supported indefinitely for backward compatibility.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventCalendarPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // EventCopiesPostRequest | New calendar information. (optional)
    eventCopiesPostRequest: {"calendarType":"single","subEvent":[{"startDate":"2021-05-17T22:00:00+00:00","endDate":"2021-05-17T22:00:00+00:00","status":{"type":"Available"},"bookingAvailability":{"type":"Available"}}]},
  } satisfies EventCalendarPutRequest;

  try {
    const data = await api.eventCalendarPut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **eventCopiesPostRequest** | [EventCopiesPostRequest](EventCopiesPostRequest.md) | New calendar information. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The calendar information has been updated successfully. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventCalendarSummaryGet

> eventCalendarSummaryGet(eventId, style, size, language, hidePast, timezone, accept, langCode, format)

calendar summary - get

Returns a human-readable summary of the calendar information of the event. Can be configured to return either plain text or HTML, and to switch between four different formats depending on the amount of space you have to display it.  &gt; For backward compatibility this endpoint is also accessible at the old abbreviated &#x60;/events/{eventId}/calsum&#x60; path.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventCalendarSummaryGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new EventsApi();

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // 'text' | 'html' | Deprecated alternative to the `accept` header. Supported for backward compatibility. (optional)
    style: style_example,
    // 'xs' | 'sm' | 'md' | 'lg' | Defines the size of the summary. Larger summaries contain more detail for events with multiple dates/hours but will also take up more space when shown in a UI. We recommend to use the format `md` for the search results (and `lg` for events with calendarType single), and to always use `lg` for the detailpage. In some cases (e.g. mobile apps) calendar summary `xs` can be useful. (optional)
    size: size_example,
    // 'nl' | 'fr' | 'en' | 'de' | Defines the language that the summary will be written in. Also influences the date/time format used. (optional)
    language: language_example,
    // boolean | Will hide past dates in summaries of events with multiple dates. By default, past dates are not excluded from the calendar summary. (optional)
    hidePast: true,
    // string | The timezone to format date/times in. (optional)
    timezone: timezone_example,
    // 'text/plain' | 'text/html' | Indicates the expected content-type. Defaults to `text/plain` but can be set to `text/html` for a HTML response. (optional)
    accept: accept_example,
    // 'nl_BE' | 'fr_BE' | 'en_BE' | 'de_BE' | Deprecated alternative to the `language` query parameter. Supported for backward compatibility. (optional)
    langCode: langCode_example,
    // 'xs' | 'sm' | 'md' | 'lg' | Deprecated alternative to the `size` query parameter. Supported for backward compatibility. (optional)
    format: format_example,
  } satisfies EventCalendarSummaryGetRequest;

  try {
    const data = await api.eventCalendarSummaryGet(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **style** | `text`, `html` | Deprecated alternative to the &#x60;accept&#x60; header. Supported for backward compatibility. | [Optional] [Defaults to `&#39;text&#39;`] [Enum: text, html] |
| **size** | `xs`, `sm`, `md`, `lg` | Defines the size of the summary. Larger summaries contain more detail for events with multiple dates/hours but will also take up more space when shown in a UI. We recommend to use the format &#x60;md&#x60; for the search results (and &#x60;lg&#x60; for events with calendarType single), and to always use &#x60;lg&#x60; for the detailpage. In some cases (e.g. mobile apps) calendar summary &#x60;xs&#x60; can be useful. | [Optional] [Defaults to `&#39;lg&#39;`] [Enum: xs, sm, md, lg] |
| **language** | `nl`, `fr`, `en`, `de` | Defines the language that the summary will be written in. Also influences the date/time format used. | [Optional] [Defaults to `&#39;nl&#39;`] [Enum: nl, fr, en, de] |
| **hidePast** | `boolean` | Will hide past dates in summaries of events with multiple dates. By default, past dates are not excluded from the calendar summary. | [Optional] [Defaults to `false`] |
| **timezone** | `string` | The timezone to format date/times in. | [Optional] [Defaults to `&#39;Europe/Brussels&#39;`] |
| **accept** | `text/plain`, `text/html` | Indicates the expected content-type. Defaults to &#x60;text/plain&#x60; but can be set to &#x60;text/html&#x60; for a HTML response. | [Optional] [Defaults to `undefined`] [Enum: text/plain, text/html] |
| **langCode** | `nl_BE`, `fr_BE`, `en_BE`, `de_BE` | Deprecated alternative to the &#x60;language&#x60; query parameter. Supported for backward compatibility. | [Optional] [Defaults to `undefined`] [Enum: nl_BE, fr_BE, en_BE, de_BE] |
| **format** | `xs`, `sm`, `md`, `lg` | Deprecated alternative to the &#x60;size&#x60; query parameter. Supported for backward compatibility. | [Optional] [Defaults to `undefined`] [Enum: xs, sm, md, lg] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The calendar summary in either plain text or HTML.  For example: &#x60;&#x60;&#x60; Van 6 januari 2021 tot 23 juni 2021 (geannuleerd) &#x60;&#x60;&#x60;  Or: &#x60;&#x60;&#x60; &lt;span class&#x3D;\\\&quot;cf-from cf-meta\\\&quot;&gt;Van&lt;/span&gt; &lt;span class&#x3D;\\\&quot;cf-date\\\&quot;&gt;6 januari 2021&lt;/span&gt; &lt;span class&#x3D;\\\&quot;cf-to cf-meta\\\&quot;&gt;tot&lt;/span&gt; &lt;span class&#x3D;\\\&quot;cf-date\\\&quot;&gt;23 juni 2021&lt;/span&gt; &lt;span title&#x3D;\\\&quot;Deze activiteit is waarschijnlijk geannuleerd omwille van preventieve coronamaatregelen.\\\&quot; class&#x3D;\\\&quot;cf-status\\\&quot;&gt;(geannuleerd)&lt;/span&gt; &#x60;&#x60;&#x60; |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventContactPointPut

> eventContactPointPut(eventId, commonOfferContactPoint)

contactPoint - update

Updates the contact point information of the event with the given &#x60;eventId&#x60;.  &lt;!-- theme: info --&gt;  &gt; There is no DELETE endpoint. To remove contact information perform a PUT request with empty properties.  &lt;!-- theme: warning --&gt;  &gt; Unlike [&#x60;PUT /organizers/{organizerId}/contact-point&#x60;](./entry.json/paths/~1organizers~1{organizerId}~1contact-point/put), all properties are required. There is also no partial updating.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventContactPointPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // CommonOfferContactPoint | The contact point properties to set on the event. (optional)
    commonOfferContactPoint: ...,
  } satisfies EventContactPointPutRequest;

  try {
    const data = await api.eventContactPointPut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **commonOfferContactPoint** | [CommonOfferContactPoint](CommonOfferContactPoint.md) | The contact point properties to set on the event. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The contactPoint has been successfully updated. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventCopiesPost

> EventCopiesPost201Response eventCopiesPost(eventId, eventCopiesPostRequest)

event - copy

Creates a new event based on all the properties of an existing event with the given &#x60;eventId&#x60;. Only the calendar information will be completely replaced with a new one, which has to be included in the request body.  The schema of the request body is the same as the one for the [&#x60;PUT /events/{eventId}/calendar&#x60;](/reference/entry.json/paths/~1events~1{eventId}~1calendar/put) endpoint.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventCopiesPostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // EventCopiesPostRequest | New calendar information for the event copy. (optional)
    eventCopiesPostRequest: {"calendarType":"single","subEvent":[{"startDate":"2021-05-17T22:00:00+00:00","endDate":"2021-05-17T22:00:00+00:00","status":{"type":"Available"},"bookingAvailability":{"type":"Available"}}]},
  } satisfies EventCopiesPostOperationRequest;

  try {
    const data = await api.eventCopiesPost(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **eventCopiesPostRequest** | [EventCopiesPostRequest](EventCopiesPostRequest.md) | New calendar information for the event copy. | [Optional] |

### Return type

[**EventCopiesPost201Response**](EventCopiesPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The event was copied successfully. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventDelete

> eventDelete(eventId)

event - delete

Does a soft-delete of the event. The event will continue to exist but it\&#39;s &#x60;workflowStatus&#x60; will be changed to &#x60;DELETED&#x60;. This will remove it from all publication channels.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
  } satisfies EventDeleteRequest;

  try {
    const data = await api.eventDelete(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The event\&#39;s &#x60;workflowStatus&#x60; was successfully updated to &#x60;DELETED&#x60;. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventDeparturePlacesPut

> eventDeparturePlacesPut(eventId, requestBody)

departurePlaces - update

Replaces the list of departure places on the event.  Departure places are schools or other locations from which transport is arranged to bring children to the event (e.g. a walk, a bus, or a bicycle taxi).  Passing an empty array &#x60;[]&#x60; removes all departure places from the event.  **Validation rules:**  * The event\&#39;s &#x60;audienceType&#x60; must be &#x60;childrenOnly&#x60;. Returns a &#x60;400&#x60; error if the audience type does not match. * Each URI must reference an existing place in UiTdatabank. Returns a &#x60;400&#x60; error listing the non-existent places.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventDeparturePlacesPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // Array<string> | New list of departure places to set on the event. Departure places previously set on the event but not included in this list will be removed. (optional)
    requestBody: ["https://io-test.uitdatabank.be/places/85b04295-479c-40f5-b3dd-469dfb4387b3","https://io-test.uitdatabank.be/places/5cf42d51-3a4f-46f0-a8af-1cf672be8c84"],
  } satisfies EventDeparturePlacesPutRequest;

  try {
    const data = await api.eventDeparturePlacesPut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **requestBody** | `Array<string>` | New list of departure places to set on the event. Departure places previously set on the event but not included in this list will be removed. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The departure places have been successfully updated. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventDescriptionDelete

> eventDescriptionDelete(eventId, language)

description - delete

Deletes the localized description of an event based on the given &#x60;eventId&#x60; and &#x60;language&#x60; inside the URL.   &lt;!-- theme: info --&gt;

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventDescriptionDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // 'nl' | 'fr' | 'en' | 'de' | The language of the request body properties
    language: language_example,
  } satisfies EventDescriptionDeleteRequest;

  try {
    const data = await api.eventDescriptionDelete(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **language** | `nl`, `fr`, `en`, `de` | The language of the request body properties | [Defaults to `undefined`] [Enum: nl, fr, en, de] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The description was successfully deleted. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventDescriptionPut

> eventDescriptionPut(eventId, language, eventDescriptionPut)

description - update

Updates the localized description of an event based on the given &#x60;eventId&#x60; and &#x60;language&#x60; inside the URL. The description is not limited in size, but it is recommended to use the first 200 characters of the description for promotional copy as these characters are visible in the list-view of results.  &lt;!-- theme: info --&gt;  &gt; Keep in mind:  &gt; - The description should be UTF-8 encoded  &gt; - Linebreaks are encoded as &#x60;\\n&#x60;  

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventDescriptionPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // 'nl' | 'fr' | 'en' | 'de' | The language of the request body properties
    language: language_example,
    // EventDescriptionPut | The new description of the event. (optional)
    eventDescriptionPut: ...,
  } satisfies EventDescriptionPutRequest;

  try {
    const data = await api.eventDescriptionPut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **language** | `nl`, `fr`, `en`, `de` | The language of the request body properties | [Defaults to `undefined`] [Enum: nl, fr, en, de] |
| **eventDescriptionPut** | [EventDescriptionPut](EventDescriptionPut.md) | The new description of the event. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The description was successfully updated. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventFacilitiesPut

> eventFacilitiesPut(eventId, requestBody)

facilities - update

Updates the list of available (accessibility) facilities on the event. These will show up in the [event\&#39;s &#x60;terms&#x60;](/models/event-terms.json).  A list of possible facilities can be found using our [guide about taxonomy terms](../docs/taxonomy-api/terms.md).  **Note**: A special permission is required to update an event\&#39;s facilities in UiTdatabank, even if you are the event owner. Contact an administrator for further information.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventFacilitiesPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // Array<string> | New list of facilities to set on the event. Facilities previously set on the event but not included in this list will be removed from the event. Other terms will be preserved. (optional)
    requestBody: ["3.13.2.0.0","3.23.2.0.0"],
  } satisfies EventFacilitiesPutRequest;

  try {
    const data = await api.eventFacilitiesPut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **requestBody** | `Array<string>` | New list of facilities to set on the event. Facilities previously set on the event but not included in this list will be removed from the event. Other terms will be preserved. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The facilities have been successfully updated. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventFaqsPut

> eventFaqsPut(eventId, faq)

faqs - update

Updates the FAQs of an event. FAQs previously set on the event, but not included in this list will be removed.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventFaqsPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // Array<Faq> | New list of FAQ items to set on the event. (optional)
    faq: [{"nl":{"question":"Hoe geraak ik er?","answer":"Met de bus."},"en":{"question":"How do I get there?","answer":"By bus."}}],
  } satisfies EventFaqsPutRequest;

  try {
    const data = await api.eventFaqsPut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **faq** | `Array<Faq>` | New list of FAQ items to set on the event. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The event\&#39;s FAQ was successfully updated. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventGet

> EventWithReadExample eventGet(eventId)

event - get

Returns the details of the event for the given &#x60;eventId&#x60;.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new EventsApi();

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
  } satisfies EventGetRequest;

  try {
    const data = await api.eventGet(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |

### Return type

[**EventWithReadExample**](EventWithReadExample.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Event details. |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventImageDelete

> eventImageDelete(eventId, imageId)

images - delete

Removes the image with the given &#x60;imageId&#x60; from the event\&#39;s &#x60;mediaObject&#x60; property.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventImageDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // string | The unique uuid of an already uploaded image.
    imageId: 365f99a4-5490-4313-8ee9-adebea2dceb0,
  } satisfies EventImageDeleteRequest;

  try {
    const data = await api.eventImageDelete(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **imageId** | `string` | The unique uuid of an already uploaded image. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The image has been successfully removed from the event. |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventImagePut

> eventImagePut(eventId, imageId, eventImagePut)

images - update

Updates the metadata of an image on an event.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventImagePutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // string | The unique uuid of an already uploaded image.
    imageId: 365f99a4-5490-4313-8ee9-adebea2dceb0,
    // EventImagePut | The metadata to update on the image. (optional)
    eventImagePut: {"description":"Picture of the last publiq event","copyrightHolder":"publiq"},
  } satisfies EventImagePutRequest;

  try {
    const data = await api.eventImagePut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **imageId** | `string` | The unique uuid of an already uploaded image. | [Defaults to `undefined`] |
| **eventImagePut** | [EventImagePut](EventImagePut.md) | The metadata to update on the image. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The image metadata was updated. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventImagesPost

> eventImagesPost(eventId, eventImagePost)

images - add

Adds an image to an event. To upload an image, use the [&#x60;POST /images&#x60;](./entry.json/paths/~1images/post) endpoint.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventImagesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // EventImagePost | The image to add to an event. (optional)
    eventImagePost: {"mediaObjectId":"546a90cd-a238-417b-aa98-1b6c50c1345c"},
  } satisfies EventImagesPostRequest;

  try {
    const data = await api.eventImagesPost(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **eventImagePost** | [EventImagePost](EventImagePost.md) | The image to add to an event. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The image was added to the event. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventImportNew

> EventPost201Response eventImportNew(eventPost)

event - import (create)

Creates a new event via the historical &#x60;/imports/events&#x60; URL.  &lt;!-- theme: danger --&gt;  &gt; This operation is deprecated and should not be used in new integrations. Use the [&#x60;POST /events&#x60;](./entry.json/paths/~1events/post) operation instead to create new events. &gt; &gt; Both operations accept the same JSON bodies nowadays, and support creating events with only the required properties or with additional optional properties. &gt; &gt; The only difference is that the default &#x60;workflowStatus&#x60; for events created via [&#x60;POST /events&#x60;](./entry.json/paths/~1events/post) is &#x60;DRAFT&#x60;, while new events created via this &#x60;POST /imports/events&#x60; operation will have the default workflowStatus &#x60;READY_FOR_VALIDATION&#x60; for backward compatibility with historical integrations. &gt; &gt; If you want your new events to also have the workflowStatus &#x60;READY_FOR_VALIDATION&#x60;, you can use the [&#x60;POST /events&#x60;](./entry.json/paths/~1events/post) operation and explicitly set the &#x60;workflowStatus&#x60; property in your JSON body to &#x60;READY_FOR_VALIDATION&#x60;.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventImportNewRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // EventPost | The complete details of the new event to create. The schema of the event is the same as the response of the [`GET /events/{eventId}`](./entry.json/paths/~1events~1{eventId}/get) operation. (optional)
    eventPost: ...,
  } satisfies EventImportNewRequest;

  try {
    const data = await api.eventImportNew(body);
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
| **eventPost** | [EventPost](EventPost.md) | The complete details of the new event to create. The schema of the event is the same as the response of the [&#x60;GET /events/{eventId}&#x60;](./entry.json/paths/~1events~1{eventId}/get) operation. | [Optional] |

### Return type

[**EventPost201Response**](EventPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The event was successfully created. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventImportUpdate

> EventPut200Response eventImportUpdate(eventId, eventWithWriteExample)

event - import (update)

Updates the event via the historical &#x60;/imports/events/{eventId}&#x60; URL by completely overwriting it with the properties in the given JSON.   &lt;!-- theme: danger --&gt;  &gt; This operation is deprecated and should not be used in new integrations. Use the [&#x60;PUT /events/{eventId}&#x60;](./entry.json/paths/~1events~1{eventId}/put) operation instead to update existing events, which accepts exactly the same JSON body.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventImportUpdateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // EventWithWriteExample | The complete details of the event to update. The schema of the event is the same as the response of the [`GET /events/{eventId}`](./entry.json/paths/~1events~1{eventId}/get) operation. (optional)
    eventWithWriteExample: ...,
  } satisfies EventImportUpdateRequest;

  try {
    const data = await api.eventImportUpdate(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **eventWithWriteExample** | [EventWithWriteExample](EventWithWriteExample.md) | The complete details of the event to update. The schema of the event is the same as the response of the [&#x60;GET /events/{eventId}&#x60;](./entry.json/paths/~1events~1{eventId}/get) operation. | [Optional] |

### Return type

[**EventPut200Response**](EventPut200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The event was updated successfully |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventLabelsAdd

> eventLabelsAdd(eventId, labelName)

labels - add

Adds the given label to the event with the given &#x60;eventId&#x60;.  If the specified label does not exist yet in UiTdatabank a new label will be created with default visibility and public permissions (usable by anyone), and linked to the event.  The label must be longer than 1 character and shorter than 255 characters. The label can also not contain the semicolon character. It should match the regex &#x60;^(?&#x3D;.{2,255}$)(?&#x3D;.*\\S.*\\S.*)[^;]*$&#x60;

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventLabelsAddRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // string | The label to add to an event, place or organizer. The label name should be longer than 1 character but shorter than 255 characters. The label name should not contain semicolons.
    labelName: MyLabel,
  } satisfies EventLabelsAddRequest;

  try {
    const data = await api.eventLabelsAdd(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **labelName** | `string` | The label to add to an event, place or organizer. The label name should be longer than 1 character but shorter than 255 characters. The label name should not contain semicolons. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The label has been added successfully. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventLabelsDelete

> eventLabelsDelete(eventId, labelName)

labels - delete

Deletes a label from the &#x60;labels&#x60; or &#x60;hiddenLabels&#x60; property on an event based on the event id, the label name, and the label\&#39;s visibility.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventLabelsDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // string | The label to add to an event, place or organizer. The label name should be longer than 1 character but shorter than 255 characters. The label name should not contain semicolons.
    labelName: MyLabel,
  } satisfies EventLabelsDeleteRequest;

  try {
    const data = await api.eventLabelsDelete(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **labelName** | `string` | The label to add to an event, place or organizer. The label name should be longer than 1 character but shorter than 255 characters. The label name should not contain semicolons. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The label was deleted from the event. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventLocationPut

> eventLocationPut(eventId, placeId)

location - update

Updates the event\&#39;s location to a new place based on the given &#x60;eventId&#x60; and &#x60;placeId&#x60; in the URL.  If the &#x60;eventId&#x60; does not exist a &#x60;404 Not Found&#x60; response will be returned. If the &#x60;placeId&#x60; does not exist a &#x60;400 Bad Request&#x60; response will be returned. Otherwise a &#x60;204 No Content&#x60; will be returned if successful. (See response examples below.)

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventLocationPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
  } satisfies EventLocationPutRequest;

  try {
    const data = await api.eventLocationPut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitdatabank/attendance-mode-not-supported |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventMainImagePut

> eventMainImagePut(eventId, eventMainImagePut)

images main - update

Updates the main image of an event. The main image is the only image shown in search-result listviews and the image more prominently displayed on event-details, when the event has multiple images.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventMainImagePutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // EventMainImagePut | The id of the image to set as main image on the event. (optional)
    eventMainImagePut: ...,
  } satisfies EventMainImagePutRequest;

  try {
    const data = await api.eventMainImagePut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **eventMainImagePut** | [EventMainImagePut](EventMainImagePut.md) | The id of the image to set as main image on the event. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The main image was updated. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventMajorInfoPut

> eventMajorInfoPut(eventId, eventMajorInfoPutRequest)

major-info - update

&lt;!-- theme: danger --&gt;  &gt; The major-info endpoint is deprecated and should not be used in new integrations!  Updates the \&quot;major info\&quot; of the event with the given &#x60;eventId&#x60;.  The major info contains:  * &#x60;name&#x60;: The name of the event in the event\&#39;s &#x60;mainLanguage&#x60;, as a string * &#x60;type&#x60;: Id of the event\&#39;s &#x60;eventtype&#x60; taxonomy &#x60;term&#x60;, as a string * &#x60;theme&#x60; (optional): Id of the event\&#39;s &#x60;theme&#x60; taxonomy &#x60;term&#x60;, as a string * &#x60;location&#x60;: Object with the id of the event\&#39;s location, as a place\&#39;s uuid (string) * &#x60;calendar&#x60;: Object with the event\&#39;s calendar information (see schema below)  All properties are required (except for &#x60;theme&#x60;) and will overwrite existing values of these properties on the event. If the event has a &#x60;theme&#x60; &#x60;term&#x60; before this update, but there is no &#x60;theme&#x60; in this major-info update, the &#x60;theme&#x60; will be removed.  &lt;!-- theme: success --&gt; &gt; For backward-compatibility with older integrations, this operation can also be requested via &#x60;POST /event/{eventId}/major-info&#x60;.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventMajorInfoPutOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // EventMajorInfoPutRequest | All required fields for an event (whether they have been updated or not). (optional)
    eventMajorInfoPutRequest: {"name":"Single day example","type":"0.50.4.0.0","theme":"1.8.3.3.0","location":{"id":"DA5499B2-9C79-48D3-A02D-8F471308100D"},"calendar":{"calendarType":"single","timeSpans":[{"start":"2021-05-17T22:00:00+00:00","end":"2021-05-17T22:00:00+00:00","status":{"type":"Available"},"bookingAvailability":{"type":"Available"}}]}},
  } satisfies EventMajorInfoPutOperationRequest;

  try {
    const data = await api.eventMajorInfoPut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **eventMajorInfoPutRequest** | [EventMajorInfoPutRequest](EventMajorInfoPutRequest.md) | All required fields for an event (whether they have been updated or not). | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The major-info has been updated successfully. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventNamePut

> eventNamePut(eventId, language, eventNamePut)

name - update

Updates the localized name of an event based on the given &#x60;eventId&#x60; and &#x60;language&#x60; inside the URL.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventNamePutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // 'nl' | 'fr' | 'en' | 'de' | The language of the request body properties
    language: language_example,
    // EventNamePut | The new name of the event. (optional)
    eventNamePut: ...,
  } satisfies EventNamePutRequest;

  try {
    const data = await api.eventNamePut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **language** | `nl`, `fr`, `en`, `de` | The language of the request body properties | [Defaults to `undefined`] [Enum: nl, fr, en, de] |
| **eventNamePut** | [EventNamePut](EventNamePut.md) | The new name of the event. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The name was successfully updated. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventOnlineUrlDelete

> eventOnlineUrlDelete(eventId)

onlineUrl - delete

Delete the onlineUrl of an event.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventOnlineUrlDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
  } satisfies EventOnlineUrlDeleteRequest;

  try {
    const data = await api.eventOnlineUrlDelete(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The onlineUrl was successfully deleted. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventOnlineUrlPut

> eventOnlineUrlPut(eventId, eventOnlineUrlPut)

onlineUrl - update

Updates the online url of an event. Only events with attendance mode &#x60;online&#x60; or &#x60;mixed&#x60; can have an online url.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventOnlineUrlPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // EventOnlineUrlPut | New onlineUrl to set on the event. (optional)
    eventOnlineUrlPut: {"onlineUrl":"https://www.publiq.be/livestream"},
  } satisfies EventOnlineUrlPutRequest;

  try {
    const data = await api.eventOnlineUrlPut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **eventOnlineUrlPut** | [EventOnlineUrlPut](EventOnlineUrlPut.md) | New onlineUrl to set on the event. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The onlineUrl was successfully updated. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventOrganizerDelete

> eventOrganizerDelete(eventId, organizerId)

organizer - delete

Deletes the organizer of the event with the given &#x60;eventId&#x60;.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventOrganizerDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // string | Unique id of an organizer, in the format of a UUID
    organizerId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
  } satisfies EventOrganizerDeleteRequest;

  try {
    const data = await api.eventOrganizerDelete(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **organizerId** | `string` | Unique id of an organizer, in the format of a UUID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The organizer has been deleted successfully. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventOrganizerUpdate

> eventOrganizerUpdate(eventId, organizerId)

organizer - update

Updates the organizer of the event with the given &#x60;eventId&#x60;. A list of organizers can be found using our [guide about finding existing organizers](/docs/entry-api/organizers/finding-and-reusing-organizers.md).  &lt;!-- theme: info --&gt;  &gt; An organizer is not required on an event, and it can only have one.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventOrganizerUpdateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // string | Unique id of an organizer, in the format of a UUID
    organizerId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
  } satisfies EventOrganizerUpdateRequest;

  try {
    const data = await api.eventOrganizerUpdate(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **organizerId** | `string` | Unique id of an organizer, in the format of a UUID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The organizer has been updated successfully. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventPost

> EventPost201Response eventPost(eventPost)

event - create

Creates a new event with the required properties and any additional optional properties.  By default, the new event will be editable and removable by the user or client that the access token used to perform this request belongs to. If you use a user access token, the user for which the token was obtained will see the new event in their dashboard in UiTdatabank and will be able to edit or remove it. If you use a client access token, only API requests with a token for the same client will be able to edit or remove it.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // EventPost | The complete details of the new event to create. The schema of the event is the same as the response of the [`GET /events/{eventId}`](./entry.json/paths/~1events~1{eventId}/get) operation.  This request also supports an older deprecated schema that was used to create an event with just its required fields. If you have an existing integration that still uses this schema, you can view it by switching from the `event` schema to `event.post (deprecated)` below. (optional)
    eventPost: ...,
  } satisfies EventPostRequest;

  try {
    const data = await api.eventPost(body);
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
| **eventPost** | [EventPost](EventPost.md) | The complete details of the new event to create. The schema of the event is the same as the response of the [&#x60;GET /events/{eventId}&#x60;](./entry.json/paths/~1events~1{eventId}/get) operation.  This request also supports an older deprecated schema that was used to create an event with just its required fields. If you have an existing integration that still uses this schema, you can view it by switching from the &#x60;event&#x60; schema to &#x60;event.post (deprecated)&#x60; below. | [Optional] |

### Return type

[**EventPost201Response**](EventPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The event was successfully created. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventPriceInfoPut

> eventPriceInfoPut(eventId, eventPriceInfoInner)

priceInfo - update

Updates the price info of an event.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventPriceInfoPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // Array<EventPriceInfoInner> | New priceInfo to set on the event. (optional)
    eventPriceInfoInner: [{"category":"base","price":10.5,"priceCurrency":"EUR","name":{"nl":"Basistarief","fr":"Tarif de base","en":"Base tariff","de":"Basisrate"}}],
  } satisfies EventPriceInfoPutRequest;

  try {
    const data = await api.eventPriceInfoPut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **eventPriceInfoInner** | `Array<EventPriceInfoInner>` | New priceInfo to set on the event. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The priceInfo was successfully updated. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventPut

> EventPut200Response eventPut(eventId, eventWithWriteExample)

event - update

Updates the event with the given &#x60;eventId&#x60; by completely overwriting it with the properties in the given JSON.   &lt;!-- theme: danger --&gt;  &gt; Any existing optional properties on the event that are not included in the update request will be removed from the event when updating the event via this operation. &gt; &gt; As an exception, some existing &#x60;labels&#x60; or &#x60;hiddenLabels&#x60; may be kept on the event even if they are not included in the update request. For example if they were added via the UiTdatabank UI, or if the client or user making the request does not have sufficient permission to remove some specific labels.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // EventWithWriteExample | The complete details of the event to update. The schema of the event is the same as the response of the [`GET /events/{eventId}`](./entry.json/paths/~1events~1{eventId}/get) operation. (optional)
    eventWithWriteExample: ...,
  } satisfies EventPutRequest;

  try {
    const data = await api.eventPut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **eventWithWriteExample** | [EventWithWriteExample](EventWithWriteExample.md) | The complete details of the event to update. The schema of the event is the same as the response of the [&#x60;GET /events/{eventId}&#x60;](./entry.json/paths/~1events~1{eventId}/get) operation. | [Optional] |

### Return type

[**EventPut200Response**](EventPut200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The event was updated successfully |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventStatusPut

> eventStatusPut(eventId, eventStatus)

status - update

Updates the general status on the top level of the event with the given &#x60;eventId&#x60;.  The status of any subEvents that the event has will also be updated to match the general status.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventStatusPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // EventStatus | New status to set on the event. (optional)
    eventStatus: {type=Available},
  } satisfies EventStatusPutRequest;

  try {
    const data = await api.eventStatusPut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **eventStatus** | [EventStatus](EventStatus.md) | New status to set on the event. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The status has been updated successfully. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitdatabank/calendar-type-not-supported |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventSubEventPatch

> eventSubEventPatch(eventId, eventSubEventPatchInner)

subEvent - patch

Updates the given subEvents on the event with the given &#x60;eventId&#x60;.  Allows partial updates, omitted properties will be ignored and remain unchanged. Omitted subEvents will also remain unchanged.  Every subEvent to update requires an &#x60;id&#x60; property that is an integer that corresponds to their index in the list of subEvents on the parent event. For example &#x60;0&#x60; for the first subEvent, &#x60;1&#x60; for the second subEvent, and so on.  &lt;!-- theme: warning --&gt;  &gt; Note! If you change the &#x60;startDate&#x60; of a subEvent, the subEvents will be re-ordered on the parent event afterwards because subEvents are always sorted chronologically.  Only events with calendar type &#x60;single&#x60; and &#x60;multiple&#x60; have subEvents, so only events with those calendar types support this endpoint.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventSubEventPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // Array<EventSubEventPatchInner> | The subEvents to update, with the properties to update.   Each subEvent must have an `id` property to indicate which subEvent should be updated. This `id` is the position of the subEvent in the list of subEvents on the parent event. For example `0` for the first subEvent, `1` for the second subEvent, and so on.  All other properties are optional, and only properties that are included will be updated. No subEvents or properties will be removed. (optional)
    eventSubEventPatchInner: [{"id":0,"startDate":"2021-05-17T22:00:00+00:00","endDate":"2021-05-17T22:00:00+00:00"}],
  } satisfies EventSubEventPatchRequest;

  try {
    const data = await api.eventSubEventPatch(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **eventSubEventPatchInner** | `Array<EventSubEventPatchInner>` | The subEvents to update, with the properties to update.   Each subEvent must have an &#x60;id&#x60; property to indicate which subEvent should be updated. This &#x60;id&#x60; is the position of the subEvent in the list of subEvents on the parent event. For example &#x60;0&#x60; for the first subEvent, &#x60;1&#x60; for the second subEvent, and so on.  All other properties are optional, and only properties that are included will be updated. No subEvents or properties will be removed. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The subEvents have been updated successfully. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitdatabank/calendar-type-not-supported |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventTermsEventtypePut

> eventTermsEventtypePut(eventId, termId)

terms &gt; eventtype - update

Updates the event\&#39;s type (examples of types are &#x60;Concert&#x60;, &#x60;Opendeurdag&#x60;, &#x60;Lessenreeks&#x60;, and so on) based on the given &#x60;eventId&#x60; and &#x60;termId&#x60;.  Terms are pre-defined and can be found using our [guide about taxonomy terms](../docs/taxonomy-api/terms.md). Only terms from the &#x60;eventtype&#x60; domain can be used as event types.  If the &#x60;eventId&#x60; does not exist a &#x60;404 Not Found&#x60; will be returned. If the &#x60;termId&#x60; does not exist or is not a term in the &#x60;eventtype&#x60; domain, a &#x60;400 Bad Request&#x60; will be returned. If the request is successful a &#x60;204 No Content&#x60; will be returned.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventTermsEventtypePutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // string | Unique id of a taxonomy term. Taxonomy terms are pre-defined and can be found using our [guide about taxonomy terms](../docs/taxonomy-api/terms.md).
    termId: termId_example,
  } satisfies EventTermsEventtypePutRequest;

  try {
    const data = await api.eventTermsEventtypePut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **termId** | `string` | Unique id of a taxonomy term. Taxonomy terms are pre-defined and can be found using our [guide about taxonomy terms](../docs/taxonomy-api/terms.md). | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventTermsThemeDelete

> eventTermsThemeDelete(eventId)

terms &gt; theme - delete

Deletes the event\&#39;s current theme based on the given &#x60;eventId&#x60;.  If the &#x60;eventId&#x60; does not exist a &#x60;404 Not Found&#x60; will be returned. If the request is successful a &#x60;204 No Content&#x60; will be returned.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventTermsThemeDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
  } satisfies EventTermsThemeDeleteRequest;

  try {
    const data = await api.eventTermsThemeDelete(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventTermsThemePut

> eventTermsThemePut(eventId, termId)

terms &gt; theme - update

Updates the event\&#39;s theme (examples of themes are &#x60;Audiovisuele kunst&#x60;, &#x60;Moderne dans&#x60;, &#x60;Actie en avontuur&#x60;, and so on) based on the given &#x60;eventId&#x60; and &#x60;termId&#x60;.  Terms are pre-defined and can be found using our [guide about taxonomy terms](../docs/taxonomy-api/terms.md). Only terms from the &#x60;theme&#x60; domain can be used as theme.  If the &#x60;eventId&#x60; does not exist a &#x60;404 Not Found&#x60; will be returned. If the &#x60;termId&#x60; does not exist or is not a term in the &#x60;theme&#x60; domain, a &#x60;400 Bad Request&#x60; will be returned. If the request is successful a &#x60;204 No Content&#x60; will be returned.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventTermsThemePutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // string | Unique id of a taxonomy term. Taxonomy terms are pre-defined and can be found using our [guide about taxonomy terms](../docs/taxonomy-api/terms.md).
    termId: termId_example,
  } satisfies EventTermsThemePutRequest;

  try {
    const data = await api.eventTermsThemePut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **termId** | `string` | Unique id of a taxonomy term. Taxonomy terms are pre-defined and can be found using our [guide about taxonomy terms](../docs/taxonomy-api/terms.md). | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventTypicalAgeRangeDelete

> eventTypicalAgeRangeDelete(eventId)

typicalAgeRange - delete

Deletes the age range from an event.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventTypicalAgeRangeDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
  } satisfies EventTypicalAgeRangeDeleteRequest;

  try {
    const data = await api.eventTypicalAgeRangeDelete(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The age range was successfully deleted. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventTypicalAgeRangePut

> eventTypicalAgeRangePut(eventId, eventTypicalAgeRangePut)

typicalAgeRange - update

Updates the age range of the event with the given &#x60;eventId&#x60;.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventTypicalAgeRangePutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // EventTypicalAgeRangePut | The age range to set on the event. (optional)
    eventTypicalAgeRangePut: {"typicalAgeRange":"-"},
  } satisfies EventTypicalAgeRangePutRequest;

  try {
    const data = await api.eventTypicalAgeRangePut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **eventTypicalAgeRangePut** | [EventTypicalAgeRangePut](EventTypicalAgeRangePut.md) | The age range to set on the event. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The age range was successfully updated. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventVideosDelete

> eventVideosDelete(eventId, videoId)

videos - delete

Delete an embedded video from an event based on the event id and the video id.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventVideosDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // string | Unique id of a video embedded in a place or event, in the format of a UUID
    videoId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
  } satisfies EventVideosDeleteRequest;

  try {
    const data = await api.eventVideosDelete(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **videoId** | `string` | Unique id of a video embedded in a place or event, in the format of a UUID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The video was deleted from the event. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventVideosPatch

> eventVideosPatch(eventId, eventVideosPatchInner)

videos - patch

Update one or more videos of an event.  The video object(s) must contain  * &#x60;id&#x60;: The id of the video object to be changed.  The video object(s) can contain:  * &#x60;url&#x60;: The full URL of the video. Currently only *Vimeo* and *Youtube* are supported as video source locations. * &#x60;language&#x60;: The updated language of a video * &#x60;copyrightHolder&#x60;: The copyright holder of the video material. Although this field is optional it is strongly recommended to add a reference to the entity owning the rights on the video material.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventVideosPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // Array<EventVideosPatchInner> | An array of videos to be changed. (optional)
    eventVideosPatchInner: [{"id":"46e9ea9f-fc42-4759-a81b-4308467b7c35","url":"https://www.youtube.com/watch?v=cEItmb_a20D","copyrightHolder":"publiq"},{"id":"b504cf44-9ab8-4641-9934-38d1cc67242c","language":"fr"}],
  } satisfies EventVideosPatchRequest;

  try {
    const data = await api.eventVideosPatch(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **eventVideosPatchInner** | `Array<EventVideosPatchInner>` | An array of videos to be changed. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The videos are updated. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventVideosPost

> EventVideosPost200Response eventVideosPost(eventId, eventVideosPost)

videos - add

Add a video as a URL reference to an event  The video objects contains:  * &#x60;url&#x60;: The full URL of the video. Currently only *Vimeo* and *Youtube* are supported as video source locations. * &#x60;copyrightHolder&#x60;: The copyright holder of the video material. Although this field is optional it is strongly recommended to add a reference to the entity owning the rights on the video material.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventVideosPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // EventVideosPost | The new video to add to an event. (optional)
    eventVideosPost: {"url":"https://www.youtube.com/watch?v=cEItmb_a20D","language":"nl","copyrightHolder":"publiq"},
  } satisfies EventVideosPostRequest;

  try {
    const data = await api.eventVideosPost(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **eventVideosPost** | [EventVideosPost](EventVideosPost.md) | The new video to add to an event. | [Optional] |

### Return type

[**EventVideosPost200Response**](EventVideosPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The video was added to the event. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eventWorkflowStatusPut

> eventWorkflowStatusPut(eventId, eventWorkflowStatusPut)

workflowStatus - update

Updates the workflow status of an event. Possible statuses are:  - &#x60;DRAFT&#x60;: The default status of new events. Events with this status do not appear in online calendars like &lt;https://www.uitinvlaanderen.be&gt; or the search on &lt;https://www.uitdatabank.be&gt; - &#x60;READY_FOR_VALIDATION&#x60;: This status means the event has been published, but not approved yet. Most online calendars will already show it, and it will appear in the search on &lt;https://www.uitdatabank.be&gt; - &#x60;APPROVED&#x60;: The event has been approved by a moderator. It will appear on all online calendars. You cannot set this status unless you have moderation permissions. - &#x60;REJECTED&#x60;: The event has been rejected by a moderator. It will not appear on any online calendars. You cannot set this status unless you have moderation permissions. - &#x60;DELETED&#x60;: The event has been deleted. It will not appear on any online calendars.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '';
import type { EventWorkflowStatusPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | Unique id of an event, in the format of a UUID
    eventId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // EventWorkflowStatusPut | New workflowStatus to set on the event. Depending on the new workflowStatus, other properties may/must be set as well. (optional)
    eventWorkflowStatusPut: ...,
  } satisfies EventWorkflowStatusPutRequest;

  try {
    const data = await api.eventWorkflowStatusPut(body);
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
| **eventId** | `string` | Unique id of an event, in the format of a UUID | [Defaults to `undefined`] |
| **eventWorkflowStatusPut** | [EventWorkflowStatusPut](EventWorkflowStatusPut.md) | New workflowStatus to set on the event. Depending on the new workflowStatus, other properties may/must be set as well. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content. The workflowStatus was successfully updated. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

