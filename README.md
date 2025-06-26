# 🚀 @0xobedient-DexScreener-SDK

**Memetus-Pumpfun-SDK**

> A Powerful Typescript SDK for the DexScreener API, Delivering effortless access to token information, market insights, and trading pairs across various blockchain networks in a structured and type-safe way.

[npm](https://www.npmjs.com/package/@0xobedient/dexscreener-sdk)
[github](https://github.com/0xobedient/dexscreener-sdk)
[download](https://github.com/0xobedient/dexscreener-sdk/releases)

---

## Features

- ✅ **Complete API Integration**: Supports every endpoint provided by DexScreener
- ✅ **TypeScript First**: Designed with TypeScript to ensure strong typing and better developer tooling
- ✅ **Modular Structure**: Organized codebase with clear separation of concerns across API features
- ✅ **Detailed Type Definitions**: Includes comprehensive and fully annotated data models for all responses
- ✅ **Async-Friendly**: Fully supports async/await patterns with promise-based architecture
- ✅ **Minimal Dependencies**: Relies solely on axios for HTTP requests, with no additional libraries
- ✅ **Open Source**: Managed in public github repository

---

## 📦 Installation

```bash
npm install @0xobedient/dexscreener-sdk
# or
yarn add @0xobedient/dexscreener-sdk
# or
pnpm install @0xobedient/dexscreener-sdk
```

---

## ✅ Examples

### Instantiation

```typescript
const client = new DexScreener();
```

### Get latest boosted tokens

```typescript
const data = await client.getLatestBoostedTokens();
// or
const data = await getLatestBoostedTokens();
```

### Get latest tokens profiles

```typescript
const data = await client.getLatestTokenProfiles();
// or
const data = await getLatestTokenProfiles();
```

### Get most boosted tokens

```typescript
const data = await client.getMostBoostedTokens();
// or
const data = await getMostBoostedTokens();
```

### Get pairs by chain and address

```typescript
const params = {
  chainId: "solana",
  pairAddresses: [],
};

const data = await client.getPairsByChainAndAddresses(params);
// or
const data = await getPairsByChainAndAddresses(params);
```

### Get pairs by token address

```typescript
const params = {
  chainId: "solana",
  tokenAddresses: [],
};

const data = await client.getPairsByTokenAddress(params);
// or
const data = await getPairsByTokenAddress(params);
```

### Get pools by token address

```typescript
const params = {
  chainId: "solana",
  tokenAddress: "",
};

const data = await client.getPoolsByTokenAddress(params);
// or
const data = await getPoolsByTokenAddress(params);
```

### Get token paid orders

```typescript
const params = {
  chainId: "solana",
  tokenAddress: "",
};
const data = await client.getTokenPaidOrders(params);
// or
const data = await getTokenPaidOrders(params);
```

### Search pairs by query

```typescript
const params = {
  query: "",
};
const data = await client.searchPairsByQuery(params);
// or
const data = await searchPairsByQuery(params);
```
