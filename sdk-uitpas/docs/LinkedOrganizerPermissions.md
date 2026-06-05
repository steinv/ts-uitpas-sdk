
# LinkedOrganizerPermissions

Combination of organizer and its permissions, specifically targetted to be used when linked to another organizer.

## Properties

Name | Type
------------ | -------------
`organizer` | [Organizer](Organizer.md)
`permissionDetails` | [Array&lt;PermissionDetail&gt;](PermissionDetail.md)

## Example

```typescript
import type { LinkedOrganizerPermissions } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "organizer": null,
  "permissionDetails": null,
} satisfies LinkedOrganizerPermissions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LinkedOrganizerPermissions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


