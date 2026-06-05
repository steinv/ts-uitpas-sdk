
# EventSubEventChildcare

Indicates when childcare is available during this sub event. Each property is independent: omitting a property clears any previously set value for it.

## Properties

Name | Type
------------ | -------------
`start` | string
`end` | string

## Example

```typescript
import type { EventSubEventChildcare } from ''

// TODO: Update the object below with actual values
const example = {
  "start": null,
  "end": null,
} satisfies EventSubEventChildcare

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventSubEventChildcare
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


