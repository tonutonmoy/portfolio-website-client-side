import home from "../../assets/holichildScreenhort/Screenshot 2023-06-27 155535-min.png";
import home1 from "../../assets/holichildScreenhort/Screenshot 2023-06-27 165301-min.png";
import home2 from "../../assets/holichildScreenhort/Screenshot 2023-06-27 165346-min.png";
import home3 from "../../assets/holichildScreenhort/Screenshot 2023-06-27 155917-min.png";
import login from "../../assets/holichildScreenhort/Screenshot 2023-06-27 155832-min.png";
import allClasses from "../../assets/holichildScreenhort/Screenshot 2023-06-27 155748-min.png";
import selectedClasses from "../../assets/holichildScreenhort/Screenshot 2023-06-27 160809-min.png";
import payment from "../../assets/holichildScreenhort/Screenshot 2023-06-27 161052-min.png";
import paymentHistory from "../../assets/holichildScreenhort/Screenshot 2023-06-27 160915-min.png";
import enrolledClasses from "../../assets/holichildScreenhort/Screenshot 2023-06-27 160846-min.png";
import addAClasses from "../../assets/holichildScreenhort/Screenshot 2023-06-27 160212-min.png";
import myClasses from "../../assets/holichildScreenhort/Screenshot 2023-06-27 160138-min.png";
import manageClasses from "../../assets/holichildScreenhort/Screenshot 2023-06-27 160448-min.png";
import manageUsers from "../../assets/holichildScreenhort/Screenshot 2023-06-27 160526-min.png";
import footer from "../../assets/holichildScreenhort/Screenshot 2023-06-27 161201-min.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const HomeHolyChild = () => {
  return (
    <>
      <section
        data-aos="flip-left"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div
          style={{ boxShadow: "5px 5px 15px rgb(59 130 246)" }}
          className="card w-full btn-outline hover:scale-110 duration-[1s] border-l-2 border-blue-500"
        >
          <div>
            <Swiper
              pagination={{
                type: "progressbar",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper  rounded-t-[10px] "
            >
              <SwiperSlide>
                <img className="h-[250px] w-full" src={home} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-[250px] w-full" src={home1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-[250px] w-full" src={home2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-[250px] w-full" src={home3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-[250px] w-full" src={login} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-[250px] w-full" src={allClasses} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-[250px] w-full"
                  src={selectedClasses}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-[250px] w-full" src={payment} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-[250px]" src={paymentHistory} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-[250px] w-full"
                  src={enrolledClasses}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-[250px] w-full" src={addAClasses} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-[250px] w-full" src={myClasses} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-[250px] w-full" src={manageClasses} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-[250px] w-full" src={manageUsers} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-[250px] w-full" src={footer} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="card-body">
            <h2 className="text-[20px] text-white font-[400] my-5 text-center">
              Holy Child School
            </h2>

            <div className=" ">
              <div className="flex gap-3 my-10 text-center">
                <a
                  className="p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 "
                  href="https://github.com/tonutonmoy/holy-child-summer-camp-client-side"
                >
                  Client
                </a>

                <a
                  className="p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 "
                  href="https://github.com/tonutonmoy/holy-child-summer-camp-server-side"
                >
                  Server
                </a>

                <a
                  className="p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 "
                  href="https://holy-school-7bd2e.firebaseapp.com/"
                >
                  Live
                </a>
              </div>

              <button
                className="p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 "
                onClick={() => window.my_modal_4.showModal()}
              >
                See details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* modal */}
      <dialog id="my_modal_4" className="modal ">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl bg-black">
          <section
            style={{ boxShadow: "5px 5px 10px black" }}
            className="card w-full  
               "
          >
            <div>
              <Swiper
                pagination={{
                  type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper  rounded-t-[10px] "
              >
                <SwiperSlide>
                  <img src={home} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={home1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={home2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={home3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={login} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={allClasses} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={selectedClasses} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={payment} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={paymentHistory} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={enrolledClasses} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={addAClasses} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={myClasses} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={manageClasses} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={manageUsers} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={footer} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="card-body">
              <h2 className="text-[25px] text-white font-[400] my-5 text-center">
                HolyChild school
              </h2>

              <div className=" text-white text-[18px] font-[400]">
                <span className="">
                  This is a summer camp musical website.It's a full Stack
                  website.This project is completed with MERN.Many technologies
                  are used in this project and it has many features, some
                  examples are given below.
                </span>

                <section className="my-10">
                  <h3 className=" font-[500] mb-1">Features:</h3>
                  <p>* Student can do musical courses from this website.</p>
                  <p>* instructors can post courses from here.</p>
                  <p>* Here are the benefits of online bankings.</p>
                  <p>* admin can manage musical classes.</p>
                  <p>* Admin can manage users.</p>
                </section>

                <section className="my-10">
                  <h3 className="font-[500] mb-1"> Packages/ Technology:</h3>
                  <p>* React Router</p>
                  <p>* Tailwind</p>
                  <p>* DaisyUi</p>
                  <p>* Node(express)</p>
                  <p>* Firebase</p>
                  <p>* MongoDb</p>
                  <p>* Axios</p>
                  <p>* TanStack Query</p>
                  <p>* React hook form</p>
                  <p>* JSON Web Token</p>
                  <p>* Framer Motion and much more.</p>
                </section>
              </div>
            </div>
          </section>

          <div className="modal-action">
            {/* if there is a button, it will close the modal */}
            <button className="p-2 rounded-md border-0 btn-outline text-[15px] font-[400]  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 ">
              Close
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default HomeHolyChild;
