import { useEffect } from "react";
import { useGetBlogsQuery } from "../../Redux/features/blog/blogApi";
import Loading from "../../Shared/Loading/Loading";
import { Link } from "react-router-dom";
import "./Blog.css"; // Import the custom CSS file

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
    <div className="w-[90%] mx-auto pt-16 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-10">
        {data?.data?.blog?.map((a) => (
          <div
            key={a?._id}
            className="rounded-lg overflow-hidden shadow-lg bg-gray-800 border border-gray-700"
          >
            <div className="relative">
              <img
                className="w-full h-[200px] object-cover"
                src={a?.image}
                alt={a?.title || "Blog Image"}
              />

              <Link
                to={`/blogDetails/${a?._id}`}
                className="absolute bottom-0 right-0 bg-blue-500 text-white text-xs rounded-md px-4 py-2 m-2 hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Read more
              </Link>
            </div>

            <div className="p-4">
              <p className="text-xl font-semibold text-white mb-2">
                {a?.title}
              </p>

              {/* Render the HTML content safely */}
              <div
                className="text-white blog-text blog-base leading-relaxed mb-4 excerpt-text h-[100px] overflow-hidden"
                dangerouslySetInnerHTML={{ __html: a?.detail }}
              />

              <div className="text-sm text-white flex items-center mb-4"></div>

              <hr className="border-white mb-4" />

              <div className="text-sm text-white flex items-center justify-between">
                <div>
                  <span>Showmik Arifen Tonmoy</span>
                </div>
                <div>
                  <span>{new Date(a?.updatedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
