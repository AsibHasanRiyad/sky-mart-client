import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home/Home";
import Products from "../page/Products/Products";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/products',
                element:<Products />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element:<Register />
            },
        ]
    }
])

export default router;