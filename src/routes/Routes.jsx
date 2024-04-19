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
                loader: () => fetch("http://localhost:5000/coffees"),
            },
            {
                path: "/add-coffee",
                element: <AddCoffee />,
            },
            {
                path: "/update-coffee/:id",
                element: <UpdateCoffee />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/coffees/${params.id}`),
            },
            {
                path: "/coffee-details/:id",
                element: <CoffeeDetails />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/coffees/${params.id}`),
            },
        ],
    },
]);

export default router;
