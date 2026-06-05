# ImagesApi

All URIs are relative to *https://io-test.uitdatabank.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**imageGet**](ImagesApi.md#imageget) | **GET** /images/{imageId} | image - get |
| [**imagePost**](ImagesApi.md#imagepost) | **POST** /images | image - upload |



## imageGet

> Image imageGet(imageId)

image - get

Returns the details of the image for the given &#x60;imageId&#x60;.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '';
import type { ImageGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ImagesApi();

  const body = {
    // string | The unique uuid of an already uploaded image.
    imageId: 365f99a4-5490-4313-8ee9-adebea2dceb0,
  } satisfies ImageGetRequest;

  try {
    const data = await api.imageGet(body);
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
| **imageId** | `string` | The unique uuid of an already uploaded image. | [Defaults to `undefined`] |

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Image details. |  -  |
| **404** | The requested resource (URL) could not be found. This can be due to one of multiple reasons:  * The endpoint has a typo and/or does not exist on the API * One of the path parameters contains a value that is invalid or does not exist * One of the required query parameters is missing * One of the query parameters has an invalid value  The &#x60;detail&#x60; property of the response should contain more specific information.  The &#x60;type&#x60; will always be &#x60;https://api.publiq.be/probs/url/not-found&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## imagePost

> ImagePost201Response imagePost(file, description, copyrightHolder, language)

image - upload

Uploads an image, which you can later link to one or more events, places, and organizers. Only images up to 21 million bytes (~ 20 MB) are allowed. The expected image format is &#x60;.png&#x60;, &#x60;.jpeg&#x60; or &#x60;.gif&#x60;.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '';
import type { ImagePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
  });
  const api = new ImagesApi(config);

  const body = {
    // Blob | The image to upload.
    file: BINARY_DATA_HERE,
    // string | A description of the image.
    description: description_example,
    // string | The copyrightHolder of the image.
    copyrightHolder: copyrightHolder_example,
    // string | The language of the description. It must be exactly 2 lowercase letters long (for example \\\"nl\\\").
    language: language_example,
  } satisfies ImagePostRequest;

  try {
    const data = await api.imagePost(body);
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
| **file** | `Blob` | The image to upload. | [Defaults to `undefined`] |
| **description** | `string` | A description of the image. | [Defaults to `undefined`] |
| **copyrightHolder** | `string` | The copyrightHolder of the image. | [Defaults to `undefined`] |
| **language** | `string` | The language of the description. It must be exactly 2 lowercase letters long (for example \\\&quot;nl\\\&quot;). | [Defaults to `undefined`] |

### Return type

[**ImagePost201Response**](ImagePost201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `multipart/form-data`, `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The image was created successfully. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/file-missing * https://api.publiq.be/probs/body/file-invalid-type * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

