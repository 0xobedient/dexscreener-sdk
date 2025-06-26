export type GetPairsByChainAndAddressParams = {
  chainId: string;
  pairAddresses: string[];
};

export type GetPairsByTokenAddressParams = {
  chainId: string;
  tokenAddresses: string[];
};

export type GetPoolsByTokenAddressParams = {
  chainId: string;
  tokenAddress: string;
};

export type GetTokenPaidOrdersParams = {
  chainId: string;
  tokenAddress: string;
};

export type SearchPairsByQueryParams = {
  query: string;
};
