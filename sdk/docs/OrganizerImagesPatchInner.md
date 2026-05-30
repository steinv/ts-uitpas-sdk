
# OrganizerImagesPatchInner


## Properties

Name | Type
------------ | -------------
`id` | string
`language` | string
`copyrightHolder` | string
`description` | string

## Example

```typescript
import type { OrganizerImagesPatchInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "language": nl,
  "copyrightHolder": publiq,
  "description": Picture of the last publiq event,
} satisfies OrganizerImagesPatchInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizerImagesPatchInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


