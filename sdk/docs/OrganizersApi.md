# OrganizersApi

All URIs are relative to *https://io-test.uitdatabank.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**organizerAddressNlPut**](OrganizersApi.md#organizeraddressnlput) | **PUT** /organizers/{organizerId}/address | address.nl - update |
| [**organizerAddressPut**](OrganizersApi.md#organizeraddressput) | **PUT** /organizers/{organizerId}/address/{language} | address - update |
| [**organizerContactPointPut**](OrganizersApi.md#organizercontactpointput) | **PUT** /organizers/{organizerId}/contact-point | contactPoint - update |
| [**organizerDescriptionDelete**](OrganizersApi.md#organizerdescriptiondelete) | **DELETE** /organizers/{organizerId}/description/{language} | description - delete |
| [**organizerDescriptionPut**](OrganizersApi.md#organizerdescriptionput) | **PUT** /organizers/{organizerId}/description/{language} | description - update |
| [**organizerEducationalDescriptionDelete**](OrganizersApi.md#organizereducationaldescriptiondelete) | **DELETE** /organizers/{organizerId}/educational-description/{language} | educational description - delete |
| [**organizerEducationalDescriptionPut**](OrganizersApi.md#organizereducationaldescriptionput) | **PUT** /organizers/{organizerId}/educational-description/{language} | educational description - update |
| [**organizerGet**](OrganizersApi.md#organizerget) | **GET** /organizers/{organizerId} | organizer - get |
| [**organizerImageDelete**](OrganizersApi.md#organizerimagedelete) | **DELETE** /organizers/{organizerId}/images/{imageId} | images - delete |
| [**organizerImagesPatch**](OrganizersApi.md#organizerimagespatch) | **PATCH** /organizers/{organizerId}/images | images - patch |
| [**organizerImagesPost**](OrganizersApi.md#organizerimagespost) | **POST** /organizers/{organizerId}/images | images - add |
| [**organizerLabelsAdd**](OrganizersApi.md#organizerlabelsadd) | **PUT** /organizers/{organizerId}/labels/{labelName} | labels - add |
| [**organizerLabelsDelete**](OrganizersApi.md#organizerlabelsdelete) | **DELETE** /organizers/{organizerId}/labels/{labelName} | labels - delete |
| [**organizerMainImageUpdate**](OrganizersApi.md#organizermainimageupdate) | **PUT** /organizers/{organizerId}/images/main | mainImage - update |
| [**organizerNameNlPut**](OrganizersApi.md#organizernamenlput) | **PUT** /organizers/{organizerId}/name | name.nl - update |
| [**organizerNamePut**](OrganizersApi.md#organizernameput) | **PUT** /organizers/{organizerId}/name/{language} | name - update |
| [**organizerPost**](OrganizersApi.md#organizerpostoperation) | **POST** /organizers | organizer - create |
| [**organizerPut**](OrganizersApi.md#organizerput) | **PUT** /organizers/{organizerId} | organizer - update |
| [**organizerUrlPut**](OrganizersApi.md#organizerurlput) | **PUT** /organizers/{organizerId}/url | url - update |



## organizerAddressNlPut

> organizerAddressNlPut(organizerId, organizerAddressPut)

address.nl - update

&lt;!-- theme: warning --&gt;  &gt; This endpoint is deprecated, use [&#x60;PUT /organizers/{organizerId}/address/{language}&#x60;](/reference/entry.json/paths/~1organizers~1{organizerId}~1address~1{language}/put) instead.   Updates the address of the organizer with the given &#x60;organizerId&#x60;. The new address of the request body will be set on the organizer in the default language &#x60;nl&#x60;.  An address consists of the following properties which are all required: * streetAddress: the street name and street number * postalCode: the postal code * addressLocality: the town or city * addressCountry: the 2-character country code

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '';
import type { OrganizerAddressNlPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | Unique id of an organizer, in the format of a UUID
    organizerId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // OrganizerAddressPut | New address to set on the organizer (localized in the `nl` language). (optional)
    organizerAddressPut: {"streetAddress":"Kerkstraat 2","postalCode":"3000","addressLocality":"Leuven","addressCountry":"BE"},
  } satisfies OrganizerAddressNlPutRequest;

  try {
    const data = await api.organizerAddressNlPut(body);
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
| **organizerId** | `string` | Unique id of an organizer, in the format of a UUID | [Defaults to `undefined`] |
| **organizerAddressPut** | [OrganizerAddressPut](OrganizerAddressPut.md) | New address to set on the organizer (localized in the &#x60;nl&#x60; language). | [Optional] |

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
| **204** | No Content. The organizer address has been updated successfully. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizerAddressPut

> organizerAddressPut(organizerId, language, organizerAddressPut)

address - update

Updates the address of the organizer with the given &#x60;organizerId&#x60;. The new address of the request body will be set on the organizer in the given &#x60;language&#x60;.  An address consists of the following properties which are all required: * streetAddress: the street name and street number * postalCode: the postal code * addressLocality: the town or city * addressCountry: the 2-character country code

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '';
import type { OrganizerAddressPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | Unique id of an organizer, in the format of a UUID
    organizerId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // 'nl' | 'fr' | 'en' | 'de' | The language of the request body properties
    language: language_example,
    // OrganizerAddressPut | New address to set on the organizer (localized in the given language in the URL). (optional)
    organizerAddressPut: {"streetAddress":"Kerkstraat 2","postalCode":"3000","addressLocality":"Leuven","addressCountry":"BE"},
  } satisfies OrganizerAddressPutRequest;

  try {
    const data = await api.organizerAddressPut(body);
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
| **organizerId** | `string` | Unique id of an organizer, in the format of a UUID | [Defaults to `undefined`] |
| **language** | `nl`, `fr`, `en`, `de` | The language of the request body properties | [Defaults to `undefined`] [Enum: nl, fr, en, de] |
| **organizerAddressPut** | [OrganizerAddressPut](OrganizerAddressPut.md) | New address to set on the organizer (localized in the given language in the URL). | [Optional] |

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
| **204** | No Content. The organizer address has been updated successfully. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizerContactPointPut

> organizerContactPointPut(organizerId, organizerContactPointPut)

contactPoint - update

Updates the contact point information of the organizer with the given &#x60;organizerId&#x60;. A contact point has a list of the following properties: * Url: an array of valid urls * Email: an array of valid emails * Phone: an array of phone numbers  All properties are optional.

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '';
import type { OrganizerContactPointPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | Unique id of an organizer, in the format of a UUID
    organizerId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // OrganizerContactPointPut | New contact point to set on the organizer. (optional)
    organizerContactPointPut: {"url":["https://www.publiq.be","https://www.cultuurnet.be"],"email":["info@publiq.be","info@cultuurnet.be"],"phone":["016 10 20 30","016 11 22 33","016 99 99 99"]},
  } satisfies OrganizerContactPointPutRequest;

  try {
    const data = await api.organizerContactPointPut(body);
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
| **organizerId** | `string` | Unique id of an organizer, in the format of a UUID | [Defaults to `undefined`] |
| **organizerContactPointPut** | [OrganizerContactPointPut](OrganizerContactPointPut.md) | New contact point to set on the organizer. | [Optional] |

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
| **204** | No Content. The organizer contact point has been updated successfully. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizerDescriptionDelete

> organizerDescriptionDelete(organizerId, language)

description - delete

Deletes the description in the given &#x60;language&#x60; from the organizer with the given &#x60;organizerId&#x60;.

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '';
import type { OrganizerDescriptionDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | Unique id of an organizer, in the format of a UUID
    organizerId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // 'nl' | 'fr' | 'en' | 'de' | The language of the request body properties
    language: language_example,
  } satisfies OrganizerDescriptionDeleteRequest;

  try {
    const data = await api.organizerDescriptionDelete(body);
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
| **organizerId** | `string` | Unique id of an organizer, in the format of a UUID | [Defaults to `undefined`] |
| **language** | `nl`, `fr`, `en`, `de` | The language of the request body properties | [Defaults to `undefined`] [Enum: nl, fr, en, de] |

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
| **204** | No Content. The description was deleted. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizerDescriptionPut

> organizerDescriptionPut(organizerId, language, organizerDescriptionPut)

description - update

Updates the description of the organizer with the given &#x60;organizerId&#x60;. The new description of the request body will be set on the organizer in the given &#x60;language&#x60;. The new description needs to be at least one character long.

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '';
import type { OrganizerDescriptionPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | Unique id of an organizer, in the format of a UUID
    organizerId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // 'nl' | 'fr' | 'en' | 'de' | The language of the request body properties
    language: language_example,
    // OrganizerDescriptionPut | New description to set on the organizer (localized in the given language in the URL). (optional)
    organizerDescriptionPut: {"description":"This organizer is responsible for creating cultural events for schools around Brussels."},
  } satisfies OrganizerDescriptionPutRequest;

  try {
    const data = await api.organizerDescriptionPut(body);
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
| **organizerId** | `string` | Unique id of an organizer, in the format of a UUID | [Defaults to `undefined`] |
| **language** | `nl`, `fr`, `en`, `de` | The language of the request body properties | [Defaults to `undefined`] [Enum: nl, fr, en, de] |
| **organizerDescriptionPut** | [OrganizerDescriptionPut](OrganizerDescriptionPut.md) | New description to set on the organizer (localized in the given language in the URL). | [Optional] |

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
| **204** | No Content. The organizer description has been updated successfully. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizerEducationalDescriptionDelete

> organizerEducationalDescriptionDelete(organizerId, language)

educational description - delete

Deletes the educational description in the given &#x60;language&#x60; from the organizer with the given &#x60;organizerId&#x60;.

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '';
import type { OrganizerEducationalDescriptionDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | Unique id of an organizer, in the format of a UUID
    organizerId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // 'nl' | 'fr' | 'en' | 'de' | The language of the request body properties
    language: language_example,
  } satisfies OrganizerEducationalDescriptionDeleteRequest;

  try {
    const data = await api.organizerEducationalDescriptionDelete(body);
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
| **organizerId** | `string` | Unique id of an organizer, in the format of a UUID | [Defaults to `undefined`] |
| **language** | `nl`, `fr`, `en`, `de` | The language of the request body properties | [Defaults to `undefined`] [Enum: nl, fr, en, de] |

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
| **204** | No Content. The educational description has been deleted. |  -  |
| **400** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizerEducationalDescriptionPut

> organizerEducationalDescriptionPut(organizerId, language, organizerEducationalDescriptionPut)

educational description - update

Updates the educational description of the organizer with the given &#x60;organizerId&#x60;. The new educational description of the request body will be set on the organizer in the given &#x60;language&#x60;. The new educational description needs to be at least one character long.

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '';
import type { OrganizerEducationalDescriptionPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | Unique id of an organizer, in the format of a UUID
    organizerId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // 'nl' | 'fr' | 'en' | 'de' | The language of the request body properties
    language: language_example,
    // OrganizerEducationalDescriptionPut | New educational description to set on the organizer (localized in the given language in the URL). (optional)
    organizerEducationalDescriptionPut: {"educationalDescription":"This organizer is responsible for creating cultural events for schools around Brussels."},
  } satisfies OrganizerEducationalDescriptionPutRequest;

  try {
    const data = await api.organizerEducationalDescriptionPut(body);
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
| **organizerId** | `string` | Unique id of an organizer, in the format of a UUID | [Defaults to `undefined`] |
| **language** | `nl`, `fr`, `en`, `de` | The language of the request body properties | [Defaults to `undefined`] [Enum: nl, fr, en, de] |
| **organizerEducationalDescriptionPut** | [OrganizerEducationalDescriptionPut](OrganizerEducationalDescriptionPut.md) | New educational description to set on the organizer (localized in the given language in the URL). | [Optional] |

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
| **204** | No Content. The organizer educational description has been updated successfully. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizerGet

> OrganizerWithReadExample organizerGet(organizerId)

organizer - get

Returns an the organizer with the given &#x60;organizerId&#x60;

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '';
import type { OrganizerGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | Unique id of an organizer, in the format of a UUID
    organizerId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
  } satisfies OrganizerGetRequest;

  try {
    const data = await api.organizerGet(body);
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
| **organizerId** | `string` | Unique id of an organizer, in the format of a UUID | [Defaults to `undefined`] |

### Return type

[**OrganizerWithReadExample**](OrganizerWithReadExample.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Organizer details |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizerImageDelete

> organizerImageDelete(organizerId, imageId)

images - delete

Remove an image from an organizer.

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '';
import type { OrganizerImageDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | Unique id of an organizer, in the format of a UUID
    organizerId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // string | The unique uuid of an already uploaded image.
    imageId: 365f99a4-5490-4313-8ee9-adebea2dceb0,
  } satisfies OrganizerImageDeleteRequest;

  try {
    const data = await api.organizerImageDelete(body);
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
| **organizerId** | `string` | Unique id of an organizer, in the format of a UUID | [Defaults to `undefined`] |
| **imageId** | `string` | The unique uuid of an already uploaded image. | [Defaults to `undefined`] |

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
| **204** | The image was removed from the organizer. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizerImagesPatch

> organizerImagesPatch(organizerId, organizerImagesPatchInner)

images - patch

Update one or more images of an organizer.  The images to update are identified by their &#x60;id&#x60;. It is possible to update one or more of the following properties:  * The &#x60;language&#x60; of an image * The &#x60;description&#x60; of an image * The &#x60;copyrightHolder&#x60; of an image  Only images included in the &#x60;PATCH&#x60; request will be updated. Other images that also exist on the organizer will not be removed or updated.

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '';
import type { OrganizerImagesPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | Unique id of an organizer, in the format of a UUID
    organizerId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // Array<OrganizerImagesPatchInner> | Images to update on the organizer. Images previously added to the organizer but not included in this request will be preserved. (optional)
    organizerImagesPatchInner: ...,
  } satisfies OrganizerImagesPatchRequest;

  try {
    const data = await api.organizerImagesPatch(body);
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
| **organizerId** | `string` | Unique id of an organizer, in the format of a UUID | [Defaults to `undefined`] |
| **organizerImagesPatchInner** | `Array<OrganizerImagesPatchInner>` | Images to update on the organizer. Images previously added to the organizer but not included in this request will be preserved. | [Optional] |

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
| **204** | The images were updated. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizerImagesPost

> organizerImagesPost(organizerId, organizerImagePost)

images - add

Add an image to an organizer.  The image objects contains the following properties: * &#x60;id&#x60;: the id of the image which is required * &#x60;language&#x60;: an optional language of the image and description * &#x60;copyrightHolder&#x60;: the optional copyright holder of the image * &#x60;description&#x60;: the description of the image which is also optional  &lt;!-- theme: info --&gt; &gt; The optional fields that are not provided will get the values from the properties of the orginally uploaded image.

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '';
import type { OrganizerImagesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | Unique id of an organizer, in the format of a UUID
    organizerId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // OrganizerImagePost | The image to add to an organizer. (optional)
    organizerImagePost: {"id":"546a90cd-a238-417b-aa98-1b6c50c1345c","language":"nl","copyrightHolder":"publiq","description":"Picture of the last publiq event"},
  } satisfies OrganizerImagesPostRequest;

  try {
    const data = await api.organizerImagesPost(body);
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
| **organizerId** | `string` | Unique id of an organizer, in the format of a UUID | [Defaults to `undefined`] |
| **organizerImagePost** | [OrganizerImagePost](OrganizerImagePost.md) | The image to add to an organizer. | [Optional] |

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
| **204** | The image was added to the organizer. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizerLabelsAdd

> organizerLabelsAdd(organizerId, labelName)

labels - add

Adds the given label to the organizer with the given &#x60;organizerId&#x60;.  If the specified label does not exist yet in UiTdatabank a new label will be created with default visibility and public permissions (usable by anyone), and linked to the organizer.  The label must be longer than 1 character and shorter than 255 characters. The label can also not contain the semicolon character. It should match the regex &#x60;^(?&#x3D;.{2,255}$)(?&#x3D;.*\\S.*\\S.*)[^;]*$&#x60;

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '';
import type { OrganizerLabelsAddRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | Unique id of an organizer, in the format of a UUID
    organizerId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // string | The label to add to an event, place or organizer. The label name should be longer than 1 character but shorter than 255 characters. The label name should not contain semicolons.
    labelName: MyLabel,
  } satisfies OrganizerLabelsAddRequest;

  try {
    const data = await api.organizerLabelsAdd(body);
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
| **organizerId** | `string` | Unique id of an organizer, in the format of a UUID | [Defaults to `undefined`] |
| **labelName** | `string` | The label to add to an event, place or organizer. The label name should be longer than 1 character but shorter than 255 characters. The label name should not contain semicolons. | [Defaults to `undefined`] |

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
| **204** | No Content. The label has been added successfully. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizerLabelsDelete

> organizerLabelsDelete(organizerId, labelName)

labels - delete

Deletes the given label from the organizer with the given &#x60;organizerId&#x60;.  The label must be longer than 1 character and shorter than 255 characters. The label can also not contain the semicolon character. It should match the regex &#x60;^(?&#x3D;.{2,255}$)(?&#x3D;.*\\S.*\\S.*)[^;]*$&#x60;

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '';
import type { OrganizerLabelsDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | Unique id of an organizer, in the format of a UUID
    organizerId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // string | The label to add to an event, place or organizer. The label name should be longer than 1 character but shorter than 255 characters. The label name should not contain semicolons.
    labelName: MyLabel,
  } satisfies OrganizerLabelsDeleteRequest;

  try {
    const data = await api.organizerLabelsDelete(body);
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
| **organizerId** | `string` | Unique id of an organizer, in the format of a UUID | [Defaults to `undefined`] |
| **labelName** | `string` | The label to add to an event, place or organizer. The label name should be longer than 1 character but shorter than 255 characters. The label name should not contain semicolons. | [Defaults to `undefined`] |

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
| **204** | No Content. The label has been deleted from the organizer successfully. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizerMainImageUpdate

> organizerMainImageUpdate(organizerId, organizerMainImagePut)

mainImage - update

Sets the main image of an organizer. This only requires the &#x60;imageId&#x60; of the image to set as main.  &lt;!-- theme: info --&gt; &gt; For backwards compatible reasons &#x60;mediaObjectId&#x60; is also supported.

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '';
import type { OrganizerMainImageUpdateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | Unique id of an organizer, in the format of a UUID
    organizerId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // OrganizerMainImagePut | The image id of the new main image. (optional)
    organizerMainImagePut: {"imageId":"4b349765-9499-4d35-b295-c82ede576cf0"},
  } satisfies OrganizerMainImageUpdateRequest;

  try {
    const data = await api.organizerMainImageUpdate(body);
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
| **organizerId** | `string` | Unique id of an organizer, in the format of a UUID | [Defaults to `undefined`] |
| **organizerMainImagePut** | [OrganizerMainImagePut](OrganizerMainImagePut.md) | The image id of the new main image. | [Optional] |

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
| **204** | Main image was set |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizerNameNlPut

> organizerNameNlPut(organizerId, organizerNamePut)

name.nl - update

&lt;!-- theme: warning --&gt;  &gt; This endpoint is deprecated, use [&#x60;PUT /organizers/{organizerId}/name/{language}&#x60;](/reference/entry.json/paths/~1organizers~1{organizerId}~1name~1{language}/put) instead.  Updates the name of the organizer with the given &#x60;organizerId&#x60;. The new name of the request body will be set on the organizer with default language &#x60;nl&#x60;. The new name needs to be at least one character long.

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '';
import type { OrganizerNameNlPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | Unique id of an organizer, in the format of a UUID
    organizerId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // OrganizerNamePut | New name to set on the organizer (localized in the `nl` language). (optional)
    organizerNamePut: {"name":"publiq"},
  } satisfies OrganizerNameNlPutRequest;

  try {
    const data = await api.organizerNameNlPut(body);
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
| **organizerId** | `string` | Unique id of an organizer, in the format of a UUID | [Defaults to `undefined`] |
| **organizerNamePut** | [OrganizerNamePut](OrganizerNamePut.md) | New name to set on the organizer (localized in the &#x60;nl&#x60; language). | [Optional] |

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
| **204** | No Content. The organizer name has been updated successfully. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizerNamePut

> organizerNamePut(organizerId, language, organizerNamePut)

name - update

Updates the name of the organizer with the given &#x60;organizerId&#x60;. The new name of the request body will be set on the organizer in the given &#x60;language&#x60;. The new name needs to be at least one character long.

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '';
import type { OrganizerNamePutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | Unique id of an organizer, in the format of a UUID
    organizerId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // 'nl' | 'fr' | 'en' | 'de' | The language of the request body properties
    language: language_example,
    // OrganizerNamePut | New name to set on the organizer (localized in the given language in the URL). (optional)
    organizerNamePut: {"name":"publiq"},
  } satisfies OrganizerNamePutRequest;

  try {
    const data = await api.organizerNamePut(body);
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
| **organizerId** | `string` | Unique id of an organizer, in the format of a UUID | [Defaults to `undefined`] |
| **language** | `nl`, `fr`, `en`, `de` | The language of the request body properties | [Defaults to `undefined`] [Enum: nl, fr, en, de] |
| **organizerNamePut** | [OrganizerNamePut](OrganizerNamePut.md) | New name to set on the organizer (localized in the given language in the URL). | [Optional] |

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
| **204** | No Content. The organizer name has been updated successfully. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizerPost

> OrganizerPost201Response organizerPost(organizerPostRequest)

organizer - create

Creates a new organizer.  &lt;!-- theme: info --&gt;  &gt; Organizers are required to have a unique &#x60;url&#x60; value to avoid accidental duplicate organizers.  &lt;!-- theme: warning --&gt;  &gt; This request is also supported with an older, deprecated schema that was used to create an organizer with just its required fields.

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '';
import type { OrganizerPostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // OrganizerPostRequest | The complete details of the new organizer to create. (optional)
    organizerPostRequest: {"mainLanguage":"nl","name":{"nl":"Nederlandse naam"},"url":"https://www.publiq.be","address":{"nl":{"addressCountry":"BE","addressLocality":"Brussel","postalCode":"1000","streetAddress":"Wetstraat 1"}},"contactPoint":{"phone":["+32/1234567890"],"email":["info@publiq.be"],"url":["https://www.publiq.be"]},"labels":["label1","label2"],"hiddenLabels":["labelA","labelB"],"images":[{"@id":"https://io-test.uitdatabank.be/images/74969172-E2A6-4626-BA63-4B6919242A24"},{"@id":"https://io-test.uitdatabank.be/images/85b04295-479c-40f5-b3dd-469dfb4387b3","description":"optional overwritten description","copyrightHolder":"optional overwritten copyright holder","inLanguage":"nl"}]},
  } satisfies OrganizerPostOperationRequest;

  try {
    const data = await api.organizerPost(body);
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
| **organizerPostRequest** | [OrganizerPostRequest](OrganizerPostRequest.md) | The complete details of the new organizer to create. | [Optional] |

### Return type

[**OrganizerPost201Response**](OrganizerPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The organizer has been created successfully. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitdatabank/duplicate-url |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizerPut

> OrganizerPut200Response organizerPut(organizerId, organizer)

organizer - update

Updates the organizer with the given &#x60;organizerId&#x60; by completely overwriting it with the properties in the given JSON.   &lt;!-- theme: danger --&gt;  &gt; Any existing (optional) properties on the organizer that are not included in the update request will be removed from the organizer.  &lt;!-- theme: info --&gt;  &gt; Certain existing &#x60;labels&#x60; or &#x60;hiddenLabels&#x60; may be kept on the organizer even if they are not included in the update request. For example if they were added via the UiTdatabank UI, or if the client or user making the request does not have sufficient permission to remove specific labels.

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '';
import type { OrganizerPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | Unique id of an organizer, in the format of a UUID
    organizerId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // Organizer | The complete details of the organizer to update. (optional)
    organizer: {mainLanguage=nl, name={nl=Nederlandse naam}, url=https://www.publiq.be, address={nl={addressCountry=BE, addressLocality=Brussel, postalCode=1000, streetAddress=Wetstraat 1}}, contactPoint={phone=[+32/1234567890], email=[info@publiq.be], url=[https://www.publiq.be]}, labels=[label1, label2], hiddenLabels=[labelA, labelB], images=[{@id=https://io-test.uitdatabank.be/images/74969172-E2A6-4626-BA63-4B6919242A24}, {@id=https://io-test.uitdatabank.be/images/85b04295-479c-40f5-b3dd-469dfb4387b3, description=optional overwritten description, copyrightHolder=optional overwritten copyright holder, inLanguage=nl}]},
  } satisfies OrganizerPutRequest;

  try {
    const data = await api.organizerPut(body);
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
| **organizerId** | `string` | Unique id of an organizer, in the format of a UUID | [Defaults to `undefined`] |
| **organizer** | [Organizer](Organizer.md) | The complete details of the organizer to update. | [Optional] |

### Return type

[**OrganizerPut200Response**](OrganizerPut200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The organizer has been updated successfully. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitdatabank/duplicate-url |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizerUrlPut

> organizerUrlPut(organizerId, organizerUrlPut)

url - update

Updates the url of the organizer with the given &#x60;organizerId&#x60;. The provided url can not be in use on another organizer.

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '';
import type { OrganizerUrlPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | Unique id of an organizer, in the format of a UUID
    organizerId: F2D5D20C-CC98-4979-9CD2-453ABAD979B5,
    // OrganizerUrlPut | New url to set on the organizer. (optional)
    organizerUrlPut: {"url":"https://www.publiq.be"},
  } satisfies OrganizerUrlPutRequest;

  try {
    const data = await api.organizerUrlPut(body);
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
| **organizerId** | `string` | Unique id of an organizer, in the format of a UUID | [Defaults to `undefined`] |
| **organizerUrlPut** | [OrganizerUrlPut](OrganizerUrlPut.md) | New url to set on the organizer. | [Optional] |

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
| **204** | No Content. The organizer url has been updated successfully. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitdatabank/duplicate-url |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

