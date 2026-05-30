
# EventCalendarSummary

Only visible when adding the extra `embedCalendarSummaries` property to the search query. This contains one or more formatted human-readable summaries of the date/time info of the result.

## Properties

Name | Type
------------ | -------------
`nl` | [OfferCalendarSummaryDetail](OfferCalendarSummaryDetail.md)
`fr` | [OfferCalendarSummaryDetail](OfferCalendarSummaryDetail.md)
`de` | [OfferCalendarSummaryDetail](OfferCalendarSummaryDetail.md)
`en` | [OfferCalendarSummaryDetail](OfferCalendarSummaryDetail.md)

## Example

```typescript
import type { EventCalendarSummary } from ''

// TODO: Update the object below with actual values
const example = {
  "nl": null,
  "fr": null,
  "de": null,
  "en": null,
} satisfies EventCalendarSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventCalendarSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


