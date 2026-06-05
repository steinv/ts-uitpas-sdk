
# Organizer

An organisation that partners with UiTPAS to provide discounts and/or rewards, and/or allows points to be collected at their events.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`cardSystems` | [Array&lt;CardSystem&gt;](CardSystem.md)

## Example

```typescript
import type { Organizer } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "cardSystems": null,
} satisfies Organizer

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Organizer
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


