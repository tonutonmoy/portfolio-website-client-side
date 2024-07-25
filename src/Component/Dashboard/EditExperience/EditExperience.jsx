import { toast } from "sonner";
import Loading from "../../../Shared/Loading/Loading";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetSingleExperienceQuery,
  useUpdateExperienceMutation,
} from "../../../Redux/features/experience/experienceApi";

const EditExperience = () => {
  const { id } = useParams();

  const { data, isLoading, refetch } = useGetSingleExperienceQuery(id);

  const [loading, serLoading] = useState(false);

  const [updateFunction] = useUpdateExperienceMutation();

  if (isLoading) {
    return <Loading />;
  }
  console.log(data?.data?.blog);
  const handler = async (e) => {
    e.preventDefault();

    serLoading(true);

    const experienceDetails = e?.target?.experienceDetails?.value;

    const companyName = e?.target?.companyName?.value;

    const jobType = e?.target?.jobType?.value;

    const duration = e?.target?.duration?.value;

    const info = {
      experienceDetails,
      companyName,
      jobType,
      duration,
    };

    console.log(info, "info");
    const res = await updateFunction({ id, info });

    console.log(res?.error?.data?.message, res);

    if (res?.data?.success === true) {
      toast.success(res.data.message);
      refetch();

      serLoading(false);
    }
    if (res?.data?.success === false) {
      toast.success(res.data.message);

      serLoading(false);
    }
    console.log(res);

    if (res?.error?.data?.message === "Unauthorized Access") {
      toast.error(res?.error?.data?.message);
      serLoading(false);
    }
    if (res?.error) {
      serLoading(false);
      toast.error("some think wrong try agin");
    }
  };

  return (
    <div className=" w-full pb-60   ">
      <h2 className=" text-[30px] font-semibold text-gray-50 text-center my-10 ">
        Edit Experience
      </h2>

      <form
        onSubmit={handler}
        className="w-[90%] md:w-[90%] lg:w-[95%] xl:w-[70%] 2xl:w-[60%] 3xl:w-[50%] mx-auto mt-10 text-gray-50 bg-gradient-to-r from-blue-500/20 to-blue-400/20 shadow-lg border-[1px] px-4 md:px-2 lg:px-4 xl:px-0 2xl:px-0 py-10 rounded-lg"
      >
        <section className=" grid md:grid-cols-2 md:gap-3  lg:gap-10 xl:gap-0 2xl:gap-0 ">
          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Company name</p>
            <input
              defaultValue={data?.data?.experience?.companyName}
              type="text"
              placeholder="company name"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-700 "
              name="companyName"
              required
            />
          </div>
          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> JobType</p>
            <input
              defaultValue={data?.data?.experience?.jobType}
              type="text"
              placeholder="jobType"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-700 "
              name="jobType"
              required
            />
          </div>
          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Duration</p>
            <input
              defaultValue={data?.data?.experience?.duration}
              type="text"
              placeholder="duration"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-700 "
              name="duration"
              required
            />
          </div>
        </section>
        <section>
          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] ">Experience Details</p>
            <textarea
              defaultValue={data?.data?.experience?.experienceDetails}
              className="input input-bordered input-md w-[90%]  my-3 text-gray-700  h-[200px]"
              placeholder="Enter your content"
              name="experienceDetails"
              required
            />
          </div>
        </section>

        <section className="text-center mt-20">
          {loading ? (
            <button className="w-full md:w-[30%] mx-auto flex justify-center bg-gradient-to-r from-blue-500 to-blue-400 hover:shadow-lg text-gray-100 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500 py-2 px-5">
              <span className="loading loading-dots loading-md"></span>
            </button>
          ) : (
            <button className="w-full md:w-[30%] mx-auto flex justify-center bg-gradient-to-r from-blue-500 to-blue-400 hover:shadow-lg text-gray-100 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500 py-2 px-5">
              Submit
            </button>
          )}
        </section>
      </form>
    </div>
  );
};

export default EditExperience;
