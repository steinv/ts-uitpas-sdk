# OrganizersApi

All URIs are relative to *https://api-test.uitpas.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteOrganizersOrganizerIdAdminsAdminId**](OrganizersApi.md#deleteorganizersorganizeridadminsadminid) | **DELETE** /organizers/{organizerId}/admins/{adminUserId} | Remove admin user from organizer |
| [**getOrganizers**](OrganizersApi.md#getorganizers) | **GET** /organizers | Get organizers |
| [**getOrganizersOrganizerIdAdmins**](OrganizersApi.md#getorganizersorganizeridadmins) | **GET** /organizers/{organizerId}/admins | Retrieve admin users for organizer |
| [**postOrganizersOrganizerIdAdmins**](OrganizersApi.md#postorganizersorganizeridadmins) | **POST** /organizers/{organizerId}/admins | Add admin user for organizer |



## deleteOrganizersOrganizerIdAdminsAdminId

> deleteOrganizersOrganizerIdAdminsAdminId(organizerId, adminUserId)

Remove admin user from organizer

Remove an existing admin user from the given organizer.  The caller of this request must have &#x60;ORGANIZERS_ADMINS_WRITE&#x60; permission for the given organizer or the caller must be an organizer admin user of type &#x60;ADMIN&#x60; of the given organizer.

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { DeleteOrganizersOrganizerIdAdminsAdminIdRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | The ID of the organizer.
    organizerId: organizerId_example,
    // string | The ID of the organizer admin user.
    adminUserId: adminUserId_example,
  } satisfies DeleteOrganizersOrganizerIdAdminsAdminIdRequest;

  try {
    const data = await api.deleteOrganizersOrganizerIdAdminsAdminId(body);
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
| **organizerId** | `string` | The ID of the organizer. | [Defaults to `undefined`] |
| **adminUserId** | `string` | The ID of the organizer admin user. | [Defaults to `undefined`] |

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
| **204** | No Content |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOrganizers

> OrganizersPaginatedResponse getOrganizers(groupId, name, cardSystemId, start, limit, sortName)

Get organizers

Retrieve organizers based on search parameters.  The caller of this request must have &#x60;ORGANIZERS_SEARCH&#x60; permission for the given organizer.

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetOrganizersRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // number | Include only organizers in this group (optional)
    groupId: 56,
    // string | Include only organizers with this name (* wildcard allowed) (optional)
    name: name_example,
    // number | Include only organizers linked to this card system (optional)
    cardSystemId: 56,
    // number | Position to start returning results from. When set to `0` the results starting from the very first position will be returned. When set to for example `10` the results 0-9 will be skipped and the ones starting from position 10 will be returned. Can be used in combination with `limit` for pagination. (optional)
    start: 56,
    // number | Maximum amount of results to return. Can be used in combination with `start` for pagination. **Important**: the maximum value for `limit` is `500`. Exceeding this value will result in an error. (optional)
    limit: 56,
    // 'asc' | 'desc' | Sorts the organizers by their name in ascending or descending order. (optional)
    sortName: sortName_example,
  } satisfies GetOrganizersRequest;

  try {
    const data = await api.getOrganizers(body);
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
| **groupId** | `number` | Include only organizers in this group | [Optional] [Defaults to `undefined`] |
| **name** | `string` | Include only organizers with this name (* wildcard allowed) | [Optional] [Defaults to `undefined`] |
| **cardSystemId** | `number` | Include only organizers linked to this card system | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Position to start returning results from. When set to &#x60;0&#x60; the results starting from the very first position will be returned. When set to for example &#x60;10&#x60; the results 0-9 will be skipped and the ones starting from position 10 will be returned. Can be used in combination with &#x60;limit&#x60; for pagination. | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum amount of results to return. Can be used in combination with &#x60;start&#x60; for pagination. **Important**: the maximum value for &#x60;limit&#x60; is &#x60;500&#x60;. Exceeding this value will result in an error. | [Optional] [Defaults to `20`] |
| **sortName** | `asc`, `desc` | Sorts the organizers by their name in ascending or descending order. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |

### Return type

[**OrganizersPaginatedResponse**](OrganizersPaginatedResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/group-not-found * https://api.publiq.be/probs/uitpas/cardsystem-not-found * https://api.publiq.be/probs/url/query-limit-exceeded  The detail property might include more information for the client developer.  |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOrganizersOrganizerIdAdmins

> OrganizerAdminsPaginatedCollection getOrganizersOrganizerIdAdmins(organizerId, start, limit)

Retrieve admin users for organizer

Retrieve all admin users of the given organizer.  The caller of this request must have &#x60;ORGANIZERS_ADMINS_READ&#x60; permission for the given organizer or the caller must be an organizer admin user (any type) of the given organizer.

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetOrganizersOrganizerIdAdminsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | The ID of the organizer.
    organizerId: organizerId_example,
    // number | Position to start returning results from. When set to `0` the results starting from the very first position will be returned. When set to for example `10` the results 0-9 will be skipped and the ones starting from position 10 will be returned. Can be used in combination with `limit` for pagination. (optional)
    start: 56,
    // number | Maximum amount of results to return. Can be used in combination with `start` for pagination. **Important**: the maximum value for `limit` is `500`. Exceeding this value will result in an error. (optional)
    limit: 56,
  } satisfies GetOrganizersOrganizerIdAdminsRequest;

  try {
    const data = await api.getOrganizersOrganizerIdAdmins(body);
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
| **organizerId** | `string` | The ID of the organizer. | [Defaults to `undefined`] |
| **start** | `number` | Position to start returning results from. When set to &#x60;0&#x60; the results starting from the very first position will be returned. When set to for example &#x60;10&#x60; the results 0-9 will be skipped and the ones starting from position 10 will be returned. Can be used in combination with &#x60;limit&#x60; for pagination. | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum amount of results to return. Can be used in combination with &#x60;start&#x60; for pagination. **Important**: the maximum value for &#x60;limit&#x60; is &#x60;500&#x60;. Exceeding this value will result in an error. | [Optional] [Defaults to `20`] |

### Return type

[**OrganizerAdminsPaginatedCollection**](OrganizerAdminsPaginatedCollection.md)

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


## postOrganizersOrganizerIdAdmins

> OrganizerAdmin postOrganizersOrganizerIdAdmins(organizerId, organizerAdmin)

Add admin user for organizer

Add a new admin user for the given organizer.  The caller of this request must have &#x60;ORGANIZERS_ADMINS_WRITE&#x60; permission for the given organizer or the caller must be an organizer admin user of type &#x60;ADMIN&#x60; of the given organizer.

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PostOrganizersOrganizerIdAdminsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | The ID of the organizer.
    organizerId: organizerId_example,
    // OrganizerAdmin | Request body with the email of the new organizer admin. (optional)
    organizerAdmin: {"email":"newadmin@example.com","type":"ADMIN"},
  } satisfies PostOrganizersOrganizerIdAdminsRequest;

  try {
    const data = await api.postOrganizersOrganizerIdAdmins(body);
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
| **organizerId** | `string` | The ID of the organizer. | [Defaults to `undefined`] |
| **organizerAdmin** | [OrganizerAdmin](OrganizerAdmin.md) | Request body with the email of the new organizer admin. | [Optional] |

### Return type

[**OrganizerAdmin**](OrganizerAdmin.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

