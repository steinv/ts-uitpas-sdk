# AssociationsApi

All URIs are relative to *https://api-test.uitpas.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deletePassholdersPassholderIdAssociationMembershipsAssociationId**](AssociationsApi.md#deletepassholderspassholderidassociationmembershipsassociationid) | **DELETE** /passholders/{passholderId}/association-memberships/{associationId} | Delete association membership of passholder |
| [**getAssociations**](AssociationsApi.md#getassociations) | **GET** /associations | Get associations |
| [**getPassholdersPassholderIdAssociationMemberships**](AssociationsApi.md#getpassholderspassholderidassociationmemberships) | **GET** /passholders/{passholderId}/association-memberships | Get association memberships of passholder |
| [**postPassholdersPassholderIdAssociationMemberships**](AssociationsApi.md#postpassholderspassholderidassociationmemberships) | **POST** /passholders/{passholderId}/association-memberships | Create or renew association membership of passholder |



## deletePassholdersPassholderIdAssociationMembershipsAssociationId

> deletePassholdersPassholderIdAssociationMembershipsAssociationId(passholderId, associationId, organizerId)

Delete association membership of passholder

Delete an existing membership of the passholder for the given association. Membership deletion is restricted to associations visible and editable by the specified organizer.  The caller of this method must have &#x60;ASSOCIATIONS&#x60; permission for the given organizer.

### Example

```ts
import {
  Configuration,
  AssociationsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { DeletePassholdersPassholderIdAssociationMembershipsAssociationIdRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new AssociationsApi(config);

  const body = {
    // string | Unique ID of an UiTPAS passholder.
    passholderId: passholderId_example,
    // string | ID of the association.
    associationId: associationId_example,
    // string | ID of the organizer.
    organizerId: organizerId_example,
  } satisfies DeletePassholdersPassholderIdAssociationMembershipsAssociationIdRequest;

  try {
    const data = await api.deletePassholdersPassholderIdAssociationMembershipsAssociationId(body);
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
| **passholderId** | `string` | Unique ID of an UiTPAS passholder. | [Defaults to `undefined`] |
| **associationId** | `string` | ID of the association. | [Defaults to `undefined`] |
| **organizerId** | `string` | ID of the organizer. | [Defaults to `undefined`] |

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


## getAssociations

> AssociationsPaginatedResponse getAssociations(organizerId, permission)

Get associations

Retrieve associations based on organizer and its permission on the specific association.  Passholders can have memberships for zero or more associations. However, only selected organizers can see (read permission) or register (write permission) these memberships. Using this endpoint, clients can retrieve which memberships they can [see](/reference/uitpas.json/paths/~1passholders~1passholderId~1association-memberships/get) or register.  The caller of this request must have &#x60;ASSOCIATIONS&#x60; permission for the given organizer.

### Example

```ts
import {
  Configuration,
  AssociationsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetAssociationsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new AssociationsApi(config);

  const body = {
    // string | ID of the organizer
    organizerId: organizerId_example,
    // 'READ' | 'WRITE' | Type of association permission
    permission: permission_example,
  } satisfies GetAssociationsRequest;

  try {
    const data = await api.getAssociations(body);
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
| **organizerId** | `string` | ID of the organizer | [Defaults to `undefined`] |
| **permission** | `READ`, `WRITE` | Type of association permission | [Defaults to `undefined`] [Enum: READ, WRITE] |

### Return type

[**AssociationsPaginatedResponse**](AssociationsPaginatedResponse.md)

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


## getPassholdersPassholderIdAssociationMemberships

> Array&lt;AssociationMembership&gt; getPassholdersPassholderIdAssociationMemberships(passholderId, organiserId, organizerId)

Get association memberships of passholder

Retrieves existing and potential association memberships for a given passholder. Only memberships for associations visible to the specified organizer are returned. If the organizer has permission to register the passholder for a new association, a potential membership for that association is included in the response with the status &#x60;NONE&#x60;.  Memberships with an &#x60;ACTIVE&#x60; or &#x60;EXPIRED&#x60; status are eligible for renewal if their &#x60;renewable&#x60; field is set to &#x60;true&#x60;.  The caller of this method must have &#x60;ASSOCIATIONS&#x60; permission for the given organizer.

### Example

```ts
import {
  Configuration,
  AssociationsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetPassholdersPassholderIdAssociationMembershipsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new AssociationsApi(config);

  const body = {
    // string | Unique ID of an UiTPAS passholder.
    passholderId: passholderId_example,
    // string | ID of the organizer. This parameter is deprecated. Use organizerId instead. (optional)
    organiserId: organiserId_example,
    // string | ID of the organizer. This parameter is mandatory. (optional)
    organizerId: organizerId_example,
  } satisfies GetPassholdersPassholderIdAssociationMembershipsRequest;

  try {
    const data = await api.getPassholdersPassholderIdAssociationMemberships(body);
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
| **passholderId** | `string` | Unique ID of an UiTPAS passholder. | [Defaults to `undefined`] |
| **organiserId** | `string` | ID of the organizer. This parameter is deprecated. Use organizerId instead. | [Optional] [Defaults to `undefined`] |
| **organizerId** | `string` | ID of the organizer. This parameter is mandatory. | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;AssociationMembership&gt;**](AssociationMembership.md)

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


## postPassholdersPassholderIdAssociationMemberships

> postPassholdersPassholderIdAssociationMemberships(passholderId, organizerId, associationMembership)

Create or renew association membership of passholder

Creates a new membership or renews an existing one for the given passholder and association. Membership creation and renewal are restricted to associations visible and editable by the specified organizer.  The caller of this method must have &#x60;ASSOCIATIONS&#x60; permission for the given organizer.

### Example

```ts
import {
  Configuration,
  AssociationsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PostPassholdersPassholderIdAssociationMembershipsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new AssociationsApi(config);

  const body = {
    // string | Unique ID of an UiTPAS passholder.
    passholderId: passholderId_example,
    // string | ID of the organizer used to make this request
    organizerId: organizerId_example,
    // AssociationMembership | Association membership request (optional)
    associationMembership: {"association":{"id":"e8386a24-2218-4269-8b65-4de46be07991"},"endDate":"2026-08-24T21:59:59Z"},
  } satisfies PostPassholdersPassholderIdAssociationMembershipsRequest;

  try {
    const data = await api.postPassholdersPassholderIdAssociationMemberships(body);
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
| **passholderId** | `string` | Unique ID of an UiTPAS passholder. | [Defaults to `undefined`] |
| **organizerId** | `string` | ID of the organizer used to make this request | [Defaults to `undefined`] |
| **associationMembership** | [AssociationMembership](AssociationMembership.md) | Association membership request | [Optional] |

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
| **201** | Created |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitpas/association-not-found * https://api.publiq.be/probs/uitpas/association-membership-renew-not-possible * https://api.publiq.be/probs/uitpas/association-passholder-cardsystem-mismatch |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

