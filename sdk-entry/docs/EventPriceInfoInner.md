
# EventPriceInfoInner


## Properties

Name | Type
------------ | -------------
`category` | string
`price` | number
`priceCurrency` | string
`name` | [CommonName](CommonName.md)
`groupPrice` | boolean

## Example

```typescript
import type { EventPriceInfoInner } from ''

// TODO: Update the object below with actual values
const example = {
  "category": base,
  "price": 10.5,
  "priceCurrency": null,
  "name": null,
  "groupPrice": null,
} satisfies EventPriceInfoInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventPriceInfoInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


