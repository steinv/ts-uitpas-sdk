
# OrganizerPermissions

Combination of organizer and its permissions

## Properties

Name | Type
------------ | -------------
`organizer` | [Organizer](Organizer.md)
`permissions` | [Array&lt;Permission&gt;](Permission.md)
`permissionDetails` | [Array&lt;PermissionDetail&gt;](PermissionDetail.md)
`linkedOrganizers` | [Array&lt;LinkedOrganizerPermissions&gt;](LinkedOrganizerPermissions.md)

## Example

```typescript
import type { OrganizerPermissions } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "organizer": null,
  "permissions": null,
  "permissionDetails": null,
  "linkedOrganizers": null,
} satisfies OrganizerPermissions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizerPermissions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


