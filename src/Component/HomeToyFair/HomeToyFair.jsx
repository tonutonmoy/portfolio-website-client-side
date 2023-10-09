import homeBanner from '../../assets/toyFairScreenShort/Screenshot 2023-06-27 212630-min.png'
import homePhoto from '../../assets/toyFairScreenShort/Screenshot 2023-06-27 212704-min.png'
import homeTab from '../../assets/toyFairScreenShort/Screenshot 2023-06-27 212736-min.png'
import homePartners from '../../assets/toyFairScreenShort/Screenshot 2023-06-27 212806-min.png'
import homeServices from '../../assets/toyFairScreenShort/Screenshot 2023-06-27 212833-min.png'
import allToys from '../../assets/toyFairScreenShort/Screenshot 2023-06-27 212937-min.png'
import addAToy from '../../assets/toyFairScreenShort/Screenshot 2023-06-27 213018-min.png'
import myToy from '../../assets/toyFairScreenShort/Screenshot 2023-06-27 213041-min.png'
import update from '../../assets/toyFairScreenShort/Screenshot 2023-06-27 213107-min.png'
import viewToy from '../../assets/toyFairScreenShort/Screenshot 2023-06-27 213141-min.png'
import footer from '../../assets/toyFairScreenShort/Screenshot 2023-06-27 212906-min.png'


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

            <section data-aos="flip-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                >

                <div style={{ boxShadow: '5px 5px 15px rgb(59 130 246)' }} className="card w-full btn-outline 
                hover:scale-110 duration-[1s] border-l-2 border-blue-500">
                      
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
                            <img className='h-[250px] w-full' src={homeBanner} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='h-[250px] w-full' src={homePhoto} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='h-[250px] w-full' src={homeTab} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='h-[250px] w-full' src={homePartners} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='h-[250px] w-full' src={homeServices} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='h-[250px] w-full' src={allToys} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='h-[250px] w-full' src={addAToy} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='h-[250px] w-full' src={myToy} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='h-[250px] w-full' src={update} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='h-[250px] w-full' src={viewToy} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='h-[250px] w-full' src={footer} alt="" />
                        </SwiperSlide>


                    </Swiper>




                </div>
                <div className="card-body">
                    <h2 className="text-[20px] text-white font-[400] my-5 text-center">Toy Fair</h2>


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
                            <h2 className="text-[20px] text-white font-[400] my-5 text-center">Toy Fair</h2>

                            <div className=' text-white text-[18px] font-[400]'>
                                <span className=''>This is a kids toy car website.It's a full Stack website.This project is completed with MERN.Many technologies are used in this project and it has many features, some examples are given below.</span>

                                <section className='my-10'>
                                    <h3 className=' font-[500] mb-1' >Features:</h3>
                                    <p>* Here you can open an account and upload your product.</p>
                                    <p>* user can update the product if user want.</p>
                                    <p>* Users can delete the product if they want.</p>
                                    <p>* Here you can get the product of your choice by vehicle name and category.</p>
                                  
                                </section>

                                <section className='my-10'>
                                    <h3 className='font-[500] mb-1'> Packages/ Technology:</h3>
                                    <p>* React Router</p>
                                    <p>* Tailwind</p>
                                    <p>* Bootstrap</p>
                                    <p>* Node(express)</p>
                                    <p>* Firebase</p>
                                    <p>* MongoDb</p>
                                    <p>* Aos and much more.</p>
                                </section>
                            </div>

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