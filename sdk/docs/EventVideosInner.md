
# EventVideosInner

A video object that is linked to an event or a place.

## Properties

Name | Type
------------ | -------------
`id` | string
`url` | string
`embedUrl` | string
`language` | [CommonLanguage](CommonLanguage.md)
`copyrightHolder` | string

## Example

```typescript
import type { EventVideosInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "url": null,
  "embedUrl": null,
  "language": null,
  "copyrightHolder": publiq,
} satisfies EventVideosInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventVideosInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


