/* eslint-disable no-unsafe-optional-chaining */
import { useParams } from "react-router-dom";
import {
  useGetSingleProjectsQuery,
  useUpdateProjectsMutation,
} from "../../../Redux/features/project/projectApi";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { cloudINary } from "../../../Utils/cloudINary";
import Loading from "../../../Shared/Loading/Loading";

const EditProject = () => {
  const { id } = useParams();
  const toggle = true;
  const { data, isLoading, refetch } = useGetSingleProjectsQuery(id);

  const [loading, serLoading] = useState(false);
  const [technology, setTechnology] = useState([]);

  const [techInput, setTechInput] = useState("");

  const [photos, setPhotos] = useState([]);

  const [updateFunction] = useUpdateProjectsMutation();

  useEffect(() => {
    if (data?.data?.project?.technology) {
      setTechnology([...data.data.project.technology]);
    }
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

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
    let image;
    serLoading(true);

    if (technology.length < 1) {
      serLoading(false);
      return toast.error("Technology is required");
    }

    if (photos.length > 0) {
      image = await cloudINary(photos[0]);

      if (image === null) {
        console.log("null");
        serLoading(false);
        return toast.error("image not uploaded");
      }
    }

    const name = e?.target?.name?.value;
    const server = e?.target?.server?.value;
    const client = e?.target?.client?.value;
    const live = e?.target?.live?.value;
    const details = e?.target?.details?.value;

    const info = {
      name,
      image: image || data?.data?.project?.image,
      server,
      client,
      live,
      details,
      technology,
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
        Edit Project
      </h2>

      <form
        onSubmit={handler}
        className={`w-[90%] md:w-[90%] lg:w-[95%] xl:w-[95%] 2xl:w-[90%]  mx-auto  mt-10  text-gray-50 bg-gradient-to-r from-blue-500/20 to-blue-400/20  shadow-lg  ${
          toggle && " border-[1px] "
        }  px-4 md:px-2  lg:px-4  xl:px-0  2xl:px-0   py-10  rounded-lg `}
      >
        <div className=" flex justify-center">
          <img
            src={data?.data?.project?.image}
            className=" h-[250px] w-[500px]"
            alt=""
          />
        </div>
        <section className=" grid md:grid-cols-2 lg:grid-cols-2 mt-5   xl:grid-cols-3  2xl:grid-cols-4  md:gap-3  lg:gap-10 xl:gap-0 2xl:gap-0 ">
          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Name</p>
            <input
              defaultValue={data?.data?.project?.name}
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
              defaultValue={data?.data?.project?.client}
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
              defaultValue={data?.data?.project?.server}
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
              defaultValue={data?.data?.project?.live}
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
              defaultValue={data?.data?.project?.details}
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

export default EditProject;
