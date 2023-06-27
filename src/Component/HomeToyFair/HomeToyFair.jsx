import homeBanner from '../../assets/toyFairScreenShort/Screenshot 2023-06-27 212630.png'
import homePhoto from '../../assets/toyFairScreenShort/Screenshot 2023-06-27 212704.png'
import homeTab from '../../assets/toyFairScreenShort/Screenshot 2023-06-27 212736.png'
import homePartners from '../../assets/toyFairScreenShort/Screenshot 2023-06-27 212806.png'
import homeServices from '../../assets/toyFairScreenShort/Screenshot 2023-06-27 212833.png'
import allToys from '../../assets/toyFairScreenShort/Screenshot 2023-06-27 212937.png'
import addAToy from '../../assets/toyFairScreenShort/Screenshot 2023-06-27 213018.png'
import myToy from '../../assets/toyFairScreenShort/Screenshot 2023-06-27 213041.png'
import update from '../../assets/toyFairScreenShort/Screenshot 2023-06-27 213107.png'
import viewToy from '../../assets/toyFairScreenShort/Screenshot 2023-06-27 213141.png'
import footer from '../../assets/toyFairScreenShort/Screenshot 2023-06-27 212906.png'


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




// import required modules
import { Pagination, Navigation } from "swiper";

const HomeToyFair = () => {
    return (
        <>

            <section style={{ boxShadow: '5px 5px 10px black' }} className="card w-full btn-outline 
                hover:scale-110 duration-[1s] ">
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
                            <img src={homeBanner} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={homePhoto} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={homeTab} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={homePartners} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={homeServices} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={allToys} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={addAToy} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={myToy} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={update} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={viewToy} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={footer} alt="" />
                        </SwiperSlide>
                       

                    </Swiper>




                </div>
                <div className="card-body">
                    <h2 className="text-[20px] text-white font-[400] my-5 text-center">Holy Child School</h2>


                    <div className=' '>

                        <div className='flex gap-3 my-10 text-center'>

                            <a className="p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 " href="https://github.com/tonutonmoy/toy-fair-client-side">Client</a>

                            <a className="p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 " href="https://github.com/tonutonmoy/toy-fair-server-side">Server</a>

                            <a className="p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 " href="https://toy-fair-39d35.firebaseapp.com/">Live</a>

                        </div>



                        <button className="p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 " 
                        onClick={() => window.my_modal_2.showModal()}>See details</button>


                    </div>
                </div>
            </section>



            {/* modal */}
            <dialog id="my_modal_2" className="modal ">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl bg-black">
                    <section style={{ boxShadow: '5px 5px 10px black' }} className="card w-full  
               ">
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
                            <img src={homeBanner} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={homePhoto} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={homeTab} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={homePartners} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={allToys} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={addAToy} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={myToy} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={update} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={viewToy} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={footer} alt="" />
                        </SwiperSlide>


                            </Swiper>




                        </div>
                        <div className="card-body">
                            <h2 className="text-[25px] text-white font-[400] my-5 text-center">HolyChild  school</h2>

                            <p className=' text-white text-[18px] font-[400]'>
                                <span className=''>Description:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores in blanditiis aliquam esse rem! Soluta rem eaque eligendi veniam nam porro praesentium, ab quo inventore tempore maiores, laboriosam quia sit.</span>
                            </p>

                        </div>
                    </section>


                    <div className="modal-action">
                        {/* if there is a button, it will close the modal */}
                        <button className="p-2 rounded-md border-0 btn-outline text-[15px] font-[400]  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 ">Close</button>
                    </div>
                </form>
            </dialog>


        </>
    );
};

export default HomeToyFair;