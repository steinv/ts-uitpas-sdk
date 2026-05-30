
# Faq

A single FAQ item with translations in one or more languages.

## Properties

Name | Type
------------ | -------------
`nl` | [FaqNl](FaqNl.md)
`fr` | [FaqFr](FaqFr.md)
`de` | [FaqDe](FaqDe.md)
`en` | [FaqEn](FaqEn.md)

## Example

```typescript
import type { Faq } from ''

// TODO: Update the object below with actual values
const example = {
  "nl": null,
  "fr": null,
  "de": null,
  "en": null,
} satisfies Faq

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Faq
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


