# KiosksApi

All URIs are relative to *https://api-test.uitpas.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteKiosksKioskIdFixedEvent**](KiosksApi.md#deletekioskskioskidfixedevent) | **DELETE** /kiosks/{kioskId}/fixed-event | Remove fixed event for kiosk |
| [**getKiosks**](KiosksApi.md#getkiosks) | **GET** /kiosks | Retrieve kiosks |
| [**getKiosksKioskIdFixedEvent**](KiosksApi.md#getkioskskioskidfixedevent) | **GET** /kiosks/{kioskId}/fixed-event | Retrieve fixed event of kiosk |
| [**putKiosksKioskIdFixedEvent**](KiosksApi.md#putkioskskioskidfixedevent) | **PUT** /kiosks/{kioskId}/fixed-event | Configure fixed event for kiosk |



## deleteKiosksKioskIdFixedEvent

> deleteKiosksKioskIdFixedEvent(kioskId)

Remove fixed event for kiosk

Remove the configured event for this kiosk.  The caller of this request must have &#x60;KIOSKS_WRITE&#x60; permission for the organizer of the kiosk or the caller must be an organizer admin user (any type) of the organizer of the kiosk.

### Example

```ts
import {
  Configuration,
  KiosksApi,
} from '@steinv/publiq-uitpas-sdk';
import type { DeleteKiosksKioskIdFixedEventRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new KiosksApi(config);

  const body = {
    // string | The ID of the kiosk
    kioskId: kioskId_example,
  } satisfies DeleteKiosksKioskIdFixedEventRequest;

  try {
    const data = await api.deleteKiosksKioskIdFixedEvent(body);
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
| **kioskId** | `string` | The ID of the kiosk | [Defaults to `undefined`] |

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
| **404** | Not Found. Possible error types:  * https://api.publiq.be/probs/url/not-found (in case kiosk is not found) * https://api.publiq.be/probs/uitpas/event-not-found (in case no event was configured) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getKiosks

> KiosksPaginatedCollection getKiosks(organizerId, start, limit)

Retrieve kiosks

Retrieve active kiosk devices.  The caller of this request must have &#x60;KIOSKS_READ&#x60; permission or the caller must be an organizer admin user (any type) of the given organizer. In that case, &#x60;organizerId&#x60; is mandatory and must match the organizer of the admin user.

### Example

```ts
import {
  Configuration,
  KiosksApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetKiosksRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new KiosksApi(config);

  const body = {
    // string | Filter the kiosk results on this organizer (optional)
    organizerId: organizerId_example,
    // number | Position to start returning results from. When set to `0` the results starting from the very first position will be returned. When set to for example `10` the results 0-9 will be skipped and the ones starting from position 10 will be returned. Can be used in combination with `limit` for pagination. (optional)
    start: 56,
    // number | Maximum amount of results to return. Can be used in combination with `start` for pagination. **Important**: the maximum value for `limit` is `500`. Exceeding this value will result in an error. (optional)
    limit: 56,
  } satisfies GetKiosksRequest;

  try {
    const data = await api.getKiosks(body);
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
| **organizerId** | `string` | Filter the kiosk results on this organizer | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Position to start returning results from. When set to &#x60;0&#x60; the results starting from the very first position will be returned. When set to for example &#x60;10&#x60; the results 0-9 will be skipped and the ones starting from position 10 will be returned. Can be used in combination with &#x60;limit&#x60; for pagination. | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum amount of results to return. Can be used in combination with &#x60;start&#x60; for pagination. **Important**: the maximum value for &#x60;limit&#x60; is &#x60;500&#x60;. Exceeding this value will result in an error. | [Optional] [Defaults to `20`] |

### Return type

[**KiosksPaginatedCollection**](KiosksPaginatedCollection.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getKiosksKioskIdFixedEvent

> KioskDeviceEvent getKiosksKioskIdFixedEvent(kioskId)

Retrieve fixed event of kiosk

Retrieve configured event of this kiosk.  This request returns &#x60;404 NOT FOUND&#x60; when no event is configured. In that case the kiosk will auto-detect its event.  The caller of this request must have &#x60;KIOSKS_READ&#x60; permission for the organizer of the kiosk or the caller must be an organizer admin user (any type) of the organizer of the kiosk.

### Example

```ts
import {
  Configuration,
  KiosksApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetKiosksKioskIdFixedEventRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new KiosksApi(config);

  const body = {
    // string | The ID of the kiosk
    kioskId: kioskId_example,
  } satisfies GetKiosksKioskIdFixedEventRequest;

  try {
    const data = await api.getKiosksKioskIdFixedEvent(body);
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
| **kioskId** | `string` | The ID of the kiosk | [Defaults to `undefined`] |

### Return type

[**KioskDeviceEvent**](KioskDeviceEvent.md)

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
| **404** | Not Found. Possible error types:  * https://api.publiq.be/probs/url/not-found (in case kiosk is not found) * https://api.publiq.be/probs/uitpas/event-not-found (in case no event was configured) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## putKiosksKioskIdFixedEvent

> putKiosksKioskIdFixedEvent(kioskId, kioskDeviceEventRequest)

Configure fixed event for kiosk

Configured event for this kiosk.  The caller of this request must have &#x60;KIOSKS_WRITE&#x60; permission for the organizer of the kiosk or the caller must be an organizer admin user (any type) of the organizer of the kiosk.

### Example

```ts
import {
  Configuration,
  KiosksApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PutKiosksKioskIdFixedEventRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new KiosksApi(config);

  const body = {
    // string | The ID of the kiosk
    kioskId: kioskId_example,
    // KioskDeviceEventRequest | Kiosk event request body (optional)
    kioskDeviceEventRequest: ...,
  } satisfies PutKiosksKioskIdFixedEventRequest;

  try {
    const data = await api.putKiosksKioskIdFixedEvent(body);
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
| **kioskId** | `string` | The ID of the kiosk | [Defaults to `undefined`] |
| **kioskDeviceEventRequest** | [KioskDeviceEventRequest](KioskDeviceEventRequest.md) | Kiosk event request body | [Optional] |

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
| **204** | Updated. No Content |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitpas/event-not-found * https://api.publiq.be/probs/uitpas/event-not-acceptable |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

