
# Image


## Properties

Name | Type
------------ | -------------
`id` | string
`contentUrl` | string
`thumbnailUrl` | string
`description` | string
`copyrightHolder` | string
`inLanguage` | [CommonLanguage](CommonLanguage.md)

## Example

```typescript
import type { Image } from '@steinv/uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "contentUrl": null,
  "thumbnailUrl": null,
  "description": null,
  "copyrightHolder": publiq,
  "inLanguage": null,
} satisfies Image

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Image
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


