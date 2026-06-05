
# GrouppassSocialTariff

Social tariff of the grouppass (if applicable)

## Properties

Name | Type
------------ | -------------
`status` | string
`endDate` | Date
`totalTicketsPerYear` | number
`availableTickets` | number

## Example

```typescript
import type { GrouppassSocialTariff } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "endDate": null,
  "totalTicketsPerYear": null,
  "availableTickets": null,
} satisfies GrouppassSocialTariff

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GrouppassSocialTariff
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


