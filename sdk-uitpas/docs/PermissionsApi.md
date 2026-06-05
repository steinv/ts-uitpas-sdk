# PermissionsApi

All URIs are relative to *https://api-test.uitpas.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPermissions**](PermissionsApi.md#getpermissions) | **GET** /permissions | Get permissions |
| [**getPermissionsClientId**](PermissionsApi.md#getpermissionsclientid) | **GET** /permissions/{clientId} | Get permissions for a client |
| [**putPermissionsClientId**](PermissionsApi.md#putpermissionsclientid) | **PUT** /permissions/{clientId} | Update permissions for a client |



## getPermissions

> Array&lt;OrganizerPermissions&gt; getPermissions()

Get permissions

Lists the organizers that the current user or client (depending on the token) has access to including a list of its permissions.  The OrganizerPermission response object can also contain &#x60;linkedOrganizers&#x60; for which admins of this organizer also have access to.  Use this endpoint if you obtained a user or client access token and need to know its organizer permissions. Use [GET /permissions/clientID](/reference/uitpas.json/paths/~1permissions~1clientId/get) to manage permissions for any client.

### Example

```ts
import {
  Configuration,
  PermissionsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetPermissionsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new PermissionsApi(config);

  try {
    const data = await api.getPermissions();
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

[**Array&lt;OrganizerPermissions&gt;**](OrganizerPermissions.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPermissionsClientId

> Array&lt;OrganizerPermissions&gt; getPermissionsClientId(clientId)

Get permissions for a client

Lists the organizer permissions of the given client ID.  Use this endpoint to manage permissions for any client. Use [GET /permissions](/reference/uitpas.json/paths/~1permissions/get) to retrieve permissions for your token (current client or user).  The caller of this request must have &#x60;PERMISSIONS_READ&#x60; permission. 

### Example

```ts
import {
  Configuration,
  PermissionsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetPermissionsClientIdRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new PermissionsApi(config);

  const body = {
    // string | ID of the client
    clientId: clientId_example,
  } satisfies GetPermissionsClientIdRequest;

  try {
    const data = await api.getPermissionsClientId(body);
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
| **clientId** | `string` | ID of the client | [Defaults to `undefined`] |

### Return type

[**Array&lt;OrganizerPermissions&gt;**](OrganizerPermissions.md)

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
| **404** | Not found. Possible error types:  * https://api.publiq.be/probs/uitpas/client-not-found  The detail property might include more information for the client developer. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## putPermissionsClientId

> putPermissionsClientId(clientId, organizerPermissions)

Update permissions for a client

Update the organizer permissions of the given client ID.  The caller of this request must have &#x60;PERMISSIONS_WRITE&#x60; permission.

### Example

```ts
import {
  Configuration,
  PermissionsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PutPermissionsClientIdRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new PermissionsApi(config);

  const body = {
    // string | ID of the client
    clientId: clientId_example,
    // Array<OrganizerPermissions> | Full set of organizer permissions for the client (optional)
    organizerPermissions: [{"organizer":{"id":"c097fa2e-d9be-42e6-b41a-ec3d4d4cbad1"},"permissionDetails":[{"id":"TARIFFS_READ"},{"id":"TICKETSALES_SEARCH"}]},{"organizer":{"id":"fd7e6177-4add-4fa8-a7fe-6e60127bfb35"},"permissionDetails":[{"id":"ORGANIZERS_SEARCH"}]}],
  } satisfies PutPermissionsClientIdRequest;

  try {
    const data = await api.putPermissionsClientId(body);
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
| **clientId** | `string` | ID of the client | [Defaults to `undefined`] |
| **organizerPermissions** | `Array<OrganizerPermissions>` | Full set of organizer permissions for the client | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Permissions Updated. No Content |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not found. Possible error types:  * https://api.publiq.be/probs/uitpas/client-not-found  The detail property might include more information for the client developer. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

