import img1 from "../../assets/bookingCollegeScreenShort/Screenshot 2023-11-10 233951_11zon.png";
import img2 from "../../assets/bookingCollegeScreenShort/Screenshot 2023-11-10 234034_11zon.png";
import img3 from "../../assets/bookingCollegeScreenShort/Screenshot 2023-11-10 234103_11zon.png";
import img4 from "../../assets/bookingCollegeScreenShort/Screenshot 2023-11-10 234126_11zon.png";
import img5 from "../../assets/bookingCollegeScreenShort/Screenshot 2023-11-10 234159_11zon.png";
import img6 from "../../assets/bookingCollegeScreenShort/Screenshot 2023-11-10 234228_11zon.png";
import img7 from "../../assets/bookingCollegeScreenShort/Screenshot 2023-11-10 234255_11zon.png";
import img8 from "../../assets/bookingCollegeScreenShort/Screenshot 2023-11-10 234324_11zon.png";
import img9 from "../../assets/bookingCollegeScreenShort/Screenshot 2023-11-10 234351_11zon.png";
import img10 from "../../assets/bookingCollegeScreenShort/Screenshot 2023-11-10 234440_11zon.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const HomeBookingCollege = () => {
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
                <img className="h-[250px] w-full" src={img1} alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <img className="h-[250px] w-full" src={img2} alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <img className="h-[250px] w-full" src={img3} alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <img className="h-[250px] w-full" src={img4} alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <img className="h-[250px] w-full" src={img5} alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <img className="h-[250px] w-full" src={img6} alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <img className="h-[250px] w-full" src={img7} alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <img className="h-[250px] w-full" src={img8} alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <img className="h-[250px] w-full" src={img9} alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <img className="h-[250px] w-full" src={img10} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="card-body">
            <h2 className="text-[20px] text-white font-[400] my-5 text-center">
              Booking College
            </h2>

            <div className=" ">
              <div className="flex gap-3 my-10 text-center">
                <a
                  className="p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 "
                  href="https://github.com/tonutonmoy/book-college-client-side"
                >
                  Client
                </a>

                <a
                  className="p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 "
                  href="https://github.com/tonutonmoy/book-college-server-side"
                >
                  Server
                </a>

                <a
                  className="p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 "
                  href="https://book-college-8bb4e.web.app/"
                >
                  Live
                </a>
              </div>

              <button
                className="p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 "
                onClick={() => window.my_modal_1.showModal()}
              >
                See details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* modal */}
      <dialog id="my_modal_1" className="modal ">
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
                  <img className="h-[250px] w-full" src={img1} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img className="h-[250px] w-full" src={img2} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img className="h-[250px] w-full" src={img3} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img className="h-[250px] w-full" src={img4} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img className="h-[250px] w-full" src={img5} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img className="h-[250px] w-full" src={img6} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img className="h-[250px] w-full" src={img7} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img className="h-[250px] w-full" src={img8} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img className="h-[250px] w-full" src={img9} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img className="h-[250px] w-full" src={img10} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="card-body">
              <h2 className="text-[25px] text-white font-[400] my-5 text-center">
                Booking College
              </h2>

              <div className=" text-white text-[18px] font-[400]">
                <span className="">
                  This is a College booking website.It's a full Stack
                  website.This project is completed with MERN.Many technologies
                  are used in this project and it has many features, some
                  examples are given below.
                </span>

                <section className="my-10">
                  <h3 className=" font-[500] mb-1">Features:</h3>
                  <p>* Users can search colleges by name.</p>
                  <p>
                    * Users can select their desired colleges for admission.
                  </p>
                  <p>* Users can give reviews for specific colleges.</p>
                  <p>* Users can see their selected colleges.</p>
                  <p>* Users can update their profile.</p>
                  <p>* Dark mode features.</p>
                </section>

                <section className="my-10">
                  <h3 className="font-[500] mb-1"> Packages/ Technology:</h3>
                  <p>* React Router</p>
                  <p>* Tailwind</p>
                  <p>* DaisyUi</p>
                  <p>* Node(express)</p>
                  <p>* Firebase</p>
                  <p>* MongoDb</p>
                  <p>* Mongoose </p>
                  <p>* TanStack Query</p>
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

export default HomeBookingCollege;
