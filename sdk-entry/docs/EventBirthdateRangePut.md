
# EventBirthdateRangePut

Describes the request body to set the birthdate range for the attendees of the [event](./models/event.json).

## Properties

Name | Type
------------ | -------------
`from` | Date
`to` | Date

## Example

```typescript
import type { EventBirthdateRangePut } from ''

// TODO: Update the object below with actual values
const example = {
  "from": null,
  "to": null,
} satisfies EventBirthdateRangePut

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventBirthdateRangePut
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


