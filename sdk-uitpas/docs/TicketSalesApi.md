# TicketSalesApi

All URIs are relative to *https://api-test.uitpas.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteTicketSales**](TicketSalesApi.md#deleteticketsales) | **DELETE** /ticket-sales/{ticketSaleId} | Cancel a ticket sale registration |
| [**getTariffs**](TicketSalesApi.md#gettariffs) | **GET** /tariffs | Get tariffs |
| [**getTariffsStatic**](TicketSalesApi.md#gettariffsstatic) | **GET** /tariffs/static | Get static tariffs without passholder |
| [**getTicketSales**](TicketSalesApi.md#getticketsales) | **GET** /ticket-sales | Retrieve existing ticket sales |
| [**postTicketSales**](TicketSalesApi.md#postticketsales) | **POST** /ticket-sales | Register ticket sale(s) |



## deleteTicketSales

> deleteTicketSales(ticketSaleId)

Cancel a ticket sale registration

Cancels a single ticket sale registration by its id. (Returned in the response of the ticket sale registration request.)  The caller of this request must have &#x60;TICKETSALES_REGISTER&#x60; permission for the organizer of the event of the ticketsale.

### Example

```ts
import {
  Configuration,
  TicketSalesApi,
} from '@steinv/publiq-uitpas-sdk';
import type { DeleteTicketSalesRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new TicketSalesApi(config);

  const body = {
    // string | Id of the previously registered ticket sale
    ticketSaleId: ticketSaleId_example,
  } satisfies DeleteTicketSalesRequest;

  try {
    const data = await api.deleteTicketSales(body);
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
| **ticketSaleId** | `string` | Id of the previously registered ticket sale | [Defaults to `undefined`] |

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
| **204** | No content. The ticket sale was successfully canceled. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTariffs

> TariffsResponse getTariffs(regularPrice, eventId, uitpasNumber, type)

Get tariffs

Returns the possible UiTPAS discounted **tariffs for an event and a passholder**.  This UiTPAS tariffs are calculated based on:  - **The regular price** of the ticket. This is the price your user would have to pay for the specific ticket without UiTPAS discount. - **The UiTPAS number** of the passholder. UiTPAS discounts are personal so it\&#39;s important to identify the passholder to retrieve a list of possible tariffs. - **The event id** of the UiTdatabank event. UiTPAS discounts are limited to specific UiTdatabank events, so it\&#39;s important to specify the event id to retrieve a list of possible tariffs.  &gt; ##### Important &gt; The regular price of the ticket should generally be one of the price categories set on the event in UiTdatabank to make financial reporting clearer.  The caller of this request must have &#x60;TARIFFS_READ&#x60; permission for the organizer of the given event.

### Example

```ts
import {
  Configuration,
  TicketSalesApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetTariffsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new TicketSalesApi(config);

  const body = {
    // number | The regular price the passholder would have to pay for the ticket if they are not eligible for discounts
    regularPrice: 8.14,
    // string | The id of the event for which the ticket is sold
    eventId: eventId_example,
    // string | UiTPAS Number identifying the passholder who wants to buy a ticket
    uitpasNumber: uitpasNumber_example,
    // 'ANY' | 'SOCIALTARIFF' | 'COUPON' | Return only available tariffs of this type. Defaults to ANY type. (optional)
    type: type_example,
  } satisfies GetTariffsRequest;

  try {
    const data = await api.getTariffs(body);
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
| **regularPrice** | `number` | The regular price the passholder would have to pay for the ticket if they are not eligible for discounts | [Defaults to `undefined`] |
| **eventId** | `string` | The id of the event for which the ticket is sold | [Defaults to `undefined`] |
| **uitpasNumber** | `string` | UiTPAS Number identifying the passholder who wants to buy a ticket | [Defaults to `undefined`] |
| **type** | `ANY`, `SOCIALTARIFF`, `COUPON` | Return only available tariffs of this type. Defaults to ANY type. | [Optional] [Defaults to `&#39;ANY&#39;`] [Enum: ANY, SOCIALTARIFF, COUPON] |

### Return type

[**TariffsResponse**](TariffsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request. The response will include a JSON body with more details in the form of a RFC7807 error model. Possible error types:  * https://api.publiq.be/probs/uitpas/event-not-found * https://api.publiq.be/probs/uitpas/passholder-not-found * https://api.publiq.be/probs/uitpas/passholder-no-active-cardsystems * https://api.publiq.be/probs/uitpas/social-tariff-expired * https://api.publiq.be/probs/uitpas/social-tariff-suspended * https://api.publiq.be/probs/uitpas/invalid-uitpasnumber * https://api.publiq.be/probs/uitpas/invalid-card * https://api.publiq.be/probs/uitpas/invalid-card-status   |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTariffsStatic

> TariffsResponse getTariffsStatic(regularPrice, eventId)

Get static tariffs without passholder

Returns the **static** UiTPAS discounted **tariffs for an event**.      &lt;!-- theme: warning --&gt;      &gt; ##### Important &gt; UiTPAS tariffs are different for each indiviual passholder, but this endpoint does NOT take the passholder into consideration. Use this endpoint only in specific cases, e.g. when listing the UiTPAS tariff before the passholder is known. The actual passholder tariffs might be different than this response. Use [GET /tariffs](/reference/uitpas.json/paths/~1tariffs/get) to retrieve indidivual tariffs for a passholder.     This UiTPAS tariffs are calculated based on:  - **The regular price** of the ticket. This is the price your user would have to pay for the specific ticket without UiTPAS discount. - **The event id** of the UiTdatabank event. UiTPAS discounts are limited to specific UiTdatabank events, so it\&#39;s important to specify the event id to retrieve a list of possible tariffs.  Because the passholder is unknown, UiTPAS will return the tariffs for a passholder with social tariff, who lives in the same region as the event organizer.  The caller of this request must have &#x60;TARIFFS_READ&#x60; permission for the organizer of the given event.

### Example

```ts
import {
  Configuration,
  TicketSalesApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetTariffsStaticRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new TicketSalesApi(config);

  const body = {
    // number | The regular price the passholder would have to pay for the ticket if they are not eligible for discounts
    regularPrice: 8.14,
    // string | The id of the event for which the ticket is sold
    eventId: eventId_example,
  } satisfies GetTariffsStaticRequest;

  try {
    const data = await api.getTariffsStatic(body);
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
| **regularPrice** | `number` | The regular price the passholder would have to pay for the ticket if they are not eligible for discounts | [Defaults to `undefined`] |
| **eventId** | `string` | The id of the event for which the ticket is sold | [Defaults to `undefined`] |

### Return type

[**TariffsResponse**](TariffsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request. The response will include a JSON body with more details in the form of a RFC7807 error model. Possible error types:  * https://api.publiq.be/probs/uitpas/event-not-found * https://api.publiq.be/probs/uitpas/social-tariff-not-available   |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTicketSales

> TicketSalesPaginatedResponse getTicketSales(eventId, start, limit)

Retrieve existing ticket sales

Retrieve ticket sales based on search parameters.  The caller of this request must have &#x60;TICKETSALES_SEARCH&#x60; permission for the organizer of the given event.  The &#x60;passholder&#x60; is included in the response if applicable (passholder can be empty in some cases, e.g. for group passes), and only if the caller of this request has PASSHOLDERS_SEARCH permission.

### Example

```ts
import {
  Configuration,
  TicketSalesApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetTicketSalesRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new TicketSalesApi(config);

  const body = {
    // string | The ID of the UiTdatabank event.
    eventId: eventId_example,
    // number | Position to start returning results from. When set to `0` the results starting from the very first position will be returned. When set to for example `10` the results 0-9 will be skipped and the ones starting from position 10 will be returned. Can be used in combination with `limit` for pagination. (optional)
    start: 56,
    // number | Maximum amount of results to return. Can be used in combination with `start` for pagination. **Important**: the maximum value for `limit` is `500`. Exceeding this value will result in an error. (optional)
    limit: 56,
  } satisfies GetTicketSalesRequest;

  try {
    const data = await api.getTicketSales(body);
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
| **eventId** | `string` | The ID of the UiTdatabank event. | [Defaults to `undefined`] |
| **start** | `number` | Position to start returning results from. When set to &#x60;0&#x60; the results starting from the very first position will be returned. When set to for example &#x60;10&#x60; the results 0-9 will be skipped and the ones starting from position 10 will be returned. Can be used in combination with &#x60;limit&#x60; for pagination. | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum amount of results to return. Can be used in combination with &#x60;start&#x60; for pagination. **Important**: the maximum value for &#x60;limit&#x60; is &#x60;500&#x60;. Exceeding this value will result in an error. | [Optional] [Defaults to `20`] |

### Return type

[**TicketSalesPaginatedResponse**](TicketSalesPaginatedResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/url/query-limit-exceeded  The detail property might include more information for the client developer.  |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postTicketSales

> Array&lt;TicketSale&gt; postTicketSales(ticketSale)

Register ticket sale(s)

Registers one or more new ticket sales **with a discounted UiTPAS tariff**, so the UiTPAS organiser can get reimbursed for the discount.  Before you can register a discounted ticket sale, you will need to request the possible discounted tariffs from the &#x60;GET /tariffs&#x60; endpoint and let your end user pick one of the available tariffs. Afterward, you can register a ticket sale using this endpoint.   You will need:  - The &#x60;uitpasNumber&#x60; of the passholder buying the ticket. - The &#x60;eventId&#x60; of the UiTdatabank event. - The chosen &#x60;tariff&#x60; from the &#x60;GET /tariffs&#x60; request. (only the &#x60;id&#x60; is required) - The &#x60;regularPrice&#x60; the passholder would normally have to pay for this ticket  Optionally you can include: - a &#x60;regularPriceLabel&#x60; describing the regular price if you have multiple price  categories, which can be useful in the financial reporting overview.  If you want to register more than one ticket sale for the same passholder, for the same event, at the same tariff, use multiple &#x60;TicketSale&#x60; objects in this request. Do note this is only possible if &#x60;remaining&#x60; was higher than one in the &#x60;GET /tariffs&#x60; request.  The &#x60;passholder&#x60; field of &#x60;TicketSale&#x60; is ignored in the request body. It is included in the response if applicable (passholder can be empty in some cases, e.g. for group passes), but only if the caller of this request has &#x60;PASSHOLDERS_SEARCH&#x60; permission.  &lt;!-- theme: warning --&gt;  &gt; ##### Error handling &gt; **If one of the ticket sales is invalid** (for example the chosen tariff is incorrect or expired), **none of the ticket sales will be registered**. You will instead get an error response with more details about the problem, and can then retry the registration without the incorrect ticket sales or ask the end user to change the tickets and/or tariffs that they want.  The caller of this request must have &#x60;TICKETSALES_REGISTER&#x60;  permission for the organizer of the given event. 

### Example

```ts
import {
  Configuration,
  TicketSalesApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PostTicketSalesRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new TicketSalesApi(config);

  const body = {
    // Array<TicketSale> | One or more new ticket sales to register. (optional)
    ticketSale: [{"tariff":{"id":"COUPON1234"},"uitpasNumber":"0560002524314","eventId":"31e926e2-a35f-11eb-bcbc-0242ac130002","regularPrice":10,"regularPriceLabel":"Optional descriptive label of the regular price. Used in financial reporting."}],
  } satisfies PostTicketSalesRequest;

  try {
    const data = await api.postTicketSales(body);
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
| **ticketSale** | `Array<TicketSale>` | One or more new ticket sales to register. | [Optional] |

### Return type

[**Array&lt;TicketSale&gt;**](TicketSale.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ticket sale registration(s) succeeded |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitpas/social-tariff-expired * https://api.publiq.be/probs/uitpas/social-tariff-suspended * https://api.publiq.be/probs/uitpas/maximum-reached * https://api.publiq.be/probs/uitpas/invalid-number-of-tickets * https://api.publiq.be/probs/uitpas/event-not-found * https://api.publiq.be/probs/uitpas/passholder-not-found * https://api.publiq.be/probs/uitpas/invalid-uitpasnumber * https://api.publiq.be/probs/uitpas/invalid-card * https://api.publiq.be/probs/uitpas/invalid-card-status * https://api.publiq.be/probs/uitpas/passholder-no-active-cardsystems * https://api.publiq.be/probs/uitpas/invalid-coupon   The type indicates the error on one of the failed ticket sale registrations. All other ticket sale registration in the request will be rolled back in case of an error.  The property &#x60;jsonPointer&#x60; will a referene to the erroneous &#x60;TicketSaleRequest&#x60; object if applicable. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

