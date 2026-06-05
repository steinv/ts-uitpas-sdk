
# PassholderOptInPreferences

Permissions that the passholder has given to be contacted.

## Properties

Name | Type
------------ | -------------
`serviceMails` | boolean
`milestoneMails` | boolean
`infoMails` | boolean
`sms` | boolean
`post` | boolean

## Example

```typescript
import type { PassholderOptInPreferences } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "serviceMails": null,
  "milestoneMails": null,
  "infoMails": null,
  "sms": null,
  "post": null,
} satisfies PassholderOptInPreferences

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PassholderOptInPreferences
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


