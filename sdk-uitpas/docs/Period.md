
# Period

Period entity with a begin and optional end date.

## Properties

Name | Type
------------ | -------------
`begin` | Date
`end` | Date

## Example

```typescript
import type { Period } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "begin": null,
  "end": null,
} satisfies Period

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Period
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


