import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home/Home";
import Products from "../page/Products/Products";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Details from "../page/ProductDetails/Details";
import PrivateRoute from "./PrivateRoutes";
import Cart from "../page/Home/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            {" "}
            <Details />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
