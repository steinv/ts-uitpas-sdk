
# TicketSale

Model used both for registering new ticket sales and when searching for past ticket sales.  The `passholder` field is automatically included in responses if you have PASSHOLDERS_SEARCH permission. It is not required for ticket sale registrations.

## Properties

Name | Type
------------ | -------------
`id` | string
`regularPrice` | number
`regularPriceLabel` | string
`tariffId` | string
`tariff` | [Tariff](Tariff.md)
`eventId` | string
`uitpasNumber` | string
`passholder` | [Passholder](Passholder.md)

## Example

```typescript
import type { TicketSale } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "regularPrice": null,
  "regularPriceLabel": null,
  "tariffId": null,
  "tariff": null,
  "eventId": null,
  "uitpasNumber": null,
  "passholder": null,
} satisfies TicketSale

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TicketSale
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


