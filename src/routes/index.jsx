import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root";
import ItemDetailContainer from "../components/containers/ItemDetailContainer";
import ItemListContainer from "../components/containers/ItemListContainer";
import NavBar from "../components/NavBar";
import CartContainer from "../components/containers/CartContainer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <> <NavBar/> <h1>Not found</h1></>,
        children: [
            {
                path: "/",
                element: <ItemListContainer />,
            },
            {
                path: "/category/:categoryId",
                element: <ItemListContainer />,
            },
            {
                path: "/detail/:id",
                element: <ItemDetailContainer/>,
            },
            {
                path: "/cart",
                element: <CartContainer/>,
            },
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;