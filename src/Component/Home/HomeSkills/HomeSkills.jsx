import { useGetSkillsQuery } from "../../../Redux/features/skills/skills.Api";
import Loading from "../../../Shared/Loading/Loading";

const HomeSkills = () => {
  const title = document.getElementById("title");
  const { data, isLoading } = useGetSkillsQuery("");

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      className={`w-[60%] md:w-[90%] lg:w-[90%] xl:w-[90%] 2xl:w-[90%] mx-auto ${
        title.innerText === "Skills" ? "pt-[120px]" : "pt-[20px]"
      }`}
    >
      <h3 className=" text-white text-[30px] text-[500] text-center my-[100px]  border-b-2 pb-2  border-blue-500 w-[27%] mx-auto    ">
        My Skills
      </h3>

      <section className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-10 md:gap-10 lg:gap-10 xl:gap-10  2xl:gap-20">
        {data?.data?.skills?.map((a, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div
              style={{ boxShadow: "5px 5px 10px black" }}
              className="card w-full btn-outline  hover:scale-110 duration-[1s]"
            >
              <img
                className="p-10 w-[300px] h-[200px]"
                src={a?.image}
                alt="Shoes"
              />
              <div className="card-body">
                <h2 className=" text-[18px] md:text-[23px] text-white font-[400] text-center">
                  {a?.name}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomeSkills;
