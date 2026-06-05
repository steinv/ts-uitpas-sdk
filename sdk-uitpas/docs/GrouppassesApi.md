# GrouppassesApi

All URIs are relative to *https://api-test.uitpas.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getGrouppasses**](GrouppassesApi.md#getgrouppasses) | **GET** /grouppasses | Search grouppasses |
| [**getGrouppassesPassholderId**](GrouppassesApi.md#getgrouppassespassholderid) | **GET** /grouppasses/{passholderId} | Retrieve grouppass by ID |



## getGrouppasses

> GrouppassesPaginatedResponse getGrouppasses(uitpasNumber, chipNumber, start, limit, sortName)

Search grouppasses

Retrieve grouppasses based on search parameters.  **Note**: For now this endpoint requires either &#x60;uitpasNumber&#x60; or &#x60;chipNumber&#x60;, so this endpoint currently cannot be used to search _all_ grouppasses.  &lt;!-- theme: warning --&gt;  &gt; **Important:** This endpoint might return &#x60;grouppass&#x60; entities for &#x60;BLOCKED&#x60; or &#x60;DELETED&#x60; cards. Clients using this endpoint MUST check &#x60;cardStatus&#x60; for &#x60;ACTIVE&#x60; cards before proceeding regular operations with this &#x60;grouppass&#x60;.  The caller of this request must have &#x60;EVENTS_READ&#x60; permission for the organizer of this event.  The caller of this request must have &#x60;GROUPPASSES_SEARCH&#x60; permission.

### Example

```ts
import {
  Configuration,
  GrouppassesApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetGrouppassesRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new GrouppassesApi(config);

  const body = {
    // string | Unique UiTPAS number of the grouppass to look up. Required unless `chipNumber` is used. (optional)
    uitpasNumber: uitpasNumber_example,
    // string | Hexadecimal notation of the chip number of a grouppass UiTPAS card. Required unless`uitpasNumber` is used. (optional)
    chipNumber: chipNumber_example,
    // number | Position to start returning results from. When set to `0` the results starting from the very first position will be returned. When set to for example `10` the results 0-9 will be skipped and the ones starting from position 10 will be returned. Can be used in combination with `limit` for pagination. (optional)
    start: 56,
    // number | Maximum amount of results to return. Can be used in combination with `start` for pagination. **Important**: the maximum value for `limit` is `500`. Exceeding this value will result in an error. (optional)
    limit: 56,
    // 'asc' | 'desc' | Sorts the grouppasses by ti name in ascending or descending order. By default passholders are sorted by name, ascending order. (optional)
    sortName: sortName_example,
  } satisfies GetGrouppassesRequest;

  try {
    const data = await api.getGrouppasses(body);
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
| **uitpasNumber** | `string` | Unique UiTPAS number of the grouppass to look up. Required unless &#x60;chipNumber&#x60; is used. | [Optional] [Defaults to `undefined`] |
| **chipNumber** | `string` | Hexadecimal notation of the chip number of a grouppass UiTPAS card. Required unless&#x60;uitpasNumber&#x60; is used. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Position to start returning results from. When set to &#x60;0&#x60; the results starting from the very first position will be returned. When set to for example &#x60;10&#x60; the results 0-9 will be skipped and the ones starting from position 10 will be returned. Can be used in combination with &#x60;limit&#x60; for pagination. | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum amount of results to return. Can be used in combination with &#x60;start&#x60; for pagination. **Important**: the maximum value for &#x60;limit&#x60; is &#x60;500&#x60;. Exceeding this value will result in an error. | [Optional] [Defaults to `20`] |
| **sortName** | `asc`, `desc` | Sorts the grouppasses by ti name in ascending or descending order. By default passholders are sorted by name, ascending order. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |

### Return type

[**GrouppassesPaginatedResponse**](GrouppassesPaginatedResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/invalid-uitpas-number * https://api.publiq.be/probs/url/query-limit-exceeded  The detail property might include more information for the client developer.  |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGrouppassesPassholderId

> Grouppass getGrouppassesPassholderId(passholderId)

Retrieve grouppass by ID

Retrieve a grouppass by ID.  The caller of this request must have &#x60;GROUPPASSES_SEARCH&#x60; permission. 

### Example

```ts
import {
  Configuration,
  GrouppassesApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetGrouppassesPassholderIdRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new GrouppassesApi(config);

  const body = {
    // string | ID of the Grouppass
    passholderId: passholderId_example,
  } satisfies GetGrouppassesPassholderIdRequest;

  try {
    const data = await api.getGrouppassesPassholderId(body);
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
| **passholderId** | `string` | ID of the Grouppass | [Defaults to `undefined`] |

### Return type

[**Grouppass**](Grouppass.md)

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
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

