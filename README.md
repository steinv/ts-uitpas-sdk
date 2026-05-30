# UitPas SDK

## SDK Generation

1. Download [openapi.json](https://stoplight.io/api/v1/projects/publiq/uitdatabank/nodes/reference/search.json?deref=optimizedBundle)

2. Replace offending schemas in `openapi.json` and generate with

```
node cleanup-openapi.js
rm -r ./sdk/src
npx @openapitools/openapi-generator-cli generate \
  -i openapi.clean.json \
  -g typescript-fetch \
  -o ./sdk
```

## Publishing on NPM

### Build SDK

```
cd sdk
npm install
npm run build
```

### set the version

```
npm version patch/minor/major
```

### publish to npm

```
npm login
npm publish --access public
```
