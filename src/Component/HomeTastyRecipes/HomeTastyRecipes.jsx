import homeBanner from '../../assets/tastyRecipesScreenShort/Screenshot 2023-06-27 234833.png'
import homeChef from '../../assets/tastyRecipesScreenShort/Screenshot 2023-06-27 234859.png'
import homeFoodSafety from '../../assets/tastyRecipesScreenShort/Screenshot 2023-06-27 234921.png'
import homeReview from '../../assets/tastyRecipesScreenShort/Screenshot 2023-06-27 235020.png'
import singleChef from '../../assets/tastyRecipesScreenShort/Screenshot 2023-06-27 235102.png'
import allRecipes from '../../assets/tastyRecipesScreenShort/Screenshot 2023-06-27 235133.png'
import footer from '../../assets/tastyRecipesScreenShort/Screenshot 2023-06-27 235221.png'


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




// import required modules
import { Pagination, Navigation } from "swiper";

const HomeTastyRecipes = () => {
    return (
        <>

            <section style={{ boxShadow: '5px 5px 10px rgb(59 130 246)' }} className="card w-full btn-outline
                hover:scale-110 duration-[1s]  border-l-2 border-blue-500 ">
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
                            <img src={homeChef} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={homeFoodSafety} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={homeReview} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={singleChef} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={allRecipes} alt="" />
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

                            <a className="p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 " href="https://github.com/tonutonmoy/tasty-recipes-client-side">Client</a>

                            <a className="p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 " href="https://github.com/tonutonmoy/tasty-recipes-server-side">Server</a>

                            <a className="p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 " href="https://tasty-recipes-3afce.firebaseapp.com/">Live</a>

                        </div>



                        <button className="p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 " 
                        onClick={() => window.my_modal_3.showModal()}>See details</button>


                    </div>
                </div>
            </section>



            {/* modal */}
            <dialog id="my_modal_3" className="modal ">
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
                            <img src={homeChef} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={homeFoodSafety} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={homeReview} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={singleChef} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={allRecipes} alt="" />
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

export default HomeTastyRecipes;