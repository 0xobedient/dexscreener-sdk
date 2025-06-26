import {
  GetPairsByChainAndAddressParams,
  GetPairsByTokenAddressParams,
  GetPoolsByTokenAddressParams,
  GetTokenPaidOrdersParams,
  SearchPairsByQueryParams,
} from "../shared";
import {
  getLatestBoostedTokens,
  getLatestTokenProfiles,
  getMostBoostedTokens,
  getPairsByChainAndAddresses,
  getPairsByTokenAddress,
  getPoolsByTokenAddress,
  getTokenPaidOrders,
  searchPairsByQuery,
} from "../hooks";
import { IDexScreener } from "./IDexScreener";

export class DexScreener implements IDexScreener {
  constructor() {}

  async getLatestBoostedTokens() {
    return await getLatestBoostedTokens();
  }

  async getLatestTokenProfiles() {
    return await getLatestTokenProfiles();
  }

  async getMostBoostedTokens() {
    return await getMostBoostedTokens();
  }

  async getPairsByChainAndAddresses({
    chainId,
    pairAddresses,
  }: GetPairsByChainAndAddressParams) {
    return await getPairsByChainAndAddresses({ chainId, pairAddresses });
  }

  async getPairsByTokenAddress({
    chainId,
    tokenAddresses,
  }: GetPairsByTokenAddressParams) {
    return await getPairsByTokenAddress({ chainId, tokenAddresses });
  }

  async getPoolsByTokenAddress({
    chainId,
    tokenAddress,
  }: GetPoolsByTokenAddressParams) {
    return await getPoolsByTokenAddress({ chainId, tokenAddress });
  }

  async getTokenPaidOrders({
    chainId,
    tokenAddress,
  }: GetTokenPaidOrdersParams) {
    return await getTokenPaidOrders({ chainId, tokenAddress });
  }

  async searchPairsByQuery({ query }: SearchPairsByQueryParams) {
    return await searchPairsByQuery({ query });
  }
}
