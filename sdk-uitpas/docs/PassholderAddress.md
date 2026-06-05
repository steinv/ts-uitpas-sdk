
# PassholderAddress

Address that the passholder lives at. Always present in responses. Passholders living outside of Belgium (usually near the border) will only have a `postalCode` and `city` in their address.

## Properties

Name | Type
------------ | -------------
`street` | string
`number` | string
`box` | string
`postalCode` | string
`city` | string
`country` | string

## Example

```typescript
import type { PassholderAddress } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "street": null,
  "number": null,
  "box": null,
  "postalCode": null,
  "city": null,
  "country": null,
} satisfies PassholderAddress

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PassholderAddress
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


