
# EventAudience

Indicates the intended audience of the [event](./models/event.json).

## Properties

Name | Type
------------ | -------------
`audienceType` | string

## Example

```typescript
import type { EventAudience } from ''

// TODO: Update the object below with actual values
const example = {
  "audienceType": null,
} satisfies EventAudience

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventAudience
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


