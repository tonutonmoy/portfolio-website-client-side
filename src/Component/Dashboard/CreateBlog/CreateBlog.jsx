import { useState } from "react";

import { toast } from "sonner";
import { cloudINary } from "../../../Utils/cloudINary";
import { useCreateBlogMutation } from "../../../Redux/features/blog/blogApi";

const CreateBlog = () => {
  const toggle = true;

  const [loading, serLoading] = useState(false);

  const [photos, setPhotos] = useState([]);

  const [createFunction] = useCreateBlogMutation();

  const handler = async (e) => {
    e.preventDefault();

    serLoading(true);
    if (photos.length < 1) {
      serLoading(false);
      return toast.error("Image is missing");
    }

    if (photos.length === 0) {
      serLoading(false);
      return toast.error("Image is missing");
    }

    const title = e?.target?.title?.value;
    const detail = e?.target?.detail?.value;

    const image = await cloudINary(photos[0]);

    if (image === null) {
      console.log("null");
      serLoading(false);
      return toast.error("image not uploaded");
    }
    const info = {
      image,
      title,
      detail,
    };

    console.log(info, "info");
    const res = await createFunction(info);

    console.log(res?.error?.data?.message, res);

    if (res?.data?.success === true) {
      toast.success(res.data.message);

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
  };
  return (
    <div className=" w-full pb-60   ">
      <h2 className=" text-[30px] font-semibold text-gray-50 text-center my-10 ">
        Create blog
      </h2>

      <form
        onSubmit={handler}
        className={`w-[90%] md:w-[90%] lg:w-[95%] xl:w-[70%] 2xl:w-[50%]  mx-auto  mt-10  text-gray-50 bg-gradient-to-r from-blue-500/20 to-blue-400/20  shadow-lg  ${
          toggle && " border-[1px] "
        }  px-4 md:px-2  lg:px-4  xl:px-0  2xl:px-0   py-10  rounded-lg `}
      >
        <section className=" grid md:grid-cols-2 md:gap-3  lg:gap-10 xl:gap-0 2xl:gap-0 ">
          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Title</p>
            <input
              type="text"
              placeholder="title"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-700 "
              name="title"
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500]   ">
              {" "}
              Image {photos?.length}
            </p>

            <input
              onChange={(e) => setPhotos(Array.from(e.target.files))}
              type="file"
              className="file-input w-full max-w-xs my-3 "
            />
          </div>
        </section>

        <section>
          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] ">Detail</p>
            <textarea
              className="input input-bordered input-md w-[90%]  my-3 text-gray-700  h-[200px]"
              placeholder="Enter your content"
              name="detail"
              required
            />
          </div>
        </section>

        <section className=" text-center mt-10">
          {loading ? (
            <button className="w-full md:w-[30%] mx-auto  flex justify-center bg-gradient-to-r from-blue-500 to-blue-400 hover:shadow-lg text-gray-100  rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500 py-2 px-5">
              <span className="loading loading-dots loading-md"></span>
            </button>
          ) : (
            <button className="w-full md:w-[30%] mx-auto  flex justify-center bg-gradient-to-r from-blue-500 to-blue-400 hover:shadow-lg text-gray-100  rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500 py-2 px-5">
              Submit
            </button>
          )}
        </section>
      </form>
    </div>
  );
};

export default CreateBlog;
