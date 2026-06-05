
# AssociationMembership


## Properties

Name | Type
------------ | -------------
`association` | [Association](Association.md)
`status` | string
`endDate` | Date
`renewable` | boolean

## Example

```typescript
import type { AssociationMembership } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "association": null,
  "status": null,
  "endDate": null,
  "renewable": null,
} satisfies AssociationMembership

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssociationMembership
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


