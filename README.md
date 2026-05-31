# UitPas SDK

## Installation

```sh
npm install @steinv/uitpas-sdk
```

## SDK (re)Generation

1. Download [openapi.json](https://stoplight.io/api/v1/projects/publiq/uitdatabank/nodes/reference/entry.json?deref=optimizedBundle)

2. Replace offending schemas in `openapi.json` and generate with

```
node cleanup-openapi.js
rm -r ./sdk/models
rm -r ./sdk/apis
rm -r ./sdk/docs
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
