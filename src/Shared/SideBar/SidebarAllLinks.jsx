import { Link, useLocation } from "react-router-dom";

import { FaHome, FaFileAlt, FaFileSignature } from "react-icons/fa";
import LoginAndLogout from "../LoginAndLogout/LoginAndLogout";

const SidebarAllLinks = () => {
  const location = useLocation();

  return (
    <div>
      <ul className="menu md:p-4 w-52 md:w-80 lg:w-80 xl:w-80 2xl:w-80 min-h-full h-screen  bg-blue-400  lg:bg-blue-500/5  border-r">
        <aside className="py-4 w-full md:block ">
          <div className="sticky flex flex-col gap-2 md:p-4 text-sm  top-12 rounded-md">
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
                <FaFileSignature className="mr-2 text-lg" /> Create Skills
              </Link>
              <Link
                to="/dashboard/mySkills"
                className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                  location?.pathname === "/dashboard/mySkills" &&
                  " bg-blue-500/50 border rounded-full"
                }`}
              >
                <FaFileAlt className="mr-2 text-lg" /> My Skills
              </Link>
              <Link
                to="/dashboard/createProject"
                className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                  location?.pathname === "/dashboard/createProject" &&
                  " bg-blue-500/50 border rounded-full"
                }`}
              >
                <FaFileSignature className="mr-2 text-lg" /> Create Project
              </Link>
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
                to="/dashboard/createBlog"
                className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                  location?.pathname === "/dashboard/createBlog" &&
                  " bg-blue-500/50 border rounded-full"
                }`}
              >
                <FaFileSignature className="mr-2 text-lg" />
                Create Blog
              </Link>
              <Link
                to="/dashboard/myBlogs"
                className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                  location?.pathname === "/dashboard/myBlogs" &&
                  " bg-blue-500/50 border rounded-full"
                }`}
              >
                <FaFileAlt className="mr-2 text-lg" /> My Blogs
              </Link>

              <Link
                to="/dashboard/createExperience"
                className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                  location?.pathname === "/dashboard/createExperience" &&
                  " bg-blue-500/50 border rounded-full"
                }`}
              >
                <FaFileSignature className="mr-2 text-lg" /> Create Experience
              </Link>
              <Link
                to="/dashboard/myExperience"
                className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                  location?.pathname === "/dashboard/myExperience" &&
                  " bg-blue-500/50 border rounded-full"
                }`}
              >
                <FaFileAlt className="mr-2 text-lg" /> My Experience
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
