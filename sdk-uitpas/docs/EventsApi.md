# EventsApi

All URIs are relative to *https://api-test.uitpas.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getEventsCardSystems**](EventsApi.md#geteventscardsystems) | **GET** /events/{eventId}/card-systems | Get event card systems |
| [**getEventsQrCheckincodesDownloadlink**](EventsApi.md#geteventsqrcheckincodesdownloadlink) | **GET** /events/{eventId}/qr-checkincodes/download-link | Get event QR checkin code as download link |
| [**getEventsSettings**](EventsApi.md#geteventssettings) | **GET** /events/{eventId}/settings | Get event settings |
| [**putEventsCardSystems**](EventsApi.md#puteventscardsystems) | **PUT** /events/{eventId}/card-systems | Update event card systems |
| [**putEventsSettings**](EventsApi.md#puteventssettings) | **PUT** /events/{eventId}/settings | Update event settings |



## getEventsCardSystems

> Array&lt;EventCardSystem&gt; getEventsCardSystems(eventId)

Get event card systems

Retrieve social tariff settings specific for this card system and the given postal code.  This caller of this method, identified by client identification, client access token or user access token, does not require any permissions.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetEventsCardSystemsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | The id of the event
    eventId: eventId_example,
  } satisfies GetEventsCardSystemsRequest;

  try {
    const data = await api.getEventsCardSystems(body);
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
| **eventId** | `string` | The id of the event | [Defaults to `undefined`] |

### Return type

[**Array&lt;EventCardSystem&gt;**](EventCardSystem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/event-not-found  The detail property might include more information for the client developer.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEventsQrCheckincodesDownloadlink

> DownloadLinkResponse getEventsQrCheckincodesDownloadlink(eventId, format)

Get event QR checkin code as download link

Get a temporary download link to the QR checkin code of the given event.  This endpoint allows you to obtain a short-lived, hassle-free download link for your QR checkin code. After generation, this link remains active for a limited time, enabling direct QR downloads without the need for additional authentication. This is in particular convenient for applications that need to offer this link to users to start the download.   The caller of this request must have &#x60;EVENTS_QR_CHECKINCODE&#x60; permission for the organizer of this event. 

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetEventsQrCheckincodesDownloadlinkRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | The id of the event
    eventId: eventId_example,
    // 'pdf' | 'zip' | format of the result file. (optional)
    format: format_example,
  } satisfies GetEventsQrCheckincodesDownloadlinkRequest;

  try {
    const data = await api.getEventsQrCheckincodesDownloadlink(body);
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
| **eventId** | `string` | The id of the event | [Defaults to `undefined`] |
| **format** | `pdf`, `zip` | format of the result file. | [Optional] [Defaults to `&#39;pdf&#39;`] [Enum: pdf, zip] |

### Return type

[**DownloadLinkResponse**](DownloadLinkResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/event-not-found  The detail property might include more information for the client developer.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEventsSettings

> EventSettings getEventsSettings(eventId)

Get event settings

Get event settings of the given event.  The caller of this request must have &#x60;EVENT_SETTINGS_READ&#x60; permission for the organizer of this event. 

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetEventsSettingsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | The id of the event
    eventId: eventId_example,
  } satisfies GetEventsSettingsRequest;

  try {
    const data = await api.getEventsSettings(body);
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
| **eventId** | `string` | The id of the event | [Defaults to `undefined`] |

### Return type

[**EventSettings**](EventSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/event-not-found  The detail property might include more information for the client developer.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## putEventsCardSystems

> putEventsCardSystems(eventId, eventCardSystem)

Update event card systems

Update the &#x60;EventCardSystem&#x60; objects of the given event.  The &#x60;EventCardSystem&#x60; object specifies that the event is available in this specific card system and optionally what manual distribution keys are enabled.  This update is used to toggle the &#x60;enabled&#x60; state for specific card systems or distribution keys.  To update the &#x60;enabled&#x60; state for card systems or distribution keys, you typically retrieve the possible &#x60;EventCardSystem&#x60; objects first using  &#x60;GET /events/{eventId}/card-systems&#x60;. You can then reuse the response from the &#x60;GET&#x60; request,  altering the &#x60;enabled&#x60; state. Note that you can also omit the name properties.  Only the required fields are used in this update request.  However, in case you know the card system(s) and distribution key(s) in advance, you might also make this &#x60;PUT&#x60; request without prior &#x60;GET&#x60; e.g. in case you need to disable all card systems for an event, you can simply put an empty array &#x60;[]&#x60; to indicate that (missing card systems in the array will be treated the same way as card systems with &#x60;enabled: \&quot;false\&quot;&#x60;). Also note the implementation of this &#x60;PUT&#x60; endpoint is robust enough to allow updating card systems before the event is known in UiTPAS. (so even before the &#x60;GET&#x60; returns a valid HTTP 200 response).   &lt;!-- theme: warning --&gt;  &gt; **This endpoint is only needed for exceptional cases.** In most cases card systems and distribution keys are set automatically on events, so you don\&#39;t need to retrieve or change them.  The caller of this request must have &#x60;EVENTS_UPDATE&#x60; permission for the organizer of this event or the caller of this request must have \&quot;Aanbod bewerken\&quot; permission in the UiTdatabank for the given event. 

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PutEventsCardSystemsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | The id of the event
    eventId: eventId_example,
    // Array<EventCardSystem> | New list of card systems that an event is related to. Will overwrite the old list. (optional)
    eventCardSystem: [{"id":1,"enabled":true,"manualDistributionKeys":[{"id":123,"enabled":true}]},{"id":8,"enabled":false}],
  } satisfies PutEventsCardSystemsRequest;

  try {
    const data = await api.putEventsCardSystems(body);
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
| **eventId** | `string` | The id of the event | [Defaults to `undefined`] |
| **eventCardSystem** | `Array<EventCardSystem>` | New list of card systems that an event is related to. Will overwrite the old list. | [Optional] |

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
| **204** | EventCardSytems updated. No content. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitpas/invalid-card-system * https://api.publiq.be/probs/uitpas/cardsystem-not-found * https://api.publiq.be/probs/uitpas/distributionkey-not-found * https://api.publiq.be/probs/uitpas/invalid-distributionkey * https://api.publiq.be/probs/uitpas/event-already-has-ticketsales  The detail property might include more information for the client developer. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/event-not-found  The detail property might include more information for the client developer. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## putEventsSettings

> putEventsSettings(eventId, eventSettings)

Update event settings

Update the event settings of the given event.  Make sure to perform a &#x60;GET events/{eventId}/settings&#x60; first, apply your changes and PUT the complete object using this request.  The caller of this request must have &#x60;EVENT_SETTINGS_UPDATE&#x60; permission for the organizer of this event. 

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PutEventsSettingsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new EventsApi(config);

  const body = {
    // string | The id of the event
    eventId: eventId_example,
    // EventSettings | Complete settings object of the given event.  (optional)
    eventSettings: {"checkinPoints":1,"id":"188dbbde-5ab1-497a-9083-8e56b5a33a1b","passholderTicketLimit":{"volume":1,"periodType":"ABSOLUTE"},"checkinLimit":{"volume":1,"periodType":"WEEK"}},
  } satisfies PutEventsSettingsRequest;

  try {
    const data = await api.putEventsSettings(body);
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
| **eventId** | `string` | The id of the event | [Defaults to `undefined`] |
| **eventSettings** | [EventSettings](EventSettings.md) | Complete settings object of the given event.  | [Optional] |

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
| **204** | EventCardSytems updated. No content. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data  The detail property might include more information for the client developer. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/event-not-found  The detail property might include more information for the client developer. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

