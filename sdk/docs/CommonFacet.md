
# CommonFacet

A single facet for a specific filter. Every facet has a human-readable name and total count to show to end-users to drill down search results.

## Properties

Name | Type
------------ | -------------
`name` | [CommonName](CommonName.md)
`count` | number
`children` | [{ [key: string]: CommonFacet; }](CommonFacet.md)

## Example

```typescript
import type { CommonFacet } from '@steinv/uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "count": null,
  "children": null,
} satisfies CommonFacet

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommonFacet
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


