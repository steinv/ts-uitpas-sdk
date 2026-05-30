
# EventSubEventBookingAvailability

Indicates whether the subevent still has tickets or reservations available. Can contain either a `type` or `remainingCapacity` (or both), and can optionally include capacity information.

## Properties

Name | Type
------------ | -------------
`type` | [CommonBookingAvailabilityType](CommonBookingAvailabilityType.md)
`capacity` | number
`remainingCapacity` | number

## Example

```typescript
import type { EventSubEventBookingAvailability } from '@steinv/uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "capacity": null,
  "remainingCapacity": null,
} satisfies EventSubEventBookingAvailability

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventSubEventBookingAvailability
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


