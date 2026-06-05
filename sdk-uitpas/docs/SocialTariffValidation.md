
# SocialTariffValidation

SocialTariffValidation information

## Properties

Name | Type
------------ | -------------
`user` | [SocialTariffValidationPerson](SocialTariffValidationPerson.md)
`children` | [Array&lt;SocialTariffValidationPerson&gt;](SocialTariffValidationPerson.md)

## Example

```typescript
import type { SocialTariffValidation } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "user": null,
  "children": null,
} satisfies SocialTariffValidation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SocialTariffValidation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


