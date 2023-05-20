
import { createBrowserRouter } from "react-router-dom";
import FrontPage from "../FrontPage/FrontPage";
import Home from "../Home/Home";
import ErrorPage from "../Shared/ErrorPage";
import Blog from "../Blog/Blog";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import AddaToy from "../AddaToy/AddaToy";
import AllToys from "../AllToys/AllToys";
import MyToys from "../MyToys/MyToys";
import VeiwDetail from "../AllToys/VeiwDetail";
import UpdateToy from "../UpdateToy/UpdateToy";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
    },
    {
      path: 'addatoy',
      element: <AddaToy></AddaToy>
    },{
      path: 'alltoys',
      element: <AllToys></AllToys>,
      loader: () => fetch('https://toy-galaxy-server-five.vercel.app/toycars')
    },{
      path: 'mytoys',
      element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      // loader: () => fetch('https://toy-galaxy-server-five.vercel.app/toycars')
    },{
      path: 'viewdetail/:id',
      element: <PrivateRoute><VeiwDetail></VeiwDetail></PrivateRoute>,
      loader: ({params})=> fetch(`https://toy-galaxy-server-five.vercel.app/toycars/${params.id}`)
    },{
      path: 'updatetoy/:id',
      element: <UpdateToy></UpdateToy>,
      loader: ({params})=> fetch(`https://toy-galaxy-server-five.vercel.app/toycars/${params.id}`)
    }
  ]
}

])

export default router;