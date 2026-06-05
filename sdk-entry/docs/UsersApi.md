# UsersApi

All URIs are relative to *https://io-test.uitdatabank.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**userGet**](UsersApi.md#userget) | **GET** /user | current user - get |



## userGet

> UserGet200Response userGet()

current user - get

Returns the details of the current user.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UserGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new UsersApi(config);

  try {
    const data = await api.userGet();
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

[**UserGet200Response**](UserGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The user details. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

