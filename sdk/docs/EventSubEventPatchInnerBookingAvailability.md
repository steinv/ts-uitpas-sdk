
# EventSubEventPatchInnerBookingAvailability

Indicates if the subEvent still has tickets or places available for booking.

## Properties

Name | Type
------------ | -------------
`type` | [CommonBookingAvailabilityType](CommonBookingAvailabilityType.md)
`capacity` | number
`remainingCapacity` | number

## Example

```typescript
import type { EventSubEventPatchInnerBookingAvailability } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "capacity": null,
  "remainingCapacity": null,
} satisfies EventSubEventPatchInnerBookingAvailability

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventSubEventPatchInnerBookingAvailability
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


