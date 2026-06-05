# Publiq UitPas SDK(s)

Look at [publiq platform](https://www.publiq.be/nl/projecten/publiq-platform) for additional information on how to use UitPas

## Installation

```sh
npm install @steinv/publiq-entry-sdk
npm install @steinv/publiq-uitpas-sdk
```

## SDK (re)Generation

1. Download openapi

- [Entry Api (manage events)](https://stoplight.io/api/v1/projects/publiq/uitdatabank/nodes/reference/entry.json?deref=optimizedBundle)
- [Uitpas Api (uitpas points, discounts,..)](https://stoplight.io/api/v1/projects/publiq/uitpas/nodes/reference/uitpas.json?deref=optimizedBundle)

2. Replace offending schemas in the `openapi.json` and generate with

### Entry API

```
node cleanup-openapi.js entry.json
rm -r ./sdk-uitpas-api/models
rm -r ./sdk-uitpas-api/apis
rm -r ./sdk-uitpas-api/docs
npx @openapitools/openapi-generator-cli generate \
  -i openapi.clean.json \
  -g typescript-fetch \
  -o ./sdk-uitpas-api
```

### Uitpas API

```
node cleanup-openapi.js uitpas.json
rm -r ./sdk-uitpas-api/models
rm -r ./sdk/apis
rm -r ./sdk/docs
npx @openapitools/openapi-generator-cli generate \
  -i openapi.clean.json \
  -g typescript-fetch \
  -o ./sdk-entry-api
```

## Publishing on NPM

### Build Entry SDK

```
cd sdk-entry-api
npm install
npm run build
```

### Build Uitpas SDK

```
cd sdk-uitpas-api
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
