# PlacesApi

All URIs are relative to *https://io-test.uitdatabank.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**placeAddressPut**](PlacesApi.md#placeaddressput) | **PUT** /places/{placeId}/address/{language} | address - update |
| [**placeAvailableFromPut**](PlacesApi.md#placeavailablefromput) | **PUT** /places/{placeId}/available-from | availableFrom - update |
| [**placeBookingInfoPut**](PlacesApi.md#placebookinginfoput) | **PUT** /places/{placeId}/booking-info | bookingInfo - update |
| [**placeCalendarPut**](PlacesApi.md#placecalendarput) | **PUT** /places/{placeId}/calendar | calendar - update |
| [**placeCalendarSummaryGet**](PlacesApi.md#placecalendarsummaryget) | **GET** /places/{placeId}/calendar-summary | calendar summary - get |
| [**placeContactPointPut**](PlacesApi.md#placecontactpointput) | **PUT** /places/{placeId}/contact-point | contactPoint - update |
| [**placeDelete**](PlacesApi.md#placedelete) | **DELETE** /places/{placeId} | place - delete |
| [**placeDescriptionDelete**](PlacesApi.md#placedescriptiondelete) | **DELETE** /places/{placeId}/description/{language} | description - delete |
| [**placeDescriptionPut**](PlacesApi.md#placedescriptionput) | **PUT** /places/{placeId}/description/{language} | description - update |
| [**placeFacilitiesPut**](PlacesApi.md#placefacilitiesput) | **PUT** /places/{placeId}/facilities | facilities - update |
| [**placeGet**](PlacesApi.md#placeget) | **GET** /places/{placeId} | place - get |
| [**placeImageDelete**](PlacesApi.md#placeimagedelete) | **DELETE** /places/{placeId}/images/{imageId} | images - delete |
| [**placeImagePut**](PlacesApi.md#placeimageput) | **PUT** /places/{placeId}/images/{imageId} | images - update |
| [**placeImagesPost**](PlacesApi.md#placeimagespost) | **POST** /places/{placeId}/images | images - add |
| [**placeImportCreate**](PlacesApi.md#placeimportcreateoperation) | **POST** /imports/places | place - import (create) |
| [**placeImportUpdate**](PlacesApi.md#placeimportupdate) | **PUT** /imports/places/{placeId} | place - import (update) |
| [**placeLabelsDelete**](PlacesApi.md#placelabelsdelete) | **DELETE** /places/{placeId}/labels/{labelName} | labels - delete |
| [**placeMainImagePut**](PlacesApi.md#placemainimageput) | **PUT** /places/{placeId}/images/main | images main - update |
| [**placeMajorInfoPut**](PlacesApi.md#placemajorinfoputoperation) | **PUT** /places/{placeId}/major-info | major-info - update |
| [**placeNamePut**](PlacesApi.md#placenameput) | **PUT** /places/{placeId}/name/{language} | name - update |
| [**placeOrganizerDelete**](PlacesApi.md#placeorganizerdelete) | **DELETE** /places/{placeId}/organizer/{organizerId} | organizer - delete |
| [**placeOrganizerUpdate**](PlacesApi.md#placeorganizerupdate) | **PUT** /places/{placeId}/organizer/{organizerId} | organizer - update |
| [**placePost**](PlacesApi.md#placepost) | **POST** /places | place - create |
| [**placePriceInfoPut**](PlacesApi.md#placepriceinfoput) | **PUT** /places/{placeId}/price-info | priceInfo - update |
| [**placePut**](PlacesApi.md#placeput) | **PUT** /places/{placeId} | place - update |
| [**placeStatusPut**](PlacesApi.md#placestatusput) | **PUT** /places/{placeId}/status | status - update |
| [**placeTypePut**](PlacesApi.md#placetypeput) | **PUT** /places/{placeId}/type/{termId} | type - update |
| [**placeTypicalAgeRangeDelete**](PlacesApi.md#placetypicalagerangedelete) | **DELETE** /places/{placeId}/typical-age-range | typicalAgeRange - delete |
| [**placeTypicalAgeRangePut**](PlacesApi.md#placetypicalagerangeput) | **PUT** /places/{placeId}/typical-age-range | typicalAgeRange - update |
| [**placeVideosDelete**](PlacesApi.md#placevideosdelete) | **DELETE** /places/{placeId}/videos/{videoId} | videos - delete |
| [**placeVideosPost**](PlacesApi.md#placevideospost) | **POST** /places/{placeId}/videos | videos - add |
| [**placeWorkflowStatusPut**](PlacesApi.md#placeworkflowstatusput) | **PUT** /places/{placeId}/workflow-status | workflowStatus - update |
| [**placesLabelsAdd**](PlacesApi.md#placeslabelsadd) | **PUT** /places/{placeId}/labels/{labelName} | labels - add |
| [**placesVideosPatch**](PlacesApi.md#placesvideospatch) | **PATCH** /places/{placeId}/videos | videos - patch |



## placeAddressPut

> placeAddressPut(placeId, language, placeAddressPut)

address - update

Updates the address of a place.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceAddressPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // 'nl' | 'fr' | 'en' | 'de' | The language of the request body properties
    language: language_example,
    // PlaceAddressPut | New address of the place, localized in a single language. (optional)
    placeAddressPut: ...,
  } satisfies PlaceAddressPutRequest;

  try {
    const data = await api.placeAddressPut(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
| **language** | `nl`, `fr`, `en`, `de` | The language of the request body properties | [Defaults to `undefined`] [Enum: nl, fr, en, de] |
| **placeAddressPut** | [PlaceAddressPut](PlaceAddressPut.md) | New address of the place, localized in a single language. | [Optional] |

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
| **204** | The address was successfully updated. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## placeAvailableFromPut

> placeAvailableFromPut(placeId, placeAvailableFromPut)

availableFrom - update

Updates the availableFrom of the place. This is the first date &amp; time that the place is allowed to be visible on publication channels.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceAvailableFromPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // PlaceAvailableFromPut | New availableFrom to set on the place. (optional)
    placeAvailableFromPut: {availableFrom=2021-05-17T22:00:00+00:00},
  } satisfies PlaceAvailableFromPutRequest;

  try {
    const data = await api.placeAvailableFromPut(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
| **placeAvailableFromPut** | [PlaceAvailableFromPut](PlaceAvailableFromPut.md) | New availableFrom to set on the place. | [Optional] |

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
| **204** | No Content. The place availableFrom was successfully updated. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## placeBookingInfoPut

> placeBookingInfoPut(placeId, placeBookingInfo)

bookingInfo - update

Updates the bookingInfo for a place.  &lt;!-- theme: info --&gt;  &gt; There is no DELETE endpoint. To remove (specific) bookingInfo perform a PUT request with empty properties.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceBookingInfoPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // PlaceBookingInfo | New bookingInfo to set on the place. (optional)
    placeBookingInfo: {phone=+32/01234567890, email=info@example.com, url=https://www.example.com, urlLabel={nl=Nederlandse tekst, fr=Texte français, de=Deutscher Text, en=English text}, availabilityStarts=2021-05-17T22:00:00+00:00, availabilityEnds=2021-05-17T22:00:00+00:00},
  } satisfies PlaceBookingInfoPutRequest;

  try {
    const data = await api.placeBookingInfoPut(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
| **placeBookingInfo** | [PlaceBookingInfo](PlaceBookingInfo.md) | New bookingInfo to set on the place. | [Optional] |

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


## placeCalendarPut

> placeCalendarPut(placeId, placeCalendarPut)

calendar - update

Updates the calendar information of the given &#x60;placeId&#x60;. The calendar information will be completely replaced with the new one.  The required properties depend on the &#x60;calendarType&#x60; property.  | calendarType  | required  | optional  | |---|---|---| | periodic  | startDate, endDate  | openingHours, status, bookingAvailability  | | permanent  |   | openingHours, status, bookingAvailability  |  &lt;!-- theme: warning --&gt;  &gt; If the event has a &#x60;status&#x60; or &#x60;bookingAvailability&#x60; that is not &#x60;Available&#x60;, and you do not include this &#x60;status&#x60; or &#x60;bookingAvailability&#x60; in the new calendar information, they will get reverted back to the default &#x60;Available&#x60;!  &lt;!-- theme: danger --&gt;  &gt; Contrary to events, places cannot use calendarType &#x60;single&#x60; or &#x60;multiple&#x60;!

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceCalendarPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // PlaceCalendarPut | New calendar information. (optional)
    placeCalendarPut: {calendarType=periodic, startDate=2021-05-17T22:00:00+00:00, endDate=2021-05-17T22:00:00+00:00, openingHours=[{opens=13:00, closes=17:00, dayOfWeek=[monday]}, {opens=09:00, closes=17:00, dayOfWeek=[tuesday, wednesday, thursday, friday, saturday, sunday]}], status={type=Available}, bookingAvailability={type=Available}},
  } satisfies PlaceCalendarPutRequest;

  try {
    const data = await api.placeCalendarPut(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
| **placeCalendarPut** | [PlaceCalendarPut](PlaceCalendarPut.md) | New calendar information. | [Optional] |

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


## placeCalendarSummaryGet

> placeCalendarSummaryGet(placeId, style, size, language, hidePast, timezone, accept, langCode, format)

calendar summary - get

Returns a human-readable summary of the calendar information of the place. Can be configured to return either plain text or HTML, and to switch between four different formats depending on the amount of space you have to display it.  &gt; For backward compatibility this endpoint is also accessible at the old abbreviated &#x60;/places/{placeId}/calsum&#x60; path.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceCalendarSummaryGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new PlacesApi();

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // 'text' | 'html' | Deprecated alternative to the `accept` header. Supported for backward compatibility. (optional)
    style: style_example,
    // 'xs' | 'sm' | 'md' | 'lg' | Defines the size of the summary. Larger summaries contain more detail for events with multiple dates/hours but will also take up more space when shown in a UI. We recommend to use the format `md` for the search results (and `lg` for events with calendarType single), and to always use `lg` for the detailpage. In some cases (e.g. mobile apps) calendar summary `xs` can be useful (optional)
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
  } satisfies PlaceCalendarSummaryGetRequest;

  try {
    const data = await api.placeCalendarSummaryGet(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
| **style** | `text`, `html` | Deprecated alternative to the &#x60;accept&#x60; header. Supported for backward compatibility. | [Optional] [Defaults to `&#39;text&#39;`] [Enum: text, html] |
| **size** | `xs`, `sm`, `md`, `lg` | Defines the size of the summary. Larger summaries contain more detail for events with multiple dates/hours but will also take up more space when shown in a UI. We recommend to use the format &#x60;md&#x60; for the search results (and &#x60;lg&#x60; for events with calendarType single), and to always use &#x60;lg&#x60; for the detailpage. In some cases (e.g. mobile apps) calendar summary &#x60;xs&#x60; can be useful | [Optional] [Defaults to `&#39;lg&#39;`] [Enum: xs, sm, md, lg] |
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
| **200** | The calendar summary in either plain text or HTML.  For example: &#x60;&#x60;&#x60; Van 6 januari 2021 tot 23 juni 2021 (geannuleerd) &#x60;&#x60;&#x60;  Or: &#x60;&#x60;&#x60; &lt;span class&#x3D;\\\&quot;cf-from cf-meta\\\&quot;&gt;Van&lt;/span&gt; &lt;span class&#x3D;\\\&quot;cf-date\\\&quot;&gt;6 januari 2021&lt;/span&gt; &lt;span class&#x3D;\\\&quot;cf-to cf-meta\\\&quot;&gt;tot&lt;/span&gt; &lt;span class&#x3D;\\\&quot;cf-date\\\&quot;&gt;23 juni 2021&lt;/span&gt; &lt;span title&#x3D;\\\&quot;Deze activiteit is waarschijnlijk geannuleerd omwille van prplaceieve coronamaatregelen.\\\&quot; class&#x3D;\\\&quot;cf-status\\\&quot;&gt;(geannuleerd)&lt;/span&gt; &#x60;&#x60;&#x60; |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## placeContactPointPut

> placeContactPointPut(placeId, commonOfferContactPoint)

contactPoint - update

Updates the contact point information of the place with the given &#x60;placeId&#x60;.  &lt;!-- theme: info --&gt;  &gt; There is no DELETE endpoint. To remove contact information perform a PUT request with empty properties.  &lt;!-- theme: warning --&gt;  &gt; Unlike [&#x60;PUT /organizers/{organizerId}/contact-point&#x60;](./entry.json/paths/~1organizers~1{organizerId}~1contact-point/put), all properties are required. There is also no partial updating.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceContactPointPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // CommonOfferContactPoint | The contact point properties to set on the place. (optional)
    commonOfferContactPoint: ...,
  } satisfies PlaceContactPointPutRequest;

  try {
    const data = await api.placeContactPointPut(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
| **commonOfferContactPoint** | [CommonOfferContactPoint](CommonOfferContactPoint.md) | The contact point properties to set on the place. | [Optional] |

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


## placeDelete

> placeDelete(placeId)

place - delete

Does a soft-delete of the place. The place will continue to exist but it\&#39;s &#x60;workflowStatus&#x60; will be changed to &#x60;DELETED&#x60;. This will remove it from all publication channels.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
  } satisfies PlaceDeleteRequest;

  try {
    const data = await api.placeDelete(body);
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
| **204** | No Content. The place\&#39;s &#x60;workflowStatus&#x60; was successfully updated to &#x60;DELETED&#x60;. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## placeDescriptionDelete

> placeDescriptionDelete(placeId, language)

description - delete

Deletes the localized description of a place based on the given &#x60;placeId&#x60; and &#x60;language&#x60; inside the URL.   &lt;!-- theme: info --&gt;

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceDescriptionDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // 'nl' | 'fr' | 'en' | 'de' | The language of the request body properties
    language: language_example,
  } satisfies PlaceDescriptionDeleteRequest;

  try {
    const data = await api.placeDescriptionDelete(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
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


## placeDescriptionPut

> placeDescriptionPut(placeId, language, placeDescriptionPut)

description - update

Updates the localized description of a place based on the given &#x60;placeId&#x60; and &#x60;language&#x60; inside the URL. The description is not limited in size, but it is recommended to use the first 200 characters of the description for promotional copy as these characters are visible in the list-view of results.  &lt;!-- theme: info --&gt;  &gt; Keep in mind:  &gt; - The description should be UTF-8 encoded  &gt; - Linebreaks are encoded as &#x60;\\n&#x60;  &lt;!-- theme: info --&gt;

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceDescriptionPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // 'nl' | 'fr' | 'en' | 'de' | The language of the request body properties
    language: language_example,
    // PlaceDescriptionPut | The new description of the place. (optional)
    placeDescriptionPut: ...,
  } satisfies PlaceDescriptionPutRequest;

  try {
    const data = await api.placeDescriptionPut(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
| **language** | `nl`, `fr`, `en`, `de` | The language of the request body properties | [Defaults to `undefined`] [Enum: nl, fr, en, de] |
| **placeDescriptionPut** | [PlaceDescriptionPut](PlaceDescriptionPut.md) | The new description of the place. | [Optional] |

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


## placeFacilitiesPut

> placeFacilitiesPut(placeId, requestBody)

facilities - update

Updates the list of available (accessibility) facilities on the place. These will show up in the [place\&#39;s &#x60;terms&#x60;](/models/place-terms.json).  A list of possible facilities can be found using our [guide about taxonomy terms](../docs/taxonomy-api/terms.md).  **Note**: A special permission is required to update an place\&#39;s facilities in UiTdatabank, even if you are the place owner. Contact an administrator for further information.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceFacilitiesPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // Array<string> | New list of facilities to set on the event. Facilities previously set on the event but not included in this list will be removed from the event. Other terms will be preserved. (optional)
    requestBody: [3.13.2.0.0, 3.23.2.0.0],
  } satisfies PlaceFacilitiesPutRequest;

  try {
    const data = await api.placeFacilitiesPut(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
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


## placeGet

> PlaceWithReadExample placeGet(placeId)

place - get

Returns the details of the place for the given &#x60;placeId&#x60;.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new PlacesApi();

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
  } satisfies PlaceGetRequest;

  try {
    const data = await api.placeGet(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |

### Return type

[**PlaceWithReadExample**](PlaceWithReadExample.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Place details. |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## placeImageDelete

> placeImageDelete(placeId, imageId)

images - delete

Removes the image with the given &#x60;imageId&#x60; from the place\&#39;s &#x60;mediaObject&#x60; property.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceImageDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // string | The unique uuid of an already uploaded image.
    imageId: 365f99a4-5490-4313-8ee9-adebea2dceb0,
  } satisfies PlaceImageDeleteRequest;

  try {
    const data = await api.placeImageDelete(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
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
| **204** | The image has been successfully removed from the place. |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## placeImagePut

> placeImagePut(placeId, imageId, placeImagePut)

images - update

Updates the metadata of an image on a place.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceImagePutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // string | The unique uuid of an already uploaded image.
    imageId: 365f99a4-5490-4313-8ee9-adebea2dceb0,
    // PlaceImagePut | The metadata to update on the image. (optional)
    placeImagePut: {"description":"Picture of the publiq office","copyrightHolder":"publiq"},
  } satisfies PlaceImagePutRequest;

  try {
    const data = await api.placeImagePut(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
| **imageId** | `string` | The unique uuid of an already uploaded image. | [Defaults to `undefined`] |
| **placeImagePut** | [PlaceImagePut](PlaceImagePut.md) | The metadata to update on the image. | [Optional] |

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


## placeImagesPost

> placeImagesPost(placeId, placeImagePost)

images - add

Adds an image to a place. To upload an image, use the [&#x60;POST /images&#x60;](./entry.json/paths/~1images/post) endpoint.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceImagesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // PlaceImagePost | The image to add to a place. (optional)
    placeImagePost: {mediaObjectId=546a90cd-a238-417b-aa98-1b6c50c1345c},
  } satisfies PlaceImagesPostRequest;

  try {
    const data = await api.placeImagesPost(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
| **placeImagePost** | [PlaceImagePost](PlaceImagePost.md) | The image to add to a place. | [Optional] |

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
| **204** | The image was added to the place. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## placeImportCreate

> PlacePost201Response placeImportCreate(placeImportCreateRequest)

place - import (create)

Creates a new place via the historical &#x60;/imports/places&#x60; URL.  &lt;!-- theme: danger --&gt;  &gt; This operation is deprecated and should not be used in new integrations. Use the [&#x60;POST /places&#x60;](./entry.json/paths/~1places/post) operation instead to create new places. &gt; &gt; Both operations accept the same JSON bodies nowadays, and support creating places with only the required properties or with additional optional properties. &gt; &gt; The only difference is that the default &#x60;workflowStatus&#x60; for places created via [&#x60;POST /places&#x60;](./entry.json/paths/~1places/post) is &#x60;DRAFT&#x60;, while new places created via this &#x60;POST /imports/places&#x60; operation will have the default workflowStatus &#x60;READY_FOR_VALIDATION&#x60; for backward compatibility with historical integrations. &gt; &gt; If you want your new places to also have the workflowStatus &#x60;READY_FOR_VALIDATION&#x60;, you can use the [&#x60;POST /places&#x60;](./entry.json/paths/~1places/post) operation and explicitly set the &#x60;workflowStatus&#x60; property in your JSON body to &#x60;READY_FOR_VALIDATION&#x60;.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceImportCreateOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // PlaceImportCreateRequest | The complete details of the new place to create. The schema of the place is the same as the response of the [`GET /places/{placeId}`](./entry.json/paths/~1places~1{placeId}/get) operation. (optional)
    placeImportCreateRequest: {"mainLanguage":"nl","name":{"nl":"Nederlandse naam","fr":"Nom français","de":"Deutscher Name","en":"English name"},"address":{"nl":{"addressCountry":"BE","addressLocality":"Brussel","postalCode":"1000","streetAddress":"Wetstraat 1"},"fr":{"addressCountry":"BE","addressLocality":"Bruxelles","postalCode":"1000","streetAddress":"Rue de la Loi 1"},"de":{"addressCountry":"BE","addressLocality":"Brüssel","postalCode":"1000","streetAddress":"Wetstraat 1"},"en":{"addressCountry":"BE","addressLocality":"Brussels","postalCode":"1000","streetAddress":"Wetstraat 1"}},"calendarType":"periodic","startDate":"2021-05-17T22:00:00+00:00","endDate":"2021-05-17T22:00:00+00:00","openingHours":[{"opens":"17:00","closes":"17:00","dayOfWeek":["monday"]}],"availableFrom":"2021-05-17T22:00:00+00:00","terms":[{"id":"0.14.0.0.0","label":"Monument","domain":"eventtype"}],"typicalAgeRange":"6-12","birthdateRange":{"from":"2021-01-31","to":"2021-12-31"},"description":{"nl":"Nederlandse beschrijving","fr":"Description français","de":"Deutscher Beschreibung","en":"English description"},"priceInfo":[{"category":"base","price":10.5,"priceCurrency":"EUR","name":{"nl":"Basistarief","fr":"Tarif de base","de":"Base tariff","en":"Basisrate"}}],"contactPoint":{"phone":["016/112233"],"email":["info@example.com"],"url":["https://www.example.com"]},"bookingInfo":{"phone":"016/112233","email":"info@example.com","url":"https://www.example.com","urlLabel":{"nl":"Nederlandse beschrijving","fr":"Description français","de":"Deutscher Beschreibung","en":"English description"},"availabilityStarts":"2021-05-17T22:00:00+00:00","availabilityEnds":"2021-05-17T22:00:00+00:00"},"mediaObject":[{"@id":"https://io-test.uitdatabank.be/images/74969172-E2A6-4626-BA63-4B6919242A24"},{"@id":"https://io-test.uitdatabank.be/images/85b04295-479c-40f5-b3dd-469dfb4387b3","description":"optional overwritten description","copyrightHolder":"optional overwritten copyright holder","inLanguage":"nl"}],"videos":[{"id":"b504cf44-9ab8-4641-9934-38d1cc67242c","url":"https://www.youtube.com/watch?v=cEItmb_a20D","embedUrl":"https://www.youtube.com/embed/cEItmb_a20D","language":"nl","copyrightHolder":"publiq"}],"labels":["label1"],"hiddenLabels":["label2"]},
  } satisfies PlaceImportCreateOperationRequest;

  try {
    const data = await api.placeImportCreate(body);
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
| **placeImportCreateRequest** | [PlaceImportCreateRequest](PlaceImportCreateRequest.md) | The complete details of the new place to create. The schema of the place is the same as the response of the [&#x60;GET /places/{placeId}&#x60;](./entry.json/paths/~1places~1{placeId}/get) operation. | [Optional] |

### Return type

[**PlacePost201Response**](PlacePost201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The place was created successfully. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## placeImportUpdate

> PlacePut200Response placeImportUpdate(placeId, placeWithWriteExample)

place - import (update)

Updates the place via the historical &#x60;/imports/places/{placeId}&#x60; URL by completely overwriting it with the properties in the given JSON.   &lt;!-- theme: danger --&gt;  &gt; This operation is deprecated and should not be used in new integrations. Use the [&#x60;PUT /places/{placeId}&#x60;](./entry.json/paths/~1places~1{placeId}/put) operation instead to update existing places, which accepts exactly the same JSON body.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceImportUpdateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // PlaceWithWriteExample | The complete details of the place to update. The schema of the place is the same as the response of the [`GET /places/{placeId}`](./entry.json/paths/~1places~1{placeId}/get) operation. (optional)
    placeWithWriteExample: ...,
  } satisfies PlaceImportUpdateRequest;

  try {
    const data = await api.placeImportUpdate(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
| **placeWithWriteExample** | [PlaceWithWriteExample](PlaceWithWriteExample.md) | The complete details of the place to update. The schema of the place is the same as the response of the [&#x60;GET /places/{placeId}&#x60;](./entry.json/paths/~1places~1{placeId}/get) operation. | [Optional] |

### Return type

[**PlacePut200Response**](PlacePut200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The place was updated successfully |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## placeLabelsDelete

> placeLabelsDelete(placeId, labelName)

labels - delete

Deletes a label from the &#x60;labels&#x60; or &#x60;hiddenLabels&#x60; property on an place based on the place id, the label name, and the label\&#39;s visibility.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceLabelsDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // string | The label to add to an event, place or organizer. The label name should be longer than 1 character but shorter than 255 characters. The label name should not contain semicolons.
    labelName: MyLabel,
  } satisfies PlaceLabelsDeleteRequest;

  try {
    const data = await api.placeLabelsDelete(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
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
| **204** | No Content. The label was deleted from the place. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## placeMainImagePut

> placeMainImagePut(placeId, placeMainImagePut)

images main - update

Updates the main image of a place. The main image is the only image shown in search-result listviews and the image more prominently displayed on place-details, when the place has multiple images.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceMainImagePutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // PlaceMainImagePut | The id of the image to set as main image on the place. (optional)
    placeMainImagePut: ...,
  } satisfies PlaceMainImagePutRequest;

  try {
    const data = await api.placeMainImagePut(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
| **placeMainImagePut** | [PlaceMainImagePut](PlaceMainImagePut.md) | The id of the image to set as main image on the place. | [Optional] |

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


## placeMajorInfoPut

> placeMajorInfoPut(placeId, placeMajorInfoPutRequest)

major-info - update

&lt;!-- theme: danger --&gt;  &gt; The major-info endpoint is deprecated and should not be used in new integrations!  Updates the \&quot;major info\&quot; of the event with the given &#x60;placeId&#x60;.  The major info contains:  * &#x60;name&#x60;: The name of the place in the place\&#39;s &#x60;mainLanguage&#x60;, as a string * &#x60;type&#x60;: Id of the place\&#39;s &#x60;eventtype&#x60; taxonomy &#x60;term&#x60;, as a string * &#x60;theme&#x60; (optional): Id of the place\&#39;s &#x60;theme&#x60; taxonomy &#x60;term&#x60;, as a string * &#x60;address&#x60;: Object with the address of the place (see schema below) * &#x60;calendar&#x60;: Object with the place\&#39;s calendar information (see schema below)  All properties are required (except for &#x60;theme&#x60;) and will overwrite existing values of these properties on the place. If the place has a &#x60;theme&#x60; &#x60;term&#x60; before this update, but there is no &#x60;theme&#x60; in this major-info update, the &#x60;theme&#x60; will be removed.  &lt;!-- theme: success --&gt; &gt; For backward-compatibility with older integrations, this operation can also be requested via &#x60;POST /place/{placeId}/major-info&#x60;

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceMajorInfoPutOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // PlaceMajorInfoPutRequest | All required fields for a place (whether they have been updated or not). (optional)
    placeMajorInfoPutRequest: {"name":"Sint-Pieterskerk","type":"0.14.0.0.0","theme":"1.44.0.0.0","address":{"streetAddress":"Grote Markt 1","postalCode":"3000","addressLocality":"Leuven","addressCountry":"BE"},"calendar":{"calendarType":"permanent","openingHours":[{"opens":"10:00","closes":"16:30","dayOfWeek":["monday","tuesday","thursday","friday","saturday"]},{"opens":"11:00","closes":"16:30","dayOfWeek":["sunday"]}]}},
  } satisfies PlaceMajorInfoPutOperationRequest;

  try {
    const data = await api.placeMajorInfoPut(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
| **placeMajorInfoPutRequest** | [PlaceMajorInfoPutRequest](PlaceMajorInfoPutRequest.md) | All required fields for a place (whether they have been updated or not). | [Optional] |

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


## placeNamePut

> placeNamePut(placeId, language, placeNamePut)

name - update

Updates the localized name of a place based on the given &#x60;placeId&#x60; and &#x60;language&#x60; inside the URL.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceNamePutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // 'nl' | 'fr' | 'en' | 'de' | The language of the request body properties
    language: language_example,
    // PlaceNamePut | The new name of the place. (optional)
    placeNamePut: ...,
  } satisfies PlaceNamePutRequest;

  try {
    const data = await api.placeNamePut(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
| **language** | `nl`, `fr`, `en`, `de` | The language of the request body properties | [Defaults to `undefined`] [Enum: nl, fr, en, de] |
| **placeNamePut** | [PlaceNamePut](PlaceNamePut.md) | The new name of the place. | [Optional] |

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


## placeOrganizerDelete

> placeOrganizerDelete(placeId, organizerId)

organizer - delete

Deletes the organizer of the place with the given &#x60;placeId&#x60;.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceOrganizerDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // string | Unique id of an organizer, in the format of a UUID
    organizerId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
  } satisfies PlaceOrganizerDeleteRequest;

  try {
    const data = await api.placeOrganizerDelete(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
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


## placeOrganizerUpdate

> placeOrganizerUpdate(placeId, organizerId)

organizer - update

Updates the organizer of the place with the given &#x60;placeId&#x60;. A list of organizers can be found using our [guide about finding existing organizers](/docs/entry-api/organizers/finding-and-reusing-organizers.md).  &lt;!-- theme: info --&gt;  &gt; An organizer is not required on a place, and it can only have one.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceOrganizerUpdateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // string | Unique id of an organizer, in the format of a UUID
    organizerId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
  } satisfies PlaceOrganizerUpdateRequest;

  try {
    const data = await api.placeOrganizerUpdate(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
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


## placePost

> PlacePost201Response placePost(placePost)

place - create

Creates a new place with the required properties and any additional optional properties.  By default, the new place will be editable and removable by the user or client that the access token used to perform this request belongs to. If you use a user access token, the user for which the token was obtained will see the new place in their dashboard in UiTdatabank and will be able to edit or remove it. If you use a client access token, only API requests with a token for the same client will be able to edit or remove it.  To ensure data integrity and avoid duplication within the system, each place must have a unique combination of the main language title and address.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlacePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // PlacePost | The complete details of the new place to create. The schema of the place is the same as the response of the [`GET /places/{placeId}`](./entry.json/paths/~1places~1{placeId}/get) operation.  This request also supports an older deprecated schema that was used to create an place with just its required fields. If you have an existing integration that still uses this schema, you can view it by switching from the `place` schema to `place.post (deprecated)` below. (optional)
    placePost: ...,
  } satisfies PlacePostRequest;

  try {
    const data = await api.placePost(body);
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
| **placePost** | [PlacePost](PlacePost.md) | The complete details of the new place to create. The schema of the place is the same as the response of the [&#x60;GET /places/{placeId}&#x60;](./entry.json/paths/~1places~1{placeId}/get) operation.  This request also supports an older deprecated schema that was used to create an place with just its required fields. If you have an existing integration that still uses this schema, you can view it by switching from the &#x60;place&#x60; schema to &#x60;place.post (deprecated)&#x60; below. | [Optional] |

### Return type

[**PlacePost201Response**](PlacePost201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The place was created successfully. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **409** | Status conflict  To ensure data integrity and avoid duplication within the system, each place must have a unique combination of the main language title and address. You get this error when (multiple) matches already exist in the system. You can use the attached query to get existing place(s). Subsequently, appropriate actions, such as updates to an existing Place, can be done to maintain uniqueness and coherence in UDB. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## placePriceInfoPut

> placePriceInfoPut(placeId, eventPriceInfoInner)

priceInfo - update

Updates the price info of a place.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlacePriceInfoPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // Array<EventPriceInfoInner> | New priceInfo to set on the place. (optional)
    eventPriceInfoInner: [{category=base, price=10.5, priceCurrency=EUR, name={nl=Basistarief, fr=Tarif de base, en=Base tariff, de=Basisrate}}],
  } satisfies PlacePriceInfoPutRequest;

  try {
    const data = await api.placePriceInfoPut(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
| **eventPriceInfoInner** | `Array<EventPriceInfoInner>` | New priceInfo to set on the place. | [Optional] |

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


## placePut

> PlacePut200Response placePut(placeId, placeWithWriteExample)

place - update

Updates the place with the given &#x60;placeId&#x60; by completely overwriting it with the properties in the given JSON.   &lt;!-- theme: danger --&gt;  &gt; Any existing optional properties on the place that are not included in the update request will be removed from the place when updating the place via this operation. &gt; &gt; As an exception, some existing &#x60;labels&#x60; or &#x60;hiddenLabels&#x60; may be kept on the place even if they are not included in the update request. For example if they were added via the UiTdatabank UI, or if the client or user making the request does not have sufficient permission to remove some specific labels.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlacePutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // PlaceWithWriteExample | The complete details of the place to update. The schema of the place is the same as the response of the [`GET /places/{placeId}`](./entry.json/paths/~1places~1{placeId}/get) operation. (optional)
    placeWithWriteExample: ...,
  } satisfies PlacePutRequest;

  try {
    const data = await api.placePut(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
| **placeWithWriteExample** | [PlaceWithWriteExample](PlaceWithWriteExample.md) | The complete details of the place to update. The schema of the place is the same as the response of the [&#x60;GET /places/{placeId}&#x60;](./entry.json/paths/~1places~1{placeId}/get) operation. | [Optional] |

### Return type

[**PlacePut200Response**](PlacePut200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The place was updated successfully |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## placeStatusPut

> placeStatusPut(placeId, placeStatus)

status - update

Updates the status on the top level of the place with the given &#x60;placeId&#x60;.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceStatusPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // PlaceStatus | New status to set on the place. (optional)
    placeStatus: {type=Available},
  } satisfies PlaceStatusPutRequest;

  try {
    const data = await api.placeStatusPut(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
| **placeStatus** | [PlaceStatus](PlaceStatus.md) | New status to set on the place. | [Optional] |

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


## placeTypePut

> placeTypePut(placeId, termId)

type - update

Updates the place\&#39;s type (examples of types are &#x60;Bioscoop&#x60;, &#x60;Monument&#x60;, &#x60;Theater&#x60;, and so on) based on the given &#x60;placeId&#x60; and &#x60;termId&#x60;.  Terms are pre-defined and can be found using our [guide about taxonomy terms](../docs/taxonomy-api/terms.md). Only terms from the &#x60;eventtype&#x60; domain can be used as place types.  If the &#x60;placeId&#x60; does not exist a &#x60;404 Not Found&#x60; will be returned. If the &#x60;termId&#x60; does not exist or is not a term in the &#x60;eventtype&#x60; domain, a &#x60;400 Bad Request&#x60; will be returned. If the request is successful a &#x60;204 No Content&#x60; will be returned.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceTypePutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // string | Unique id of a taxonomy term. Taxonomy terms are pre-defined and can be found using our [guide about taxonomy terms](../docs/taxonomy-api/terms.md).
    termId: termId_example,
  } satisfies PlaceTypePutRequest;

  try {
    const data = await api.placeTypePut(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
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


## placeTypicalAgeRangeDelete

> placeTypicalAgeRangeDelete(placeId)

typicalAgeRange - delete

Deletes the age range from a place.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceTypicalAgeRangeDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
  } satisfies PlaceTypicalAgeRangeDeleteRequest;

  try {
    const data = await api.placeTypicalAgeRangeDelete(body);
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
| **204** | The age range was successfully deleted. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## placeTypicalAgeRangePut

> placeTypicalAgeRangePut(placeId, placeTypicalAgeRangePut)

typicalAgeRange - update

Updates the age range of the place with the given &#x60;placeId&#x60;.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceTypicalAgeRangePutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // PlaceTypicalAgeRangePut | The age range to set on the place. (optional)
    placeTypicalAgeRangePut: {typicalAgeRange=-},
  } satisfies PlaceTypicalAgeRangePutRequest;

  try {
    const data = await api.placeTypicalAgeRangePut(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
| **placeTypicalAgeRangePut** | [PlaceTypicalAgeRangePut](PlaceTypicalAgeRangePut.md) | The age range to set on the place. | [Optional] |

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


## placeVideosDelete

> placeVideosDelete(placeId, videoId)

videos - delete

Delete an embedded video from an place based on the place id and the video id.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceVideosDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // string | Unique id of a video embedded in a place or event, in the format of a UUID
    videoId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
  } satisfies PlaceVideosDeleteRequest;

  try {
    const data = await api.placeVideosDelete(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
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
| **204** | No Content. The video was deleted from the place. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## placeVideosPost

> PlaceVideosPost200Response placeVideosPost(placeId, placeVideosPost)

videos - add

Add a video as a URL reference to place  The video objects contains:  * &#x60;url&#x60;: The full URL of the video. Currently only *Vimeo* and *Youtube* are supported as video source locations. * &#x60;copyrightHolder&#x60;: The copyright holder of the video material. Although this field is optional it is strongly recommended to add a reference to the entity owning the rights on the video material.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceVideosPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // PlaceVideosPost | The new video to add to a place. (optional)
    placeVideosPost: {url=https://www.youtube.com/watch?v=cEItmb_a20D, language=nl, copyrightHolder=publiq},
  } satisfies PlaceVideosPostRequest;

  try {
    const data = await api.placeVideosPost(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
| **placeVideosPost** | [PlaceVideosPost](PlaceVideosPost.md) | The new video to add to a place. | [Optional] |

### Return type

[**PlaceVideosPost200Response**](PlaceVideosPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The video was added to the place. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## placeWorkflowStatusPut

> placeWorkflowStatusPut(placeId, placeWorkflowStatusPut)

workflowStatus - update

Updates the workflow status of an place. Possible statuses are:  - &#x60;DRAFT&#x60;: The default status of new places. Places with this status do not appear in online calendars like &lt;https://www.uitinvlaanderen.be&gt; or the search on &lt;https://www.uitdatabank.be&gt; - &#x60;READY_FOR_VALIDATION&#x60;: This status means the place has been published, but not approved yet. Most online calendars will already show it, and it will appear in the search on &lt;https://www.uitdatabank.be&gt; - &#x60;APPROVED&#x60;: The place has been approved by a moderator. It will appear on all online calendars. You cannot set this status unless you have moderation permissions. - &#x60;REJECTED&#x60;: The place has been rejected by a moderator. It will not appear on any online calendars. You cannot set this status unless you have moderation permissions. - &#x60;DELETED&#x60;: The place has been deleted. It will not appear on any online calendars.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlaceWorkflowStatusPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // PlaceWorkflowStatusPut | New workflowStatus to set on the place. Depending on the new workflowStatus, other properties may/must be set as well. (optional)
    placeWorkflowStatusPut: ...,
  } satisfies PlaceWorkflowStatusPutRequest;

  try {
    const data = await api.placeWorkflowStatusPut(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
| **placeWorkflowStatusPut** | [PlaceWorkflowStatusPut](PlaceWorkflowStatusPut.md) | New workflowStatus to set on the place. Depending on the new workflowStatus, other properties may/must be set as well. | [Optional] |

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


## placesLabelsAdd

> placesLabelsAdd(placeId, labelName)

labels - add

Adds the given label to the place with the given &#x60;placeId&#x60;.  If the specified label does not exist yet in UiTdatabank a new label will be created with default visibility and public permissions (usable by anyone), and linked to the place.  The label must be longer than 1 character and shorter than 255 characters. The label can also not contain the semicolon character. It should match the regex &#x60;^(?&#x3D;.{2,255}$)(?&#x3D;.*\\S.*\\S.*)[^;]*$&#x60;

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlacesLabelsAddRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // string | The label to add to an event, place or organizer. The label name should be longer than 1 character but shorter than 255 characters. The label name should not contain semicolons.
    labelName: MyLabel,
  } satisfies PlacesLabelsAddRequest;

  try {
    const data = await api.placesLabelsAdd(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
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


## placesVideosPatch

> placesVideosPatch(placeId, eventVideosPatchInner)

videos - patch

Update one or more videos of a place.  The video object(s) must contain  * &#x60;id&#x60;: The id of the video object to be changed.  The video object(s) can contain:  * &#x60;url&#x60;: The full URL of the video. Currently only *Vimeo* and *Youtube* are supported as video source locations. * &#x60;language&#x60;: The updated language of a video * &#x60;copyrightHolder&#x60;: The copyright holder of the video material. Although this field is optional it is strongly recommended to add a reference to the entity owning the rights on the video material.

### Example

```ts
import {
  Configuration,
  PlacesApi,
} from '';
import type { PlacesVideosPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new PlacesApi(config);

  const body = {
    // string | Unique id of an place, in the format of a UUID
    placeId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // Array<EventVideosPatchInner> | An array of videos to be changed. (optional)
    eventVideosPatchInner: [{"id":"30a880ba-c406-4308-8031-eb39c334f8c2","url":"https://www.youtube.com/watch?v=cEItmb_a20D","language":"fr","copyrightHolder":"publiq"},{"id":"55f3859b-ad56-426e-acd8-435401372019","copyrightHolder":"Creative Commons"}],
  } satisfies PlacesVideosPatchRequest;

  try {
    const data = await api.placesVideosPatch(body);
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
| **placeId** | `string` | Unique id of an place, in the format of a UUID | [Defaults to `undefined`] |
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

