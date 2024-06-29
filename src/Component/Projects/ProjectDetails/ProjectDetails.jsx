/* eslint-disable no-unsafe-optional-chaining */
import { Link, useParams } from "react-router-dom";
import { useGetSingleProjectsQuery } from "../../../Redux/features/project/projectApi";
import Loading from "../../../Shared/Loading/Loading";

const ProjectDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProjectsQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full min-h-screen  pt-40 pb-20 ">
      <div className="w-[90%] md:w-[90%]  lg:w-[80%]  xl:w-[70%]  2xl:w-[60%]  mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img
          className="w-full  h-80 object-cover"
          src={data?.data?.project?.image}
        />
        <div className="p-6 mt-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            {data?.data?.project?.name}
          </h2>
          <div className="mt-10">
            <h3 className="text-xl font-medium text-gray-800">Description:</h3>
            <p>{data?.data?.project?.details}</p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-medium text-gray-800">
              Technologies Used:
            </h3>
            <div className="mt-2 flex flex-wrap">
              {data?.data?.project?.technology?.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-medium text-gray-800">Links:</h3>
            <div className="mt-2 space-y-1">
              <p>
                <strong>Client github link: </strong>
                <Link
                  to={data?.data?.project?.client}
                  className="text-blue-500 hover:underline"
                >
                  {data?.data?.project?.client}
                </Link>
              </p>
              <p>
                <strong>Server github link: </strong>
                <Link
                  to={data?.data?.project?.server}
                  className="text-blue-500 hover:underline"
                >
                  {data?.data?.project?.server}
                </Link>
              </p>
              <p>
                <strong>Live link: </strong>
                <Link
                  to={data?.data?.project?.live}
                  className="text-blue-500 hover:underline"
                >
                  {data?.data?.project?.live}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
