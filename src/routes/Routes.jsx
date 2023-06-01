/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { Navigate, createBrowserRouter } from "react-router-dom";
// import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "./../pages/Register/Register";
// import PrivateRoute from "./PrivateRoute";
import ChefsLayout from "./../layouts/Chefslayout/ChefsLayout"
import ChefsDetails from "../pages/ChefsDetails/ChefsDetails";
import Chefs from './../pages/Chefs/Chefs';
import LoginLayout from "../layouts/Loginlayout/LoginLayout";
import Home from "../pages/Home/Home";
import PrivateRoute from './PrivateRoutes';
import Blog from "../Blog/Blog";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement:<Error />,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path:'/blog',
        element:<Blog />
      }
    ],
  },

  {
    path: "chefs",
    element: <ChefsLayout></ChefsLayout>,
    children: [
      {
        path: "/chefs",
        element: <Chefs></Chefs>,
      },
      {
        path: ":id",
        element:<PrivateRoute><ChefsDetails></ChefsDetails></PrivateRoute>,
        loader:({ params })=>fetch(`https://chef-server-tau-six.vercel.app/allData/${params.id}`)
        
      },
    ],
  },
]);

export default router;
