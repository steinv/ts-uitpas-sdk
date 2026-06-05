
# EventMajorInfoPutRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`type` | string
`theme` | string
`location` | [EventMajorInfoPutRequestLocation](EventMajorInfoPutRequestLocation.md)
`calendar` | [EventCalendarPutDeprecated](EventCalendarPutDeprecated.md)

## Example

```typescript
import type { EventMajorInfoPutRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "type": null,
  "theme": null,
  "location": null,
  "calendar": null,
} satisfies EventMajorInfoPutRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventMajorInfoPutRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


