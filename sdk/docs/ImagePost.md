
# ImagePost


## Properties

Name | Type
------------ | -------------
`contentUrl` | string
`description` | string
`copyrightHolder` | string
`inLanguage` | [CommonLanguage](CommonLanguage.md)

## Example

```typescript
import type { ImagePost } from ''

// TODO: Update the object below with actual values
const example = {
  "contentUrl": null,
  "description": null,
  "copyrightHolder": publiq,
  "inLanguage": null,
} satisfies ImagePost

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ImagePost
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


