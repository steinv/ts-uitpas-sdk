
# FaqDe

The German translation of the FAQ item.

## Properties

Name | Type
------------ | -------------
`question` | string
`answer` | string

## Example

```typescript
import type { FaqDe } from ''

// TODO: Update the object below with actual values
const example = {
  "question": Wie komme ich dorthin?,
  "answer": Mit dem Bus.,
} satisfies FaqDe

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FaqDe
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


