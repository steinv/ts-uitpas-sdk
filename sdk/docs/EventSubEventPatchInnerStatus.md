
# EventSubEventPatchInnerStatus

Indicates if the subEvent is still happening as scheduled or not.

## Properties

Name | Type
------------ | -------------
`type` | string
`reason` | [EventSubEventPatchInnerStatusReason](EventSubEventPatchInnerStatusReason.md)

## Example

```typescript
import type { EventSubEventPatchInnerStatus } from ''

// TODO: Update the object below with actual values
const example = {
  "type": Available,
  "reason": null,
} satisfies EventSubEventPatchInnerStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventSubEventPatchInnerStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


