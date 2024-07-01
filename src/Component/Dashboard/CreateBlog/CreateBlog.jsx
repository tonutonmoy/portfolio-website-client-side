import { useState } from "react";
import { toast } from "sonner";
import { cloudINary } from "../../../Utils/cloudINary";
import { useCreateBlogMutation } from "../../../Redux/features/blog/blogApi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the Quill CSS for proper styling

const CreateBlog = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [detail, setDetail] = useState("");
  const [createFunction] = useCreateBlogMutation();

  const handler = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (photos.length < 1) {
      setLoading(false);
      return toast.error("Image is missing");
    }

    if (!detail) {
      setLoading(false);
      return toast.error("Detail is missing");
    }

    const title = e?.target?.title?.value;

    const image = await cloudINary(photos[0]);

    if (image === null) {
      setLoading(false);
      return toast.error("Image not uploaded");
    }

    const info = {
      image,
      title,
      detail,
    };

    const res = await createFunction(info);

    if (res?.data?.success === true) {
      toast.success(res.data.message);
    } else if (res?.data?.success === false) {
      toast.error(res.data.message);
    } else if (res?.error?.data?.message === "Unauthorized Access") {
      toast.error(res?.error?.data?.message);
    }

    setLoading(false);
  };

  return (
    <div className="w-full pb-60">
      <h2 className="text-[30px] font-semibold text-gray-50 text-center my-10">
        Create Blog
      </h2>

      <form
        onSubmit={handler}
        className="w-[90%] md:w-[90%] lg:w-[95%] xl:w-[70%] 2xl:w-[50%] mx-auto mt-10 text-gray-50 bg-gradient-to-r from-blue-500/20 to-blue-400/20 shadow-lg border-[1px] px-4 md:px-2 lg:px-4 xl:px-0 2xl:px-0 py-10 rounded-lg"
      >
        <section className="grid md:grid-cols-2 md:gap-3 lg:gap-10 xl:gap-0 2xl:gap-0">
          <div className="text-center my-5">
            <p className="text-[18px] font-[500]">Title</p>
            <input
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

        <section className="text-center mt-32 md:mt-20">
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

export default CreateBlog;
