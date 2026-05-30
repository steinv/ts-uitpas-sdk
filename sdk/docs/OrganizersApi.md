# OrganizersApi

All URIs are relative to *https://search-test.uitdatabank.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getOrganizers**](OrganizersApi.md#getorganizers) | **GET** /organizers | Search organizers |
| [**postOrganizers**](OrganizersApi.md#postorganizers) | **POST** /organizers | Search organizers |



## getOrganizers

> GetOrganizers200Response getOrganizers(xClientId, xApiKey, q, name, website, id, domain, postalCode, addressCountry, creator, contributors, facets, regions, coordinates, embed, distance, bounds, labels, hasImages, workflowStatus, sortScore, sortCreated, sortModified)

Search organizers

Returns a paginated list of organizers that match the given filters.  ### Repeating query parameters  Parameters that have the type &#x60;array[string]&#x60; and &#x60;[]&#x60; as a suffix in their name in the list of query parameters below can be repeated to filter on multiple values with an &#x60;AND&#x60; operator. For example:  *  &#x60;?labels[]&#x3D;uitpas&#x60; to only include results that have the label &#x60;uitpas&#x60; *  &#x60;?labels[]&#x3D;uitpas&amp;labels[]&#x3D;paspartoe&#x60; to only include results that have both the labels &#x60;uitpas&#x60; and &#x60;paspartoe&#x60; 

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '@steinv/uitpas-sdk';
import type { GetOrganizersRequest } from '@steinv/uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CLIENT_IDENTIFICATION
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | The client id of your project (if not using an API key). May also be replaced with a `clientId` query parameter. (optional)
    xClientId: xClientId_example,
    // string | The API key of your project on https://projectaanvraag.uitdatabank.be (if not using a client id). May also be replaced with an `apiKey` query parameter. Will be deprecated in favour of `x-client-id` in the future, but will still be supported. (optional)
    xApiKey: xApiKey_example,
    // string | An advanced query in Lucene syntax, allowing you to construct complex AND/OR filters on specific fields. (optional)
    q: labels:"ook voor kinderen" OR labels:"ook voor jongeren",
    // string | Returns only results whose name autocompletes on the given name. For example searching for `pub` will return matches with `publiq` in the name. (optional)
    name: publiq,
    // string | Returns only results that have the given URL as their website. URLs in the query parameter and on the search results are normalized to reduce false negatives. (optional)
    website: https://www.publiq.be/example,
    // string | Returns only results that have the exact same id. An id can be extracted from an event, place, or organizer URI by taking all the characters after the last `/`. For example for the URI `https://io-test.uitdatabank.be/events/75573a64-ddc8-4fd0-8b07-d258939dd74f` the id is `75573a64-ddc8-4fd0-8b07-d258939dd74f`. Note that while it will be a UUID in most cases, it is not guaranteed to always be one! (optional)
    id: f29d2182-2db0-4f99-831a-8e6a64c1c9c1,
    // string | Returns only results that have a website on the given domain. Domains in the query parameter and on the search results are normalized to reduce false negatives. (optional)
    domain: www.publiq.be,
    // string | Returns only results that have the exact same postal code in their address. Typically 4 digits for Belgian addresses but can also be a different format for international addresses. (optional)
    postalCode: 1000,
    // string | Returns only results that have the exact same country code in their address. Formatted as an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code. The default value can be disabled by setting the value to `*` or by using the `disableDefaultFilters` query parameter. (optional)
    addressCountry: BE,
    // string | Returns only results that have a creator with the given user identifier. Due to historic reasons and evolutions in the id management systems, a user identifier can be one of: a UUID (for creators that had an UiTiD v1), an Auth0 user id (for new UiTiD v2 creators), or in some very old cases even an email address or nickname. (No new events or places are created with an email address or nickname as creator.) Can also be a client id suffixed with `@clients` in the case of results created with a client access token instead of a user access token. (optional)
    creator: lxBfdgJwUaJUgm7CBCeKF2eE2fnsyLCB@clients,
    // string | Returns results for which a particular user / email address is a contributor (optional)
    contributors: technical-support@publiq.be,
    // Array<'regions' | 'types' | 'themes' | 'facilities' | 'labels'> | Adds an extra `facet` property in the response with possible values for a given filter, and a prediction of the total results if applied. May be repeated to include facet counts for multiple filters. See the operation\'s description above for more info on how to repeat parameters. See (the guide about facets)[../docs/search-api/advanced/facets.md] for more information. (optional)
    facets: ...,
    // Array<string> | Returns only results that are geographically located in the given region. Regions may be fetched programmatically from [https://search.uitdatabank.be/autocomplete.json](https://search.uitdatabank.be/autocomplete.json). (optional)
    regions: ...,
    // string | A pair of latitude and longitude coordinates to find results that are located within a distance of the given geographical point. Must be used in combination with the `distance` parameter. (optional)
    coordinates: 50.8511740,4.338674,
    // boolean | Returns the results with the actual JSON bodies of the individual items (optional)
    embed: true,
    // string | Returns only results that are geographically located within the given distance from the `coordinates` parameter. (optional)
    distance: 10km,
    // string | Returns only results that are located in a specific geographical area defined by a pair of south-west coordinates and north-east coordinates. The two pairs of coordinates are separated by a pipe character (`|`). (optional)
    bounds: 34.172684,-118.604794|34.236144,-118.500938,
    // Array<string> | Returns only results that have the given label(s) in either their `labels` or `hiddenLabels` properties. May be repeated to only return results that have all the given labels. See the operation\'s description above for more info on how to repeat parameters. (optional)
    labels: ...,
    // boolean | Returns only results that have one or more items inside their `images` property if set to `true`. Returns only results without `images` property if set to `false`. (optional)
    hasImages: true,
    // Array<'ACTIVE' | 'DELETED' | '*'> | Returns only results with exactly the same workflow status as the given enum value. Accepts multiple comma-separated values to return results that have one of the given workflow statuses. Defaults to only return results that have the workflow status `ACTIVE`. The default value can be reset by setting the parameter to `*`. See (the guide about default filters)[../docs/search-api/common-filters/default-filters.md] for more information. (optional)
    workflowStatus: ...,
    // 'asc' | 'desc' | Sorts the results by their score (relevance), either with the lowest score first (`asc`) or the highest score first (`desc`). See (the guide about sorting)[../docs/search-api/sorting.md] for more information. (optional)
    sortScore: sortScore_example,
    // 'asc' | 'desc' | Sorts the results by their `created` date-time, either with the oldest results first (`asc`) or the newest results first (`desc`). See (the guide about sorting)[../docs/search-api/sorting.md] for more information. (optional)
    sortCreated: sortCreated_example,
    // 'asc' | 'desc' | Sorts the results by their `modified` date-time, either with the least recently modified results first (`asc`) or the most recently modified results first (`desc`). See (the guide about sorting)[../docs/search-api/sorting.md] for more information. (optional)
    sortModified: sortModified_example,
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
| **xClientId** | `string` | The client id of your project (if not using an API key). May also be replaced with a &#x60;clientId&#x60; query parameter. | [Optional] [Defaults to `undefined`] |
| **xApiKey** | `string` | The API key of your project on https://projectaanvraag.uitdatabank.be (if not using a client id). May also be replaced with an &#x60;apiKey&#x60; query parameter. Will be deprecated in favour of &#x60;x-client-id&#x60; in the future, but will still be supported. | [Optional] [Defaults to `undefined`] |
| **q** | `string` | An advanced query in Lucene syntax, allowing you to construct complex AND/OR filters on specific fields. | [Optional] [Defaults to `undefined`] |
| **name** | `string` | Returns only results whose name autocompletes on the given name. For example searching for &#x60;pub&#x60; will return matches with &#x60;publiq&#x60; in the name. | [Optional] [Defaults to `undefined`] |
| **website** | `string` | Returns only results that have the given URL as their website. URLs in the query parameter and on the search results are normalized to reduce false negatives. | [Optional] [Defaults to `undefined`] |
| **id** | `string` | Returns only results that have the exact same id. An id can be extracted from an event, place, or organizer URI by taking all the characters after the last &#x60;/&#x60;. For example for the URI &#x60;https://io-test.uitdatabank.be/events/75573a64-ddc8-4fd0-8b07-d258939dd74f&#x60; the id is &#x60;75573a64-ddc8-4fd0-8b07-d258939dd74f&#x60;. Note that while it will be a UUID in most cases, it is not guaranteed to always be one! | [Optional] [Defaults to `undefined`] |
| **domain** | `string` | Returns only results that have a website on the given domain. Domains in the query parameter and on the search results are normalized to reduce false negatives. | [Optional] [Defaults to `undefined`] |
| **postalCode** | `string` | Returns only results that have the exact same postal code in their address. Typically 4 digits for Belgian addresses but can also be a different format for international addresses. | [Optional] [Defaults to `undefined`] |
| **addressCountry** | `string` | Returns only results that have the exact same country code in their address. Formatted as an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code. The default value can be disabled by setting the value to &#x60;*&#x60; or by using the &#x60;disableDefaultFilters&#x60; query parameter. | [Optional] [Defaults to `&#39;BE&#39;`] |
| **creator** | `string` | Returns only results that have a creator with the given user identifier. Due to historic reasons and evolutions in the id management systems, a user identifier can be one of: a UUID (for creators that had an UiTiD v1), an Auth0 user id (for new UiTiD v2 creators), or in some very old cases even an email address or nickname. (No new events or places are created with an email address or nickname as creator.) Can also be a client id suffixed with &#x60;@clients&#x60; in the case of results created with a client access token instead of a user access token. | [Optional] [Defaults to `undefined`] |
| **contributors** | `string` | Returns results for which a particular user / email address is a contributor | [Optional] [Defaults to `undefined`] |
| **facets** | `regions`, `types`, `themes`, `facilities`, `labels` | Adds an extra &#x60;facet&#x60; property in the response with possible values for a given filter, and a prediction of the total results if applied. May be repeated to include facet counts for multiple filters. See the operation\&#39;s description above for more info on how to repeat parameters. See (the guide about facets)[../docs/search-api/advanced/facets.md] for more information. | [Optional] [Enum: regions, types, themes, facilities, labels] |
| **regions** | `Array<string>` | Returns only results that are geographically located in the given region. Regions may be fetched programmatically from [https://search.uitdatabank.be/autocomplete.json](https://search.uitdatabank.be/autocomplete.json). | [Optional] |
| **coordinates** | `string` | A pair of latitude and longitude coordinates to find results that are located within a distance of the given geographical point. Must be used in combination with the &#x60;distance&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **embed** | `boolean` | Returns the results with the actual JSON bodies of the individual items | [Optional] [Defaults to `undefined`] |
| **distance** | `string` | Returns only results that are geographically located within the given distance from the &#x60;coordinates&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **bounds** | `string` | Returns only results that are located in a specific geographical area defined by a pair of south-west coordinates and north-east coordinates. The two pairs of coordinates are separated by a pipe character (&#x60;|&#x60;). | [Optional] [Defaults to `undefined`] |
| **labels** | `Array<string>` | Returns only results that have the given label(s) in either their &#x60;labels&#x60; or &#x60;hiddenLabels&#x60; properties. May be repeated to only return results that have all the given labels. See the operation\&#39;s description above for more info on how to repeat parameters. | [Optional] |
| **hasImages** | `boolean` | Returns only results that have one or more items inside their &#x60;images&#x60; property if set to &#x60;true&#x60;. Returns only results without &#x60;images&#x60; property if set to &#x60;false&#x60;. | [Optional] [Defaults to `undefined`] |
| **workflowStatus** | `ACTIVE`, `DELETED`, `*` | Returns only results with exactly the same workflow status as the given enum value. Accepts multiple comma-separated values to return results that have one of the given workflow statuses. Defaults to only return results that have the workflow status &#x60;ACTIVE&#x60;. The default value can be reset by setting the parameter to &#x60;*&#x60;. See (the guide about default filters)[../docs/search-api/common-filters/default-filters.md] for more information. | [Optional] [Enum: ACTIVE, DELETED, *] |
| **sortScore** | `asc`, `desc` | Sorts the results by their score (relevance), either with the lowest score first (&#x60;asc&#x60;) or the highest score first (&#x60;desc&#x60;). See (the guide about sorting)[../docs/search-api/sorting.md] for more information. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortCreated** | `asc`, `desc` | Sorts the results by their &#x60;created&#x60; date-time, either with the oldest results first (&#x60;asc&#x60;) or the newest results first (&#x60;desc&#x60;). See (the guide about sorting)[../docs/search-api/sorting.md] for more information. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortModified** | `asc`, `desc` | Sorts the results by their &#x60;modified&#x60; date-time, either with the least recently modified results first (&#x60;asc&#x60;) or the most recently modified results first (&#x60;desc&#x60;). See (the guide about sorting)[../docs/search-api/sorting.md] for more information. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |

### Return type

[**GetOrganizers200Response**](GetOrganizers200Response.md)

### Authorization

[CLIENT_IDENTIFICATION](../README.md#CLIENT_IDENTIFICATION)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A single page of search results. If &#x60;?embed&#x3D;true&#x60; is used, the search results will contain the complete JSON details. Otherwise only &#x60;@id&#x60; and &#x60;@type&#x60; will be returned. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postOrganizers

> GetOrganizers200Response postOrganizers(xClientId, xApiKey, body)

Search organizers

Returns a paginated list of organizers that match the given filters.  This endpoint works the same as &#x60;GET&#x60; but accepts all parameters in the request body as a query string instead of as URL query parameters. This is useful when the amount of parameters would make the URL too long.  The request body should use content type &#x60;text/plain&#x60; and be formatted as a query string (the same format as URL query parameters), for example: &#x60;postalCode&#x3D;9000&amp;labels[]&#x3D;uitpas&#x60;.  ### Repeating query parameters  Parameters that have the type &#x60;array[string]&#x60; and &#x60;[]&#x60; as a suffix in their name in the request body can be repeated to filter on multiple values with an &#x60;AND&#x60; operator. For example:  *  &#x60;?labels[]&#x3D;uitpas&#x60; to only include results that have the label &#x60;uitpas&#x60; *  &#x60;?labels[]&#x3D;uitpas&amp;labels[]&#x3D;paspartoe&#x60; to only include results that have both the labels &#x60;uitpas&#x60; and &#x60;paspartoe&#x60; 

### Example

```ts
import {
  Configuration,
  OrganizersApi,
} from '@steinv/uitpas-sdk';
import type { PostOrganizersRequest } from '@steinv/uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CLIENT_IDENTIFICATION
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizersApi(config);

  const body = {
    // string | The client id of your project (if not using an API key). May also be replaced with a `clientId` query parameter. (optional)
    xClientId: xClientId_example,
    // string | The API key of your project on https://projectaanvraag.uitdatabank.be (if not using a client id). May also be replaced with an `apiKey` query parameter. Will be deprecated in favour of `x-client-id` in the future, but will still be supported. (optional)
    xApiKey: xApiKey_example,
    // string | All search parameters formatted as a query string, for example: `postalCode=9000&labels[]=uitpas`. Supports the same parameters as the `GET` variant of this endpoint. (optional)
    body: body_example,
  } satisfies PostOrganizersRequest;

  try {
    const data = await api.postOrganizers(body);
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
| **xClientId** | `string` | The client id of your project (if not using an API key). May also be replaced with a &#x60;clientId&#x60; query parameter. | [Optional] [Defaults to `undefined`] |
| **xApiKey** | `string` | The API key of your project on https://projectaanvraag.uitdatabank.be (if not using a client id). May also be replaced with an &#x60;apiKey&#x60; query parameter. Will be deprecated in favour of &#x60;x-client-id&#x60; in the future, but will still be supported. | [Optional] [Defaults to `undefined`] |
| **body** | `string` | All search parameters formatted as a query string, for example: &#x60;postalCode&#x3D;9000&amp;labels[]&#x3D;uitpas&#x60;. Supports the same parameters as the &#x60;GET&#x60; variant of this endpoint. | [Optional] |

### Return type

[**GetOrganizers200Response**](GetOrganizers200Response.md)

### Authorization

[CLIENT_IDENTIFICATION](../README.md#CLIENT_IDENTIFICATION)

### HTTP request headers

- **Content-Type**: `text/plain`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A single page of search results. If &#x60;?embed&#x3D;true&#x60; is used, the search results will contain the complete JSON details. Otherwise only &#x60;@id&#x60; and &#x60;@type&#x60; will be returned. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |
| **415** | The request does not work with the provided content-type. Check the detail to know which content-type you should use for this request. The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/body/unsupported-media-type&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

