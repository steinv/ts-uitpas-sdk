
# CardSystem

A region, usually one or multiple municipalities in Belgium, that uses UiTPAS and provides discounts and/or rewards. For example \"Paspartoe\" (Brussels), UiTPAS Leuven, UiTPAS Hasselt, UiTPAS Gent, and so on.

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`branding` | [CardSystemBranding](CardSystemBranding.md)
`links` | [CardSystemLinks](CardSystemLinks.md)
`cities` | [Array&lt;City&gt;](City.md)
`permanent` | boolean
`allowsCardlessRegistration` | boolean
`cardlessRegistrationType` | string
`socialTariffInfo` | string

## Example

```typescript
import type { CardSystem } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "branding": null,
  "links": null,
  "cities": null,
  "permanent": null,
  "allowsCardlessRegistration": null,
  "cardlessRegistrationType": null,
  "socialTariffInfo": null,
} satisfies CardSystem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CardSystem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


