
# GetPasses400ResponseEndUserMessage

A human-readable explanation of the problem, specifically for end-users, in one or more languages. Typically available for domain errors, but not for errors caused by a technical issue in the integration (for example invalid JSON syntax in a request body). An `nl` value is always provided, other languages may be provided depending on the API and its intended audience. When this property is included, it is strongly encouraged to show this to the end-user.

## Properties

Name | Type
------------ | -------------
`nl` | string
`fr` | string
`de` | string
`en` | string

## Example

```typescript
import type { GetPasses400ResponseEndUserMessage } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "nl": null,
  "fr": null,
  "de": null,
  "en": null,
} satisfies GetPasses400ResponseEndUserMessage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetPasses400ResponseEndUserMessage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


