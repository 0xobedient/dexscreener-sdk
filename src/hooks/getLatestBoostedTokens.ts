import axios, { AxiosInstance } from "axios";
import { API_ROUTER, BASE_ENDPOINT } from "../shared";
import { GetLatestBoostedTokenType } from "../shared";

export async function getLatestBoostedTokens(): Promise<
  GetLatestBoostedTokenType[]
> {
  const client: AxiosInstance = axios.create({
    baseURL: BASE_ENDPOINT,
  });

  try {
    const response = await client.get(API_ROUTER.GET_LATEST_BOOSTED_TOKENS);

    return response.data as GetLatestBoostedTokenType[];
  } catch (error) {
    throw error;
  }
}
