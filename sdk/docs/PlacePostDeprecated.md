
# PlacePostDeprecated


## Properties

Name | Type
------------ | -------------
`mainLanguage` | [PlaceMainLanguage](PlaceMainLanguage.md)
`name` | string
`type` | [PlacePostDeprecatedType](PlacePostDeprecatedType.md)
`address` | [CommonAddressLocalized](CommonAddressLocalized.md)
`calendar` | [PlaceCalendarPut](PlaceCalendarPut.md)

## Example

```typescript
import type { PlacePostDeprecated } from ''

// TODO: Update the object below with actual values
const example = {
  "mainLanguage": null,
  "name": null,
  "type": null,
  "address": null,
  "calendar": null,
} satisfies PlacePostDeprecated

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlacePostDeprecated
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


