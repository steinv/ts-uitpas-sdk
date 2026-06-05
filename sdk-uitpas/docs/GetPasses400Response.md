
# GetPasses400Response


## Properties

Name | Type
------------ | -------------
`type` | string
`title` | string
`status` | number
`detail` | string
`endUserMessage` | [GetPasses400ResponseEndUserMessage](GetPasses400ResponseEndUserMessage.md)
`schemaErrors` | [Array&lt;GetPasses400ResponseSchemaErrorsInner&gt;](GetPasses400ResponseSchemaErrorsInner.md)
`cardStatus` | string
`passholderId` | string
`passType` | string

## Example

```typescript
import type { GetPasses400Response } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "title": null,
  "status": null,
  "detail": null,
  "endUserMessage": null,
  "schemaErrors": null,
  "cardStatus": null,
  "passholderId": null,
  "passType": null,
} satisfies GetPasses400Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetPasses400Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


