import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddCoffee from "../pages/AddUpdateCoffee/AddCoffee";
import UpdateCoffee from "../pages/AddUpdateCoffee/UpdateCoffee";
import CoffeeDetails from "../pages/CoffeeDetails/CoffeeDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/add-coffee",
                element: <AddCoffee />,
            },
            {
                path: "/update-coffee/:id",
                element: <UpdateCoffee />,
            },
            {
                path: "/coffee-details/:id",
                element: <CoffeeDetails />,
            },
        ],
    },
]);

export default router;
