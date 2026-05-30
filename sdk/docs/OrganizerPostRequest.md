
# OrganizerPostRequest


## Properties

Name | Type
------------ | -------------
`id` | string
`mainLanguage` | [OrganizerMainLanguage](OrganizerMainLanguage.md)
`url` | string
`name` | string
`description` | [OrganizerDescription](OrganizerDescription.md)
`educationalDescription` | [OrganizerEducationalDescription](OrganizerEducationalDescription.md)
`address` | [CommonAddressLocalized](CommonAddressLocalized.md)
`geo` | [OrganizerGeo](OrganizerGeo.md)
`contactPoint` | [OrganizerContactPoint](OrganizerContactPoint.md)
`images` | [Array&lt;Image&gt;](Image.md)
`mainImage` | string
`labels` | Array&lt;string&gt;
`hiddenLabels` | Array&lt;string&gt;
`created` | Date
`workflowStatus` | [OrganizerWorkflowStatus](OrganizerWorkflowStatus.md)
`languages` | Array&lt;string&gt;
`completedLanguages` | Array&lt;string&gt;
`modified` | Date
`creator` | string
`contributors` | Array&lt;string&gt;
`completeness` | number
`website` | string
`contact` | [Array&lt;OrganizerContactInner&gt;](OrganizerContactInner.md)

## Example

```typescript
import type { OrganizerPostRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "mainLanguage": null,
  "url": null,
  "name": null,
  "description": null,
  "educationalDescription": null,
  "address": null,
  "geo": null,
  "contactPoint": null,
  "images": null,
  "mainImage": null,
  "labels": null,
  "hiddenLabels": null,
  "created": null,
  "workflowStatus": null,
  "languages": null,
  "completedLanguages": null,
  "modified": null,
  "creator": null,
  "contributors": null,
  "completeness": 56,
  "website": null,
  "contact": null,
} satisfies OrganizerPostRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizerPostRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


