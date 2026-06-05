
# RewardsPaginatedResponseFacet

Facet information for the requested facets.

## Properties

Name | Type
------------ | -------------
`categories` | [{ [key: string]: FacetValue; }](FacetValue.md)
`owningCardSystemId` | [{ [key: string]: FacetValue; }](FacetValue.md)
`type` | [{ [key: string]: FacetValue; }](FacetValue.md)
`sport` | [{ [key: string]: FacetValue; }](FacetValue.md)
`forKids` | [{ [key: string]: FacetValue; }](FacetValue.md)
`online` | [{ [key: string]: FacetValue; }](FacetValue.md)
`lastChance` | [{ [key: string]: FacetValue; }](FacetValue.md)

## Example

```typescript
import type { RewardsPaginatedResponseFacet } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "categories": {"option1":{"name":{"nl":"Option 1"},"count":3},"option2":{"name":{"nl":"Option 2"},"count":4}},
  "owningCardSystemId": {"option1":{"name":{"nl":"Option 1"},"count":3},"option2":{"name":{"nl":"Option 2"},"count":4}},
  "type": {"option1":{"name":{"nl":"Option 1"},"count":3},"option2":{"name":{"nl":"Option 2"},"count":4}},
  "sport": {"option1":{"name":{"nl":"Option 1"},"count":3},"option2":{"name":{"nl":"Option 2"},"count":4}},
  "forKids": {"option1":{"name":{"nl":"Option 1"},"count":3},"option2":{"name":{"nl":"Option 2"},"count":4}},
  "online": {"option1":{"name":{"nl":"Option 1"},"count":3},"option2":{"name":{"nl":"Option 2"},"count":4}},
  "lastChance": {"option1":{"name":{"nl":"Option 1"},"count":3},"option2":{"name":{"nl":"Option 2"},"count":4}},
} satisfies RewardsPaginatedResponseFacet

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RewardsPaginatedResponseFacet
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


