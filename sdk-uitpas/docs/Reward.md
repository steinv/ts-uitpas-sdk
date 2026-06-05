
# Reward

Reward model

## Properties

Name | Type
------------ | -------------
`id` | string
`title` | string
`type` | string
`promotionalDescription` | string
`publicationPeriod` | [Period](Period.md)
`points` | number
`categories` | Array&lt;string&gt;
`moreInfoURL` | string
`grantingPeriod` | [Period](Period.md)
`owningCardSystem` | [CardSystem](CardSystem.md)
`applicableCardSystems` | [Array&lt;CardSystem&gt;](CardSystem.md)
`allCardSystems` | boolean
`organizers` | [Array&lt;Organizer&gt;](Organizer.md)
`status` | string
`maxAvailableUnits` | number
`unitsTaken` | number
`practicalInfo` | string
`pictures` | Array&lt;string&gt;
`redeemPeriod` | [Period](Period.md)
`forKids` | boolean
`sport` | boolean
`featured` | boolean
`online` | boolean
`lastChance` | boolean
`redeemConstraint` | [RewardRedeemConstraint](RewardRedeemConstraint.md)

## Example

```typescript
import type { Reward } from '@steinv/publiq-uitpas-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "title": null,
  "type": null,
  "promotionalDescription": null,
  "publicationPeriod": null,
  "points": null,
  "categories": null,
  "moreInfoURL": null,
  "grantingPeriod": null,
  "owningCardSystem": null,
  "applicableCardSystems": null,
  "allCardSystems": null,
  "organizers": null,
  "status": null,
  "maxAvailableUnits": null,
  "unitsTaken": null,
  "practicalInfo": null,
  "pictures": null,
  "redeemPeriod": null,
  "forKids": null,
  "sport": null,
  "featured": null,
  "online": null,
  "lastChance": null,
  "redeemConstraint": null,
} satisfies Reward

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Reward
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


