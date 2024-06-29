import HomeAbout from "../Home/HomeAbout/HomeAbout";

const About = () => {
  const title = document.getElementById("title");

  title.innerText = "About";
  return (
    <div className=" py-[120px] ">
      {/* <h3 className=' text-white text-[30px] text-[500] text-center  border-b-2   border-blue-500 w-[27%] mx-auto    '>About</h3> */}

      <HomeAbout></HomeAbout>
    </div>
  );
};

export default About;
