
# CommonOpeningHoursInner


## Properties

Name | Type
------------ | -------------
`opens` | string
`closes` | string
`dayOfWeek` | Set&lt;string&gt;

## Example

```typescript
import type { CommonOpeningHoursInner } from '@steinv/uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "opens": null,
  "closes": null,
  "dayOfWeek": null,
} satisfies CommonOpeningHoursInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommonOpeningHoursInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


