
import './HomeBanner.css'
import { TypeAnimation } from 'react-type-animation';


const HomeBanner = () => {



  return (
    <div className='home-banner-container  bg-fixed  relative h-[670px] md:h-[886px] '  >

      <div className='home-banner-shadow h-[670px] md:h-[886px]'>

      </div>


      <div className=' absolute top-[60%] w-[90%] left-[10%] md:w-[70%] md:top-[45%] md:left-[19%]'>
        <h2  className='font-mono			 text-[40px] md:text-[60px] font-[700] 
         text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-700
        '>I'm Showmik Arifen  Tonmoy </h2>

        <div className='text-[25px] md:text-[40px] font-[500] font-mono	 
       text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500'>
          
          
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

      



        <div className='  my-10'>
          <a href="Resume.pdf" download='Resume.pdf'
            target="__blank" className=' p-3 rounded-[10px] text-[15px] border-0 btn-outline md:text-[20px] font-[400]  ring-blue-500 ring-2  hover:scale-105    hover:bg-opacity-0 text-white  '>Download Resume</a>
        </div>

      </div>


    </div>
  );
};

export default HomeBanner;