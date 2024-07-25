import { useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "../../../Redux/features/blog/blogApi";
import Loading from "../../../Shared/Loading/Loading";
import image from "../../../assets/homeAbout/DSC06842-min.jpg";

const BlogDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBlogQuery(id);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="pt-40 pb-20 w-[90%] mx-auto">
      <div className="mb-4 md:mb-0 w-full mx-auto relative">
        <div className="px-4 lg:px-0">
          <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
            {data?.data?.blog?.title}
          </h2>
          <p className="pb-6 text-sm text-gray-400 w-[10px] py-2">
            {new Date(data?.data?.blog?.updatedAt).toLocaleDateString()}
          </p>
        </div>

        <img
          src={data?.data?.blog?.image || "path/to/default-image.jpg"}
          className="w-full object-cover lg:rounded"
          style={{ height: "28em" }}
          alt="Post Cover"
        />
      </div>

      <div className="flex flex-col xl:flex-row lg:space-x-12">
        <div className="px-4 mt-12 text-gray-100 w-full">
          {/* Render full HTML content */}
          <div
            className="text-white blog-detail-text blog-detail-base leading-detail-relaxed mb-4 excerpt-detail-text xl:w-[900px] 2xl:w-[1000px]  3xl:w-[1200px] h-screen overflow-auto"
            dangerouslySetInnerHTML={{ __html: data?.data?.blog?.detail }}
          />
        </div>

        <div className="w-full xl:w-3/4 2xl:w-3/4 3xl:w-1/4 m-auto mt-12 max-w-screen-sm shadow-xl bg-gray-100">
          <div className="p-4 border-t border-b md:border md:rounded">
            <section className="flex py-2">
              <img
                src={image}
                className="h-10 w-10 rounded-full mr-2 object-cover"
                alt="Author"
              />
              <div>
                <p className="font-semibold text-gray-700 text-sm">
                  Showmik Arifen Tonmoy
                </p>
                <p className="font-semibold text-gray-600 text-xs">Editor</p>
              </div>
            </section>
            <section className="space-y-1 my-3">
              <p className="text-gray-700 text-sm">
                <span className="font-[500] text-gray-700">Email:</span>{" "}
                www.tonutonmoy12@gmail.com
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-[500] text-gray-700">Country:</span>{" "}
                Bangladesh
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-[500] text-gray-700">City:</span> Satkhira
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-[500] text-gray-700">Number:</span>{" "}
                +8801732159683
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-[500] text-gray-700">Bio:</span> My self
                Showmik Arifen Tonmoy. Experienced in both front-end and
                back-end development, I specialize in creating robust, scalable
                web applications.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
