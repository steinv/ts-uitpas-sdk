
# PlaceVideosPost

Describes the request body to add a video to a place.

## Properties

Name | Type
------------ | -------------
`url` | string
`language` | [CommonLanguage](CommonLanguage.md)
`copyrightHolder` | string

## Example

```typescript
import type { PlaceVideosPost } from ''

// TODO: Update the object below with actual values
const example = {
  "url": null,
  "language": null,
  "copyrightHolder": publiq,
} satisfies PlaceVideosPost

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaceVideosPost
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


