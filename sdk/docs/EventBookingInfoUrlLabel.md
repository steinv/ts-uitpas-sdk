
# EventBookingInfoUrlLabel

Call-to-action text to show for the link to the booking url. See [our suggested values](./entry-api/shared/booking-and-contact-info#urllabel).

## Properties

Name | Type
------------ | -------------
`nl` | string
`fr` | string
`de` | string
`en` | string

## Example

```typescript
import type { EventBookingInfoUrlLabel } from '@steinv/uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "nl": Nederlandse beschrijving,
  "fr": Description français,
  "de": Deutscher Beschreibung,
  "en": English description,
} satisfies EventBookingInfoUrlLabel

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventBookingInfoUrlLabel
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


