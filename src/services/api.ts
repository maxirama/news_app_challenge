import axios, { AxiosResponse } from "axios";
import { INewsApiResponse } from "../types";

const newsApi = axios.create({
  baseURL: process.env.REACT_APP_NEWS_API, 
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": process.env.REACT_APP_NEWS_API_KEY,
  },
});

export const fetchNews = async () : Promise<INewsApiResponse> => {
try {
    const result: AxiosResponse<INewsApiResponse,any> = (await newsApi.get('?q=bitcoin'));
    return result.data;
} catch (error){
    console.error("Error fetching News", error)
    throw error;
}
};

export default newsApi;
