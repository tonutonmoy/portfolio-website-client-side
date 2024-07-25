import { toast } from "sonner";
import { cloudINary } from "../../../Utils/cloudINary";
import Loading from "../../../Shared/Loading/Loading";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
} from "../../../Redux/features/blog/blogApi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the Quill CSS for proper styling

const EditBlog = () => {
  const { id } = useParams();

  const { data, isLoading, refetch } = useGetSingleBlogQuery(id);

  const [loading, serLoading] = useState(false);

  const [photos, setPhotos] = useState([]);
  const [detail, setDetail] = useState("");

  const [updateFunction] = useUpdateBlogMutation();

  useEffect(() => {
    setDetail(data?.data?.blog?.detail);
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }
  console.log(data?.data?.blog);

  const handler = async (e) => {
    e.preventDefault();
    let image;
    serLoading(true);

    if (photos.length > 0) {
      image = await cloudINary(photos[0]);

      if (image === null) {
        console.log("null");
        serLoading(false);
        return toast.error("image not uploaded");
      }
    }

    const title = e?.target?.title?.value;

    const info = {
      title,
      image: image || data?.data?.project?.image,

      detail,
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
    <div className=" w-full pb-60  ">
      <h2 className=" text-[30px] font-semibold text-gray-50 text-center my-10 ">
        Edit Blog
      </h2>

      <form
        onSubmit={handler}
        className="w-[90%] md:w-[90%] lg:w-[95%] xl:w-[70%] 2xl:w-[60%] 3xl:w-[50%] mx-auto mt-10 text-gray-50 bg-gradient-to-r from-blue-500/20 to-blue-400/20 shadow-lg border-[1px] px-4 md:px-2 lg:px-4 xl:px-0 2xl:px-0 py-10 rounded-lg"
      >
        <div className=" flex justify-center">
          <img
            src={data?.data?.blog?.image}
            className=" h-[250px] w-[500px]"
            alt=""
          />
        </div>
        <section className="grid md:grid-cols-2 md:gap-3 lg:gap-10 xl:gap-0 2xl:gap-0">
          <div className="text-center my-5">
            <p className="text-[18px] font-[500]">Title</p>
            <input
              defaultValue={data?.data?.blog?.title}
              type="text"
              placeholder="Title"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-700"
              name="title"
              required
            />
          </div>

          <div className="text-center my-5">
            <p className="text-[18px] font-[500]">Image {photos.length}</p>
            <input
              onChange={(e) => setPhotos(Array.from(e.target.files))}
              type="file"
              className="file-input w-full max-w-xs my-3"
            />
          </div>
        </section>

        <section>
          <div className="text-center my-5">
            <p className="text-[18px] font-[500] mb-3">Detail</p>
            <ReactQuill
              value={detail}
              onChange={setDetail}
              theme="snow"
              placeholder="Enter your content"
              style={{
                height: "250px",
                color: "black",
                background: "white",
                width: "90%",
                margin: "auto",
              }} // Set the height of the editor
            />
          </div>
        </section>

        <section className="text-center mt-40 md:mt-32">
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

export default EditBlog;
