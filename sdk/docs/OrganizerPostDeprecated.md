
# OrganizerPostDeprecated


## Properties

Name | Type
------------ | -------------
`id` | string
`mainLanguage` | [OrganizerMainLanguage](OrganizerMainLanguage.md)
`website` | string
`name` | string
`address` | [CommonAddressLocalized](CommonAddressLocalized.md)
`contact` | [Array&lt;OrganizerContactInner&gt;](OrganizerContactInner.md)
`labels` | Array&lt;string&gt;
`hiddenLabels` | Array&lt;string&gt;

## Example

```typescript
import type { OrganizerPostDeprecated } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "mainLanguage": null,
  "website": null,
  "name": null,
  "address": null,
  "contact": null,
  "labels": null,
  "hiddenLabels": null,
} satisfies OrganizerPostDeprecated

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizerPostDeprecated
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


