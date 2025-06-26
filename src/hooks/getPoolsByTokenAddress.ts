import axios, { AxiosInstance } from "axios";
import {} from "../shared/types/params";
import {
  API_ROUTER,
  BASE_ENDPOINT,
  GetPoolsByTokenAddressType,
  GetPoolsByTokenAddressParams,
  joinValuesWithSlash,
} from "../shared";

type Params = GetPoolsByTokenAddressParams & {};

export async function getPoolsByTokenAddress({
  chainId,
  tokenAddress,
}: Params): Promise<GetPoolsByTokenAddressType> {
  const client: AxiosInstance = axios.create({
    baseURL: BASE_ENDPOINT,
  });

  const params = joinValuesWithSlash({
    chainId,
    tokenAddress: tokenAddress,
  });

  try {
    const response = await client.get(
      API_ROUTER.GET_POOLS_BY_TOKEN_ADDRESS + params
    );

    return response.data as GetPoolsByTokenAddressType;
  } catch (error) {
    throw error;
  }
}
