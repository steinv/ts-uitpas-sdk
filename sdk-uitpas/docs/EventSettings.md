
# EventSettings

Event setting within UiTPAS

## Properties

Name | Type
------------ | -------------
`id` | string
`passholderTicketLimit` | [PeriodLimit](PeriodLimit.md)
`checkinLimit` | [PeriodLimit](PeriodLimit.md)
`checkinPoints` | number

## Example

```typescript
import type { EventSettings } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "passholderTicketLimit": null,
  "checkinLimit": null,
  "checkinPoints": null,
} satisfies EventSettings

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventSettings
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


