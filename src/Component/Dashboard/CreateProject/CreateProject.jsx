import { toast } from "sonner";
import { cloudINary } from "../../../Utils/cloudINary";
import { useCreateProjectMutation } from "../../../Redux/features/project/projectApi";
import { useState } from "react";

const CreateProject = () => {
  const toggle = true;

  const [loading, serLoading] = useState(false);
  const [technology, setTechnology] = useState([]);

  const [techInput, setTechInput] = useState("");

  const [photos, setPhotos] = useState([]);

  const [createFunction] = useCreateProjectMutation();

  const addTechnology = () => {
    if (techInput.trim() !== "") {
      setTechnology([...technology, techInput.trim()]);
      setTechInput("");
    }
  };

  const deleteTechnology = (text) => {
    const deleteTechnology = technology.filter((a) => text !== a);
    setTechnology([...deleteTechnology]);
  };

  const handler = async (e) => {
    e.preventDefault();

    serLoading(true);
    if (photos.length < 1) {
      serLoading(false);
      return toast.error("Image is missing");
    }

    if (technology.length < 1) {
      serLoading(false);
      return toast.error("Technology is required");
    }

    if (photos.length === 0) {
      serLoading(false);
      return toast.error("Image is missing");
    }

    const name = e?.target?.name?.value;
    const server = e?.target?.server?.value;
    const client = e?.target?.client?.value;
    const live = e?.target?.live?.value;
    const details = e?.target?.details?.value;

    const image = await cloudINary(photos[0]);

    if (image === null) {
      console.log("null");
      serLoading(false);
      return toast.error("image not uploaded");
    }
    const info = {
      name,
      image,
      server,
      client,
      live,
      details,
      technology,
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
        Create Project
      </h2>

      <form
        onSubmit={handler}
        className={`w-[90%] md:w-[90%] lg:w-[95%] xl:w-[70%] 2xl:w-[60%]  3xl:w-[50%]  mx-auto  mt-10  text-gray-50 bg-gradient-to-r from-blue-500/20 to-blue-400/20  shadow-lg  ${
          toggle && " border-[1px] "
        }  px-4 md:px-2  lg:px-4  xl:px-0  2xl:px-0   py-10  rounded-lg `}
      >
        <section className=" grid md:grid-cols-2 md:gap-3  lg:gap-10 xl:gap-0 2xl:gap-0 ">
          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Name</p>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-700 "
              name="name"
              required
            />
          </div>
          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] ">Client Github link</p>
            <input
              type="text"
              placeholder="client github link"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-700 "
              name="client"
              required
            />
          </div>
          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] ">Server Github link</p>
            <input
              type="text"
              placeholder="server github link"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-700 "
              name="server"
              required
            />
          </div>
          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] ">Live Github link</p>
            <input
              type="text"
              placeholder="server github link"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-700 "
              name="live"
              required
            />
          </div>
          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] ">Technology</p>
            <input
              type="text"
              placeholder="technology"
              className="input input-bordered input-md w-[65%] max-w-xs my-3 text-gray-700 "
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
            />
            <span
              onClick={addTechnology}
              className="bg-blue-500 p-3 rounded font-semibold cursor-pointer"
            >
              Add
            </span>
            <div className="mt-3">
              {technology.map((tech, index) => (
                <span
                  key={index}
                  onClick={(e) => deleteTechnology(e.target.innerText)}
                  className="inline-block bg-gray-200 text-gray-700 py-1 px-2 m-1 rounded hover:bg-red-500 hover:cursor-pointer hover:text-white"
                >
                  {tech}{" "}
                </span>
              ))}
            </div>
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
            <p className=" text-[18px] font-[500] ">Details</p>
            <textarea
              className="input input-bordered input-md w-[90%]  my-3 text-gray-700  h-[200px]"
              placeholder="Enter your content"
              name="details"
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

export default CreateProject;
