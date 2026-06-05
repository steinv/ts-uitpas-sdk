# SchoolsApi

All URIs are relative to *https://api-test.uitpas.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deletePassholdersSchool**](SchoolsApi.md#deletepassholdersschool) | **DELETE** /passholders/{passholderId}/school | Delete passholder school |
| [**getPassholdersSchool**](SchoolsApi.md#getpassholdersschool) | **GET** /passholders/{passholderId}/school | Get passholder school |
| [**putPassholdersSchool**](SchoolsApi.md#putpassholdersschool) | **PUT** /passholders/{passholderId}/school | Update passholder school |



## deletePassholdersSchool

> deletePassholdersSchool(passholderId)

Delete passholder school

Delete the passholder\&#39;s school relation.  The user or client performing this request must have &#x60;PASSHOLDERS_UPDATE&#x60; permission.  &lt;!-- theme: warning --&gt;  &gt; Passholder schools are used to manage passholders in a very specific case. If you are not explicitly working with UiTPAS schools, you will probably **NOT** need this API.   Using [GET](/reference/uitpas.json/paths/~1passholders~1{passholderId}~1school/get), [PUT](/reference/uitpas.json/paths/~1passholders~1{passholderId}~1school/put) and [DELETE](/reference/uitpas.json/paths/~1passholders~1{passholderId}~1school/delete) on this endpoint, the school of a passholder can be retrieved, updated and deleted. All schools are organizers.

### Example

```ts
import {
  Configuration,
  SchoolsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { DeletePassholdersSchoolRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new SchoolsApi(config);

  const body = {
    // string | Unique ID of an UiTPAS passholder.
    passholderId: passholderId_example,
  } satisfies DeletePassholdersSchoolRequest;

  try {
    const data = await api.deletePassholdersSchool(body);
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
| **204** | No Content. Delete succeeded. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not found. Possible error types:  * https://api.publiq.be/probs/uitpas/passholder-not-found  The detail property might include more information for the client developer.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPassholdersSchool

> Organizer getPassholdersSchool(passholderId)

Get passholder school

Retrieve the passholder\&#39;s school.  The caller of this request must have &#x60;PASSHOLDERS_SEARCH&#x60; permission.  &lt;!-- theme: warning --&gt;  &gt; Passholder schools are used to manage passholders in a very specific case. If you are not explicitly working with UiTPAS schools, you will probably **NOT** need this API.   Using [GET](/reference/uitpas.json/paths/~1passholders~1{passholderId}~1school/get), [PUT](/reference/uitpas.json/paths/~1passholders~1{passholderId}~1school/put) and [DELETE](/reference/uitpas.json/paths/~1passholders~1{passholderId}~1school/delete) on this endpoint, the school of a passholder can be retrieved, updated and deleted. All schools are organizers.

### Example

```ts
import {
  Configuration,
  SchoolsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetPassholdersSchoolRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new SchoolsApi(config);

  const body = {
    // string | Unique ID of an UiTPAS passholder.
    passholderId: passholderId_example,
  } satisfies GetPassholdersSchoolRequest;

  try {
    const data = await api.getPassholdersSchool(body);
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

### Return type

[**Organizer**](Organizer.md)

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
| **404** | Not found. Possible error types:  * https://api.publiq.be/probs/uitpas/passholder-not-found * https://api.publiq.be/probs/uitpas/school-not-found  The detail property might include more information for the client developer.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## putPassholdersSchool

> putPassholdersSchool(passholderId, organizer)

Update passholder school

Update the passholder\&#39;s school relation.  The caller of this request must have &#x60;PASSHOLDERS_UPDATE&#x60; permission.  &lt;!-- theme: warning --&gt;  &gt; Passholder schools are used to manage passholders in a very specific case. If you are not explicitly working with UiTPAS schools, you will probably **NOT** need this API.   Using [GET](/reference/uitpas.json/paths/~1passholders~1{passholderId}~1school/get), [PUT](/reference/uitpas.json/paths/~1passholders~1{passholderId}~1school/put) and [DELETE](/reference/uitpas.json/paths/~1passholders~1{passholderId}~1school/delete) on this endpoint, the school of a passholder can be retrieved, updated and deleted. All schools are organizers.

### Example

```ts
import {
  Configuration,
  SchoolsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PutPassholdersSchoolRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new SchoolsApi(config);

  const body = {
    // string | Unique ID of an UiTPAS passholder.
    passholderId: passholderId_example,
    // Organizer | The Organizer object representing the school, with at least the id present. Name will be ignored. (optional)
    organizer: ...,
  } satisfies PutPassholdersSchoolRequest;

  try {
    const data = await api.putPassholdersSchool(body);
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
| **organizer** | [Organizer](Organizer.md) | The Organizer object representing the school, with at least the id present. Name will be ignored. | [Optional] |

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
| **204** | No Content. Update succeeded. |  -  |
| **400** | Bad request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitpas/school-not-found  The detail property might include more information for the client developer.  |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not found. Possible error types:  * https://api.publiq.be/probs/uitpas/passholder-not-found  The detail property might include more information for the client developer.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

