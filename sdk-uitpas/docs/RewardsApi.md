# RewardsApi

All URIs are relative to *https://api-test.uitpas.be*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteRewardsRedeemedRedeemedRewardId**](RewardsApi.md#deleterewardsredeemedredeemedrewardid) | **DELETE** /rewards/redeemed/{redeemedRewardId} | Cancel a redeemed reward |
| [**getRewards**](RewardsApi.md#getrewards) | **GET** /rewards | Search rewards |
| [**getRewardsId**](RewardsApi.md#getrewardsid) | **GET** /rewards/{rewardId} | Retrieve reward |
| [**getRewardsIdRedeemStatus**](RewardsApi.md#getrewardsidredeemstatus) | **GET** /rewards/{rewardId}/redeem-status | Check redeem status of a reward for a passholder |
| [**getRewardsRedeemed**](RewardsApi.md#getrewardsredeemed) | **GET** /rewards/redeemed | Retrieve redeemed rewards |
| [**postRewards**](RewardsApi.md#postrewards) | **POST** /rewards | Create new reward |
| [**postRewardsRedeemed**](RewardsApi.md#postrewardsredeemedoperation) | **POST** /rewards/redeemed | Redeem reward |
| [**putRewardsId**](RewardsApi.md#putrewardsid) | **PUT** /rewards/{rewardId} | Update reward |



## deleteRewardsRedeemedRedeemedRewardId

> deleteRewardsRedeemedRedeemedRewardId(redeemedRewardId)

Cancel a redeemed reward

Cancel a previously redeemed reward.  The caller of this request must have &#x60;REWARDS_REDEEM&#x60; permission for the organizer of the given reward.

### Example

```ts
import {
  Configuration,
  RewardsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { DeleteRewardsRedeemedRedeemedRewardIdRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new RewardsApi(config);

  const body = {
    // string | The ID of the redeemed reward
    redeemedRewardId: redeemedRewardId_example,
  } satisfies DeleteRewardsRedeemedRedeemedRewardIdRequest;

  try {
    const data = await api.deleteRewardsRedeemedRedeemedRewardId(body);
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
| **redeemedRewardId** | `string` | The ID of the redeemed reward | [Defaults to `undefined`] |

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


## getRewards

> RewardsPaginatedResponse getRewards(start, limit, organizerId, organizerPostalCode, owningCardSystemId, applicableCardSystemId, type, text, facets, sort, sortName, sortCreationDate, sortRedeemCount, sortFeatured, sortPoints, categories, pointsFrom, pointsTo, subset, sport, forKids, featured, online, lastChance, status, isRedeemableByPassholderId, isInterestingForPassholderId)

Search rewards

Search rewards.  The caller of this request does not need special permissions permission except &#x60;REWARDS_PASSHOLDERS_READ&#x60; to use the &#x60;isRedeemableByPassholderId&#x60; and &#x60;isInterestingForPassholderId&#x60; query parameters.  This endpoint allows authentication with [client identification](/docs/authentication/ZG9jOjExODE5NDY5-client-identification), [client access tokens](/docs/authentication/ZG9jOjExODE5NDY4-client-access-token), and [user access tokens](/docs/authentication/ZG9jOjExODE5NTM5-user-access-token).

### Example

```ts
import {
  Configuration,
  RewardsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetRewardsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: CLIENT_IDENTIFICATION
    apiKey: "YOUR API KEY",
  });
  const api = new RewardsApi(config);

  const body = {
    // number | Position to start returning results from. When set to `0` the results starting from the very first position will be returned. When set to for example `10` the results 0-9 will be skipped and the ones starting from position 10 will be returned. Can be used in combination with `limit` for pagination. (optional)
    start: 56,
    // number | Maximum amount of results to return. Can be used in combination with `start` for pagination. **Important**: the maximum value for `limit` is `500`. Exceeding this value will result in an error. (optional)
    limit: 56,
    // Array<string> | Include only rewards applicable for this organizer. Can be included more than once to allow multiple values. (optional)
    organizerId: ...,
    // Array<string> | Include only rewards applicable for organizers with this postal code. Can be included more than once to allow multiple values. (optional)
    organizerPostalCode: ...,
    // Array<string> | Include only rewards of this card system. Can be included more than once to allow multiple values. (optional)
    owningCardSystemId: ...,
    // Array<string> | Include only rewards applicable to passholders of this card system. Can be included more than once to allow multiple values. (optional)
    applicableCardSystemId: ...,
    // 'POINTS' | 'WELCOME' | 'ANY' | Include only rewards of this type. By default, this is set to `POINTS`. Use `ANY` to include rewards of any type. (optional)
    type: type_example,
    // string | Free text search in reward name, organizer or city. (optional)
    text: text_example,
    // Array<'categories' | 'forKids' | 'sport' | 'online' | 'lastChance' | 'owningCardSystemId' | 'type'> | Request facets of the given field in the response. Can be included more than once to allow multiple values. (optional)
    facets: ...,
    // string | Sorts the rewards in a specific order. Possible values are: `name`, `creationdate`, `redeemCount`, `featured`, `points`. Multiple values can be combined in a comma separated string so the rewards are first sorted by the first field, then the second and so on. By default the sort uses ascending order. Descending order can be specified by including a `-` sign before the field that needs to be ordered descending. e.g. use `-redeemCount,points` to sort descending on redeemCount, and next ascending on `points`. (optional)
    sort: -redeemCount,points,
    // 'asc' | 'desc' | Sorts the rewards by their name in ascending or descending order. This parameter is deprecated. Use the `sort` parameter for more advanced sorting options. (optional)
    sortName: sortName_example,
    // 'asc' | 'desc' | Sort on reward creation date. This parameter is deprecated. Use the `sort` parameter for more advanced sorting options. (optional)
    sortCreationDate: sortCreationDate_example,
    // 'asc' | 'desc' | Sort on redeem count. This parameter is deprecated. Use the `sort` parameter for more advanced sorting options. (optional)
    sortRedeemCount: sortRedeemCount_example,
    // 'asc' | 'desc' | Sort on featured. This parameter is deprecated. Use the `sort` parameter for more advanced sorting options. (optional)
    sortFeatured: sortFeatured_example,
    // 'asc' | 'desc' | Sort on reward points. This parameter is deprecated. Use the `sort` parameter for more advanced sorting options. (optional)
    sortPoints: sortPoints_example,
    // Array<'Goede doel' | 'Eten en drinken' | 'Doen' | 'Gadget of item'> | Include only rewards of this category. Can be included more than once to allow multiple values. (optional)
    categories: ...,
    // number | Include only rewards with this value (including) or more points. (optional)
    pointsFrom: 56,
    // number | Include only rewards with this value (including) or less points. (optional)
    pointsTo: 56,
    // 'ALL' | 'ENDUSERS' | 'REDEEMABLE' | 'REDEEMABLE-FUTURE' | 'ENDUSER-FUTURE' | Include only rewards of a specific subset. Defaults to `ENDUSERS`, which means all active rewards, that are currently published and in its redeem period and are part of a permanent cardsystem. `REDEEMABLE` is the same as `ENDUSER` except filtering on publication date. `ENDUSER-FUTURE` and `REDEEMABLE-FUTURE` is similar to their respective subset, but filters on a redeem date in the future. Set this field to `ALL` to include all rewards. (optional)
    subset: subset_example,
    // boolean | Include only rewards with the sport property true or false. If omitted, rewards with any sport value are included. (optional)
    sport: true,
    // boolean | Include only rewards with the forKids property true or false. If omitted, rewards with any forKids value are included. (optional)
    forKids: true,
    // boolean | Include only rewards with the featured property true or false. If omitted, rewards with any featured value are included. (optional)
    featured: true,
    // boolean | Include only rewards with the online property true or false. If omitted, rewards with any online value are included. (optional)
    online: true,
    // boolean | Include only rewards with the lastChance property true or false. If omitted, rewards with any lastChance value are included. (optional)
    lastChance: true,
    // 'ACTIVE' | 'INACTIVE' | 'DELETED' | Include only rewards with this status. Also set `subset=ALL` to include non-ACTIVE rewards. (optional)
    status: status_example,
    // string | Include only rewards that are redeemable by this passholder ID. This means the reward itself is within its redeem period, and all redeem constraints for the passholder are met. A client using this parameter needs `REWARDS_PASSHOLDERS_READ` permission. (optional)
    isRedeemableByPassholderId: isRedeemableByPassholderId_example,
    // string | Include a list of suggested rewards based on the recent activity of this passholder ID. A client using this parameter needs `REWARDS_PASSHOLDERS_READ` permission. (optional)
    isInterestingForPassholderId: isInterestingForPassholderId_example,
  } satisfies GetRewardsRequest;

  try {
    const data = await api.getRewards(body);
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
| **start** | `number` | Position to start returning results from. When set to &#x60;0&#x60; the results starting from the very first position will be returned. When set to for example &#x60;10&#x60; the results 0-9 will be skipped and the ones starting from position 10 will be returned. Can be used in combination with &#x60;limit&#x60; for pagination. | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum amount of results to return. Can be used in combination with &#x60;start&#x60; for pagination. **Important**: the maximum value for &#x60;limit&#x60; is &#x60;500&#x60;. Exceeding this value will result in an error. | [Optional] [Defaults to `20`] |
| **organizerId** | `Array<string>` | Include only rewards applicable for this organizer. Can be included more than once to allow multiple values. | [Optional] |
| **organizerPostalCode** | `Array<string>` | Include only rewards applicable for organizers with this postal code. Can be included more than once to allow multiple values. | [Optional] |
| **owningCardSystemId** | `Array<string>` | Include only rewards of this card system. Can be included more than once to allow multiple values. | [Optional] |
| **applicableCardSystemId** | `Array<string>` | Include only rewards applicable to passholders of this card system. Can be included more than once to allow multiple values. | [Optional] |
| **type** | `POINTS`, `WELCOME`, `ANY` | Include only rewards of this type. By default, this is set to &#x60;POINTS&#x60;. Use &#x60;ANY&#x60; to include rewards of any type. | [Optional] [Defaults to `&#39;POINTS&#39;`] [Enum: POINTS, WELCOME, ANY] |
| **text** | `string` | Free text search in reward name, organizer or city. | [Optional] [Defaults to `undefined`] |
| **facets** | `categories`, `forKids`, `sport`, `online`, `lastChance`, `owningCardSystemId`, `type` | Request facets of the given field in the response. Can be included more than once to allow multiple values. | [Optional] [Enum: categories, forKids, sport, online, lastChance, owningCardSystemId, type] |
| **sort** | `string` | Sorts the rewards in a specific order. Possible values are: &#x60;name&#x60;, &#x60;creationdate&#x60;, &#x60;redeemCount&#x60;, &#x60;featured&#x60;, &#x60;points&#x60;. Multiple values can be combined in a comma separated string so the rewards are first sorted by the first field, then the second and so on. By default the sort uses ascending order. Descending order can be specified by including a &#x60;-&#x60; sign before the field that needs to be ordered descending. e.g. use &#x60;-redeemCount,points&#x60; to sort descending on redeemCount, and next ascending on &#x60;points&#x60;. | [Optional] [Defaults to `undefined`] |
| **sortName** | `asc`, `desc` | Sorts the rewards by their name in ascending or descending order. This parameter is deprecated. Use the &#x60;sort&#x60; parameter for more advanced sorting options. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortCreationDate** | `asc`, `desc` | Sort on reward creation date. This parameter is deprecated. Use the &#x60;sort&#x60; parameter for more advanced sorting options. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortRedeemCount** | `asc`, `desc` | Sort on redeem count. This parameter is deprecated. Use the &#x60;sort&#x60; parameter for more advanced sorting options. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortFeatured** | `asc`, `desc` | Sort on featured. This parameter is deprecated. Use the &#x60;sort&#x60; parameter for more advanced sorting options. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortPoints** | `asc`, `desc` | Sort on reward points. This parameter is deprecated. Use the &#x60;sort&#x60; parameter for more advanced sorting options. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **categories** | `Goede doel`, `Eten en drinken`, `Doen`, `Gadget of item` | Include only rewards of this category. Can be included more than once to allow multiple values. | [Optional] [Enum: Goede doel, Eten en drinken, Doen, Gadget of item] |
| **pointsFrom** | `number` | Include only rewards with this value (including) or more points. | [Optional] [Defaults to `undefined`] |
| **pointsTo** | `number` | Include only rewards with this value (including) or less points. | [Optional] [Defaults to `undefined`] |
| **subset** | `ALL`, `ENDUSERS`, `REDEEMABLE`, `REDEEMABLE-FUTURE`, `ENDUSER-FUTURE` | Include only rewards of a specific subset. Defaults to &#x60;ENDUSERS&#x60;, which means all active rewards, that are currently published and in its redeem period and are part of a permanent cardsystem. &#x60;REDEEMABLE&#x60; is the same as &#x60;ENDUSER&#x60; except filtering on publication date. &#x60;ENDUSER-FUTURE&#x60; and &#x60;REDEEMABLE-FUTURE&#x60; is similar to their respective subset, but filters on a redeem date in the future. Set this field to &#x60;ALL&#x60; to include all rewards. | [Optional] [Defaults to `&#39;ENDUSERS&#39;`] [Enum: ALL, ENDUSERS, REDEEMABLE, REDEEMABLE-FUTURE, ENDUSER-FUTURE] |
| **sport** | `boolean` | Include only rewards with the sport property true or false. If omitted, rewards with any sport value are included. | [Optional] [Defaults to `undefined`] |
| **forKids** | `boolean` | Include only rewards with the forKids property true or false. If omitted, rewards with any forKids value are included. | [Optional] [Defaults to `undefined`] |
| **featured** | `boolean` | Include only rewards with the featured property true or false. If omitted, rewards with any featured value are included. | [Optional] [Defaults to `undefined`] |
| **online** | `boolean` | Include only rewards with the online property true or false. If omitted, rewards with any online value are included. | [Optional] [Defaults to `undefined`] |
| **lastChance** | `boolean` | Include only rewards with the lastChance property true or false. If omitted, rewards with any lastChance value are included. | [Optional] [Defaults to `undefined`] |
| **status** | `ACTIVE`, `INACTIVE`, `DELETED` | Include only rewards with this status. Also set &#x60;subset&#x3D;ALL&#x60; to include non-ACTIVE rewards. | [Optional] [Defaults to `undefined`] [Enum: ACTIVE, INACTIVE, DELETED] |
| **isRedeemableByPassholderId** | `string` | Include only rewards that are redeemable by this passholder ID. This means the reward itself is within its redeem period, and all redeem constraints for the passholder are met. A client using this parameter needs &#x60;REWARDS_PASSHOLDERS_READ&#x60; permission. | [Optional] [Defaults to `undefined`] |
| **isInterestingForPassholderId** | `string` | Include a list of suggested rewards based on the recent activity of this passholder ID. A client using this parameter needs &#x60;REWARDS_PASSHOLDERS_READ&#x60; permission. | [Optional] [Defaults to `undefined`] |

### Return type

[**RewardsPaginatedResponse**](RewardsPaginatedResponse.md)

### Authorization

[CLIENT_IDENTIFICATION](../README.md#CLIENT_IDENTIFICATION)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated collection of rewards. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/organizer-not-found * https://api.publiq.be/probs/uitpas/event-not-found * https://api.publiq.be/probs/uitpas/cardsystem-not-found * https://api.publiq.be/probs/url/query-limit-exceeded |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found. Error type:  https://api.publiq.be/probs/url/not-found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRewardsId

> Reward getRewardsId(rewardId)

Retrieve reward

Retrieve reward by ID.  The caller of this request must have &#x60;REWARDS_READ&#x60; permission for the given organizer.

### Example

```ts
import {
  Configuration,
  RewardsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetRewardsIdRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new RewardsApi(config);

  const body = {
    // string | Unique ID of a single reward.
    rewardId: rewardId_example,
  } satisfies GetRewardsIdRequest;

  try {
    const data = await api.getRewardsId(body);
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
| **rewardId** | `string` | Unique ID of a single reward. | [Defaults to `undefined`] |

### Return type

[**Reward**](Reward.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Details of the requested reward. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found. Possible error types:  * https://api.publiq.be/probs/uitpas/reward-not-found  The detail property might include more information for the client developer. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRewardsIdRedeemStatus

> GetRewardsIdRedeemStatus200Response getRewardsIdRedeemStatus(rewardId, uitpasNumber)

Check redeem status of a reward for a passholder

Check the reward redeem status for a passholder.   The caller of this request must have &#x60;REWARDS_REDEEM&#x60; permission for the given organizer.

### Example

```ts
import {
  Configuration,
  RewardsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetRewardsIdRedeemStatusRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new RewardsApi(config);

  const body = {
    // string | Unique ID of a single reward.
    rewardId: rewardId_example,
    // string | UiTPAS number identifying the passholder who wants to redeem this reward.
    uitpasNumber: uitpasNumber_example,
  } satisfies GetRewardsIdRedeemStatusRequest;

  try {
    const data = await api.getRewardsIdRedeemStatus(body);
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
| **rewardId** | `string` | Unique ID of a single reward. | [Defaults to `undefined`] |
| **uitpasNumber** | `string` | UiTPAS number identifying the passholder who wants to redeem this reward. | [Defaults to `undefined`] |

### Return type

[**GetRewardsIdRedeemStatus200Response**](GetRewardsIdRedeemStatus200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Info that indicates if the reward with the given ID is redeemable or not by the passholder with the given UiTPAS number. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/invalid-uitpas-number * https://api.publiq.be/probs/uitpas/passholder-not-found  |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found. Possible error types:  * https://api.publiq.be/probs/uitpas/reward-not-found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRewardsRedeemed

> RedeemedRewardsPaginatedResponse getRewardsRedeemed(uitpasNumber, rewardType, start, limit)

Retrieve redeemed rewards

Retrieve redeemed rewards for a passholder.  The caller of this request must have &#x60;REWARDS_READ&#x60; permission.

### Example

```ts
import {
  Configuration,
  RewardsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { GetRewardsRedeemedRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new RewardsApi(config);

  const body = {
    // string | UiTPAS number identifying the passholder.
    uitpasNumber: uitpasNumber_example,
    // 'POINTS' | 'WELCOME' | Type of the redeemed reward. (optional)
    rewardType: rewardType_example,
    // number | Position to start returning results from. When set to `0` the results starting from the very first position will be returned. When set to for example `10` the results 0-9 will be skipped and the ones starting from position 10 will be returned. Can be used in combination with `limit` for pagination. (optional)
    start: 56,
    // number | Maximum amount of results to return. Can be used in combination with `start` for pagination. **Important**: the maximum value for `limit` is `500`. Exceeding this value will result in an error. (optional)
    limit: 56,
  } satisfies GetRewardsRedeemedRequest;

  try {
    const data = await api.getRewardsRedeemed(body);
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
| **uitpasNumber** | `string` | UiTPAS number identifying the passholder. | [Defaults to `undefined`] |
| **rewardType** | `POINTS`, `WELCOME` | Type of the redeemed reward. | [Optional] [Defaults to `undefined`] [Enum: POINTS, WELCOME] |
| **start** | `number` | Position to start returning results from. When set to &#x60;0&#x60; the results starting from the very first position will be returned. When set to for example &#x60;10&#x60; the results 0-9 will be skipped and the ones starting from position 10 will be returned. Can be used in combination with &#x60;limit&#x60; for pagination. | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum amount of results to return. Can be used in combination with &#x60;start&#x60; for pagination. **Important**: the maximum value for &#x60;limit&#x60; is &#x60;500&#x60;. Exceeding this value will result in an error. | [Optional] [Defaults to `20`] |

### Return type

[**RedeemedRewardsPaginatedResponse**](RedeemedRewardsPaginatedResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated collection of redeemed rewards. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/uitpas/invalid-uitpas-number * https://api.publiq.be/probs/url/query-limit-exceeded   |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postRewards

> Reward postRewards(reward)

Create new reward

Create a new reward.  The caller of this request must have &#x60;REWARDS_WRITE&#x60; permission for the given organizer.

### Example

```ts
import {
  Configuration,
  RewardsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PostRewardsRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new RewardsApi(config);

  const body = {
    // Reward | Details of the new reward to create. (optional)
    reward: {"title":"Free entrance for 10 points on 1 specific event","type":"POINTS","categories":["Doen"],"promotionalDescription":"this is the mandatory description","publicationPeriod":{"begin":"2021-08-24T14:15:22Z"},"moreInfoURL":"https://example.org/more-info-about-this-reward","points":10},
  } satisfies PostRewardsRequest;

  try {
    const data = await api.postRewards(body);
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
| **reward** | [Reward](Reward.md) | Details of the new reward to create. | [Optional] |

### Return type

[**Reward**](Reward.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Reward created. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitpas/invalid-card-system  The detail property might include more information for the client developer. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postRewardsRedeemed

> RedeemedReward postRewardsRedeemed(postRewardsRedeemedRequest)

Redeem reward

Redeem reward.  The caller of this request must have &#x60;REWARDS_REDEEM&#x60; permission for the given organizer.

### Example

```ts
import {
  Configuration,
  RewardsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PostRewardsRedeemedOperationRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new RewardsApi(config);

  const body = {
    // PostRewardsRedeemedRequest | Reward (id) to mark as redeemed, and for which UiTPAS number specifically. (optional)
    postRewardsRedeemedRequest: {"uitpasNumber":"0930012345615","rewardId":"fce4bd2f-4dca-4a44-9912-6168f0ac7e5e"},
  } satisfies PostRewardsRedeemedOperationRequest;

  try {
    const data = await api.postRewardsRedeemed(body);
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
| **postRewardsRedeemedRequest** | [PostRewardsRedeemedRequest](PostRewardsRedeemedRequest.md) | Reward (id) to mark as redeemed, and for which UiTPAS number specifically. | [Optional] |

### Return type

[**RedeemedReward**](RedeemedReward.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Info about the redeemed reward. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitpas/invalid-card * https://api.publiq.be/probs/uitpas/invalid-uitpas-number * https://api.publiq.be/probs/uitpas/passholder-not-found * https://api.publiq.be/probs/uitpas/reward-not-found * https://api.publiq.be/probs/uitpas/reward-period-constraint * https://api.publiq.be/probs/uitpas/reward-volume-constraint * https://api.publiq.be/probs/uitpas/reward-passholder-volume-constraint * https://api.publiq.be/probs/uitpas/reward-passholder-points-constraint * https://api.publiq.be/probs/uitpas/reward-passholder-no-applicable-cardsystems * https://api.publiq.be/probs/uitpas/passholder-no-active-cardsystems  |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found. Possible error types:  * https://api.publiq.be/probs/uitpas/reward-not-found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## putRewardsId

> Reward putRewardsId(rewardId, reward)

Update reward

Update reward. To update a reward correctly, as a client you will typically &#x60;GET&#x60; the reward first,  make the required changes in the reward json and use this &#x60;PUT&#x60; request to persist those changes in UiTPAS.  Do note that the following fields are **not editable** after this reward is redeemed by (for POINTS rewards) or granted to (for WELCOME rewards) a passholder: * redeemPeriod.begin * grantingPeriod.begin * points  Attempts to edit such rewards will result in an HTTP 400 error with type &#x60;https://api.publiq.be/probs/uitpas/reward-not-editable&#x60;  The caller of this request must have &#x60;REWARDS_WRITE&#x60; permission for the given organizer.

### Example

```ts
import {
  Configuration,
  RewardsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { PutRewardsIdRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new RewardsApi(config);

  const body = {
    // string | Unique ID of a single reward.
    rewardId: rewardId_example,
    // Reward | New details for the reward. Will overwrite the previous details. (optional)
    reward: {"title":"Gratis toegangsticket voor het Design Museum Brussel","type":"POINTS","maxAvailableUnits":1000,"categories":["Doen"],"promotionalDescription":"this is the mandatory description","practicalInfo":"this is an optional extra description","publicationPeriod":{"begin":"2021-08-24T14:15:22Z","end":"2022-08-24T14:15:22Z"},"redeemPeriod":{"begin":"2021-08-24T14:15:22Z","end":"2022-08-24T14:15:22Z"},"grantingPeriod":{"begin":"2021-08-24T14:15:22Z","end":"2022-08-24T14:15:22Z"},"moreInfoURL":"https://example.org/more-info-about-this-reward","points":10},
  } satisfies PutRewardsIdRequest;

  try {
    const data = await api.putRewardsId(body);
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
| **rewardId** | `string` | Unique ID of a single reward. | [Defaults to `undefined`] |
| **reward** | [Reward](Reward.md) | New details for the reward. Will overwrite the previous details. | [Optional] |

### Return type

[**Reward**](Reward.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated info for the reward with the given ID. |  -  |
| **400** | Bad Request. Possible error types:  * https://api.publiq.be/probs/body/missing * https://api.publiq.be/probs/body/invalid-syntax * https://api.publiq.be/probs/body/invalid-data * https://api.publiq.be/probs/uitpas/invalid-card-system * https://api.publiq.be/probs/uitpas/reward-not-editable  The detail property might include more information for the client developer. |  -  |
| **401** | Unauthorized. Your request is missing the required credentials to authenticate. See the Authentication documentation for more info.  * type: https://api.publiq.be/probs/auth/unauthorized * detail: might contain a developer-readable explanation of the reason |  -  |
| **403** | Forbidden. Your request was successfully authenticated but you do not have permission to perform this particular request.  * type: https://api.publiq.be/probs/auth/forbidden * detail: might contain a developer-readable explanation of the reason |  -  |
| **404** | Not Found. Possible error types:  * https://api.publiq.be/probs/uitpas/reward-not-found  The detail property might include more information for the client developer. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

