
# KioskDevice

Representation of the kiosk entity

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`organizers` | [Array&lt;Organizer&gt;](Organizer.md)
`locations` | [Array&lt;Location&gt;](Location.md)
`deviceId` | string
`cardSystem` | [CardSystem](CardSystem.md)
`releaseTrack` | string

## Example

```typescript
import type { KioskDevice } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "organizers": null,
  "locations": null,
  "deviceId": null,
  "cardSystem": null,
  "releaseTrack": null,
} satisfies KioskDevice

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KioskDevice
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


