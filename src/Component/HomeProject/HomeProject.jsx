import HomeHolyChild from "../HomeHolyChild/HomeHolyChild";
import HomeToyFair from "../HomeToyFair/HomeToyFair";
import HomeTastyRecipes from "../homeTastyRecipes/homeTastyRecipes";


const HomeProject = () => {
    return (
        <div className="w-[90%] mx-auto mt-[250px] pb-[300px]">
            <h3 className=' text-white text-[30px] text-[500] text-center my-[100px]  border-b-2 pb-2  border-blue-500 w-[27%] mx-auto    '>My Projects</h3>


            <div className=" grid grid-cols-3 gap-10">

              <HomeHolyChild></HomeHolyChild>

              <HomeToyFair></HomeToyFair>

              <HomeTastyRecipes></HomeTastyRecipes>



            </div>
        </div>
    );
};

export default HomeProject;