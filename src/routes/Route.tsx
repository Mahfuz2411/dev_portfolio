import App from "@/App";
import { createHashRouter } from "react-router-dom";
import Home from "@/pages/Home";


const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            }
        ]
    }
]);


export default router;