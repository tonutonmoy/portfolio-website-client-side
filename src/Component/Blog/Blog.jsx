import { useEffect } from "react";
import { useGetBlogsQuery } from "../../Redux/features/blog/blogApi";
import Loading from "../../Shared/Loading/Loading";
import { Link } from "react-router-dom";

const Blog = () => {
  useEffect(() => {
    const title = document.getElementById("title");
    if (title) {
      title.innerText = "Blog";
    }
  }, []);

  const { data, isLoading } = useGetBlogsQuery("");

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-[90%] mx-auto pt-60 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-20">
        {data?.data?.blog?.map((a) => (
          <div
            key={a?._id}
            className="mb-10 rounded-xl overflow-hidden shadow-lg bg-black/10"
          >
            <div className="relative">
              <div>
                <img
                  className="w-full h-[200px]"
                  src={a?.image}
                  alt="Article"
                />
              </div>

              <Link
                to={`/blogDetails/${a?._id}`}
                className="hidden absolute rounded-md z-10 text-xs bottom-0 right-0 bg-blue-500 px-6 m-2 py-2 text-white hover:bg-blue-600 hover:text-gray-100 transition duration-500 ease-in-out sm:flex items-center"
              >
                <span className="text-lg">|</span>&nbsp;&nbsp;
                <span>Read more</span>
              </Link>
            </div>

            <div className="  p-5">
              <p className="text-xl sm:text-xl font-semibold mt-5 inline-block ransition duration-500 ease-in-out inline-block mb-2 text-white">
                {a?.title}
              </p>

              <p className="text-white py-5 text-base leading-8">
                {a?.detail?.slice(0, 232)}
              </p>
              <div className="py-5 text-sm font-regular text-white flex">
                <span className="mr-3 flex flex-row items-center">
                  <svg
                    className="text-blue-500"
                    fill="currentColor"
                    height="13px"
                    width="13px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path
                          d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
                        c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
                        c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <span className="ml-1">
                    {new Date(a?.updatedAt).toLocaleDateString()}
                  </span>
                </span>
                <p className="flex flex-row items-center  text-white">
                  <svg
                    className="text-blue-500"
                    fill="currentColor"
                    height="16px"
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    ></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                  </svg>
                  <span className="ml-1">Showmik Arifen Tonmoy</span>
                </p>
              </div>
              <hr className="border-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
