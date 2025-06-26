import { LinkType, SocialType, OrderType, PairType } from ".";

export type GetLatestBoostedTokenType = {
  uri: string;
  chainId: string;
  tokenAddress: string;
  icon: string;
  header: string;
  openGraph: string;
  description: string;
  links: (LinkType | SocialType)[];
  totalAmount: number;
  amount: number;
};

export type GetLatestTokenProfileType = {
  uri: string;
  chainId: string;
  tokenAddress: string;
  icon: string;
  header: string;
  openGraph: string;
  description: string;
  links: (LinkType | SocialType)[];
};

export type GetMostBoostedTokenType = {
  uri: string;
  chainId: string;
  tokenAddress: string;
  icon: string;
  header: string;
  openGraph: string;
  description: string;
  links: (LinkType | SocialType)[];
  totalAmount: number;
};

export type GetPairsByChainAndAddressType = {
  schemaVersion: string;
  pairs: PairType[];
  pair: PairType;
};

export type GetPoolsByTokenAddressType = PairType[];

export type GetPairsByTokenAddressType = PairType[];

export type GetTokenPaidOrdersType = OrderType[];

export type SearchPairsByQueryType = {
  schemaVersion: string;
  pairs: PairType[];
};
