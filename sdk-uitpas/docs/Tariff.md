
# Tariff

The Tariff describes the discounted price a passholder has to pay for a given ticket. 

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`price` | number
`type` | string

## Example

```typescript
import type { Tariff } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "price": null,
  "type": null,
} satisfies Tariff

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Tariff
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


