import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { Skills } from "./pages/Skills";
import { Project } from "./pages/Project";
import { Contact } from "./pages/Contact";
export const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            errorElement : <ErrorPage />,
            children:[
                {
                    path:"/",
                    element:<Home />,
                },
                {
                    path:"/skills",
                    element:<Skills />,
                },
                {
                    path:"/project",
                    element:<Project />,
                },
                {
                    path:"/contact",
                    element:<Contact />,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />
};