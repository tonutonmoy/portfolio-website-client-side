import { toast } from "sonner";
import {
  useDeleteExperienceMutation,
  useGetExperienceQuery,
} from "../../../Redux/features/experience/experienceApi";
import Loading from "../../../Shared/Loading/Loading";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";

const MyExperience = () => {
  const { data, isLoading, refetch } = useGetExperienceQuery("");

  const [deleteFunction] = useDeleteExperienceMutation();

  console.log(data);

  if (isLoading) {
    return <Loading />;
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
    <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-20 md:gap-10 w-[90%] mx-auto">
      {data?.data?.experience?.map((a) => (
        <div
          key={a?._id}
          style={{ boxShadow: "5px 5px 10px black" }}
          className="max-w-sm rounded overflow-hidden    p-6  my-20 btn-outline  hover:scale-110 duration-[1s] "
        >
          <h2 className="font-bold text-xl mb-2 text-gray-200">
            {a?.companyName}
          </h2>
          <div className=" space-y-1 mt-3 ">
            <p className="text-gray-300 text-base">
              <span className="font-semibold">Job Type:</span> {a?.jobType}
            </p>
            <p className="text-gray-300 text-base">
              <span className="font-semibold">Duration:</span> {a?.duration}
            </p>
            <p className="text-gray-300 text-base">
              <span className="font-semibold">Experience Details:</span>{" "}
              {a?.experienceDetails?.slice(0, 232)}
            </p>
          </div>

          <section className="flex gap-3 justify-between items-center text-center mt-10">
            <Link
              className=" p-1 text-white  bg-blue-500 rounded-full w-full h-[35px]"
              to={`/dashboard/editExperience/${a?._id}`}
            >
              <FiEdit className=" text-xl inline pb-1" />
            </Link>
            <button
              onClick={() => deleteHandler(a?._id)}
              className="text-white bg-red-500 rounded-full w-full h-[35px] p-1  "
            >
              <MdDeleteForever className=" text-2xl inline pb-1 " />
            </button>
          </section>
        </div>
      ))}
    </div>
  );
};

export default MyExperience;
