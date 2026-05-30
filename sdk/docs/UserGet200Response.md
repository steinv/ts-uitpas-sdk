
# UserGet200Response


## Properties

Name | Type
------------ | -------------
`uuid` | string
`email` | string
`username` | string
`id` | string
`nick` | string

## Example

```typescript
import type { UserGet200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "uuid": c8e6ff82-8b30-4295-b937-ab2f4f6ab4bf,
  "email": info@publiq.be,
  "username": username,
  "id": c8e6ff82-8b30-4295-b937-ab2f4f6ab4bf,
  "nick": username,
} satisfies UserGet200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserGet200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


