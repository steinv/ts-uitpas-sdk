
# EventTermsInner

A taxonomy term used to categorize events.  All events require exactly one term of the `eventtype` domain, and can optionally contain other terms.  When reading events, all properties will be available. When creating or updating events only the `id` is required to be included.

## Properties

Name | Type
------------ | -------------
`id` | string
`label` | string
`domain` | string

## Example

```typescript
import type { EventTermsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 0.50.4.0.0,
  "label": Concert,
  "domain": eventtype,
} satisfies EventTermsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventTermsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


