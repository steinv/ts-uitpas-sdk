
# EventCardSystem

CardSystem in an event context, optionally including manual distributionKeys.  This model is only used in the GET and PUT `/events/{eventId}/card-systems` to configure the card systems and distribution keys for an event.  <!-- theme: warning -->  > **This model and corresponding endpoints are only needed for exceptional cases.** In most cases card systems and distribution keys are set automatically on events, so you don\'t need to retrieve or change them. 

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`enabled` | boolean
`manualDistributionKeys` | [Array&lt;EventCardSystemManualDistributionKeysInner&gt;](EventCardSystemManualDistributionKeysInner.md)

## Example

```typescript
import type { EventCardSystem } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "enabled": null,
  "manualDistributionKeys": null,
} satisfies EventCardSystem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventCardSystem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


