import img from '../../assets/homeAbout/DSC_0064.jpg'
import './HomeAbout.css'

const HomeAbout = () => {
    return (
        <div className='w-[90%] mx-auto my-[120px] py-[120px]'>
            
           



            <div className='grid grid-cols-2 gap-20'>

              <section  style={{boxShadow:'5px 5px 20px rgb(59 130 246)'}} className='p-10 border-l-4 border-blue-500
                 rounded-[50%] relative home-about-img-section group  '>
                   
                   <span style={{boxShadow:'5px 5px 20px rgb(59 130 246)'}} className='text-white text-[50px] font-[500] absolute top-[45%] left-[15%]  ring-4  px-10  ml-[-1000px]  group-hover:ml-0  group-hover:inline  duration-[2s]	'>MERN STACK</span>
                    
                <img className='h-[700px] w-full  hover:scale-105 duration-[2s]  border-l-[10px] border-blue-500 rounded-[30px] group-hover:border-l-[500px] group-hover:border-blue-500/10  group-hover:ml-[300px]  ' src={img} alt=""
                style={{boxShadow:'5px 5px 20px rgb(59 130 246)'}} />
              </section>

              <section >
              <h3 className=' text-white text-[30px] text-[500] text-center my-[100px]  border-b-2 pb-2  border-blue-500 w-[27%] mx-auto    '>About Me</h3>
                <p className=" text-white text-[20px] font-[400]  hover:scale-110 duration-[2s]">My name is Showmik arifen Tonmoy, and I am a junior web developer with nearly 12 months of learning experience. I have acquired a diverse skill set, including proficiency in React.js, HTML, CSS, Bootstrap, Tailwind, JavaScript, Express.js, Node.js,FireBase and MongoDB. I am also knowledgeable about authentication using Google Firebase and proficient in utilizing various development tools... <button className='p-2 rounded-md border-0 btn-outline text-[15px] font-[400]   hover:scale-105    hover:bg-opacity-0 text-white ring-blue-500 ring-2  '>See More</button>
                 
                </p>
               
              </section>

            </div>
        </div>
    );
};

export default HomeAbout;