
# FaqEn

The English translation of the FAQ item.

## Properties

Name | Type
------------ | -------------
`question` | string
`answer` | string

## Example

```typescript
import type { FaqEn } from '@steinv/uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "question": How do I get there?,
  "answer": By bus.,
} satisfies FaqEn

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FaqEn
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


