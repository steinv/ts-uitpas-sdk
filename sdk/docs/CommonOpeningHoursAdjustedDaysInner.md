
# CommonOpeningHoursAdjustedDaysInner


## Properties

Name | Type
------------ | -------------
`startDate` | Date
`endDate` | Date
`description` | [CommonOpeningHoursAdjustedDaysInnerDescription](CommonOpeningHoursAdjustedDaysInnerDescription.md)
`openingHours` | [Array&lt;CommonOpeningHoursInner&gt;](CommonOpeningHoursInner.md)

## Example

```typescript
import type { CommonOpeningHoursAdjustedDaysInner } from '@steinv/uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "startDate": null,
  "endDate": null,
  "description": null,
  "openingHours": null,
} satisfies CommonOpeningHoursAdjustedDaysInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommonOpeningHoursAdjustedDaysInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


