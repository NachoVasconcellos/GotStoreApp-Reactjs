import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root";
import ItemDetailContainer from "../components/containers/ItemDetailContainer";
import ItemListContainer from "../components/containers/ItemListContainer";
import NavBar from "../components/NavBar";

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
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;

// const Router = () => {
//     return (
//       <BrowserRouter>
//           <NavBar/>
//           <Routes>
//               <Route path="/" element={<ItemListContainer/>}/>
//               <Route path="/category/categoryId" element={<ItemListContainer/>}/>
//               <Route path="/detail/id" element={<ItemDetailContainer/>}/>
//               <Route path="*" element={<h2>Ruta no encontrada</h2>}></Route>
//           </Routes>
//       </BrowserRouter>
//     )
//   }
//   export default Router