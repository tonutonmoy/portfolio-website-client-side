
import './HomeBanner.css'
import { TypeAnimation } from 'react-type-animation';


const HomeBanner = () => {



  return (
    <div className='home-banner-container  bg-fixed  relative h-[670px] md:h-[886px] '  >

      <div className='home-banner-shadow h-[670px] md:h-[886px]'>

      </div>


      <div className=' absolute top-[60%] w-[90%] left-[10%] md:w-[70%] md:top-[58%] lg:top-[65%] xl:top-[60%] 2xl:top-[60%] md:left-[19%]'>
        <h2  className='font-mono			 text-[30px] md:text-[40px] lg:text-[45px] xl:text-[50px] 2xl:text-[60px] font-[700] 
         text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-700
        '>I'm Showmik Arifen  Tonmoy </h2>

        <div className='text-[20px] md:text-[30px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px] font-[500] font-mono	 
       text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 '>
          
          
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            'MERN-Stack Developer',
            1000,
            'Frontend Developer',
            1000,
            'React Developer',
            1000,
            'Javascript Developer',
            1000,
          ]}
          speed={50}
          
          repeat={Infinity}
        />
       
           </div>

      



        <div className='   my-10'>
          <a href="Resume.pdf" download='Resume.pdf'
            target="__blank" className=' text-white p-2 md:p-2 lg:p-3  xl:p-3r 2xl:p-3 rounded-md t  ring-blue-500 ring-2   
            text-[12px] md:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[18px] font-[400] '>Download Resume</a>
        </div>
 
      </div>


    </div>
  );
};

export default HomeBanner;