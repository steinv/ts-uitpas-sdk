# CardsApi

All URIs are relative to *https://api-test.uitpas.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCards**](CardsApi.md#getcards) | **GET** /cards | Retrieve card status |
| [**getCardsSocialTariffCardSystemIdActive**](CardsApi.md#getcardssocialtariffcardsystemidactive) | **GET** /cards/social-tariff/{cardSystemId}/active | Retrieve all valid social tariff cards |



## getCards

> Card getCards(uitpasNumber, chipNumber)

Retrieve card status

Retrieve card status for a given &#x60;uitpasNumber&#x60; or &#x60;chipNumber&#x60;.  The caller of this request must have &#x60;CARDS_READ&#x60; permission.

### Example

```ts
import {
  Configuration,
  CardsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetCardsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new CardsApi(config);

  const body = {
    // string | The UiTPAS number of the card to search (optional)
    uitpasNumber: uitpasNumber_example,
    // string | The chip number of the card to search (optional)
    chipNumber: chipNumber_example,
  } satisfies GetCardsRequest;

  try {
    const data = await api.getCards(body);
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
| **uitpasNumber** | `string` | The UiTPAS number of the card to search | [Optional] [Defaults to `undefined`] |
| **chipNumber** | `string` | The chip number of the card to search | [Optional] [Defaults to `undefined`] |

### Return type

[**Card**](Card.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request. Error type:  https://api.publiq.be/probs/uitpas/invalid-uitpas-number |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCardsSocialTariffCardSystemIdActive

> Array&lt;GetCardsSocialTariffCardSystemIdActive200ResponseInner&gt; getCardsSocialTariffCardSystemIdActive(cardSystemId)

Retrieve all valid social tariff cards

Retrieve all valid social tariff cards at this moment.  The response contains all current social tariff cards. Previously valid social tariff cards are omitted from the response. Please note that it is possible for a card to appear in this response, disappear some time later (e.g. temporarily blocked), and reappears again later (e.g. when unblocked).  The caller of this request must have &#x60;SOCIALTARIFF_EXPORT&#x60; permission.

### Example

```ts
import {
  Configuration,
  CardsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetCardsSocialTariffCardSystemIdActiveRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new CardsApi(config);

  const body = {
    // string | ID of the card system
    cardSystemId: cardSystemId_example,
  } satisfies GetCardsSocialTariffCardSystemIdActiveRequest;

  try {
    const data = await api.getCardsSocialTariffCardSystemIdActive(body);
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
| **cardSystemId** | `string` | ID of the card system | [Defaults to `undefined`] |

### Return type

[**Array&lt;GetCardsSocialTariffCardSystemIdActive200ResponseInner&gt;**](GetCardsSocialTariffCardSystemIdActive200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request. Error type:  https://api.publiq.be/probs/uitpas/invalid-uitpas-number |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

