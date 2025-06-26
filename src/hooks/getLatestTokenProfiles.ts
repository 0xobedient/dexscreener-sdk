import axios, { AxiosInstance } from "axios";
import {
  API_ROUTER,
  BASE_ENDPOINT,
  GetLatestTokenProfileType,
} from "../shared";

export async function getLatestTokenProfiles(): Promise<
  GetLatestTokenProfileType[]
> {
  const client: AxiosInstance = axios.create({
    baseURL: BASE_ENDPOINT,
  });
  try {
    const response = await client.get(API_ROUTER.GET_LATEST_TOKEN_PROFILES);

    return response.data as GetLatestTokenProfileType[];
  } catch (error) {
    throw error;
  }
}
