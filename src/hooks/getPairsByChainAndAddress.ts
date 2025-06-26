import axios, { AxiosInstance } from "axios";
import {
  API_ROUTER,
  BASE_ENDPOINT,
  GetPairsByChainAndAddressType,
  GetPairsByChainAndAddressParams,
  joinValuesWithSlash,
} from "../shared";

type Params = GetPairsByChainAndAddressParams & {};

export async function getPairsByChainAndAddresses({
  chainId,
  pairAddresses,
}: Params): Promise<GetPairsByChainAndAddressType> {
  const client: AxiosInstance = axios.create({
    baseURL: BASE_ENDPOINT,
  });

  const params = joinValuesWithSlash({
    chainId,
    pairAddresses: pairAddresses.join(","),
  });

  try {
    const response = await client.get(
      API_ROUTER.GET_PAIRS_BY_CHAIN_AND_ADDRESS + params
    );

    return response.data as GetPairsByChainAndAddressType;
  } catch (error) {
    throw error;
  }
}
