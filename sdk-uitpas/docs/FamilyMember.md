
# FamilyMember

The `FamilyMember` entity including basic information about the `Passholder` family member.

## Properties

Name | Type
------------ | -------------
`uitpasNumber` | string
`passholder` | [Passholder](Passholder.md)
`creationDate` | Date
`icon` | string
`mainFamilyMember` | boolean

## Example

```typescript
import type { FamilyMember } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "uitpasNumber": null,
  "passholder": null,
  "creationDate": null,
  "icon": null,
  "mainFamilyMember": null,
} satisfies FamilyMember

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FamilyMember
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


