
# EventSubEventPatchInnerStatusReason

The reason of the status on the event, as a localized human-readable text.

## Properties

Name | Type
------------ | -------------
`nl` | string
`fr` | string
`de` | string
`en` | string

## Example

```typescript
import type { EventSubEventPatchInnerStatusReason } from ''

// TODO: Update the object below with actual values
const example = {
  "nl": Nederlandse reden,
  "fr": Raison français,
  "de": Deutscher Grund,
  "en": English reason,
} satisfies EventSubEventPatchInnerStatusReason

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventSubEventPatchInnerStatusReason
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


