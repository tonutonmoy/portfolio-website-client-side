
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2'

import img from '../../../assets/homeContact/giphy.gif'

const HomeContact = () => {

    const title = document.getElementById('title')

    
  

    console.log(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, import.meta.env.VITE_PUBLIC_KEY)

    const form = useRef();



    const sendEmail = (e) => {


        e.preventDefault();
        console.log(e)
        console.log()
        emailjs.sendForm(`${import.meta.env.VITE_SERVICE_ID}`, `${import.meta.env.VITE_TEMPLATE_ID}`, form.current, `${import.meta.env.VITE_PUBLIC_KEY}`)
            .then((result) => {
                console.log(result.text)
                e.target.reset();

                Swal.fire({

                    icon: 'success',
                    title: 'Thank you for your message',
                    showConfirmButton: false,
                    timer: 2000,
                    background: 'black',
                    color: 'white',

                });

            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className={`  ${title.innerText==='Contact'? 'pt-[120px]':'py-10'} `}>
            <h3  className=' text-white text-[30px] text-[500] text-center my-[100px]  border-b-2 pb-2  border-blue-500 w-[27%] mx-auto    '>Contact Me</h3>


            <div className=" w-[80%] md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 ">


              <section className=' flex items-center mb-[70px] md:mb-0'>

              <div style={{ boxShadow: '5px 5px 20px rgb(59 130 246)' }} className='p-10  border-l-4 border-blue-500
                 rounded-[50%] relative home-about-img-section '>
              <img  className=' md:h-[700px] h-[500px]  w-full  hover:scale-105 duration-[1s]  border-l-[10px] border-blue-500 rounded-[30px]  group-hover:border-blue-500/10    ' style={{ boxShadow: '5px 5px 20px rgb(59 130 246)' }}  src={img} alt="" />
                </div>

              </section>

                <form ref={form} onSubmit={sendEmail}
                    style={{ boxShadow: '5px 5px 30px rgb(59 130 246)' }} className="card-body border-r-8 border-l-8 border-blue-500  w-full   duration-[1s]  " >

                    <div
                        className="form-control md:my-5 ">
                        <label className="label my-3">
                            <p className="text-[20px] text-white font-[500] ">Name</p>
                        </label>

                        <div data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                            <input type="text" placeholder="name" name="user_name" className="input input-bordered
        p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2" />
                        </div>

                    </div>

                    <div className="form-control">
                        <label className="label md:my-3 ">
                            <p className="text-[20px] text-white font-[500] ">Email</p>
                        </label>

                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                            <input type="email" placeholder="email" name="user_email" className="input input-bordered
        p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2" />
                        </div>

                    </div>

                    <div className="form-control md:my-5">
                        <label className="label my-3">
                            <p className="text-[20px] text-white font-[500] ">Message</p>
                        </label>

                        <div data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                            <textarea placeholder="message" name="message" className="textarea textarea-bordered textarea-lg w-full h-[100px]  md:h-[150px]
        p-2 rounded-md border-0 btn-outline text-[15px] font-[400]   hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2" ></textarea>
                        </div>

                    </div>


                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000">

                        <input type='submit' value='Submit' className="md:py-3 py-1 my-10 rounded-md border-0 btn-outline md:text-[20px] text-[17px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 "
                        />
                    </div>

                </form>

            </div>
        </div>


    );
};

export default HomeContact;