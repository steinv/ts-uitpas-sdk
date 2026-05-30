
# OrganizerWorkflowStatus

The status of the [organizer](./models/organizer.json) in the moderation workflow.  Can be one of two values:  - `ACTIVE`: The organizer is created and can be used. - `DELETED`: The organizer was deleted and should not be visible on any publication channels.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { OrganizerWorkflowStatus } from '@steinv/uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
} satisfies OrganizerWorkflowStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizerWorkflowStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


