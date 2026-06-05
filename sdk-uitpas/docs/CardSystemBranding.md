
# CardSystemBranding

Branding information of the card system

## Properties

Name | Type
------------ | -------------
`logo` | string
`primaryColor` | string
`secondaryColor` | string

## Example

```typescript
import type { CardSystemBranding } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "logo": null,
  "primaryColor": null,
  "secondaryColor": null,
} satisfies CardSystemBranding

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CardSystemBranding
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


