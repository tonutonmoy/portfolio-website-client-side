import { Link, useLocation } from "react-router-dom";

import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaFileSignature,
  FaBook,
} from "react-icons/fa";
import LoginAndLogout from "../LoginAndLogout/LoginAndLogout";

const SidebarAllLinks = () => {
  const location = useLocation();

  return (
    <div>
      <ul className="menu p-4 w-52 md:w-80 lg:w-80 xl:w-80 2xl:w-80 min-h-full h-screen  ">
        <aside className="py-4 w-full md:block">
          <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-gray-100 top-12 rounded-md">
            <Link
              to="/"
              className="pl-3 mb-4 text-2xl text-white  font-semibold flex items-center"
            >
              <FaHome className="mr-2 " /> Home
            </Link>

            <>
              <Link
                to="/dashboard/createSkills"
                className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                  location?.pathname === "/dashboard/createSkills" &&
                  " bg-blue-500/50 border rounded-full"
                }`}
              >
                <FaBook className="mr-2 text-lg" /> Create Skills
              </Link>
              <Link
                to="/dashboard/createProject"
                className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                  location?.pathname === "/dashboard/createProject" &&
                  " bg-blue-500/50 border rounded-full"
                }`}
              >
                <FaBook className="mr-2 text-lg" /> Create Project
              </Link>

              <Link
                to="/dashboard/createBlog"
                className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                  location?.pathname === "/dashboard/createBlog" &&
                  " bg-blue-500/50 border rounded-full"
                }`}
              >
                <FaBook className="mr-2 text-lg" /> Create Blog
              </Link>
            </>

            <>
              <Link
                to="/dashboard/myProjects"
                className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                  location?.pathname === "/dashboard/myProjects" &&
                  " bg-blue-500/50 border rounded-full"
                }`}
              >
                <FaFileAlt className="mr-2 text-lg" /> My Projects
              </Link>

              <Link
                to="/dashboard/RequestedBlogs"
                className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                  location?.pathname === "/dashboard/RequestedBlogs" &&
                  "t bg-green-500 border rounded-full"
                }`}
              >
                <FaFileSignature className="mr-2 text-lg" /> Requested Blogs
              </Link>

              <Link
                to="/dashboard/profile"
                className={`flex items-center px-3 text-white py-2.5 font-semibold ${
                  location?.pathname === "/dashboard/profile" &&
                  " bg-green-500 border rounded-full"
                }`}
              >
                <FaUser className="mr-2 text-lg" /> Profile
              </Link>
            </>
          </div>
          <div className="flex items-center px-10 pt-40 font-semibold">
            <LoginAndLogout />
          </div>
        </aside>
      </ul>
    </div>
  );
};

export default SidebarAllLinks;
