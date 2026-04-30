import { configureStore } from "@reduxjs/toolkit";
import { newsReducer } from "@/entities/news";
import { newsApi } from "@/entities/news";

export const store = configureStore({
    reducer: {
        news: newsReducer,
        [newsApi.reducerPath]: newsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(newsApi.middleware);
    }
});

declare global {
    type RootState = ReturnType<typeof store.getState>;
    type AppDispatch = typeof store.dispatch;
}
