import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import { MainPage } from "@/pages/main";
import { NewPage } from "@/pages/new";
import { routes } from "@/shared/config";

export const appRouter = createBrowserRouter([
    {
        element: <BaseLayout />,
        errorElement: <div>Error</div>,
        children: [
            { path: routes.main.path, element: <MainPage />},
            { path: routes.newsDetails.path, element: <NewPage />}
        ]
    },
]);