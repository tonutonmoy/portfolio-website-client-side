import HomeHolyChild from "../HomeHolyChild/HomeHolyChild";


const HomeProject = () => {
    return (
        <div className="w-[90%] mx-auto">
            <h3 className=' text-white text-[30px] text-[500] text-center my-[100px]  border-b-2 pb-2  border-blue-500 w-[27%] mx-auto    '>My Projects</h3>


            <div className=" grid grid-cols-3">

              <HomeHolyChild></HomeHolyChild>



            </div>
        </div>
    );
};

export default HomeProject;