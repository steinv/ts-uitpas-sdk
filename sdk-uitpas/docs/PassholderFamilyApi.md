# PassholderFamilyApi

All URIs are relative to *https://api-test.uitpas.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deletePassholdersPassholderIdFamilyMembersFamilyMemberId**](PassholderFamilyApi.md#deletepassholderspassholderidfamilymembersfamilymemberid) | **DELETE** /passholders/{passholderId}/family-members/{familyMemberId} | Delete a family member |
| [**getPassholdersPassholderIdFamilies**](PassholderFamilyApi.md#getpassholderspassholderidfamilies) | **GET** /passholders/{passholderId}/families | Retrieve families of the current passholder |
| [**getPassholdersPassholderIdFamilyMembers**](PassholderFamilyApi.md#getpassholderspassholderidfamilymembers) | **GET** /passholders/{passholderId}/family-members | Retrieve family members of the current passholder |
| [**postPassholdersPassholderIdFamilyMembers**](PassholderFamilyApi.md#postpassholderspassholderidfamilymembers) | **POST** /passholders/{passholderId}/family-members | Add family members to the current passholder\&#39;s family |
| [**putPassholdersPassholderIdFamilyMembersFamilyMemberId**](PassholderFamilyApi.md#putpassholderspassholderidfamilymembersfamilymemberid) | **PUT** /passholders/{passholderId}/family-members/{familyMemberId} | Update a family member |



## deletePassholdersPassholderIdFamilyMembersFamilyMemberId

> deletePassholdersPassholderIdFamilyMembersFamilyMemberId(passholderId, familyMemberId)

Delete a family member

Delete a family member of a given passholder.  The main family member is always a member of their family (boolean &#x60;mainFamilyMember&#x60; is &#x60;true&#x60;) and cannot be deleted.  The caller of this method must have &#x60;PASSHOLDERS_FAMILY_MEMBERS&#x60; permission for the *main family member* or for the *to be deleted family member*, except for custom token authentication.   &lt;!-- theme: info --&gt;  &gt; Custom tokens &gt; &gt; Next to regular client and user access tokens, this endpoint also supports \&#39;custom tokens\&#39;. In this scenario, the custom token is sent out in an email to the passholder, who is added as a family member. This allows for the reversal of the add operation directly from that email, without further authentication. Unless your client is implementing this  flow, you can ignore custom tokens.

### Example

```ts
import {
  Configuration,
  PassholderFamilyApi,
} from '@steinv/publiq-uitpas-sdk';
import type { DeletePassholdersPassholderIdFamilyMembersFamilyMemberIdRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CUSTOM_TOKEN
    apiKey: "YOUR API KEY",
  });
  const api = new PassholderFamilyApi(config);

  const body = {
    // string | Passholder ID of the main family member
    passholderId: passholderId_example,
    // string | Passholder ID of the family member to update or delete
    familyMemberId: familyMemberId_example,
  } satisfies DeletePassholdersPassholderIdFamilyMembersFamilyMemberIdRequest;

  try {
    const data = await api.deletePassholdersPassholderIdFamilyMembersFamilyMemberId(body);
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
| **passholderId** | `string` | Passholder ID of the main family member | [Defaults to `undefined`] |
| **familyMemberId** | `string` | Passholder ID of the family member to update or delete | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[CUSTOM_TOKEN](../README.md#CUSTOM_TOKEN)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Accepted |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPassholdersPassholderIdFamilies

> Array&lt;GetPassholdersPassholderIdFamilies200ResponseInner&gt; getPassholdersPassholderIdFamilies(passholderId)

Retrieve families of the current passholder

Retrieve the other families to which the given passholder was added. This explicitly excludes the passholder\&#39;s own family.  The caller of this method must have &#x60;PASSHOLDERS_FAMILY_MEMBERS&#x60; permission for the given passholder.

### Example

```ts
import {
  Configuration,
  PassholderFamilyApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetPassholdersPassholderIdFamiliesRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new PassholderFamilyApi(config);

  const body = {
    // string | Passholder ID
    passholderId: passholderId_example,
  } satisfies GetPassholdersPassholderIdFamiliesRequest;

  try {
    const data = await api.getPassholdersPassholderIdFamilies(body);
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
| **passholderId** | `string` | Passholder ID | [Defaults to `undefined`] |

### Return type

[**Array&lt;GetPassholdersPassholderIdFamilies200ResponseInner&gt;**](GetPassholdersPassholderIdFamilies200ResponseInner.md)

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


## getPassholdersPassholderIdFamilyMembers

> Array&lt;FamilyMember&gt; getPassholdersPassholderIdFamilyMembers(passholderId)

Retrieve family members of the current passholder

Retrieve family members of a given passholder.  The list of family members is specific to this passholder, the family relation is not mutual,  the total number of family members and the number of adults in a family is limited.   The passholder identified by &#x60;{passholderId}&#x60; is always part of this list and its boolean property &#x60;mainFamilyMember&#x60; will be &#x60;true&#x60;.  The caller of this method must have &#x60;PASSHOLDERS_FAMILY_MEMBERS&#x60; permission for the given passholder.

### Example

```ts
import {
  Configuration,
  PassholderFamilyApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetPassholdersPassholderIdFamilyMembersRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new PassholderFamilyApi(config);

  const body = {
    // string | Passholder ID of the main family member
    passholderId: passholderId_example,
  } satisfies GetPassholdersPassholderIdFamilyMembersRequest;

  try {
    const data = await api.getPassholdersPassholderIdFamilyMembers(body);
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
| **passholderId** | `string` | Passholder ID of the main family member | [Defaults to `undefined`] |

### Return type

[**Array&lt;FamilyMember&gt;**](FamilyMember.md)

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
| **404** | Not Found  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postPassholdersPassholderIdFamilyMembers

> postPassholdersPassholderIdFamilyMembers(passholderId, xRegistrationToken, familyMember)

Add family members to the current passholder\&#39;s family

Add another passholder as a family member of the given passholder.  Specify the &#x60;uitpasNumber&#x60; and optionally an &#x60;icon&#x60; for the new family member.  The caller of this method must have &#x60;PASSHOLDERS_FAMILY_MEMBERS&#x60; permission for the given passholder.  If a user access token of a passholder is used (e.g. in an end-user application), an extra &#x60;x-registration-header&#x60; header is required containing the registration token of the new family member. Use [GET /passholders/me/uitid/registration-token](/reference/uitpas.json/paths/~1passholders~1me~1uitid~1registration-token/get) to retrieve a registration token.  If an admin user token or client access token with the appropriate permissions is used, the &#x60;x-registration-token&#x60; header can be ommitted.

### Example

```ts
import {
  Configuration,
  PassholderFamilyApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PostPassholdersPassholderIdFamilyMembersRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new PassholderFamilyApi(config);

  const body = {
    // string | Passholder ID of the main family member
    passholderId: passholderId_example,
    // string | the registration token of the passholder to add as family member. This header  is required when using an end-user token. It can be omitted when using an admin or client access token with the appropriate permissions. (optional)
    xRegistrationToken: xRegistrationToken_example,
    // FamilyMember | New family member (optional)
    familyMember: {"uitpasNumber":"1000000520006","icon":"https://www.uitpas.be/_nuxt/img/icon1.png"},
  } satisfies PostPassholdersPassholderIdFamilyMembersRequest;

  try {
    const data = await api.postPassholdersPassholderIdFamilyMembers(body);
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
| **passholderId** | `string` | Passholder ID of the main family member | [Defaults to `undefined`] |
| **xRegistrationToken** | `string` | the registration token of the passholder to add as family member. This header  is required when using an end-user token. It can be omitted when using an admin or client access token with the appropriate permissions. | [Optional] [Defaults to `undefined`] |
| **familyMember** | [FamilyMember](FamilyMember.md) | New family member | [Optional] |

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
| **400** | Bad request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitpas/passholder-not-found * https://api.publiq.be/probs/uitpas/invalid-uitpas-number * https://api.publiq.be/probs/uitpas/family-member-already-added * https://api.publiq.be/probs/uitpas/too-many-family-members * https://api.publiq.be/probs/uitpas/too-many-adults-in-family  The detail property might include more information for the client developer. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## putPassholdersPassholderIdFamilyMembersFamilyMemberId

> putPassholdersPassholderIdFamilyMembersFamilyMemberId(passholderId, familyMemberId, familyMember)

Update a family member

Update information of a family member of the given passholder.  The caller of this method must have &#x60;PASSHOLDERS_FAMILY_MEMBERS&#x60; permission for the given passholder 

### Example

```ts
import {
  Configuration,
  PassholderFamilyApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PutPassholdersPassholderIdFamilyMembersFamilyMemberIdRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new PassholderFamilyApi(config);

  const body = {
    // string | Passholder ID of the main family member
    passholderId: passholderId_example,
    // string | Passholder ID of the family member to update or delete
    familyMemberId: familyMemberId_example,
    // FamilyMember | Updated information of the family member. (optional)
    familyMember: {"icon":"https://www.uitpas.be/_nuxt/img/icon1.png"},
  } satisfies PutPassholdersPassholderIdFamilyMembersFamilyMemberIdRequest;

  try {
    const data = await api.putPassholdersPassholderIdFamilyMembersFamilyMemberId(body);
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
| **passholderId** | `string` | Passholder ID of the main family member | [Defaults to `undefined`] |
| **familyMemberId** | `string` | Passholder ID of the family member to update or delete | [Defaults to `undefined`] |
| **familyMember** | [FamilyMember](FamilyMember.md) | Updated information of the family member. | [Optional] |

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
| **202** | Accepted |  -  |
| **400** | Bad request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data  The detail property might include more information for the client developer. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

