
# EventMainLanguage

The main language that the [event](./models/event.json) is described in. All localized properties like [name](./models/event-name.json) and [description](./models/event-description.json) will be required to have at least a value for this language.  Can be one of `nl`, `fr`, `de`, or `en`.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { EventMainLanguage } from '@steinv/uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
} satisfies EventMainLanguage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventMainLanguage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


