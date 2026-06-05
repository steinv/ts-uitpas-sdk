
# CheckinStatus

The status of a potential checkin, including an `endUserMessage` when it\'s not allowed.

## Properties

Name | Type
------------ | -------------
`allowed` | boolean
`endUserMessage` | [CheckinStatusEndUserMessage](CheckinStatusEndUserMessage.md)

## Example

```typescript
import type { CheckinStatus } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "allowed": null,
  "endUserMessage": null,
} satisfies CheckinStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CheckinStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


