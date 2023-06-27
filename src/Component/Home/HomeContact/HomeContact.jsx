

const HomeContact = () => {
    return (
        <div className=" mt-[200px]">
            <h3 className=' text-white text-[30px] text-[500] text-center my-[100px]  border-b-2 pb-2  border-blue-500 w-[27%] mx-auto    '>Contact Me</h3>


            <div className=" w-[90%] mx-auto grid grid-cols-2 gap-20 ">


                <section>

                </section>

                <section style={{ boxShadow: '5px 5px 30px rgb(59 130 246)' }} className="card-body border-r-8 border-l-8 border-blue-500  w-full  duration-[1s]  " >

                    <div className="form-control my-5 ">
                        <label className="label my-3">
                            <p className="text-[20px] text-white font-[500] ">Name</p>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered
        p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2" />
                    </div>

                    <div className="form-control">
                        <label className="label my-3 ">
                            <p className="text-[20px] text-white font-[500] ">Email</p>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered
        p-2 rounded-md border-0 btn-outline text-[15px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2" />
                    </div>

                    <div className="form-control my-5">
                        <label className="label my-3">
                            <p className="text-[20px] text-white font-[500] ">Message</p>
                        </label>
                        <textarea placeholder="message" className="textarea textarea-bordered textarea-lg w-full h-[150px]
        p-2 rounded-md border-0 btn-outline text-[15px] font-[400]   hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2" ></textarea>
                    </div>



                    <button className="py-3 my-10 rounded-md border-0 btn-outline text-[20px] font-[400] w-full  hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2 "
                    >Submit</button>

                </section>

            </div>
        </div>


    );
};

export default HomeContact;