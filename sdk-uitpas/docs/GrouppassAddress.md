
# GrouppassAddress

Address of the grouppass. Always present in responses.

## Properties

Name | Type
------------ | -------------
`street` | string
`postalCode` | string
`city` | string
`country` | string

## Example

```typescript
import type { GrouppassAddress } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "street": null,
  "postalCode": null,
  "city": null,
  "country": null,
} satisfies GrouppassAddress

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GrouppassAddress
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


