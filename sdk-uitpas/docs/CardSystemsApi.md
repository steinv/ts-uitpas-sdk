# CardSystemsApi

All URIs are relative to *https://api-test.uitpas.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCardSystems**](CardSystemsApi.md#getcardsystems) | **GET** /card-systems | Search card systems |
| [**getCardSystemsCardsystemidMembershipPrices**](CardSystemsApi.md#getcardsystemscardsystemidmembershipprices) | **GET** /card-systems/{cardSystemId}/membership-prices | Retrieve membership prices for a card system |
| [**getCardsystemsCardsystemid**](CardSystemsApi.md#getcardsystemscardsystemid) | **GET** /card-systems/{cardSystemId} | Retrieve card system |
| [**getCardsystemsCardsystemidCitySettings**](CardSystemsApi.md#getcardsystemscardsystemidcitysettings) | **GET** /card-systems/{cardSystemId}/city-settings | Retrieve city settings for card system |
| [**getCardsystemsCardsystemidSocialTariffSettings**](CardSystemsApi.md#getcardsystemscardsystemidsocialtariffsettings) | **GET** /card-systems/{cardSystemId}/social-tariff-settings | Retrieve social tariff settings for card system |



## getCardSystems

> CardSystemsPaginatedCollection getCardSystems(permanent, start, limit, city, postalCode, sort, postalCodeSort)

Search card systems

Search card systems.  This caller of this method, identified by client identification, client access token or user access token, does not require any permissions.

### Example

```ts
import {
  Configuration,
  CardSystemsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetCardSystemsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CLIENT_IDENTIFICATION
    apiKey: "YOUR API KEY",
  });
  const api = new CardSystemsApi(config);

  const body = {
    // boolean | Include only permanent (`true`) card systems or temporary (`false`) card systems. (optional)
    permanent: true,
    // number | Position to start returning results from. When set to `0` the results starting from the very first position will be returned. When set to for example `10` the results 0-9 will be skipped and the ones starting from position 10 will be returned. Can be used in combination with `limit` for pagination. (optional)
    start: 56,
    // number | Maximum amount of results to return. Can be used in combination with `start` for pagination. **Important**: the maximum value for `limit` is `500`. Exceeding this value will result in an error. (optional)
    limit: 56,
    // Array<string> | Search card systems by city name. Can be included more than once to allow multiple values. Valid values can found in https://taxonomy.uitdatabank.be/api/city (optional)
    city: ...,
    // Array<string> | Search card systems by postal code. Can be included more than once to allow multiple values. Valid values can found in https://taxonomy.uitdatabank.be/api/city (optional)
    postalCode: ...,
    // string | Sorts the cardsystems in a specific order. Possible values are: `name`, `postalCode`. By default the sort uses ascending order. Descending order can be specified by including a `-` sign before the field that needs to be ordered descending. e.g. use `-name` to sort on name descending. `postalCode` sort will geographically sort based on the query param `postalCodeSort`. (optional)
    sort: sort_example,
    // string | The postalCode that will be used by `sort=postalCode` as its geographic center. If `sort` is not `postalCode` this parameter is ignored. If `sort` is `postalCode`, this parameter is mandatory. (optional)
    postalCodeSort: postalCodeSort_example,
  } satisfies GetCardSystemsRequest;

  try {
    const data = await api.getCardSystems(body);
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
| **permanent** | `boolean` | Include only permanent (&#x60;true&#x60;) card systems or temporary (&#x60;false&#x60;) card systems. | [Optional] [Defaults to `true`] |
| **start** | `number` | Position to start returning results from. When set to &#x60;0&#x60; the results starting from the very first position will be returned. When set to for example &#x60;10&#x60; the results 0-9 will be skipped and the ones starting from position 10 will be returned. Can be used in combination with &#x60;limit&#x60; for pagination. | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum amount of results to return. Can be used in combination with &#x60;start&#x60; for pagination. **Important**: the maximum value for &#x60;limit&#x60; is &#x60;500&#x60;. Exceeding this value will result in an error. | [Optional] [Defaults to `20`] |
| **city** | `Array<string>` | Search card systems by city name. Can be included more than once to allow multiple values. Valid values can found in https://taxonomy.uitdatabank.be/api/city | [Optional] |
| **postalCode** | `Array<string>` | Search card systems by postal code. Can be included more than once to allow multiple values. Valid values can found in https://taxonomy.uitdatabank.be/api/city | [Optional] |
| **sort** | `string` | Sorts the cardsystems in a specific order. Possible values are: &#x60;name&#x60;, &#x60;postalCode&#x60;. By default the sort uses ascending order. Descending order can be specified by including a &#x60;-&#x60; sign before the field that needs to be ordered descending. e.g. use &#x60;-name&#x60; to sort on name descending. &#x60;postalCode&#x60; sort will geographically sort based on the query param &#x60;postalCodeSort&#x60;. | [Optional] [Defaults to `undefined`] |
| **postalCodeSort** | `string` | The postalCode that will be used by &#x60;sort&#x3D;postalCode&#x60; as its geographic center. If &#x60;sort&#x60; is not &#x60;postalCode&#x60; this parameter is ignored. If &#x60;sort&#x60; is &#x60;postalCode&#x60;, this parameter is mandatory. | [Optional] [Defaults to `undefined`] |

### Return type

[**CardSystemsPaginatedCollection**](CardSystemsPaginatedCollection.md)

### Authorization

[CLIENT_IDENTIFICATION](../README.md#CLIENT_IDENTIFICATION)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request. Error type:  https://api.publiq.be/probs/uitpas/postal-code-required https://api.publiq.be/probs/uitpas/invalid-postal-code * https://api.publiq.be/probs/url/query-limit-exceeded |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found. Error type:  https://api.publiq.be/probs/url/not-found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCardSystemsCardsystemidMembershipPrices

> Array&lt;MembershipPrice&gt; getCardSystemsCardsystemidMembershipPrices(cardSystemId, cardType)

Retrieve membership prices for a card system

Retrieve all membership prices by card type for a card system. The result will contain all prices for the cardsystem, which is primarily useful to display to a an anonymous user. To retrieve the price for an individual passholder, you can use [GET /passholders/membership-prices/{cardSystemId}](/reference/uitpas.json/paths/~1passholders~1membership-prices~1{cardSystemId}/get) (more details like social tariff, date of birth and residence are required) or [GET /passholders/{passholderId}/membership-prices/{cardSystemId}](/reference/uitpas.json/paths/~1passholders~1{passholderId}~1membership-prices~1{cardSystemId}/get) (if the passholder already exists).  This caller of this method, identified by client identification, client access token or user access token, does not require any permissions.

### Example

```ts
import {
  Configuration,
  CardSystemsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetCardSystemsCardsystemidMembershipPricesRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CLIENT_IDENTIFICATION
    apiKey: "YOUR API KEY",
  });
  const api = new CardSystemsApi(config);

  const body = {
    // number | The ID of the card system
    cardSystemId: 56,
    // 'DIGITAL' | 'NFC_CARD' | Type of the card
    cardType: cardType_example,
  } satisfies GetCardSystemsCardsystemidMembershipPricesRequest;

  try {
    const data = await api.getCardSystemsCardsystemidMembershipPrices(body);
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
| **cardSystemId** | `number` | The ID of the card system | [Defaults to `undefined`] |
| **cardType** | `DIGITAL`, `NFC_CARD` | Type of the card | [Defaults to `undefined`] [Enum: DIGITAL, NFC_CARD] |

### Return type

[**Array&lt;MembershipPrice&gt;**](MembershipPrice.md)

### Authorization

[CLIENT_IDENTIFICATION](../README.md#CLIENT_IDENTIFICATION)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found. Possible error types:  * https://api.publiq.be/probs/uitpas/cardsystem-not-found  The detail property might include more information for the client developer. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCardsystemsCardsystemid

> CardSystem getCardsystemsCardsystemid(cardSystemId)

Retrieve card system

Retrieve card system by ID.  This caller of this method, identified by client identification, client access token or user access token, does not require any permissions.

### Example

```ts
import {
  Configuration,
  CardSystemsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetCardsystemsCardsystemidRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CLIENT_IDENTIFICATION
    apiKey: "YOUR API KEY",
  });
  const api = new CardSystemsApi(config);

  const body = {
    // number | The ID of the requested card system
    cardSystemId: 56,
  } satisfies GetCardsystemsCardsystemidRequest;

  try {
    const data = await api.getCardsystemsCardsystemid(body);
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
| **cardSystemId** | `number` | The ID of the requested card system | [Defaults to `undefined`] |

### Return type

[**CardSystem**](CardSystem.md)

### Authorization

[CLIENT_IDENTIFICATION](../README.md#CLIENT_IDENTIFICATION)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Details of the requested card system. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found. Possible error types:  * https://api.publiq.be/probs/uitpas/cardsystem-not-found  The detail property might include more information for the client developer. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCardsystemsCardsystemidCitySettings

> Array&lt;CardSystemCitySettings&gt; getCardsystemsCardsystemidCitySettings(cardSystemId, postalCode)

Retrieve city settings for card system

Retrieve city specific settings for this card system.  This caller of this method, identified by client identification, client access token or user access token, does not require any permissions.

### Example

```ts
import {
  Configuration,
  CardSystemsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetCardsystemsCardsystemidCitySettingsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CLIENT_IDENTIFICATION
    apiKey: "YOUR API KEY",
  });
  const api = new CardSystemsApi(config);

  const body = {
    // number | The ID of the requested card system
    cardSystemId: 56,
    // Array<string> | Filter city setting to the city of this postal code. Can be included more than once to allow multiple values. Valid values can found in https://taxonomy.uitdatabank.be/api/city (optional)
    postalCode: ...,
  } satisfies GetCardsystemsCardsystemidCitySettingsRequest;

  try {
    const data = await api.getCardsystemsCardsystemidCitySettings(body);
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
| **cardSystemId** | `number` | The ID of the requested card system | [Defaults to `undefined`] |
| **postalCode** | `Array<string>` | Filter city setting to the city of this postal code. Can be included more than once to allow multiple values. Valid values can found in https://taxonomy.uitdatabank.be/api/city | [Optional] |

### Return type

[**Array&lt;CardSystemCitySettings&gt;**](CardSystemCitySettings.md)

### Authorization

[CLIENT_IDENTIFICATION](../README.md#CLIENT_IDENTIFICATION)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | City specific settings |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/invalid-postal-code * https://api.publiq.be/probs/uitpas/postal-code-not-in-card-system |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found. Possible error types:  * https://api.publiq.be/probs/uitpas/cardsystem-not-found  The detail property might include more information for the client developer. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCardsystemsCardsystemidSocialTariffSettings

> CardSystemSocialTariffSettings getCardsystemsCardsystemidSocialTariffSettings(cardSystemId, postalCode)

Retrieve social tariff settings for card system

&lt;!-- theme: warning --&gt;  &gt; **Deprecated:** use [GET /cardsystems/{cardSystemId}/city-settings](/reference/uitpas.json/paths/~1cardssytems~1{cardSystemId}~1city-settings/get) instead.  Retrieve social tariff settings specific for this card system and the given postal code.  This caller of this method, identified by client identification, client access token or user access token, does not require any permissions.

### Example

```ts
import {
  Configuration,
  CardSystemsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetCardsystemsCardsystemidSocialTariffSettingsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CLIENT_IDENTIFICATION
    apiKey: "YOUR API KEY",
  });
  const api = new CardSystemsApi(config);

  const body = {
    // number | The ID of the requested card system
    cardSystemId: 56,
    // string | Postal code of the passholder who is being registered. Can be included more than once to allow multiple values. Valid values can found in https://taxonomy.uitdatabank.be/api/city
    postalCode: postalCode_example,
  } satisfies GetCardsystemsCardsystemidSocialTariffSettingsRequest;

  try {
    const data = await api.getCardsystemsCardsystemidSocialTariffSettings(body);
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
| **cardSystemId** | `number` | The ID of the requested card system | [Defaults to `undefined`] |
| **postalCode** | `string` | Postal code of the passholder who is being registered. Can be included more than once to allow multiple values. Valid values can found in https://taxonomy.uitdatabank.be/api/city | [Defaults to `undefined`] |

### Return type

[**CardSystemSocialTariffSettings**](CardSystemSocialTariffSettings.md)

### Authorization

[CLIENT_IDENTIFICATION](../README.md#CLIENT_IDENTIFICATION)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Social tariff settings |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/invalid-postal-code * https://api.publiq.be/probs/uitpas/postal-code-not-in-card-system |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found. Possible error types:  * https://api.publiq.be/probs/uitpas/cardsystem-not-found  The detail property might include more information for the client developer. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

