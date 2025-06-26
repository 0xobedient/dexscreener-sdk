import axios, { AxiosInstance } from "axios";
import {
  API_ROUTER,
  BASE_ENDPOINT,
  GetPairsByTokenAddressType,
  GetTokenPaidOrdersParams,
  joinValuesWithSlash,
} from "../shared";

type Params = GetTokenPaidOrdersParams & {};

export async function getTokenPaidOrders({
  chainId,
  tokenAddress,
}: Params): Promise<GetPairsByTokenAddressType> {
  const client: AxiosInstance = axios.create({
    baseURL: BASE_ENDPOINT,
  });

  const params = joinValuesWithSlash({
    chainId,
    tokenAddress,
  });

  try {
    const response = await client.get(
      API_ROUTER.GET_TOKEN_PAID_ORDERS + params
    );

    return response.data as GetPairsByTokenAddressType;
  } catch (error) {
    throw error;
  }
}
