import { CategoriesApiResponse, NewsApiResponse, ParamsType } from "@/interfaces";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = {
    getAll: async (params?: ParamsType): Promise<NewsApiResponse> => {
        const {
            pageNumber = 1,
            pageSize = 10,
            category,
            keywords,
        } = params || {};

        try {
            const response = await axios.get<NewsApiResponse>(`${BASE_URL}/search`, {
                params: {
                    apiKey: API_KEY,
                    page_number: pageNumber,
                    page_size: pageSize,
                    category,
                    keywords,
                },
            });

            return response.data;
        } catch (error) {
            console.log(error);
            return { news: [], page: 1, status: "error" };
        }
    },
    getLatestNews: async (): Promise<NewsApiResponse> => {
        try {
            const response = await axios.get<NewsApiResponse>(`${BASE_URL}/latest-news`, {
                params: {
                    apiKey: API_KEY,
                }
            });

            return response.data;
        } catch (error) {
            console.log(error);
            return { news: [], page: 1, status: "error" };
        }
    },
    getCategories: async (): Promise<CategoriesApiResponse> => {
        try {
            const response = await axios.get<CategoriesApiResponse>(`${BASE_URL}/available/categories`, {
                params: {
                    apiKey: API_KEY,
                }
            });

            return response.data;
        } catch (error) {
            console.log(error);
            return { categories: [], description: '', status: 'error' };
        }
    }
}
