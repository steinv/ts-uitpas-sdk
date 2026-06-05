
# Report

The status of a report export.

## Properties

Name | Type
------------ | -------------
`status` | string
`id` | number
`message` | string
`period` | [ReportPeriod](ReportPeriod.md)
`creationDate` | Date

## Example

```typescript
import type { Report } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "id": null,
  "message": null,
  "period": null,
  "creationDate": null,
} satisfies Report

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Report
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


