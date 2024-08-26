/* eslint-disable react/prop-types */
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

import img from "../../../assets/homeContact/giphy.gif";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

const HomeContact = ({ contactProps }) => {
  const title = document.getElementById("title");

  console.log(
    import.meta.env.VITE_SERVICE_ID,
    import.meta.env.VITE_TEMPLATE_ID,
    import.meta.env.VITE_PUBLIC_KEY
  );

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e);
    console.log();
    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();

          Swal.fire({
            icon: "success",
            title: "Thank you for your message",
            showConfirmButton: false,
            timer: 2000,
            background: "black",
            color: "white",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className={`  ${title.innerText === "Contact" ? "pt-[120px]" : "py-10"} `}
    >
      <h3 className=" text-white text-[30px] text-[500] text-center my-[100px]  border-b-2 pb-2  border-blue-500 w-[27%] mx-auto    ">
        Contact Me
      </h3>

      <div className=" w-[80%] md:w-[90%] lg:w-[90%] xl:w-[90%] 2xl:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-20 md:gap-20 lg:gap-20 xl:gap-20 2xl:gap-0 ">
        {contactProps === "contact" ? (
          <section className=" text-gray-300 mt-40 md:flex justify-center ">
            <div>
              <h2 className=" text-2xl text-gray-100 my-5">
                Connect with me on social media:
              </h2>
              <div className=" space-y-5">
                <p>
                  <MdEmail className=" inline text-[30px] text-blue-500" /> :
                  <span className=" ms-2">www.tonutonmoy12@gmail.com</span>
                </p>
                <p>
                  <FaPhone className=" inline text-[30px] text-blue-500" /> :
                  <span className=" ms-2">+8801732159683 </span>
                </p>
                <p>
                  <FaWhatsapp className=" inline text-[30px] text-blue-500" /> :
                  <span className=" ms-2">+8801732159683 </span>
                </p>
              </div>

              <div className=" flex gap-3 py-10  justify-center md:justify-start ">
                <a href="https://www.facebook.com/tonu.tonmoy.3">
                  <BsFacebook className="text-[30px] text-blue-500 " />
                </a>

                <a href="https://www.instagram.com/show_mik_arefin_tonmoy/">
                  <GrInstagram className="text-[30px] text-blue-500 " />
                </a>

                <a href="https://www.linkedin.com/in/showmic-arefin-tonmoy-560503280/">
                  <BsLinkedin className="text-[30px] text-blue-500 " />
                </a>
              </div>
            </div>
          </section>
        ) : (
          <section className=" flex items-center mb-[70px] md:mb-0">
            <div
              style={{ boxShadow: "5px 5px 20px rgb(59 130 246)" }}
              className="p-10  border-l-4 border-blue-500
                 rounded-[50%] relative home-about-img-section 
                 w-[100%] md:w-[70%]  lg:w-[100%]   xl:w-[90%] 2xl:w-[70%] mx-auto"
            >
              <img
                className=" h-[500px] md:h-[600px] lg:h-[650px] xl:h-[700px] 2xl:h-[700px]  w-full  hover:scale-105 duration-[1s]  border-l-[10px] border-blue-500 rounded-[30px]  group-hover:border-blue-500/10    "
                style={{ boxShadow: "5px 5px 20px rgb(59 130 246)" }}
                src={img}
                alt=""
              />
            </div>
          </section>
        )}

        <form
          ref={form}
          onSubmit={sendEmail}
          style={{ boxShadow: "5px 5px 30px rgb(59 130 246)" }}
          className="card-body border-r-8 border-l-8 border-blue-500   duration-[1s]  
                    w-[100%] md:w-[70%]  lg:w-[100%]   xl:w-[90%] 2xl:w-[70%] mx-auto "
        >
          <div className="form-control md:my-5 ">
            <label className="label my-3">
              <p className="text-[20px] text-white font-[500] ">Name</p>
            </label>

            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <input
              required
                type="text"
                placeholder="name"
                name="user_name"
                className="input input-bordered
        p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label md:my-3 ">
              <p className="text-[20px] text-white font-[500] ">Email</p>
            </label>

            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <input
              required
                type="email"
                placeholder="email"
                name="user_email"
                className="input input-bordered
        p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2"
              />
            </div>
          </div>

          <div className="form-control md:my-5">
            <label className="label my-3">
              <p className="text-[20px] text-white font-[500] ">Message</p>
            </label>

            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <textarea
              required
                placeholder="message"
                name="message"
                className="textarea textarea-bordered textarea-lg w-full h-[100px]  md:h-[150px]
        p-2 rounded-md border-0 btn-outline text-[15px] font-[400]   hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2"
              ></textarea>
            </div>
          </div>

          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <button className="md:py-3 py-1 my-10 rounded-md border-0 btn-outline md:text-[20px] text-[17px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeContact;
