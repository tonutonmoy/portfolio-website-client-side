
import'./HomeBanner.css'

const HomeBanner = () => {
    return (
        <div className='home-banner-container  bg-fixed  relative'  >

          
          <div className=' absolute w-[70%] top-[40%] left-[19%]'>
            <h2 className=' text-[60px] font-[700] text-white'>I am Showmik Arifen Tonmoy </h2>
            <p className=' text-[40px] font-[500] text-white'>MERN stack developer </p>


            
             <div>
                <button className='btn border-0 btn-outline text-[20px] font-[400]  ring-blue-500 ring-2  hover:scale-105    hover:bg-opacity-0 text-white  '>Download Resume</button>
             </div>
          
          </div>
            

        </div>
    );
};

export default HomeBanner;