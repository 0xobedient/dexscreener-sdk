export const BASE_ENDPOINT: string = "https://api.dexscreener.com";

export const API_ROUTER: Record<string, string> = {
  GET_LATEST_TOKEN_PROFILES: "/token-profiles/latest/v1",
  GET_LATEST_BOOSTED_TOKENS: "/token-boosts/latest/v1",
  GET_MOST_BOOSTED_TOKENS: "/token-boosts/top/v1",
  GET_TOKEN_PAID_ORDERS: "/orders/v1",
  GET_PAIRS_BY_CHAIN_AND_ADDRESS: "/latest/dex/pairs",
  SEARCH_PAIRS_BY_QUERY: "/latest/dex/search",
  GET_POOLS_BY_TOKEN_ADDRESS: "/token-pairs/v1",
  GET_PAIRS_BY_TOKEN_ADDRESS: "/tokens/v1",
};
