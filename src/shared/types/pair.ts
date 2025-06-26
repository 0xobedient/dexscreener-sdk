import {
  LinkType,
  SocialType,
  LiquidityType,
  PriceChangeType,
  TokenType,
  TransactionType,
  VolumeType,
} from ".";

export type PairInfoType = {
  imageUrl: string;
  header: string;
  openGraph: string;
  websites: LinkType[];
  socials: SocialType[];
};

export type PairType = {
  chainId: string;
  dexId: string;
  url: string;
  label: string[];
  pairAddress: string;
  baseToken: TokenType;
  quoteToken: TokenType;
  priceNative: string;
  priceUsd: string;
  txns: TransactionType;
  volume: VolumeType;
  priceChange: PriceChangeType;
  liquidity: LiquidityType;
  fdv: number;
  marketCap: number;
  pairCreatedAt: number;
};
