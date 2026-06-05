
# TariffsResponse

Response object for tariffs

## Properties

Name | Type
------------ | -------------
`available` | [Array&lt;TariffAvailibility&gt;](TariffAvailibility.md)
`endUserMessage` | [TariffsResponseEndUserMessage](TariffsResponseEndUserMessage.md)

## Example

```typescript
import type { TariffsResponse } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "available": null,
  "endUserMessage": null,
} satisfies TariffsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TariffsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


