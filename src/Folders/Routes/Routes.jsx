
import { createBrowserRouter } from "react-router-dom";
import FrontPage from "../FrontPage/FrontPage";
import Home from "../Home/Home";
import ErrorPage from "../Shared/ErrorPage";
import Blog from "../Blog/Blog";


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
      path:'*',
      element: <ErrorPage></ErrorPage>
    }
  ]
}

])

export default router;