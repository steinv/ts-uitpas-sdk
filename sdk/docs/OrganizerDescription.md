
# OrganizerDescription

A human-readable, internationalized description of the [organizer](./models/organizer.json).  Requires at least one value, for the language specified in the [mainLanguage](./models/organizer-mainLanguage.json) property.

## Properties

Name | Type
------------ | -------------
`nl` | string
`fr` | string
`de` | string
`en` | string

## Example

```typescript
import type { OrganizerDescription } from ''

// TODO: Update the object below with actual values
const example = {
  "nl": Picture of the last publiq event,
  "fr": Picture of the last publiq event,
  "de": Picture of the last publiq event,
  "en": Picture of the last publiq event,
} satisfies OrganizerDescription

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizerDescription
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


