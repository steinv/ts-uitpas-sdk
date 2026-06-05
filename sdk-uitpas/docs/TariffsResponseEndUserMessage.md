
# TariffsResponseEndUserMessage

Optional property that, if provided, contains information for the end-user about potentially unavailable tariffs (while the end user might expect otherwise). e.g. if no tariff of type `SOCIALTARIFF` is available, while the passholder has a valid social tariff, this field can contain a human-readable explanation of the problem, specifically for end-users, in one or more languages. An `nl` value is always provided, other languages may be provided. When this property is included, it is strongly encouraged to show this to the end-user. It is also important to note that this message is context-aware: e.g. when filtering tariffs on `type=SOCIALTARIFF`, this message won\'t include information about coupons. Furthermore keep in mind this \'end user message\' does not necessarily contain a fatal error. A message might be relevant to show while there are still other tariffs available.

## Properties

Name | Type
------------ | -------------
`nl` | string
`fr` | string
`de` | string
`en` | string

## Example

```typescript
import type { TariffsResponseEndUserMessage } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "nl": null,
  "fr": null,
  "de": null,
  "en": null,
} satisfies TariffsResponseEndUserMessage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TariffsResponseEndUserMessage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


