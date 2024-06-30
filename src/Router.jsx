import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Component/Home/Home";
import Projects from "./Component/Projects/Projects";
import About from "./Component/About/About";
import Resume from "./Component/Resume/Resume";
import Contact from "./Component/Contact/Contact";
import Skills from "./Component/Skills/Skills";
import Login from "./Component/Login/Login";
import Dashboard from "./Component/Dashboard/Dashboard";
import CreateSkills from "./Component/Dashboard/CreateSkills/CreateSkills";
import DashboardLayout from "./Component/Dashboard/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import CreateProject from "./Component/Dashboard/CreateProject/CreateProject";
import ProjectDetails from "./Component/Projects/ProjectDetails/ProjectDetails";
import MyProjects from "./Component/Dashboard/MyProjects/MyProjects";
import EditProject from "./Component/Dashboard/EditProject/EditProject";
import CreateBlog from "./Component/Dashboard/CreateBlog/CreateBlog";
import EditBlog from "./Component/Dashboard/EditBlog/EditBlog";
import Blog from "./Component/Blog/Blog";
import BlogDetail from "./Component/Blog/BlogDetail/BlogDetail";
import MyBlog from "./Component/Dashboard/MyBlog/Myblog";
import MySkills from "./Component/Dashboard/MySkills/MySkills";
import EditSkills from "./Component/Dashboard/EditSkills/EditSkills";
import CreateExperience from "./Component/Dashboard/CreateExperience/CreateExperience";
import MyExperience from "./Component/Dashboard/MyExperience/MyExperience";
import EditExperience from "./Component/Dashboard/EditExperience/EditExperience";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projectDetails/:id",
        element: <ProjectDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "createSkills",
        element: (
          <PrivateRoute>
            <CreateSkills />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "mySkills",
        element: (
          <PrivateRoute>
            <MySkills />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "editSkill/:id",
        element: (
          <PrivateRoute>
            <EditSkills />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "createProject",
        element: (
          <PrivateRoute>
            <CreateProject />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "myProjects",
        element: (
          <PrivateRoute>
            <MyProjects />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "editProject/:id",
        element: (
          <PrivateRoute>
            <EditProject />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "createBlog",
        element: (
          <PrivateRoute>
            <CreateBlog />{" "}
          </PrivateRoute>
        ),
      },

      {
        path: "myBlogs",
        element: (
          <PrivateRoute>
            <MyBlog />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "editBlog/:id",
        element: (
          <PrivateRoute>
            <EditBlog />{" "}
          </PrivateRoute>
        ),
      },

      {
        path: "createExperience",
        element: (
          <PrivateRoute>
            <CreateExperience />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "myExperience",
        element: (
          <PrivateRoute>
            <MyExperience />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "editExperience/:id",
        element: (
          <PrivateRoute>
            <EditExperience />{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
