# PassholdersApi

All URIs are relative to *https://api-test.uitpas.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deletePassholdersPassholderId**](PassholdersApi.md#deletepassholderspassholderid) | **DELETE** /passholders/{passholderId} | Remove passholder |
| [**deletePassholdersPassholderIdPicture**](PassholdersApi.md#deletepassholderspassholderidpicture) | **DELETE** /passholders/{passholderId}/picture | Delete picture of passholder |
| [**getChipNumbersChipNumber**](PassholdersApi.md#getchipnumberschipnumber) | **GET** /chip-numbers/{chipNumber} | Retrieve pass by chip number |
| [**getInszNumbersInszNumber**](PassholdersApi.md#getinsznumbersinsznumber) | **GET** /insz-numbers/{inszNumber} | Retrieve pass by INSZ number |
| [**getPasses**](PassholdersApi.md#getpasses) | **GET** /passes | Retrieve pass by identifier |
| [**getPassesUitpasNumber**](PassholdersApi.md#getpassesuitpasnumber) | **GET** /passes/{uitpasNumber} | Retrieve pass by UiTPAS number |
| [**getPassholders**](PassholdersApi.md#getpassholders) | **GET** /passholders | Search passholders |
| [**getPassholdersMembershipPricesCardSystemId**](PassholdersApi.md#getpassholdersmembershippricescardsystemid) | **GET** /passholders/membership-prices/{cardSystemId} | Retrieve new membership price |
| [**getPassholdersPassholderId**](PassholdersApi.md#getpassholderspassholderid) | **GET** /passholders/{passholderId} | Retrieve passholder by ID |
| [**getPassholdersPassholderIdMembershipPricesCardSystemId**](PassholdersApi.md#getpassholderspassholderidmembershippricescardsystemid) | **GET** /passholders/{passholderId}/membership-prices/{cardSystemId} | Retrieve upgrade membership price |
| [**getPassholdersPassholderIdPicture**](PassholdersApi.md#getpassholderspassholderidpicture) | **GET** /passholders/{passholderId}/picture | Get picture of passholder |
| [**getPassholdersPassholderIdTransactions**](PassholdersApi.md#getpassholderspassholderidtransactions) | **GET** /passholders/{passholderId}/transactions | Retrieve transaction history of a passholder |
| [**passholdersStatusInszNumbersInsznumber**](PassholdersApi.md#passholdersstatusinsznumbersinsznumber) | **GET** /passholders/status/insz-numbers/{inszNumber} | Retrieve the status of a passholder based on INSZ number |
| [**postPassholders**](PassholdersApi.md#postpassholders) | **POST** /passholders | Register a new passholder |
| [**postPassholdersPassholderIdCheckin**](PassholdersApi.md#postpassholderspassholderidcheckinoperation) | **POST** /passholders/{passholderId}/checkins | Check-in passholder using a check-in code |
| [**putPassholdersPassholderId**](PassholdersApi.md#putpassholderspassholderid) | **PUT** /passholders/{passholderId} | Update a passholder |
| [**putPassholdersPassholderIdPicture**](PassholdersApi.md#putpassholderspassholderidpicture) | **PUT** /passholders/{passholderId}/picture | Update picture of passholder |



## deletePassholdersPassholderId

> deletePassholdersPassholderId(passholderId)

Remove passholder

Remove this passholder.  The caller of this request must have &#x60;PASSHOLDERS_DELETE&#x60; permission.

### Example

```ts
import {
  Configuration,
  PassholdersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { DeletePassholdersPassholderIdRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new PassholdersApi(config);

  const body = {
    // string | Unique ID of an UiTPAS passholder.
    passholderId: passholderId_example,
  } satisfies DeletePassholdersPassholderIdRequest;

  try {
    const data = await api.deletePassholdersPassholderId(body);
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
| **204** | No Content |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePassholdersPassholderIdPicture

> deletePassholdersPassholderIdPicture(passholderId)

Delete picture of passholder

Delete the picture of a passholder.  The caller of this method must have &#x60;PASSHOLDERS_PICTURE_WRITE&#x60; permission for the given passholder. 

### Example

```ts
import {
  Configuration,
  PassholdersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { DeletePassholdersPassholderIdPictureRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new PassholdersApi(config);

  const body = {
    // string | Unique ID of an UiTPAS passholder.
    passholderId: passholderId_example,
  } satisfies DeletePassholdersPassholderIdPictureRequest;

  try {
    const data = await api.deletePassholdersPassholderIdPicture(body);
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
| **204** | No Content |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getChipNumbersChipNumber

> Pass getChipNumbersChipNumber(chipNumber)

Retrieve pass by chip number

Retrieve information related to a pass, searched by chip number.  If the response contains &#x60;messages&#x60;, they MUST be displayed to the end-user.  The caller of this request must have &#x60;PASSES_CHIPNUMBERS_READ&#x60; permission.  &lt;!-- theme: warning --&gt; &gt; **Deprecated:** use [GET /passes](/reference/uitpas.json/paths/~1passes/get) with &#x60;identification&#x60; query param instead.

### Example

```ts
import {
  Configuration,
  PassholdersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetChipNumbersChipNumberRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new PassholdersApi(config);

  const body = {
    // string | Hexadecimal notation of the chip number of an individual UiTPAS card.
    chipNumber: chipNumber_example,
  } satisfies GetChipNumbersChipNumberRequest;

  try {
    const data = await api.getChipNumbersChipNumber(body);
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
| **chipNumber** | `string` | Hexadecimal notation of the chip number of an individual UiTPAS card. | [Defaults to `undefined`] |

### Return type

[**Pass**](Pass.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/passholder-blocked * https://api.publiq.be/probs/uitpas/card-blocked  The detail property might include more information for the client developer. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found. Possible error types:  * https://api.publiq.be/probs/uitpas/pass-not-found  The detail property might include more information for the client developer. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInszNumbersInszNumber

> Pass getInszNumbersInszNumber(inszNumber)

Retrieve pass by INSZ number

Retrieve information related to a pass, searched by INSZ number.  If the response contains &#x60;messages&#x60;, they MUST be displayed to the end-user.  The caller of this request must have &#x60;PASSES_INSZNUMBERS_READ&#x60; permission.  &lt;!-- theme: warning --&gt; &gt; **Deprecated:** use [GET /passes](/reference/uitpas.json/paths/~1passes/get) with &#x60;identification&#x60; query param instead.

### Example

```ts
import {
  Configuration,
  PassholdersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetInszNumbersInszNumberRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new PassholdersApi(config);

  const body = {
    // string | Unique national (Belgian) INSZ number of an individual passholder to look up.
    inszNumber: inszNumber_example,
  } satisfies GetInszNumbersInszNumberRequest;

  try {
    const data = await api.getInszNumbersInszNumber(body);
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
| **inszNumber** | `string` | Unique national (Belgian) INSZ number of an individual passholder to look up. | [Defaults to `undefined`] |

### Return type

[**Pass**](Pass.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/passholder-blocked * https://api.publiq.be/probs/uitpas/card-blocked  The detail property might include more information for the client developer. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found. Possible error types:  * https://api.publiq.be/probs/uitpas/pass-not-found  The detail property might include more information for the client developer. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPasses

> Pass getPasses(identifier)

Retrieve pass by identifier

Retrieve pass information by one of its identifiers: UiTPAS number, INSZ number, INSZ barcode, or card chip number.  If the response contains &#x60;messages&#x60;, they MUST be displayed to the end-user.  &lt;!-- theme: warning --&gt;      &gt; ##### Important &gt; If the queried &#x60;identifier&#x60; is a card that is not in ACTIVE state, an error is returned. Where applicable, however, the &#x60;Passholder&#x60; or &#x60;Grouppass&#x60; may still be retrievable by ID, provided your client has the necessary permissions. For this reason, the cardStatus, passholderId and/or groupPass properties are included in the error response.  The caller of this request must have &#x60;PASSES_READ&#x60; permission.

### Example

```ts
import {
  Configuration,
  PassholdersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetPassesRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new PassholdersApi(config);

  const body = {
    // string | Find pass using identifier of type UiTPAS number, INSZ number, INSZ barcode or card chipnumber.
    identifier: identifier_example,
  } satisfies GetPassesRequest;

  try {
    const data = await api.getPasses(body);
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
| **identifier** | `string` | Find pass using identifier of type UiTPAS number, INSZ number, INSZ barcode or card chipnumber. | [Defaults to `undefined`] |

### Return type

[**Pass**](Pass.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/passholder-blocked * https://api.publiq.be/probs/uitpas/invalid-card-status  The detail property might include more information for the client developer. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found. Possible error types:  * https://api.publiq.be/probs/uitpas/pass-not-found  The detail property might include more information for the client developer. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPassesUitpasNumber

> Pass getPassesUitpasNumber(uitpasNumber)

Retrieve pass by UiTPAS number

Retrieve information related to a pass, searched by UiTPAS number.  If the response contains &#x60;messages&#x60;, they MUST be displayed to the end-user.  The caller of this request must have &#x60;PASSES_READ&#x60; permission.  &lt;!-- theme: warning --&gt; &gt; **Deprecated:** use [GET /passes](/reference/uitpas.json/paths/~1passes/get) with &#x60;identification&#x60; query param instead.

### Example

```ts
import {
  Configuration,
  PassholdersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetPassesUitpasNumberRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new PassholdersApi(config);

  const body = {
    // string | Unique UiTPAS number of a registered pass.
    uitpasNumber: uitpasNumber_example,
  } satisfies GetPassesUitpasNumberRequest;

  try {
    const data = await api.getPassesUitpasNumber(body);
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
| **uitpasNumber** | `string` | Unique UiTPAS number of a registered pass. | [Defaults to `undefined`] |

### Return type

[**Pass**](Pass.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/passholder-blocked * https://api.publiq.be/probs/uitpas/card-blocked  The detail property might include more information for the client developer. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found. Possible error types:  * https://api.publiq.be/probs/uitpas/pass-not-found  The detail property might include more information for the client developer. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPassholders

> PassholdersPaginatedResponse getPassholders(inszNumber, uitpasNumber, chipNumber, name, firstName, schoolId, start, limit, sortName, organizerId, dateOfBirthFrom, dateOfBirthTo, uitidId, associationId, associationMembershipStatus)

Search passholders

Retrieve passholders based on search parameters.  Note: by default passholders in the response are alphabetically sorted by name.  The caller of this request must have &#x60;PASSHOLDERS_SEARCH&#x60; or &#x60;PASSHOLDERS_SEARCH_BY_ID&#x60; or &#x60;PASSHOLDERS_SEARCH_ALL&#x60; permission.   In case of &#x60;PASSHOLDERS_SEARCH&#x60; permission, passholder results are filtered based on the allowed card systems of the caller, unless searched by one of the ID fields: * &#x60;uitpasNumber&#x60; * &#x60;chipNumber&#x60; * &#x60;inszNumber&#x60; * &#x60;uitidId&#x60;  In case of &#x60;PASSHOLDERS_SEARCH_BY_ID&#x60; permission, the caller can only make use of those ID fields.

### Example

```ts
import {
  Configuration,
  PassholdersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetPassholdersRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new PassholdersApi(config);

  const body = {
    // string | Unique national (Belgian) INSZ number of an individual passholder to look up. (optional)
    inszNumber: inszNumber_example,
    // string | Unique UiTPAS number of an individual passholder to look up. (optional)
    uitpasNumber: uitpasNumber_example,
    // string | Hexadecimal notation of the chip number of an individual UiTPAS card. (optional)
    chipNumber: chipNumber_example,
    // string | Complete or partial last name of a passholder to look up. (optional)
    name: name_example,
    // string | Complete or partial first name of a passholder to look up. (optional)
    firstName: firstName_example,
    // string | Organizer ID of a school, to only return passholders linked to a specific school. Use `*` to return passholders that are linked to any school. Note: Only used in very specific cases for educational integrations. (optional)
    schoolId: schoolId_example,
    // number | Position to start returning results from. When set to `0` the results starting from the very first position will be returned. When set to for example `10` the results 0-9 will be skipped and the ones starting from position 10 will be returned. Can be used in combination with `limit` for pagination. (optional)
    start: 56,
    // number | Maximum amount of results to return. Can be used in combination with `start` for pagination. **Important**: the maximum value for `limit` is `500`. Exceeding this value will result in an error. (optional)
    limit: 56,
    // 'asc' | 'desc' | Sorts the passholders by their last name in ascending or descending order. By default passholders are sorted by name, ascending order. (optional)
    sortName: sortName_example,
    // string | A specific organizer ID to only return passholders that are linked to a card system related to this organizer. If omitted, the results will return passholders linked to the organizers you have permission to access. (optional)
    organizerId: organizerId_example,
    // Date | Returns only passholders with a date of birth of this value (including) or more recent. Format `yyyy-mm-dd`, e.g. `2003-01-01` (optional)
    dateOfBirthFrom: 2013-10-20,
    // Date | Returns only passholders with a date of birth of this value (including) or older. Format `yyyy-mm-dd`, e.g. `2003-01-01` (optional)
    dateOfBirthTo: 2013-10-20,
    // string | Unique ID of the UiTiD user linked to an individual passholder to look up. (optional)
    uitidId: uitidId_example,
    // string | Filters results to passholders with a membership in the specified association. Defaults to active memberships only; use associationMembershipStatus to change this behavior. Requires association READ permission on the specified association for the provided organizerId (or for any of the caller\'s organizer IDs if omitted) (optional)
    associationId: associationId_example,
    // 'ACTIVE' | 'EXPIRED' | 'ALL' | Filters passholders by their association membership status. Requires associationId to be specified. Defaults to ACTIVE. (optional)
    associationMembershipStatus: associationMembershipStatus_example,
  } satisfies GetPassholdersRequest;

  try {
    const data = await api.getPassholders(body);
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
| **inszNumber** | `string` | Unique national (Belgian) INSZ number of an individual passholder to look up. | [Optional] [Defaults to `undefined`] |
| **uitpasNumber** | `string` | Unique UiTPAS number of an individual passholder to look up. | [Optional] [Defaults to `undefined`] |
| **chipNumber** | `string` | Hexadecimal notation of the chip number of an individual UiTPAS card. | [Optional] [Defaults to `undefined`] |
| **name** | `string` | Complete or partial last name of a passholder to look up. | [Optional] [Defaults to `undefined`] |
| **firstName** | `string` | Complete or partial first name of a passholder to look up. | [Optional] [Defaults to `undefined`] |
| **schoolId** | `string` | Organizer ID of a school, to only return passholders linked to a specific school. Use &#x60;*&#x60; to return passholders that are linked to any school. Note: Only used in very specific cases for educational integrations. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Position to start returning results from. When set to &#x60;0&#x60; the results starting from the very first position will be returned. When set to for example &#x60;10&#x60; the results 0-9 will be skipped and the ones starting from position 10 will be returned. Can be used in combination with &#x60;limit&#x60; for pagination. | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum amount of results to return. Can be used in combination with &#x60;start&#x60; for pagination. **Important**: the maximum value for &#x60;limit&#x60; is &#x60;500&#x60;. Exceeding this value will result in an error. | [Optional] [Defaults to `20`] |
| **sortName** | `asc`, `desc` | Sorts the passholders by their last name in ascending or descending order. By default passholders are sorted by name, ascending order. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **organizerId** | `string` | A specific organizer ID to only return passholders that are linked to a card system related to this organizer. If omitted, the results will return passholders linked to the organizers you have permission to access. | [Optional] [Defaults to `undefined`] |
| **dateOfBirthFrom** | `Date` | Returns only passholders with a date of birth of this value (including) or more recent. Format &#x60;yyyy-mm-dd&#x60;, e.g. &#x60;2003-01-01&#x60; | [Optional] [Defaults to `undefined`] |
| **dateOfBirthTo** | `Date` | Returns only passholders with a date of birth of this value (including) or older. Format &#x60;yyyy-mm-dd&#x60;, e.g. &#x60;2003-01-01&#x60; | [Optional] [Defaults to `undefined`] |
| **uitidId** | `string` | Unique ID of the UiTiD user linked to an individual passholder to look up. | [Optional] [Defaults to `undefined`] |
| **associationId** | `string` | Filters results to passholders with a membership in the specified association. Defaults to active memberships only; use associationMembershipStatus to change this behavior. Requires association READ permission on the specified association for the provided organizerId (or for any of the caller\&#39;s organizer IDs if omitted) | [Optional] [Defaults to `undefined`] |
| **associationMembershipStatus** | `ACTIVE`, `EXPIRED`, `ALL` | Filters passholders by their association membership status. Requires associationId to be specified. Defaults to ACTIVE. | [Optional] [Defaults to `undefined`] [Enum: ACTIVE, EXPIRED, ALL] |

### Return type

[**PassholdersPaginatedResponse**](PassholdersPaginatedResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/organizer-not-found * https://api.publiq.be/probs/uitpas/invalid-uitpas-number * https://api.publiq.be/probs/uitpas/invalid-insz-number * https://api.publiq.be/probs/uitpas/school-not-found * https://api.publiq.be/probs/url/query-limit-exceeded * https://api.publiq.be/probs/uitpas/association-not-found  The detail property might include more information for the client developer.  |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPassholdersMembershipPricesCardSystemId

> MembershipPrice getPassholdersMembershipPricesCardSystemId(cardSystemId, postalCode, dateOfBirth, cardType, socialTariff, voucher)

Retrieve new membership price

Retrieve the exact membership price for a new passholder. &#x60;cardType&#x60;, &#x60;postalCode&#x60; and &#x60;dateOfBirth&#x60; are mandatory to determine the correct price. &#x60;socialTariff&#x60; and &#x60;voucher&#x60; are optional.  To retrieve a list of prices for a card system if not all details are known yet, you can use [GET /card-systems/{cardSystemId}/membership-prices](/reference/uitpas.json/paths/~1card-systems~1{cardSystemId}~1membership-prices/get).  The caller of this request must have &#x60;MEMBERSHIP_PRICES_READ&#x60; permission.

### Example

```ts
import {
  Configuration,
  PassholdersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetPassholdersMembershipPricesCardSystemIdRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CLIENT_IDENTIFICATION
    apiKey: "YOUR API KEY",
  });
  const api = new PassholdersApi(config);

  const body = {
    // number | The ID of the card system.
    cardSystemId: 56,
    // string | postal code of the residence of the user. Must be a valid Belgian postal code or `0000` for foreign places.
    postalCode: postalCode_example,
    // Date | date of birth of the user used to determine the correct price.
    dateOfBirth: 2013-10-20,
    // 'NFC_CARD' | 'DIGITAL' | type of the card
    cardType: cardType_example,
    // boolean | whether or not the user is entitled to a social tariff (optional)
    socialTariff: true,
    // string | optional voucher that might reduce the membership price (optional)
    voucher: voucher_example,
  } satisfies GetPassholdersMembershipPricesCardSystemIdRequest;

  try {
    const data = await api.getPassholdersMembershipPricesCardSystemId(body);
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
| **cardSystemId** | `number` | The ID of the card system. | [Defaults to `undefined`] |
| **postalCode** | `string` | postal code of the residence of the user. Must be a valid Belgian postal code or &#x60;0000&#x60; for foreign places. | [Defaults to `undefined`] |
| **dateOfBirth** | `Date` | date of birth of the user used to determine the correct price. | [Defaults to `undefined`] |
| **cardType** | `NFC_CARD`, `DIGITAL` | type of the card | [Defaults to `undefined`] [Enum: NFC_CARD, DIGITAL] |
| **socialTariff** | `boolean` | whether or not the user is entitled to a social tariff | [Optional] [Defaults to `false`] |
| **voucher** | `string` | optional voucher that might reduce the membership price | [Optional] [Defaults to `undefined`] |

### Return type

[**MembershipPrice**](MembershipPrice.md)

### Authorization

[CLIENT_IDENTIFICATION](../README.md#CLIENT_IDENTIFICATION)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/invalid-postal-code * https://api.publiq.be/probs/uitpas/invalid-voucher-code  The detail property might include more information for the client developer.  |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not found. Possible error types:  * https://api.publiq.be/probs/uitpas/cardsystem-not-found * https://api.publiq.be/probs/uitpas/passholder-not-found  The detail property might include more information for the client developer. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPassholdersPassholderId

> Passholder getPassholdersPassholderId(passholderId)

Retrieve passholder by ID

Retrieve a passholder by ID.  The caller of this request must have &#x60;PASSHOLDERS_SEARCH&#x60; or &#x60;PASSHOLDERS_SEARCH_BY_ID&#x60; or &#x60;PASSHOLDERS_SEARCH_ALL&#x60;  permission.

### Example

```ts
import {
  Configuration,
  PassholdersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetPassholdersPassholderIdRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new PassholdersApi(config);

  const body = {
    // string | Unique ID of an UiTPAS passholder.
    passholderId: passholderId_example,
  } satisfies GetPassholdersPassholderIdRequest;

  try {
    const data = await api.getPassholdersPassholderId(body);
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
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPassholdersPassholderIdMembershipPricesCardSystemId

> MembershipPrice getPassholdersPassholderIdMembershipPricesCardSystemId(passholderId, cardSystemId, cardType, socialTariff, voucher)

Retrieve upgrade membership price

Retrieve the exact membership price for an existing passholder in a new card system. &#x60;cardType&#x60; is mandatory to determine the correct price. &#x60;socialTariff&#x60; and &#x60;voucher&#x60; are optional.  To retrieve the price for a *new* passholder, use [GET /passholders/membership-prices/{cardSystemId}](/reference/uitpas.json/paths/~1passholders~1membership-prices~1{cardSystemId}/get).  To retrieve a list of prices for a card system if not all details are known yet, you can use [GET /card-systems/{cardSystemId}/membership-prices](/reference/uitpas.json/paths/~1card-systems~1{cardSystemId}~1membership-prices/get).  The caller of this request must have &#x60;PASSHOLDERS_SEARCH&#x60; and &#x60;MEMBERSHIP_PRICES_READ&#x60; permission.

### Example

```ts
import {
  Configuration,
  PassholdersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetPassholdersPassholderIdMembershipPricesCardSystemIdRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new PassholdersApi(config);

  const body = {
    // string | Unique ID of an UiTPAS passholder.
    passholderId: passholderId_example,
    // number | The ID of the card system.
    cardSystemId: 56,
    // 'NFC_CARD' | 'DIGITAL' | type of the card
    cardType: cardType_example,
    // boolean | whether or not the user is entitled to a social tariff (optional)
    socialTariff: true,
    // string | optional voucher that might reduce the membership price (optional)
    voucher: voucher_example,
  } satisfies GetPassholdersPassholderIdMembershipPricesCardSystemIdRequest;

  try {
    const data = await api.getPassholdersPassholderIdMembershipPricesCardSystemId(body);
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
| **cardSystemId** | `number` | The ID of the card system. | [Defaults to `undefined`] |
| **cardType** | `NFC_CARD`, `DIGITAL` | type of the card | [Defaults to `undefined`] [Enum: NFC_CARD, DIGITAL] |
| **socialTariff** | `boolean` | whether or not the user is entitled to a social tariff | [Optional] [Defaults to `undefined`] |
| **voucher** | `string` | optional voucher that might reduce the membership price | [Optional] [Defaults to `undefined`] |

### Return type

[**MembershipPrice**](MembershipPrice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/invalid-voucher-code  The detail property might include more information for the client developer. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not found. Possible error types:  * https://api.publiq.be/probs/uitpas/cardsystem-not-found * https://api.publiq.be/probs/uitpas/passholder-not-found  The detail property might include more information for the client developer. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPassholdersPassholderIdPicture

> PassholderPicture getPassholdersPassholderIdPicture(passholderId)

Get picture of passholder

Retrieve picture of the given passholder.  This endpoint allows you to obtain a short-lived link to the picture of the passholder. After generation, this link remains active for a limited time, enabling you to include it in HTML pages displayed to your users.  The caller of this method must have &#x60;PASSHOLDERS_PICTURE_READ&#x60; permission for the given passholder.

### Example

```ts
import {
  Configuration,
  PassholdersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetPassholdersPassholderIdPictureRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new PassholdersApi(config);

  const body = {
    // string | Unique ID of an UiTPAS passholder.
    passholderId: passholderId_example,
  } satisfies GetPassholdersPassholderIdPictureRequest;

  try {
    const data = await api.getPassholdersPassholderIdPicture(body);
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

[**PassholderPicture**](PassholderPicture.md)

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


## getPassholdersPassholderIdTransactions

> TransactionsPaginatedCollection getPassholdersPassholderIdTransactions(passholderId, start, limit, sortCreationDate)

Retrieve transaction history of a passholder

Retrieve the transaction history of the passholder.  If a user access token of a passholder is used, you can specify the path parameter &#x60;passholderId&#x60; as: - the id of the passsholder of the access token (you can retrieve the id using &#x60;/passholders/me&#x60;) - &#x60;me&#x60; as a short form for the passholder of the access token - a passholder id of one of the passholder\&#39;s family members  If a user access token of an admin, or a client access token is used, &#x60;me&#x60; cannot be used as a passholder id.  The caller of this method must have &#x60;PASSHOLDERS_SELF_CHECKIN&#x60; permission for the given passholder.

### Example

```ts
import {
  Configuration,
  PassholdersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetPassholdersPassholderIdTransactionsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new PassholdersApi(config);

  const body = {
    // string | Passholder ID or `me`
    passholderId: passholderId_example,
    // number | Position to start returning results from. When set to `0` the results starting from the very first position will be returned. When set to for example `10` the results 0-9 will be skipped and the ones starting from position 10 will be returned. Can be used in combination with `limit` for pagination. (optional)
    start: 56,
    // number | Maximum amount of results to return. Can be used in combination with `start` for pagination. **Important**: the maximum value for `limit` is `500`. Exceeding this value will result in an error. (optional)
    limit: 56,
    // 'asc' | 'desc' | Sorts the transactions by creationDate in ascending or descending order. (optional)
    sortCreationDate: sortCreationDate_example,
  } satisfies GetPassholdersPassholderIdTransactionsRequest;

  try {
    const data = await api.getPassholdersPassholderIdTransactions(body);
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
| **passholderId** | `string` | Passholder ID or &#x60;me&#x60; | [Defaults to `undefined`] |
| **start** | `number` | Position to start returning results from. When set to &#x60;0&#x60; the results starting from the very first position will be returned. When set to for example &#x60;10&#x60; the results 0-9 will be skipped and the ones starting from position 10 will be returned. Can be used in combination with &#x60;limit&#x60; for pagination. | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum amount of results to return. Can be used in combination with &#x60;start&#x60; for pagination. **Important**: the maximum value for &#x60;limit&#x60; is &#x60;500&#x60;. Exceeding this value will result in an error. | [Optional] [Defaults to `20`] |
| **sortCreationDate** | `asc`, `desc` | Sorts the transactions by creationDate in ascending or descending order. | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |

### Return type

[**TransactionsPaginatedCollection**](TransactionsPaginatedCollection.md)

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


## passholdersStatusInszNumbersInsznumber

> PassholdersStatusInszNumbersInsznumber200Response passholdersStatusInszNumbersInsznumber(inszNumber)

Retrieve the status of a passholder based on INSZ number

Retrieve the status of a passholder based on INSZ number.  This endpoint is rate limited. 

### Example

```ts
import {
  Configuration,
  PassholdersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PassholdersStatusInszNumbersInsznumberRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CLIENT_IDENTIFICATION
    apiKey: "YOUR API KEY",
  });
  const api = new PassholdersApi(config);

  const body = {
    // string | the INSZ number to check
    inszNumber: inszNumber_example,
  } satisfies PassholdersStatusInszNumbersInsznumberRequest;

  try {
    const data = await api.passholdersStatusInszNumbersInsznumber(body);
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
| **inszNumber** | `string` | the INSZ number to check | [Defaults to `undefined`] |

### Return type

[**PassholdersStatusInszNumbersInsznumber200Response**](PassholdersStatusInszNumbersInsznumber200Response.md)

### Authorization

[CLIENT_IDENTIFICATION](../README.md#CLIENT_IDENTIFICATION)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request. Possible error types:  * https://api.publiq.be/probs/uitpas/invalid-insz-number  The detail property might include more information for the client developer. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **429** | Too Many Requests  Possible error types:  * https://api.publiq.be/probs/uitpas/rate-limited  The detail property might include more information for the client developer.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postPassholders

> Passholder postPassholders(passholder)

Register a new passholder

Register a passholder  &lt;!-- theme: warning --&gt;  &gt; IMPORTANT &gt; &gt; Make sure to set &#x60;registrationCardType&#x60; to either &#x60;DIGITAL&#x60; or &#x60;NFC_CARD&#x60;. In case of &#x60;NFC_CARD&#x60; the field &#x60;registrationUitpasNumber&#x60; is required and has to be a card in status &#x60;LOCAL_STOCK&#x60;.  The caller of this request must have &#x60;PASSHOLDERS_WRITE&#x60; permission for the &#x60;registrationOrganizer&#x60;. On top of that &#x60;PASSHOLDERS_WRITE_SOCIAL_TARIFF&#x60; permission is required for callers that register a passholder with social tariff. And on top of that &#x60;PASSHOLDERS_WRITE_SOCIALTARIFF_FULL_CARDSYSTEM&#x60; permission is required to register passholders with social tariff in another city than the &#x60;registrationOrganizer&#x60;.  &#x60;PASSHOLDERS_WRITE_FOREIGN_COUNTRY&#x60; permission is needed when registering any passholder with a country other than &#x60;be&#x60;.

### Example

```ts
import {
  Configuration,
  PassholdersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PostPassholdersRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new PassholdersApi(config);

  const body = {
    // Passholder | Details of the new passholder to register. (optional)
    passholder: {"name":"Peeters","firstName":"Marc","inszNumber":"00000009007","email":"marc.peeters@example.com","dateOfBirth":"2000-01-01","registrationOrganizer":{"id":"abc12345"},"address":{"street":"Grote markt 12","postalCode":"9300","city":"Aalst","country":"be"},"optInPreferences":{"serviceMails":true,"infoMails":true,"milestoneMails":true,"sms":false,"post":true},"nationality":"Belg","legalTermsPaper":false,"legalTermsDigital":true,"parentalConsent":false,"registrationCardSystemId":1,"registrationCardType":"DIGITAL"},
  } satisfies PostPassholdersRequest;

  try {
    const data = await api.postPassholders(body);
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
| **passholder** | [Passholder](Passholder.md) | Details of the new passholder to register. | [Optional] |

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
| **400** | Bad request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitpas/organizer-not-found * https://api.publiq.be/probs/uitpas/cardsystem-not-found * https://api.publiq.be/probs/uitpas/invalid-city * https://api.publiq.be/probs/uitpas/invalid-insz-number * https://api.publiq.be/probs/uitpas/invalid-uitpas-number * https://api.publiq.be/probs/uitpas/invalid-card * https://api.publiq.be/probs/uitpas/invalid-card-status  The detail property might include more information for the client developer. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postPassholdersPassholderIdCheckin

> PostPassholdersPassholderIdCheckin201Response postPassholdersPassholderIdCheckin(passholderId, postPassholdersPassholderIdCheckinRequest)

Check-in passholder using a check-in code

Allow passholders to self check-in at an event using a check-in code (typically a QR code the passholder can scan). If you want to check-in a passholder based on an event id, use [POST /checkins](/reference/uitpas.json/paths/~1checkins/post) instead.   If a user access token of a passholder is used, you can specify the path parameter &#x60;passholderId&#x60; as: - the id of the passsholder of the access token (you can retrieve the id using &#x60;/passholders/me&#x60;) - &#x60;me&#x60; as a short form for the passholder of the access token - a passholder id of one of the passholder\&#39;s family members  If a user access token of an admin, or a client access token is used, &#x60;me&#x60; cannot be used as a passholder id.  The caller of this method must have &#x60;PASSHOLDERS_SELF_CHECKIN&#x60; permission for the given passholder.

### Example

```ts
import {
  Configuration,
  PassholdersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PostPassholdersPassholderIdCheckinOperationRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new PassholdersApi(config);

  const body = {
    // string | Passholder ID or `me`
    passholderId: passholderId_example,
    // PostPassholdersPassholderIdCheckinRequest | The check-in code of an event is typically presented to the user as a printed QR code or as a QR code displayed on a check-in device. (optional)
    postPassholdersPassholderIdCheckinRequest: {"checkinCode":"abcde123546"},
  } satisfies PostPassholdersPassholderIdCheckinOperationRequest;

  try {
    const data = await api.postPassholdersPassholderIdCheckin(body);
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
| **passholderId** | `string` | Passholder ID or &#x60;me&#x60; | [Defaults to `undefined`] |
| **postPassholdersPassholderIdCheckinRequest** | [PostPassholdersPassholderIdCheckinRequest](PostPassholdersPassholderIdCheckinRequest.md) | The check-in code of an event is typically presented to the user as a printed QR code or as a QR code displayed on a check-in device. | [Optional] |

### Return type

[**PostPassholdersPassholderIdCheckin201Response**](PostPassholdersPassholderIdCheckin201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitpas/checkin-code-expired * https://api.publiq.be/probs/uitpas/checkin-code-invalid * https://api.publiq.be/probs/uitpas/passholder-not-found * https://api.publiq.be/probs/uitpas/passholder-no-active-cardsystems * https://api.publiq.be/probs/uitpas/checkin-not-allowed  The detail property might include more information for the client developer. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **429** | Too Many Requests  Possible error types:  * https://api.publiq.be/probs/uitpas/rate-limited  The detail property might include more information for the client developer. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## putPassholdersPassholderId

> putPassholdersPassholderId(passholderId, passholder)

Update a passholder

Update a passholder.  Only specific fields can be modified; please refer to the individual field descriptions to identify which fields are ignored during an update.  Please note that this is a PUT endpoint, which performs a full replacement of the resource. You must include the complete resource payload in the request body, including all unchanged fields. Omitting optional fields may clear their existing values or cause validation errors.  &lt;!-- theme: warning --&gt;  &gt; The following additional rules apply: &gt; * Social Tariff Permissions: Updating the &#x60;registrationSocialTariffEndDate&#x60; field requires the additional &#x60;PASSHOLDERS_WRITE_SOCIAL_TARIFF&#x60; permission. &gt; * Regional Restrictions: If the passholder has a social tariff, the &#x60;postalCode&#x60; and &#x60;city&#x60; cannot be changed to a location outside the region of the current card system. &gt; * Updating a passholder to a city outside Belgium requires the additional &#x60;PASSHOLDERS_WRITE_FOREIGN_COUNTRY&#x60; permission.  The caller of this request must have &#x60;PASSHOLDERS_WRITE&#x60; permission.

### Example

```ts
import {
  Configuration,
  PassholdersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PutPassholdersPassholderIdRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new PassholdersApi(config);

  const body = {
    // string | Unique ID of an UiTPAS passholder.
    passholderId: passholderId_example,
    // Passholder | Updated Passholder (optional)
    passholder: {"name":"Peeters","firstName":"Marc","inszNumber":"00000009007","email":"marc.peeters@example.com","dateOfBirth":"2000-01-01","address":{"street":"Grote markt 12","postalCode":"9300","city":"Aalst"},"optInPreferences":{"serviceMails":true,"infoMails":true,"milestoneMails":true,"sms":false,"post":true},"nationality":"Belg","legalTermsPaper":false,"legalTermsDigital":true,"parentalConsent":false,"registrationSocialTariffEndDate":"2027-04-30"},
  } satisfies PutPassholdersPassholderIdRequest;

  try {
    const data = await api.putPassholdersPassholderId(body);
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
| **passholder** | [Passholder](Passholder.md) | Updated Passholder | [Optional] |

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
| **204** | Passholder updated. No Content |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data  The detail property might include more information for the client developer. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## putPassholdersPassholderIdPicture

> putPassholdersPassholderIdPicture(passholderId, file)

Update picture of passholder

Update the picture of a passholder.  The caller of this method must have &#x60;PASSHOLDERS_PICTURE_WRITE&#x60; permission for the given passholder.

### Example

```ts
import {
  Configuration,
  PassholdersApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PutPassholdersPassholderIdPictureRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const api = new PassholdersApi();

  const body = {
    // string | Unique ID of an UiTPAS passholder.
    passholderId: passholderId_example,
    // Blob | The picture to upload.
    file: BINARY_DATA_HERE,
  } satisfies PutPassholdersPassholderIdPictureRequest;

  try {
    const data = await api.putPassholdersPassholderIdPicture(body);
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
| **file** | `Blob` | The picture to upload. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data  The detail property might include more information for the client developer.   |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

