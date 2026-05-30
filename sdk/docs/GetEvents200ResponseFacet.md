
# GetEvents200ResponseFacet

Facet counts per possible filter & value.

## Properties

Name | Type
------------ | -------------
`regions` | [{ [key: string]: CommonFacet; }](CommonFacet.md)
`types` | [{ [key: string]: CommonFacet; }](CommonFacet.md)
`themes` | [{ [key: string]: CommonFacet; }](CommonFacet.md)
`facilities` | [{ [key: string]: CommonFacet; }](CommonFacet.md)
`labels` | [{ [key: string]: CommonFacet; }](CommonFacet.md)

## Example

```typescript
import type { GetEvents200ResponseFacet } from '@steinv/uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "regions": null,
  "types": null,
  "themes": null,
  "facilities": null,
  "labels": null,
} satisfies GetEvents200ResponseFacet

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetEvents200ResponseFacet
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


