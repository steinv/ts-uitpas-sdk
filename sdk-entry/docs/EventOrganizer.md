
# EventOrganizer

A reference to an [organizer](./models/organizer.json) linked to the event. When writing an event it should only contain an `@id` property. When reading an event it will contain all the properties from the [organizer](./models/organizer.json).

## Properties

Name | Type
------------ | -------------
`id` | string

## Example

```typescript
import type { EventOrganizer } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
} satisfies EventOrganizer

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventOrganizer
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


