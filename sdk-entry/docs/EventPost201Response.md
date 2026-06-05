
# EventPost201Response


## Properties

Name | Type
------------ | -------------
`id` | string
`eventId` | string
`url` | string
`commandId` | string

## Example

```typescript
import type { EventPost201Response } from ''

// TODO: Update the object below with actual values
const example = {
  "id": c8e6ff82-8b30-4295-b937-ab2f4f6ab4bf,
  "eventId": null,
  "url": https://io-test.uitdatabank.be/places/c8e6ff82-8b30-4295-b937-ab2f4f6ab4bf,
  "commandId": 92973349-967e-44d7-83a2-e1972d9e1622,
} satisfies EventPost201Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventPost201Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


