import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Component/Home/Home";
import Projects from "./Component/Projects/Projects";
import About from "./Component/About/About";
import Resume from "./Component/Resume/Resume";
import Contact from "./Component/Contact/Contact";
import Skills from "./Component/Skills/Skills";

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
      },
      {
        path:'/resume',
        element:<Resume></Resume>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/skills',
        element:<Skills></Skills>
      }
    ]

    },
  ]);


  export default router;