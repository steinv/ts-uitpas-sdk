# FinancialReportsApi

All URIs are relative to *https://api-test.uitpas.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getOrganizersFinancialReports**](FinancialReportsApi.md#getorganizersfinancialreports) | **GET** /organizers/{organizerId}/financial-reports | Get financial report exports |
| [**getOrganizersFinancialReportsPeriods**](FinancialReportsApi.md#getorganizersfinancialreportsperiods) | **GET** /organizers/{organizerId}/financial-reports/periods | Get suggested financial report periods |
| [**getOrganizersFinancialReportsReportId**](FinancialReportsApi.md#getorganizersfinancialreportsreportid) | **GET** /organizers/{organizerId}/financial-reports/{reportId} | Get financial report status |
| [**getOrganizersFinancialReportsReportIdDownloadLink**](FinancialReportsApi.md#getorganizersfinancialreportsreportiddownloadlink) | **GET** /organizers/{organizerId}/financial-reports/{reportId}/download-link | Get financial report temporary download link |
| [**getOrganizersFinancialReportsReportIdZip**](FinancialReportsApi.md#getorganizersfinancialreportsreportidzip) | **GET** /organizers/{organizerId}/financial-reports/{reportId}.zip | Download financial report |
| [**postOrganizersFinancialReports**](FinancialReportsApi.md#postorganizersfinancialreports) | **POST** /organizers/{organizerId}/financial-reports | Start an export of a financial report |



## getOrganizersFinancialReports

> Array&lt;Report&gt; getOrganizersFinancialReports(organizerId)

Get financial report exports

Get previously exported financial reports.   &gt; Note: Reports will only be available for a limited amount of time. When they become unavailable, a new export can be requested using &#x60;POST /organizers/{organizerId}/financial-reports&#x60;     The caller of this request must have &#x60;ORGANIZERS_REPORTS&#x60; permission for the given organizer. 

### Example

```ts
import {
  Configuration,
  FinancialReportsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetOrganizersFinancialReportsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new FinancialReportsApi(config);

  const body = {
    // string | Unique ID of an UiTPAS organizer. (Same as its ID in UiTdatabank)
    organizerId: organizerId_example,
  } satisfies GetOrganizersFinancialReportsRequest;

  try {
    const data = await api.getOrganizersFinancialReports(body);
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
| **organizerId** | `string` | Unique ID of an UiTPAS organizer. (Same as its ID in UiTdatabank) | [Defaults to `undefined`] |

### Return type

[**Array&lt;Report&gt;**](Report.md)

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
| **404** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/organizer-not-found  The detail property might include more information for the client developer.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOrganizersFinancialReportsPeriods

> Array&lt;ReportPeriod&gt; getOrganizersFinancialReportsPeriods(organizerId)

Get suggested financial report periods

Retrieve suggested report periods for an organizer.  The caller of this request must have &#x60;ORGANIZERS_REPORTS&#x60; permission for the given organizer. 

### Example

```ts
import {
  Configuration,
  FinancialReportsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetOrganizersFinancialReportsPeriodsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new FinancialReportsApi(config);

  const body = {
    // string | Unique ID of an UiTPAS organizer. (Same as its ID in UiTdatabank)
    organizerId: organizerId_example,
  } satisfies GetOrganizersFinancialReportsPeriodsRequest;

  try {
    const data = await api.getOrganizersFinancialReportsPeriods(body);
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
| **organizerId** | `string` | Unique ID of an UiTPAS organizer. (Same as its ID in UiTdatabank) | [Defaults to `undefined`] |

### Return type

[**Array&lt;ReportPeriod&gt;**](ReportPeriod.md)

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
| **404** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/organizer-not-found  The detail property might include more information for the client developer.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOrganizersFinancialReportsReportId

> Report getOrganizersFinancialReportsReportId(organizerId, reportId)

Get financial report status

Retrieve the status of a previously started report export.  The caller of this request must have &#x60;ORGANIZERS_REPORTS&#x60; permission for the given organizer. 

### Example

```ts
import {
  Configuration,
  FinancialReportsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetOrganizersFinancialReportsReportIdRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new FinancialReportsApi(config);

  const body = {
    // string | Unique ID of an UiTPAS organizer. (Same as its ID in UiTdatabank)
    organizerId: organizerId_example,
    // number | Unique ID of the generated financial report.
    reportId: 56,
  } satisfies GetOrganizersFinancialReportsReportIdRequest;

  try {
    const data = await api.getOrganizersFinancialReportsReportId(body);
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
| **organizerId** | `string` | Unique ID of an UiTPAS organizer. (Same as its ID in UiTdatabank) | [Defaults to `undefined`] |
| **reportId** | `number` | Unique ID of the generated financial report. | [Defaults to `undefined`] |

### Return type

[**Report**](Report.md)

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
| **404** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/organizer-not-found * https://api.publiq.be/probs/uitpas/report-not-found  The detail property might include more information for the client developer.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOrganizersFinancialReportsReportIdDownloadLink

> GetOrganizersFinancialReportsReportIdDownloadLink200Response getOrganizersFinancialReportsReportIdDownloadLink(organizerId, reportId)

Get financial report temporary download link

Retrieve a temporary download link of an &#x60;available&#x60; report.  This endpoint allows you to obtain a short-lived, hassle-free download link for your reports. After generation, this link remains active for a limited time, enabling direct report downloads without the need for additional authentication. This is in particular convenient for applications that need to offer this link to users to start the download. If you wish to download the actual report in your client application, you can use [Download financial report](/reference/uitpas.json/paths/~1organizers~1{organizerId}~1financial-reports~1{reportId}.zip/get).  The caller of this request must have &#x60;ORGANIZERS_REPORTS&#x60; permission for the given organizer. 

### Example

```ts
import {
  Configuration,
  FinancialReportsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetOrganizersFinancialReportsReportIdDownloadLinkRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new FinancialReportsApi(config);

  const body = {
    // string | Unique ID of an UiTPAS organizer. (Same as its ID in UiTdatabank)
    organizerId: organizerId_example,
    // number | Unique ID of the generated financial report.
    reportId: 56,
  } satisfies GetOrganizersFinancialReportsReportIdDownloadLinkRequest;

  try {
    const data = await api.getOrganizersFinancialReportsReportIdDownloadLink(body);
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
| **organizerId** | `string` | Unique ID of an UiTPAS organizer. (Same as its ID in UiTdatabank) | [Defaults to `undefined`] |
| **reportId** | `number` | Unique ID of the generated financial report. | [Defaults to `undefined`] |

### Return type

[**GetOrganizersFinancialReportsReportIdDownloadLink200Response**](GetOrganizersFinancialReportsReportIdDownloadLink200Response.md)

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
| **404** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/organizer-not-found * https://api.publiq.be/probs/uitpas/report-not-found  The detail property might include more information for the client developer.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOrganizersFinancialReportsReportIdZip

> Blob getOrganizersFinancialReportsReportIdZip(organizerId, reportId)

Download financial report

Retrieve the actual report zip file of an &#x60;available&#x60; report.  If you need a download link for your users, you can use [Get financial report temporary download link](/reference/uitpas.json/paths/~1organizers~1{organizerId}~1financial-reports~1{reportId}~1download-link/get) instead.  The caller of this request must have &#x60;ORGANIZERS_REPORTS&#x60; permission for the given organizer. 

### Example

```ts
import {
  Configuration,
  FinancialReportsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetOrganizersFinancialReportsReportIdZipRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new FinancialReportsApi(config);

  const body = {
    // string | Unique ID of an UiTPAS organizer. (Same as its ID in UiTdatabank)
    organizerId: organizerId_example,
    // number | Unique ID of the generated financial report.
    reportId: 56,
  } satisfies GetOrganizersFinancialReportsReportIdZipRequest;

  try {
    const data = await api.getOrganizersFinancialReportsReportIdZip(body);
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
| **organizerId** | `string` | Unique ID of an UiTPAS organizer. (Same as its ID in UiTdatabank) | [Defaults to `undefined`] |
| **reportId** | `number` | Unique ID of the generated financial report. | [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/x-zip-compressed`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  * content-disposition - Header indicating that this response should be handled as a separate file download <br>  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/organizer-not-found * https://api.publiq.be/probs/uitpas/report-not-found  The detail property might include more information for the client developer.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postOrganizersFinancialReports

> Report postOrganizersFinancialReports(organizerId, reportPeriod)

Start an export of a financial report

Starts a financial report export. The result of this request is a &#x60;reportId&#x60; that can be used to request the status of the report export and the download.  The caller of this request must have &#x60;ORGANIZERS_REPORTS&#x60; permission for the given organizer. 

### Example

```ts
import {
  Configuration,
  FinancialReportsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PostOrganizersFinancialReportsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new FinancialReportsApi(config);

  const body = {
    // string | Unique ID of an UiTPAS organizer. (Same as its ID in UiTdatabank)
    organizerId: organizerId_example,
    // ReportPeriod | The period for which to generate the financial report.  The `ReportPeriod` object can be retrieved using `GET /organizers/{organizerId}/financial-reports/periods` or the `startDate` and `endDate` can be customized. (optional)
    reportPeriod: {"startDate":"2019-07-01","endDate":"2019-09-30"},
  } satisfies PostOrganizersFinancialReportsRequest;

  try {
    const data = await api.postOrganizersFinancialReports(body);
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
| **organizerId** | `string` | Unique ID of an UiTPAS organizer. (Same as its ID in UiTdatabank) | [Defaults to `undefined`] |
| **reportPeriod** | [ReportPeriod](ReportPeriod.md) | The period for which to generate the financial report.  The &#x60;ReportPeriod&#x60; object can be retrieved using &#x60;GET /organizers/{organizerId}/financial-reports/periods&#x60; or the &#x60;startDate&#x60; and &#x60;endDate&#x60; can be customized. | [Optional] |

### Return type

[**Report**](Report.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/organizer-not-found  The detail property might include more information for the client developer.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

