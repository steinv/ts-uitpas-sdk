
# EventCardSystemManualDistributionKeysInner

Distribution key that can be enabled or disabled manually for the related event.

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`enabled` | boolean

## Example

```typescript
import type { EventCardSystemManualDistributionKeysInner } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "enabled": null,
} satisfies EventCardSystemManualDistributionKeysInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventCardSystemManualDistributionKeysInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


