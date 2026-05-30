
# EventLocation

A reference to a [place](./models/place.json) linked to the event. When writing an event it should only contain an `@id` property. When reading an event it will contain all the properties from the [place](./models/place.json). Always required when creating/updating an event, except when using [attendanceMode](./models/event-attendanceMode.json) `online`.

## Properties

Name | Type
------------ | -------------
`id` | string

## Example

```typescript
import type { EventLocation } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
} satisfies EventLocation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventLocation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


