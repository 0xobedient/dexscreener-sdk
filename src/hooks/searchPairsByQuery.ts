import axios, { AxiosInstance } from "axios";
import {
  API_ROUTER,
  BASE_ENDPOINT,
  SearchPairsByQueryType,
  SearchPairsByQueryParams,
  toQueryString,
} from "../shared";

type Params = SearchPairsByQueryParams & {};

export async function searchPairsByQuery({
  query,
}: Params): Promise<SearchPairsByQueryType> {
  const client: AxiosInstance = axios.create({
    baseURL: BASE_ENDPOINT,
  });

  const q = toQueryString({ q: query });

  try {
    const response = await client.get(API_ROUTER.SEARCH_PAIRS_BY_QUERY + q);

    return response.data as SearchPairsByQueryType;
  } catch (error) {
    throw error;
  }
}
