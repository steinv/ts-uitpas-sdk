# OrdersApi

All URIs are relative to *https://api-test.uitpas.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getOrdersOrderid**](OrdersApi.md#getordersorderid) | **GET** /orders/{orderId} | Retrieve order |
| [**postOrders**](OrdersApi.md#postorders) | **POST** /orders | Create online order |



## getOrdersOrderid

> Order getOrdersOrderid(orderId)

Retrieve order

Retrieve order by ID.  The caller of this method, identified by client identification, client access token or user access token, must have ORDERS_READ permission.  In case this order is retrieved using client identification, &#x60;mainPassholder&#x60; and &#x60;extraPassholders&#x60; are left out of the response.  This endpoint is rate limited.

### Example

```ts
import {
  Configuration,
  OrdersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetOrdersOrderidRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CUSTOM_TOKEN
    apiKey: "YOUR API KEY",
  });
  const api = new OrdersApi(config);

  const body = {
    // string | ID of the order
    orderId: orderId_example,
  } satisfies GetOrdersOrderidRequest;

  try {
    const data = await api.getOrdersOrderid(body);
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
| **orderId** | `string` | ID of the order | [Defaults to `undefined`] |

### Return type

[**Order**](Order.md)

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
| **429** | Too Many Requests  Possible error types:  * https://api.publiq.be/probs/uitpas/rate-limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postOrders

> Order postOrders(order)

Create online order

Create an online order for one or more passholders.  This caller of this method, identified by client identification, client access token or user access token, must have ORDERS_CREATE permission.

### Example

```ts
import {
  Configuration,
  OrdersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PostOrdersRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CLIENT_IDENTIFICATION
    apiKey: "YOUR API KEY",
  });
  const api = new OrdersApi(config);

  const body = {
    // Order | Details of the new order to create. (optional)
    order: {"mainPassholderRegistration":{"name":"Peeters","firstName":"Marc","inszNumber":"00000009007","email":"marc.peeters@example.com","dateOfBirth":"2000-01-01","registrationOrganizer":{"id":"abc12345"},"address":{"street":"Grote markt 12","postalCode":"9300","city":"Aalst","country":"be"},"optInPreferences":{"serviceMails":true,"infoMails":true,"milestoneMails":true,"sms":false,"post":true},"nationality":"Belg","legalTermsPaper":false,"legalTermsDigital":true,"parentalConsent":false,"registrationCardSystemId":1}},
  } satisfies PostOrdersRequest;

  try {
    const data = await api.postOrders(body);
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
| **order** | [Order](Order.md) | Details of the new order to create. | [Optional] |

### Return type

[**Order**](Order.md)

### Authorization

[CLIENT_IDENTIFICATION](../README.md#CLIENT_IDENTIFICATION)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitpas/organizer-not-found * https://api.publiq.be/probs/uitpas/cardsystem-not-found * https://api.publiq.be/probs/uitpas/invalid-city * https://api.publiq.be/probs/uitpas/invalid-insz-number * https://api.publiq.be/probs/uitpas/email-already-used * https://api.publiq.be/probs/uitpas/invalid-social-tariff-validation-token  The detail property might include more information for the client developer. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

