
# PassSocialTariff

Information about the possible social tariff of the passholder. This object is always present, however a passholder is only entitled to social tariff if the `status` property has value `ACTIVE`.

## Properties

Name | Type
------------ | -------------
`status` | string
`endDate` | Date

## Example

```typescript
import type { PassSocialTariff } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "endDate": null,
} satisfies PassSocialTariff

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PassSocialTariff
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


