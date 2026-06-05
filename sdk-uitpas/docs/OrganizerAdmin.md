
# OrganizerAdmin

An admin user for an organizer.

## Properties

Name | Type
------------ | -------------
`userId` | string
`email` | string
`type` | string

## Example

```typescript
import type { OrganizerAdmin } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "userId": null,
  "email": null,
  "type": null,
} satisfies OrganizerAdmin

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizerAdmin
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


