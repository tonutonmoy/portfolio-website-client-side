/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import {
  useDeleteProjectMutation,
  useGetProjectsQuery,
} from "../../../Redux/features/project/projectApi";
import Loading from "../../../Shared/Loading/Loading";
import { toast } from "sonner";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const ProjectCard = ({ cardProps }) => {
  const { data, isLoading, refetch } = useGetProjectsQuery("");
  const location = useLocation();
  const [deleteFunction] = useDeleteProjectMutation();

  if (isLoading) {
    return <Loading />;
  }

  let projectData = data?.data?.projects;

  if (location.pathname === "/") {
    projectData = data?.data?.projects?.slice(0, 6);
  }

  const deleteHandler = async (id) => {
    const res = await deleteFunction(id);

    if (res?.data?.success === true) {
      toast.success(res.data.message);
      refetch();
    }
    if (res?.data?.success === false) {
      toast.success(res.data.message);
    }
    console.log(res);

    if (res?.error?.data?.message === "Unauthorized Access") {
      toast.error(res?.error?.data?.message);
    }
  };
  return (
    <div
      className={`${
        cardProps === "myProjects"
          ? "w-[90%] mx-auto my-20 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3  gap-20 md:gap-10 2xl:gap-20"
          : "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4  gap-20 md:gap-10"
      } `}
    >
      {projectData?.map((a) => (
        <section
          key={a?._id}
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="card  shadow-lg shadow-blue-500 w-full btn-outline hover:scale-110 duration-[1s] border-l-2 border-blue-500">
            <div>
              <img className="h-[250px] w-full" src={a?.image} alt="" />
            </div>
            <div className="card-body">
              <h2 className="text-[20px] text-white font-[400]  text-center">
                {a?.name}
              </h2>

              <div className=" ">
                {cardProps === "myProjects" ? (
                  <div className="flex gap-3  text-center mt-5">
                    <Link
                      className="p-2 rounded-full border-0 btn-outline text-[15px] font-medium  w-full  hover:scale-105  hover:bg-blue-600     text-white bg-blue-500 "
                      to={`/dashboard/editProject/${a?._id}`}
                    >
                      <FiEdit className=" text-xl inline pb-1" /> Edit
                    </Link>
                    <button
                      onClick={() => deleteHandler(a?._id)}
                      className="p-2 rounded-full   font-medium border-0 btn-outline text-[15px]  w-full  hover:scale-105 hover:bg-red-600    text-white bg-red-500  "
                    >
                      <MdDeleteForever className=" text-2xl inline pb-1" />{" "}
                      Delete
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-3 my-10 text-center">
                    <Link
                      className="p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 "
                      to={a?.client}
                    >
                      Client
                    </Link>

                    <Link
                      className="p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 "
                      to={a?.server}
                    >
                      Server
                    </Link>

                    <Link
                      className="p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 "
                      to={a?.live}
                    >
                      Live
                    </Link>
                  </div>
                )}
                {cardProps !== "myProjects" && (
                  <Link
                    className="p-2 block text-center rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 "
                    to={`/projectDetails/${a?._id}`}
                  >
                    See details
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProjectCard;
