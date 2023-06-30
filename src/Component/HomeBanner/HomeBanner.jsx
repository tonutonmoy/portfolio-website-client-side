
import './HomeBanner.css'
import { TypeAnimation } from 'react-type-animation';


const HomeBanner = () => {



  return (
    <div className='home-banner-container  bg-fixed  relative '  >


      <div className=' absolute w-[70%] top-[40%] left-[19%]'>
        <h2 className=' text-[60px] font-[700] text-white'>I'm Showmik Arifen Tonmoy </h2>
        <div className=' text-[40px] font-[500] text-white'>
          
          
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

      



        <div>
          <a href="Resume.pdf" download='Resume.pdf'
            target="__blank" className='btn border-0 btn-outline text-[20px] font-[400]  ring-blue-500 ring-2  hover:scale-105    hover:bg-opacity-0 text-white  '>Download Resume</a>
        </div>

      </div>


    </div>
  );
};

export default HomeBanner;