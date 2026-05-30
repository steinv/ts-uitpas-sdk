
# PlaceBookingAvailability

Indicates whether the place still has tickets or reservations available. Currently only contains a `type` which can only be `Available` for places (as opposed to events that can also have `Unavailable` when sold out), as a place can never be completely sold out forever. Can later be expanded with more detailed info.

## Properties

Name | Type
------------ | -------------
`type` | [CommonBookingAvailabilityType](CommonBookingAvailabilityType.md)

## Example

```typescript
import type { PlaceBookingAvailability } from '@steinv/uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
} satisfies PlaceBookingAvailability

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaceBookingAvailability
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


