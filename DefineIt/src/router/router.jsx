import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import WordOfTheDay from "../pages/WordOfTheDay";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "word-of-the-day", element: <WordOfTheDay /> },
        ],
    },
]);

export default router;