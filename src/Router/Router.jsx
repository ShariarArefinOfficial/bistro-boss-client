import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../CommonComponent/Secret/Secret";
import PrivateRoute from "./PrivateRoute"

const router=createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path: 'menu', 
                element: <Menu></Menu>
              },
              {
                path: 'order',
                element: <Order></Order>
              },
              {
                path: 'login',
                element: <Login></Login>
              },
              {
                path: 'signup',
                element: <SignUp></SignUp>
              },
              {
                path: 'secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
              }


        ]
    }
])

export default router;