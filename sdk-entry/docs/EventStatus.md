
# EventStatus

Indicates if the [event](./models/event.json) is still happening as scheduled or not.

## Properties

Name | Type
------------ | -------------
`type` | string
`reason` | [EventStatusReason](EventStatusReason.md)

## Example

```typescript
import type { EventStatus } from ''

// TODO: Update the object below with actual values
const example = {
  "type": Available,
  "reason": null,
} satisfies EventStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


