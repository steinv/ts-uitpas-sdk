# UiTiDApi

All URIs are relative to *https://api-test.uitpas.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getUitidEmail**](UiTiDApi.md#getuitidemail) | **GET** /uitid/emails/{email} | Retrieve UiTiD email address status |



## getUitidEmail

> GetUitidEmail200Response getUitidEmail(email)

Retrieve UiTiD email address status

Retrieves the email address status in UiTPAS and UiTiD for a given email address. This is step 3 in the process of registering an UiTPAS passholder in UiTiD.  The response contains a &#x60;state&#x60; property which can be one of the following values:  * &#x60;UITPAS_ALREADY_LINKED&#x60; : the user cannot use this email address to register another UiTPAS * &#x60;UITID_UNREGISTERED&#x60; : the user can use this email address to register their UiTPAS but must register on UiTiD first * &#x60;UITID_REGISTERED&#x60; : the user can use this email address to register their UiTPAS but must login on UiTiD first  After [UiTiD authentication](https://docs.publiq.be/docs/authentication/ZG9jOjExODE5NTM5-user-access-token) the client should proceed to step 4 of the process, [registering UiTiD for the passholder](/reference/uitpas.json/paths/~1passholders~1me~1uitid/put).  This caller of this method, identified with [client identification](https://docs.publiq.be/docs/authentication/ZG9jOjExODE5NDY5-client-identification), does not require any permissions but please note this endpoint is rate-limited on IP address to prevent abuse.

### Example

```ts
import {
  Configuration,
  UiTiDApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetUitidEmailRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CLIENT_IDENTIFICATION
    apiKey: "YOUR API KEY",
  });
  const api = new UiTiDApi(config);

  const body = {
    // string | Email address the passholder wants to use to register
    email: email_example,
  } satisfies GetUitidEmailRequest;

  try {
    const data = await api.getUitidEmail(body);
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
| **email** | `string` | Email address the passholder wants to use to register | [Defaults to `undefined`] |

### Return type

[**GetUitidEmail200Response**](GetUitidEmail200Response.md)

### Authorization

[CLIENT_IDENTIFICATION](../README.md#CLIENT_IDENTIFICATION)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK  The email address can be used to register the passholder. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **429** | Too Many Requests  Possible error types:  * https://api.publiq.be/probs/uitpas/rate-limited  The detail property might include more information for the client developer.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

