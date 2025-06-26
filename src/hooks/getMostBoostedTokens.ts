import axios, { AxiosInstance } from "axios";
import { API_ROUTER, BASE_ENDPOINT, GetMostBoostedTokenType } from "../shared";

export async function getMostBoostedTokens(): Promise<
  GetMostBoostedTokenType[]
> {
  const client: AxiosInstance = axios.create({
    baseURL: BASE_ENDPOINT,
  });

  try {
    const response = await client.get(API_ROUTER.GET_MOST_BOOSTED_TOKENS);

    return response.data as GetMostBoostedTokenType[];
  } catch (error) {
    throw error;
  }
}
