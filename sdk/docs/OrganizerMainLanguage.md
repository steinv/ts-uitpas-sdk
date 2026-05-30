
# OrganizerMainLanguage

The main language that the [organizer](./models/organizer.json) is described in. All localized properties like [name](./models/organizer-name.json) and [description](./models/organizer-description.json) will be required to have at least a value for this language.  Can be one of `nl`, `fr`, `de`, or `en`.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { OrganizerMainLanguage } from '@steinv/uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
} satisfies OrganizerMainLanguage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizerMainLanguage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


