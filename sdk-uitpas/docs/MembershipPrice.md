
# MembershipPrice

The MembershipPrice describes the price an UiTPAS membership in a specific cardsystem for a new or existing passholder.  

## Properties

Name | Type
------------ | -------------
`price` | number
`label` | string
`description` | string

## Example

```typescript
import type { MembershipPrice } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "price": null,
  "label": null,
  "description": null,
} satisfies MembershipPrice

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MembershipPrice
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


