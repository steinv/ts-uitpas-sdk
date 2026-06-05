
# PermissionDetail

Permission details

## Properties

Name | Type
------------ | -------------
`id` | [Permission](Permission.md)
`label` | [PermissionDetailLabel](PermissionDetailLabel.md)

## Example

```typescript
import type { PermissionDetail } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "label": null,
} satisfies PermissionDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PermissionDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


