import Home from "../Home/Home";
import ErrorPage from "../Shared/ErrorPage";

const { createBrowserRouter } = require("react-router-dom");

const router =createBrowserRouter([
{
  path: '/',
  element: <Home></Home>,
  children: [
    {
      path:'*',
      element: <ErrorPage></ErrorPage>
    }
  ]
}

])

export default router;