
# EventMainImagePut

Describes the request body to set an image as the main image of an [event](./models/event.json).

## Properties

Name | Type
------------ | -------------
`mediaObjectId` | string

## Example

```typescript
import type { EventMainImagePut } from ''

// TODO: Update the object below with actual values
const example = {
  "mediaObjectId": null,
} satisfies EventMainImagePut

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventMainImagePut
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


