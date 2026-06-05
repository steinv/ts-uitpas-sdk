
# OrganizerAddress

The address the [organizer](./models/organizer.json) is located at. Localized because some parts like the municipality or street address can be different in Dutch, French, German and/or English.  Requires at least one locale, specifically the one defined in the [mainLanguage](./models/organizer-mainLanguage.json) of the organizer.  **Only add a localized version if it\'s an official variant!**

## Properties

Name | Type
------------ | -------------
`nl` | [CommonAddressLocalized](CommonAddressLocalized.md)
`fr` | [CommonAddressLocalized](CommonAddressLocalized.md)
`de` | [CommonAddressLocalized](CommonAddressLocalized.md)
`en` | [CommonAddressLocalized](CommonAddressLocalized.md)

## Example

```typescript
import type { OrganizerAddress } from ''

// TODO: Update the object below with actual values
const example = {
  "nl": null,
  "fr": null,
  "de": null,
  "en": null,
} satisfies OrganizerAddress

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizerAddress
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


