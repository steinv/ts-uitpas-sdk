# CurrentPassholderApi

All URIs are relative to *https://api-test.uitpas.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPassholdersMe**](CurrentPassholderApi.md#getpassholdersme) | **GET** /passholders/me | Retrieve passholder for the current user |
| [**getUitidPassholderRegistrationToken**](CurrentPassholderApi.md#getuitidpassholderregistrationtoken) | **GET** /passholders/me/uitid/registration-token | Retrieve UiTiD registration token |
| [**getUitidPassholderStatus**](CurrentPassholderApi.md#getuitidpassholderstatus) | **GET** /passholders/me/uitid/status | Retrieve UiTiD registration status |
| [**postPassholdersMe**](CurrentPassholderApi.md#postpassholdersme) | **POST** /passholders/me | Register passholder for the current user |
| [**registerUitidPassholder**](CurrentPassholderApi.md#registeruitidpassholder) | **PUT** /passholders/me/uitid | Register UiTiD for passholder |



## getPassholdersMe

> Passholder getPassholdersMe()

Retrieve passholder for the current user

Allows users to retrieve their passholder using a user access token.  A user access token of a client with &#x60;PASSHOLDERS_SELF_READ&#x60; permission is mandatory. The passholder is retrieved by &#x60;inszNumber&#x60; if the access token contains the custom claim &#x60;https://publiq.be/rrn&#x60; (i.e. user has logged in using connection ACM), or by linked UiTiD user (&#x60;sub&#x60; or &#x60;https://publiq.be/uitidv1id&#x60; claim of the user access token).

### Example

```ts
import {
  Configuration,
  CurrentPassholderApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetPassholdersMeRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new CurrentPassholderApi(config);

  try {
    const data = await api.getPassholdersMe();
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

[**Passholder**](Passholder.md)

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
| **404** | Not Found  If the user does not have a passholder. Possible error types:  * https://api.publiq.be/probs/uitpas/passholder-not-found  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUitidPassholderRegistrationToken

> GetUitidPassholderRegistrationToken200Response getUitidPassholderRegistrationToken(authorization, xClientId)

Retrieve UiTiD registration token

This is step 1 of the process to register an UiTPAS passholder in UiTiD using their UiTPAS number and date of birth. It is used to retrieve an UiTiD registration token for the passholder. If the passholder already has a token via an email they received to register in UiTiD, this step can be skipped.  This endpoint uses [HTTP Basic Authentication](https://datatracker.ietf.org/doc/html/rfc7617) using: * Username: uitpasNumber  * Password: dateOfBirth in the form yyyy-mm-dd  In summary, this header should look like:   &#x60;&#x60;&#x60; Authorization: Basic base64(uitpasNumber:dateOfBirth) &#x60;&#x60;&#x60;  The response will contain a &#x60;token&#x60; property that can be used in step 2 of the process, [retrieving the UiTiD registration status](/reference/uitpas.json/paths/~1passholders~1me~1uitid~1status/get).  This caller of this method is identified with [client identification](https://docs.publiq.be/docs/authentication/ZG9jOjExODE5NDY5-client-identification) and does not require any permissions, but please note this endpoint is rate-limited on IP address to prevent abuse.

### Example

```ts
import {
  Configuration,
  CurrentPassholderApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetUitidPassholderRegistrationTokenRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const api = new CurrentPassholderApi();

  const body = {
    // string | HTTP Basic auth using uitpasNumber as the username and dateOfBirth as password
    authorization: authorization_example,
    // string | API key identifying the calling client
    xClientId: xClientId_example,
  } satisfies GetUitidPassholderRegistrationTokenRequest;

  try {
    const data = await api.getUitidPassholderRegistrationToken(body);
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
| **authorization** | `string` | HTTP Basic auth using uitpasNumber as the username and dateOfBirth as password | [Defaults to `undefined`] |
| **xClientId** | `string` | API key identifying the calling client | [Defaults to `undefined`] |

### Return type

[**GetUitidPassholderRegistrationToken200Response**](GetUitidPassholderRegistrationToken200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK  The passholder can proceed UiTiD registration. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **429** | Too Many Requests  Possible error types:  * https://api.publiq.be/probs/uitpas/rate-limited  The detail property might include more information for the client developer.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUitidPassholderStatus

> GetUitidPassholderStatus200Response getUitidPassholderStatus(xRegistrationToken, xClientId)

Retrieve UiTiD registration status

Retrieves the UiTiD registration status of a passholder. This is step 2 in the process of registering an UiTPAS passholder in UiTiD.  This endpoint requires a registation token in the &#x60;x-registration-token&#x60; header. A client can obtain such a token using [&#x60;GET /passholders/me/uitid/registration-token&#x60;](/reference/uitpas.json/paths/~1passholders~1me~1uitid~1registration-token/get). Alternatively, a token may already be available to the client because the user may have received an email link including it.  Based on the state value, the client can proceed in 2 ways:  - If state is &#x60;UNREGISTERED&#x60;  The passholder can proceed to step 3, [retrieving the UiTiD email address status](/reference/uitpas.json/paths/~1uitid~1emails~1{email}/get).  The response can include the linked &#x60;email&#x60; address of the passholder if one is known. This can be used in the next step of the registration process ([&#x60;GET /uitid/emails/{email}&#x60;](/reference/uitpas.json/paths/~1uitid~1emails~1{email}/get)). If no email address is included, the client should prompt the user to enter their email address first before proceeding to step 3.  - If state is &#x60;REGISTERED&#x60;   The passholder is already &#x60;REGISTERED&#x60; so the user must continue by authenticating instead. The &#x60;email&#x60; address field contains the email address of the linked UiTiD account that should be used to authenticate.   This caller of this method, identified with [client identification](https://docs.publiq.be/docs/authentication/ZG9jOjExODE5NDY5-client-identification) does not require any permissions.

### Example

```ts
import {
  Configuration,
  CurrentPassholderApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetUitidPassholderStatusRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const api = new CurrentPassholderApi();

  const body = {
    // string | the registration token of this passholder
    xRegistrationToken: xRegistrationToken_example,
    // string | API key identifying the calling client
    xClientId: xClientId_example,
  } satisfies GetUitidPassholderStatusRequest;

  try {
    const data = await api.getUitidPassholderStatus(body);
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
| **xRegistrationToken** | `string` | the registration token of this passholder | [Defaults to `undefined`] |
| **xClientId** | `string` | API key identifying the calling client | [Defaults to `undefined`] |

### Return type

[**GetUitidPassholderStatus200Response**](GetUitidPassholderStatus200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK  The passholder can proceed UiTiD registration. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **429** | Too Many Requests  Possible error types:  * https://api.publiq.be/probs/uitpas/rate-limited  The detail property might include more information for the client developer.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postPassholdersMe

> Passholder postPassholdersMe(passholderSelfRegistration)

Register passholder for the current user

&lt;!-- theme: warning --&gt;  &gt; WARNING &gt; &gt; Experimental API. Breaking changes might be introduced in future updates.  Allows users to self-register a passholder using a user access token.  A user access token of a client with &#x60;PASSHOLDERS_SELF_REGISTRATION&#x60; permission for the &#x60;registrationOrganizer&#x60; is mandatory. Furthermore, the user access token must contain the custom claim &#x60;https://publiq.be/rrn&#x60; (i.e. user has to login using connection ACM).  Please note a user can only self-register one passholder. Use &#x60;GET /passholders/me&#x60; to check if a passholder already exists for this user.

### Example

```ts
import {
  Configuration,
  CurrentPassholderApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PostPassholdersMeRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new CurrentPassholderApi(config);

  const body = {
    // PassholderSelfRegistration | Passholder details of the current user to register. (optional)
    passholderSelfRegistration: {"name":"Lastname","firstName":"Firstname","cardSystem":{"id":27},"email":"firstname.lastname@example.com","dateOfBirth":"1980-01-01","postalCode":"9000","city":"Gent","registrationOrganizer":{"id":"d2f898b1-455e-44ee-b08a-c4c05b1ab900"}},
  } satisfies PostPassholdersMeRequest;

  try {
    const data = await api.postPassholdersMe(body);
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
| **passholderSelfRegistration** | [PassholderSelfRegistration](PassholderSelfRegistration.md) | Passholder details of the current user to register. | [Optional] |

### Return type

[**Passholder**](Passholder.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitpas/insz-in-token-required * https://api.publiq.be/probs/uitpas/organizer-not-found * https://api.publiq.be/probs/uitpas/cardsystem-not-found * https://api.publiq.be/probs/uitpas/forbidden-underaged * https://api.publiq.be/probs/uitpas/invalid-city  The detail property might include more information for the client developer. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## registerUitidPassholder

> registerUitidPassholder(xRegistrationToken)

Register UiTiD for passholder

Registers the UiTiD for this passholder. This is step 4, and the final step, in the process of registering an UiTPAS passholder in UiTiD.  This request requires an &#x60;Authorization&#x60; header with the [user access token](https://docs.publiq.be/docs/authentication/ZG9jOjExODE5NTM5-user-access-token) of an authenticated UiTiD *and* it requires a &#x60;x-registration-token&#x60; header containing a valid registration token of the passholder.  A user access token of a client with &#x60;PASSHOLDERS_REGISTER_UITID&#x60; permission is mandatory.

### Example

```ts
import {
  Configuration,
  CurrentPassholderApi,
} from '@steinv/publiq-uitpas-sdk';
import type { RegisterUitidPassholderRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new CurrentPassholderApi(config);

  const body = {
    // string | the registration token of this passholder
    xRegistrationToken: xRegistrationToken_example,
  } satisfies RegisterUitidPassholderRequest;

  try {
    const data = await api.registerUitidPassholder(body);
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
| **xRegistrationToken** | `string` | the registration token of this passholder | [Defaults to `undefined`] |

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
| **201** | Created. No Content. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/passholder-already-registered * https://api.publiq.be/probs/uitpas/uitid-already-registered  The detail property might include more information for the client developer.  |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

