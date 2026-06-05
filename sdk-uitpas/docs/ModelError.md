
# ModelError

RFC7807 error model for all publiq APIs.

## Properties

Name | Type
------------ | -------------
`type` | string
`title` | string
`status` | number
`detail` | string
`endUserMessage` | [GetPasses400ResponseEndUserMessage](GetPasses400ResponseEndUserMessage.md)
`schemaErrors` | [Array&lt;GetPasses400ResponseSchemaErrorsInner&gt;](GetPasses400ResponseSchemaErrorsInner.md)

## Example

```typescript
import type { ModelError } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "title": null,
  "status": null,
  "detail": null,
  "endUserMessage": null,
  "schemaErrors": null,
} satisfies ModelError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


