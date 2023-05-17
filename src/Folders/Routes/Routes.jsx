
import { createBrowserRouter } from "react-router-dom";
import FrontPage from "../FrontPage/FrontPage";
import Home from "../Home/Home";
import ErrorPage from "../Shared/ErrorPage";
import Blog from "../Blog/Blog";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";


const router =createBrowserRouter([
{
  path: '/',
  element: <Home></Home>,
  children: [
    {
      path: '/',
      element: <FrontPage></FrontPage>
    }
    ,
    {
      path: 'blogs',
      element:<Blog></Blog>
    },
    {
    path: 'login',
    element: <Login></Login>
    },
    {
     path: 'signup',
     element: <Signup></Signup>
    },
    {
      path:'*',
      element: <ErrorPage></ErrorPage>
    }
  ]
}

])

export default router;