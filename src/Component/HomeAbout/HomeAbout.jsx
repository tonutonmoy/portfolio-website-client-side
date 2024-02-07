import { Link } from "react-router-dom";
import img1 from "../../assets/homeAbout/DSC06842-min.jpg";
import img2 from "../../assets/homeAbout/DSC06888-min.jpg";

const HomeAbout = () => {
  const title = document.getElementById("title");

  console.log(title.innerText);

  return (
    <div className="w-[90%] mx-auto my-[120px]  py-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2  gap-20">
        <section
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div
            style={{ boxShadow: "5px 5px 20px rgb(59 130 246)" }}
            className="p-10  border-l-4 border-blue-500
                 rounded-[50%] relative home-about-img-section group
                 
                w-[100%] md:w-[70%]  lg:w-[100%]   xl:w-[90%] 2xl:w-[70%] mx-auto"
          >
            {/* <span style={{ boxShadow: '5px 5px 20px rgb(59 130 246)' }} className='text-white md:text-[50px] text-[30px] font-[500] absolute top-[45%] left-[15%]  ring-4  px-10  ml-[-1000px]  group-hover:ml-0  group-hover:inline  duration-[2s]	'>MERN STACK</span> */}

            <img
              className=" h-[500px] md:h-[600px] lg:h-[650px] xl:h-[700px] 2xl:h-[700px] absolute top-[5%] left-[1%]   ml-[-2000px] rounded-[50%] group-hover:ml-0   w-full  hover:scale-105 duration-[2s]  border-l-[10px] border-blue-500  group-hover:border-blue-500/10    "
              src={img2}
              alt=""
              style={{ boxShadow: "5px 5px 20px rgb(59 130 246)" }}
            />

            <img
              className=" h-[500px] md:h-[600px] lg:h-[650px] xl:h-[700px] 2xl:h-[700px]  w-full  hover:scale-105 duration-[2s]  border-l-[10px] border-blue-500 rounded-[30px] group-hover:opacity-0 group-hover:border-blue-500/10    "
              src={img1}
              alt=""
              style={{ boxShadow: "5px 5px 20px rgb(59 130 246)" }}
            />
          </div>
        </section>

        <section
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="w-[90%] mx-auto"
        >
          <h3
            className={` text-white text-[30px] text-[500] text-center ${
              title.innerText === "Home"
                ? "  my-[100px]"
                : "mb-[70px]  mt-[30px]"
            }  border-b-2 pb-2  border-blue-500 w-[27%] mx-auto    `}
          >
            About Me
          </h3>
          <p className=" text-white text-[17px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] font-[400]  hover:scale-110 duration-[2s]">
            My name is Showmik arifen Tonmoy, and I am a junior web developer
            with nearly 12 months of learning experience. I have acquired a
            diverse skill set, including proficiency in React.js, HTML, CSS,
            Bootstrap, Tailwind, JavaScript, Express.js,
            Node.js,FireBase,MongoDB and many libraries also. I am also
            knowledgeable about authentication using Google Firebase and
            proficient in utilizing various development tools... <br />{" "}
            {title.innerText === "Home" && (
              <Link
                to="/about"
                className="p-2  rounded-md border-0 btn-outline text-[15px] font-[400]   hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2  "
              >
                See More
              </Link>
            )}
            {title.innerText === "About" && (
              <span>
                I recently completed an intensive web development course at
                Programming Hero, where I honed my skills in the MERN stack.
                Equipped with a solid foundation in JavaScript, I thrive on
                crafting interactive and responsive user interfaces.My
                educational background, combined with hands-on experience in
                building applications using MongoDB, Express.js, React, and
                Node.js, enables me to develop robust and scalable solutions. I
                am passionate about staying up-to-date with the latest industry
                trends and continuously expanding my knowledge to deliver
                cutting-edge projects.
              </span>
            )}
          </p>
        </section>
      </div>
    </div>
  );
};

export default HomeAbout;
