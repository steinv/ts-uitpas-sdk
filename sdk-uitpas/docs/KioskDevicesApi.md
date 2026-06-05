# KioskDevicesApi

All URIs are relative to *https://api-test.uitpas.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteKiosksEvents**](KioskDevicesApi.md#deletekiosksevents) | **DELETE** /kiosk-devices/events | Delete configured event |
| [**getKioskDevices**](KioskDevicesApi.md#getkioskdevices) | **GET** /kiosk-devices | Retrieve kiosk |
| [**getKiosksCheckins**](KioskDevicesApi.md#getkioskscheckins) | **GET** /kiosk-devices/checkins | Retrieve the current checkin event |
| [**getKiosksChipNumbersChipNumber**](KioskDevicesApi.md#getkioskschipnumberschipnumber) | **GET** /kiosk-devices/chip-numbers/{chipNumber} | Retrieve total points of a passholder by chip number |
| [**getKiosksEvent**](KioskDevicesApi.md#getkiosksevent) | **GET** /kiosk-devices/events | Retrieve configured event |
| [**postKiosksCheckin**](KioskDevicesApi.md#postkioskscheckin) | **POST** /kiosk-devices/checkins | Checkin passholder via kiosk |
| [**putKiosksEvents**](KioskDevicesApi.md#putkiosksevents) | **PUT** /kiosk-devices/events | Configure event |
| [**putKiosksSetup**](KioskDevicesApi.md#putkioskssetup) | **PUT** /kiosk-devices/setup | Setup new kiosk device |



## deleteKiosksEvents

> deleteKiosksEvents()

Delete configured event

Delete configured event  The device id of the kiosk must be specicied in the &#x60;x-custom-token&#x60; header.  &lt;!-- theme: warning --&gt;  &gt; **This endpoint is exclusively for use by Kiosk devices themselves**. It cannot be used by other applications to manage the device.

### Example

```ts
import {
  Configuration,
  KioskDevicesApi,
} from '@steinv/publiq-uitpas-sdk';
import type { DeleteKiosksEventsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CUSTOM_TOKEN
    apiKey: "YOUR API KEY",
  });
  const api = new KioskDevicesApi(config);

  try {
    const data = await api.deleteKiosksEvents();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

[CUSTOM_TOKEN](../README.md#CUSTOM_TOKEN)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getKioskDevices

> KioskDevice getKioskDevices()

Retrieve kiosk

Retrieve current kiosk.  The device id of the kiosk must be specicied in the &#x60;x-custom-token&#x60; header.  &lt;!-- theme: warning --&gt;  &gt; **This endpoint is exclusively for use by Kiosk devices themselves**. It cannot be used by other applications to manage the device.

### Example

```ts
import {
  Configuration,
  KioskDevicesApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetKioskDevicesRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CUSTOM_TOKEN
    apiKey: "YOUR API KEY",
  });
  const api = new KioskDevicesApi(config);

  try {
    const data = await api.getKioskDevices();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**KioskDevice**](KioskDevice.md)

### Authorization

[CUSTOM_TOKEN](../README.md#CUSTOM_TOKEN)

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


## getKiosksCheckins

> KioskDeviceEvent getKiosksCheckins()

Retrieve the current checkin event

Retrieve the current event of the kiosk. When returned, checkin on this kiosk and event is allowed.  The following logic is being used to determine the current checkin event: * is the event configured and is checkin currently allowed for that event? then use this event. * otherwise, the most suitable event is autodetected based on the organizers and locations of the kiosk.  The device id of the kiosk must be specicied in the &#x60;x-custom-token&#x60; header.  &lt;!-- theme: warning --&gt;  &gt; **This endpoint is exclusively for use by Kiosk devices themselves**. It cannot be used by other applications to manage the device.

### Example

```ts
import {
  Configuration,
  KioskDevicesApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetKiosksCheckinsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CUSTOM_TOKEN
    apiKey: "YOUR API KEY",
  });
  const api = new KioskDevicesApi(config);

  try {
    const data = await api.getKiosksCheckins();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**KioskDeviceEvent**](KioskDeviceEvent.md)

### Authorization

[CUSTOM_TOKEN](../README.md#CUSTOM_TOKEN)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getKiosksChipNumbersChipNumber

> KioskPass getKiosksChipNumbersChipNumber(chipNumber)

Retrieve total points of a passholder by chip number

Retrieve total points of a passholder by chip number.  The device id of the kiosk must be specicied in the &#x60;x-custom-token&#x60; header.  &lt;!-- theme: warning --&gt;  &gt; **This endpoint is exclusively for use by Kiosk devices themselves**. It cannot be used by other applications to manage the device.

### Example

```ts
import {
  Configuration,
  KioskDevicesApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetKiosksChipNumbersChipNumberRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CUSTOM_TOKEN
    apiKey: "YOUR API KEY",
  });
  const api = new KioskDevicesApi(config);

  const body = {
    // string | Hexadecimal notation of the chip number of an individual UiTPAS card.
    chipNumber: chipNumber_example,
  } satisfies GetKiosksChipNumbersChipNumberRequest;

  try {
    const data = await api.getKiosksChipNumbersChipNumber(body);
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
| **chipNumber** | `string` | Hexadecimal notation of the chip number of an individual UiTPAS card. | [Defaults to `undefined`] |

### Return type

[**KioskPass**](KioskPass.md)

### Authorization

[CUSTOM_TOKEN](../README.md#CUSTOM_TOKEN)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request. Possible error types:  * https://api.publiq.be/probs/uitpas/card-blocked  |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getKiosksEvent

> KioskDeviceEvent getKiosksEvent()

Retrieve configured event

Retrieve the configured event of the kiosk.  This is a configuration endpoint, if you need to retrieve the **current** event, please use &#x60;GET /kiosk-devices/checkins&#x60;  The device id of the kiosk must be specicied in the &#x60;x-custom-token&#x60; header.  &lt;!-- theme: warning --&gt;  &gt; **This endpoint is exclusively for use by Kiosk devices themselves**. It cannot be used by other applications to manage the device.

### Example

```ts
import {
  Configuration,
  KioskDevicesApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetKiosksEventRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CUSTOM_TOKEN
    apiKey: "YOUR API KEY",
  });
  const api = new KioskDevicesApi(config);

  try {
    const data = await api.getKiosksEvent();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**KioskDeviceEvent**](KioskDeviceEvent.md)

### Authorization

[CUSTOM_TOKEN](../README.md#CUSTOM_TOKEN)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postKiosksCheckin

> KioskDeviceCheckinResponse postKiosksCheckin(kioskDeviceCheckinRequest)

Checkin passholder via kiosk

Checkin a passholder with the given NFC chipnumber at the kiosk.  The device id of the kiosk must be specicied in the &#x60;x-custom-token&#x60; header.  &lt;!-- theme: warning --&gt;  &gt; **This endpoint is exclusively for use by Kiosk devices themselves**. It cannot be used by other applications to manage the device.

### Example

```ts
import {
  Configuration,
  KioskDevicesApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PostKiosksCheckinRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CUSTOM_TOKEN
    apiKey: "YOUR API KEY",
  });
  const api = new KioskDevicesApi(config);

  const body = {
    // KioskDeviceCheckinRequest | Kiosk checkin request (optional)
    kioskDeviceCheckinRequest: {"chipNumber":"042F51B2712380"},
  } satisfies PostKiosksCheckinRequest;

  try {
    const data = await api.postKiosksCheckin(body);
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
| **kioskDeviceCheckinRequest** | [KioskDeviceCheckinRequest](KioskDeviceCheckinRequest.md) | Kiosk checkin request | [Optional] |

### Return type

[**KioskDeviceCheckinResponse**](KioskDeviceCheckinResponse.md)

### Authorization

[CUSTOM_TOKEN](../README.md#CUSTOM_TOKEN)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitpas/card-blocked * https://api.publiq.be/probs/uitpas/checkin-not-allowed * https://api.publiq.be/probs/uitpas/event-not-found * https://api.publiq.be/probs/uitpas/passholder-not-found * https://api.publiq.be/probs/uitpas/maximum-reached |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## putKiosksEvents

> putKiosksEvents(kioskDeviceEventRequest)

Configure event

Update the current event of the kiosk.  The device id of the kiosk must be specicied in the &#x60;x-custom-token&#x60; header.  &lt;!-- theme: warning --&gt;  &gt; **This endpoint is exclusively for use by Kiosk devices themselves**. It cannot be used by other applications to manage the device.

### Example

```ts
import {
  Configuration,
  KioskDevicesApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PutKiosksEventsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CUSTOM_TOKEN
    apiKey: "YOUR API KEY",
  });
  const api = new KioskDevicesApi(config);

  const body = {
    // KioskDeviceEventRequest | Event (optional)
    kioskDeviceEventRequest: {"id":"c7cf303a-8d92-4427-84e3-0cb508f7e4b6"},
  } satisfies PutKiosksEventsRequest;

  try {
    const data = await api.putKiosksEvents(body);
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
| **kioskDeviceEventRequest** | [KioskDeviceEventRequest](KioskDeviceEventRequest.md) | Event | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

[CUSTOM_TOKEN](../README.md#CUSTOM_TOKEN)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## putKiosksSetup

> KioskDevice putKiosksSetup(kioskDeviceSetup)

Setup new kiosk device

Configure new kiosk device by looking it up by name and storing the provided device id. After this endpoint has been invoked, the other kiosk APIs can be used with the newly configured device id as &#x60;x-custom-token&#x60;.  In case no kiosk is found or the kiosk was already setup an error is returned:  * https://api.publiq.be/probs/uitpas/kiosk-not-found * https://api.publiq.be/probs/uitpas/kiosk-already-configured  The **configuration code** of the device must be specicied in the &#x60;x-custom-token&#x60; header. This endpoint is rate limited to prevent abuse.  &lt;!-- theme: warning --&gt;  &gt; **This endpoint is exclusively for use by Kiosk devices themselves**. It cannot be used by other applications to manage the device.

### Example

```ts
import {
  Configuration,
  KioskDevicesApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PutKiosksSetupRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CUSTOM_TOKEN
    apiKey: "YOUR API KEY",
  });
  const api = new KioskDevicesApi(config);

  const body = {
    // KioskDeviceSetup | Kiosk Setup (optional)
    kioskDeviceSetup: {"name":"CID-PPT-001","deviceId":"ebee0a27-2dba-4231-aaae-15077884fa75"},
  } satisfies PutKiosksSetupRequest;

  try {
    const data = await api.putKiosksSetup(body);
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
| **kioskDeviceSetup** | [KioskDeviceSetup](KioskDeviceSetup.md) | Kiosk Setup | [Optional] |

### Return type

[**KioskDevice**](KioskDevice.md)

### Authorization

[CUSTOM_TOKEN](../README.md#CUSTOM_TOKEN)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitpas/kiosk-not-found * https://api.publiq.be/probs/uitpas/kiosk-already-configured * https://api.publiq.be/probs/uitpas/kiosk-device-already-in-use |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

