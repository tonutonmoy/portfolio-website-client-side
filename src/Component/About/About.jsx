import HomeAbout from "../Home/HomeAbout/HomeAbout";

const About = () => {
  const title = document.getElementById("title");

  title.innerText = "About";
  return (
    <div className=" py-[120px] ">


      <HomeAbout></HomeAbout>
    </div>
  );
};

export default About;
