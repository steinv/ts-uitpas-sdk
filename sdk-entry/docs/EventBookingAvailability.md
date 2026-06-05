
# EventBookingAvailability

Indicates whether the event still has tickets or reservations available. Currently contains a `type` that can be `Available` or `Unavailable`, and can optionally include capacity information.

## Properties

Name | Type
------------ | -------------
`type` | [CommonBookingAvailabilityType](CommonBookingAvailabilityType.md)
`capacity` | number

## Example

```typescript
import type { EventBookingAvailability } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "capacity": null,
} satisfies EventBookingAvailability

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventBookingAvailability
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


