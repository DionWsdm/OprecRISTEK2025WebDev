import { createBrowserRouter } from "react-router";
import App from "../App";
import TryOutsList from "../pages/TryOutsList";
import TryOutDetail from "../pages/TryOutDetail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/", element: <TryOutsList />},
            {path: "/tryOuts/:tryOutId", element: <TryOutDetail />},
        ]
    }
]);