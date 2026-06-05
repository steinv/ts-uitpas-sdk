
# EventProduction

The production that the [event](./models/event.json) belongs to.  A production is a group of events that share the same subject but are taking place in different locations and/or are organized by different organizers.  For example a theatre show that is scheduled to be performed at different locations, or a movie that will be screened at different cinema\'s.

## Properties

Name | Type
------------ | -------------
`id` | string
`title` | string
`otherEvents` | Array&lt;string&gt;

## Example

```typescript
import type { EventProduction } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "title": Kommil Foo - OOGST,
  "otherEvents": null,
} satisfies EventProduction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventProduction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


