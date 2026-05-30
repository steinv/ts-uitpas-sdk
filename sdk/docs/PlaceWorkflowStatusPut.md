
# PlaceWorkflowStatusPut


## Properties

Name | Type
------------ | -------------
`workflowStatus` | [PlaceWorkflowStatus](PlaceWorkflowStatus.md)
`availableFrom` | Date
`reason` | string

## Example

```typescript
import type { PlaceWorkflowStatusPut } from ''

// TODO: Update the object below with actual values
const example = {
  "workflowStatus": null,
  "availableFrom": null,
  "reason": null,
} satisfies PlaceWorkflowStatusPut

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaceWorkflowStatusPut
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


