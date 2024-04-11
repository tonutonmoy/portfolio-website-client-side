import html from "../../assets/homeSkills/317755_badge_html_html5_achievement_award_icon.png";
import css from "../../assets/homeSkills/317756_badge_css_css3_achievement_award_icon.png";
import bootstrap from "../../assets/homeSkills/pngaaa.com-3801770.png";
import tailwind from "../../assets/homeSkills/pngaaa.com-6447779.png";
import javascript from "../../assets/homeSkills/4373213_js_logo_logos_icon.png";
import react from "../../assets/homeSkills/7423888_react_react native_icon.png";
import node from "../../assets/homeSkills/4375017_js_logo_node_icon.png";
import express from "../../assets/homeSkills/pngaaa.com-5051155.png";
import mongodb from "../../assets/homeSkills/pngaaa.com-9150434.png";
import firebase from "../../assets/homeSkills/1175544_firebase_google_icon.png";
import typescript from "../../assets/homeSkills/typescript-svgrepo-com.png";
import mongoose from "../../assets/homeSkills/mongoose-removebg-preview.png";
import redux from "../../assets/homeSkills/redux-logo-svgrepo-com.png";
import postgreSQL from "../../assets/homeSkills/postgreSQL.png";
import prisma from "../../assets/homeSkills/png-transparent-prisma-hd-logo-removebg-preview.png";

const HomeSkills = () => {
  const title = document.getElementById("title");

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
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div
            style={{ boxShadow: "5px 5px 10px black" }}
            className="card w-full btn-outline  hover:scale-110 duration-[1s]"
          >
            <img className="p-10 w-[300px] h-[200px]" src={html} alt="Shoes" />
            <div className="card-body">
              <h2 className=" text-[18px] md:text-[23px] text-white font-[400] text-center">
                HTML 5
              </h2>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div
            style={{ boxShadow: "5px 5px 10px black" }}
            className="card w-full btn-outline  hover:scale-110 duration-[1s] "
          >
            <img className="p-10 w-[300px] h-[200px]" src={css} alt="Shoes" />
            <div className="card-body">
              <h2 className=" text-[18px] md:text-[23px] text-white font-[400] text-center">
                CSS 3
              </h2>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div
            style={{ boxShadow: "5px 5px 10px black" }}
            className="card w-full btn-outline  hover:scale-110 duration-[1s] "
          >
            <img
              className="p-10 w-[300px] h-[200px]"
              src={bootstrap}
              alt="Shoes"
            />
            <div className="card-body">
              <h2 className=" text-[18px] md:text-[23px] text-white font-[400] text-center">
                Bootstrap
              </h2>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div
            style={{ boxShadow: "5px 5px 10px black" }}
            className="card w-full btn-outline  hover:scale-110 duration-[1s] "
          >
            <img
              className="p-10 w-[300px] h-[200px]"
              src={tailwind}
              alt="Shoes"
            />
            <div className="card-body">
              <h2 className=" text-[18px] md:text-[23px] text-white font-[400] text-center">
                Tailwind
              </h2>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div
            style={{ boxShadow: "5px 5px 10px black" }}
            className="card w-full btn-outline  hover:scale-110 duration-[1s] "
          >
            <img
              className="p-10 w-[300px] h-[200px]"
              src={javascript}
              alt="Shoes"
            />
            <div className="card-body">
              <h2 className=" text-[18px] md:text-[23px] text-white font-[400] text-center">
                Javascript
              </h2>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div
            style={{ boxShadow: "5px 5px 10px black" }}
            className="card w-full btn-outline  hover:scale-110 duration-[1s] "
          >
            <img className="p-10 w-[300px] h-[200px]" src={react} alt="Shoes" />
            <div className="card-body">
              <h2 className=" text-[18px] md:text-[23px] text-white font-[400] text-center">
                React
              </h2>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div
            style={{ boxShadow: "5px 5px 10px black" }}
            className="card w-full btn-outline  hover:scale-110 duration-[1s] "
          >
            <img className="p-10 w-[300px] h-[200px]" src={node} alt="Shoes" />
            <div className="card-body">
              <h2 className=" text-[18px] md:text-[23px] text-white font-[400] text-center">
                Node
              </h2>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div
            style={{ boxShadow: "5px 5px 10px black" }}
            className="card w-full btn-outline  hover:scale-110 duration-[1s] "
          >
            <img
              className="p-10 w-[300px] h-[200px]"
              src={express}
              alt="Shoes"
            />
            <div className="card-body">
              <h2 className=" text-[18px] md:text-[23px] text-white font-[400] text-center">
                Express
              </h2>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div
            style={{ boxShadow: "5px 5px 10px black" }}
            className="card w-full btn-outline  hover:scale-110 duration-[1s] "
          >
            <img
              className="p-10 w-[300px] h-[200px]"
              src={mongodb}
              alt="Shoes"
            />
            <div className="card-body">
              <h2 className=" text-[18px] md:text-[23px] text-white font-[400] text-center">
                MongoDB
              </h2>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div
            style={{ boxShadow: "5px 5px 10px black" }}
            className="card w-full btn-outline  hover:scale-110 duration-[1s]"
          >
            <img
              className="p-10 w-[300px] h-[200px]"
              src={firebase}
              alt="Shoes"
            />
            <div className="card-body">
              <h2 className=" text-[18px] md:text-[23px] text-white font-[400] text-center">
                Firebase
              </h2>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div
            style={{ boxShadow: "5px 5px 10px black" }}
            className="card w-full btn-outline  hover:scale-110 duration-[1s]"
          >
            <img
              className="p-10 w-[300px] h-[200px]"
              src={typescript}
              alt="Shoes"
            />
            <div className="card-body">
              <h2 className=" text-[18px] md:text-[23px] text-white font-[400] text-center">
                Typescript
              </h2>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div
            style={{ boxShadow: "5px 5px 10px black" }}
            className="card w-full btn-outline  hover:scale-110 duration-[1s]"
          >
            <img
              className="p-10 w-[300px] h-[200px]"
              src={mongoose}
              alt="Shoes"
            />
            <div className="card-body">
              <h2 className=" text-[18px] md:text-[23px] text-white font-[400] text-center">
                Mongoose
              </h2>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div
            style={{ boxShadow: "5px 5px 10px black" }}
            className="card w-full btn-outline  hover:scale-110 duration-[1s]"
          >
            <img className="p-10 w-[300px] h-[200px]" src={redux} alt="Shoes" />
            <div className="card-body">
              <h2 className=" text-[18px] md:text-[23px] text-white font-[400] text-center">
                Redux
              </h2>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div
            style={{ boxShadow: "5px 5px 10px black" }}
            className="card w-full btn-outline  hover:scale-110 duration-[1s]"
          >
            <img
              className="p-10 w-[300px] h-[200px]"
              src={postgreSQL}
              alt="Shoes"
            />
            <div className="card-body">
              <h2 className=" text-[18px] md:text-[23px] text-white font-[400] text-center">
                PostgreSQL
              </h2>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div
            style={{ boxShadow: "5px 5px 10px black" }}
            className="card w-full btn-outline  hover:scale-110 duration-[1s]"
          >
            <img
              className="p-10 w-[300px] h-[200px]"
              src={prisma}
              alt="Shoes"
            />
            <div className="card-body">
              <h2 className=" text-[18px] md:text-[23px] text-white font-[400] text-center">
                Prisma
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSkills;
