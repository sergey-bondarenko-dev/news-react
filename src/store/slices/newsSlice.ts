import { PAGE_SIZE } from "@/constants";
import { IFilters, INews } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface State {
    news: INews[];
    filters: IFilters;
}

const initialState: State = {
    news: [],
    filters: {
        pageNumber: 1,
        pageSize: PAGE_SIZE,
        category: null,
        keywords: '',
    }
}

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        setNews: (state, action: PayloadAction<INews[]>) => {
            state.news = action.payload;
        },
        setFilters: (state, action: PayloadAction<{key: string, value: string | number | null}>) => {
            state.filters = {...state.filters, [action.payload.key]: action.payload.value};
        },
    },
});

export const { setNews, setFilters } = newsSlice.actions;
export default newsSlice.reducer;