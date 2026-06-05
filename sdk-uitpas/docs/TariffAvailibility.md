
# TariffAvailibility

The `TariffAvailibility` includes all information about the `Tariff`, which describes the discounted price a passholder has to pay for a given ticket, and the `remaining` number of tickets this passholder can buy for this event at this Tariff.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`price` | number
`type` | string
`remaining` | number

## Example

```typescript
import type { TariffAvailibility } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "price": null,
  "type": null,
  "remaining": 1,
} satisfies TariffAvailibility

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TariffAvailibility
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


