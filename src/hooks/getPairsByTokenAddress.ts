import axios, { AxiosInstance } from "axios";
import {
  API_ROUTER,
  BASE_ENDPOINT,
  GetPairsByTokenAddressType,
  GetPairsByTokenAddressParams,
  joinValuesWithSlash,
} from "../shared";

type Params = GetPairsByTokenAddressParams & {};

export async function getPairsByTokenAddress({
  chainId,
  tokenAddresses,
}: Params): Promise<GetPairsByTokenAddressType> {
  const client: AxiosInstance = axios.create({
    baseURL: BASE_ENDPOINT,
  });

  const params = joinValuesWithSlash({
    chainId,
    tokenAddresses: tokenAddresses.join(","),
  });

  try {
    const response = await client.get(
      API_ROUTER.GET_PAIRS_BY_TOKEN_ADDRESS + params
    );

    return response.data as GetPairsByTokenAddressType;
  } catch (error) {
    throw error;
  }
}
