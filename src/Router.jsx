import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Component/Home/Home";
import Projects from "./Component/Projects/Projects";
import About from "./Component/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/projects',
        element:<Projects></Projects>
      },
      {
        path:'/about',
        element:<About></About>
      }
    ]

    },
  ]);


  export default router;