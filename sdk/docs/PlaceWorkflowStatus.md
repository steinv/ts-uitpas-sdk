
# PlaceWorkflowStatus

The status in the moderation workflow.  Can be one of four types:  - `DRAFT`: Should not be visible on publication channels yet - `READY_FOR_VALIDATION`: Submitted for validation. Some publication channels may choose to show these. - `APPROVED`: Approved, will be visible on all publication channels (depending on the `availableFrom` and `availableTo`). Only possible if you have moderation permissions. - `REJECTED`: Rejected, will be hidden from all publication channels. Only possible if you have moderation permissions. - `DELETED`: Removed and should not be visible on any publication channels.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { PlaceWorkflowStatus } from '@steinv/uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
} satisfies PlaceWorkflowStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaceWorkflowStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


