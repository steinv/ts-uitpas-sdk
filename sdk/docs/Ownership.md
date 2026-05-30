
# Ownership

An ownership request between an owner and an item

## Properties

Name | Type
------------ | -------------
`id` | string
`itemId` | string
`itemType` | [CommonItemType](CommonItemType.md)
`ownerId` | string
`ownerEmail` | string
`requesterId` | string
`requesterEmail` | string
`state` | [OwnershipState](OwnershipState.md)
`created` | Date
`modified` | Date

## Example

```typescript
import type { Ownership } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "itemId": null,
  "itemType": null,
  "ownerId": null,
  "ownerEmail": info@example.com,
  "requesterId": null,
  "requesterEmail": info@example.com,
  "state": null,
  "created": null,
  "modified": null,
} satisfies Ownership

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Ownership
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


