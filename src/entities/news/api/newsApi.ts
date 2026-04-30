import { CategoriesApiResponse, NewsApiResponse, ParamsType } from "@/shared/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getNews: builder.query<NewsApiResponse, ParamsType>({
            query: (params) => ({
                url: 'search',
                params: {
                    apiKey: API_KEY,
                    page_number: params.pageNumber ?? 1,
                    page_size: params.pageSize ?? 10,
                    category: params.category ?? undefined,
                    keywords: params.keywords,
                }
            })
        }),
        getLatestNews: builder.query<NewsApiResponse, null>({
            query: () => ({
                url: 'latest-news',
                params: {
                    apiKey: API_KEY,
                }
            }),
        }),
        getCategories: builder.query<CategoriesApiResponse, null>({
            query: () => ({
                url: '/available/categories',
                params: {
                    apiKey: API_KEY,
                }
            }),
        }),
    }),
});

export const { useGetNewsQuery, useGetLatestNewsQuery, useGetCategoriesQuery } = newsApi;
