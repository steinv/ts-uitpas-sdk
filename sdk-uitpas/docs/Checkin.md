
# Checkin

Model used both for registering and searching checkins.  The `passholder` field is automatically included in responses if you have PASSHOLDERS_SEARCH permission. It is not required for check-in creation.

## Properties

Name | Type
------------ | -------------
`id` | string
`eventId` | string
`uitpasNumber` | string
`points` | number
`passholder` | [Passholder](Passholder.md)

## Example

```typescript
import type { Checkin } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "eventId": null,
  "uitpasNumber": null,
  "points": null,
  "passholder": null,
} satisfies Checkin

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Checkin
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


