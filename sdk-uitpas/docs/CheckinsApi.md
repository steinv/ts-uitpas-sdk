# CheckinsApi

All URIs are relative to *https://api-test.uitpas.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCheckinStatus**](CheckinsApi.md#getcheckinstatus) | **GET** /checkin-status | Get checkin status |
| [**postCheckins**](CheckinsApi.md#postcheckins) | **POST** /checkins | Check in passholder |



## getCheckinStatus

> CheckinStatus getCheckinStatus(uitpasNumber, eventId)

Get checkin status

Retrieves the current checkin status for a passholder and a given event.  The caller of this request must have &#x60;CHECKINS_WRITE&#x60; permission for the organizer of the given event.

### Example

```ts
import {
  Configuration,
  CheckinsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetCheckinStatusRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new CheckinsApi(config);

  const body = {
    // string | UiTPAS number of the passholder who wants to checkin
    uitpasNumber: uitpasNumber_example,
    // string | Id of the event where the passholder wants to checkin
    eventId: eventId_example,
  } satisfies GetCheckinStatusRequest;

  try {
    const data = await api.getCheckinStatus(body);
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
| **uitpasNumber** | `string` | UiTPAS number of the passholder who wants to checkin | [Defaults to `undefined`] |
| **eventId** | `string` | Id of the event where the passholder wants to checkin | [Defaults to `undefined`] |

### Return type

[**CheckinStatus**](CheckinStatus.md)

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
| **404** | Not Found  Possible error types:  * https://api.publiq.be/probs/uitpas/event-not-found * https://api.publiq.be/probs/uitpas/passholder-not-found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postCheckins

> Checkin postCheckins(checkin)

Check in passholder

Check in a passholder at a given event.  You will need: - The &#x60;uitpasNumber&#x60; of the passholder - The &#x60;eventId&#x60; of the UiTdatabank event.  &gt; Checking in a passholder is only possible during the opening hours of the event and a certain period before and after. A client will receive an error of type &#x60;https://api.publiq.be/probs/uitpas/checkin-not-allowed&#x60; when a check-in is not allowed. The &#x60;endUserMessage&#x60; field of that error response will also contain a user-readable error message.  If you need to check-in a passholder based on a check-in code (e.g. a QR code), use [POST /passholders/passholderId/checkins](/reference/uitpas.json/paths/~1passholders~1passholderId~1checkins/post) instead.  The caller of this request must have &#x60;CHECKINS_WRITE&#x60; permission for the organizer of the given event. 

### Example

```ts
import {
  Configuration,
  CheckinsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PostCheckinsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new CheckinsApi(config);

  const body = {
    // Checkin | Check-in request body (optional)
    checkin: {"eventId":"CBA2D826-9E85-47BD-8E0B-2BC7882E68FB","uitpasNumber":"0900000095902"},
  } satisfies PostCheckinsRequest;

  try {
    const data = await api.postCheckins(body);
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
| **checkin** | [Checkin](Checkin.md) | Check-in request body | [Optional] |

### Return type

[**Checkin**](Checkin.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitpas/checkin-not-allowed * https://api.publiq.be/probs/uitpas/event-not-found * https://api.publiq.be/probs/uitpas/passholder-not-found * https://api.publiq.be/probs/uitpas/invalid-uitpasnumber * https://api.publiq.be/probs/uitpas/invalid-card * https://api.publiq.be/probs/uitpas/invalid-card-status * https://api.publiq.be/probs/uitpas/passholder-no-active-cardsystems  |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

