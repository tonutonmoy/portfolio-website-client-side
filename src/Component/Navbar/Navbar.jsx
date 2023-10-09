

import { useContext } from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {

  const {setMode} = useContext(AuthContext)


  const navLink = < >
    <ActiveLink to='/'>
      <li className=" active-link text-[17px] md:text-[17px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px]  mt-5  text-center font-[400] text-white">Home</li>
    </ActiveLink>


    <ActiveLink to='/skills'>
      <li className=" active-link text-[17px] md:text-[17px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] mt-5  text-center font-[400] text-white">Skills</li>
    </ActiveLink>



    <ActiveLink to='/projects'>
      <li className=" active-link text-[17px] md:text-[17px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] mt-5  text-center font-[400] text-white">Projects</li>
    </ActiveLink>

    <ActiveLink to='/resume'>
      <li className=" active-link text-[17px] md:text-[17px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] mt-5  text-center font-[400] text-white">Resume</li>
    </ActiveLink>

    <ActiveLink to='/about'>
      <li className=" active-link text-[17px] md:text-[17px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] mt-5  text-center font-[400] text-white">About</li>
    </ActiveLink>



    <ActiveLink to='/contact'>
      <li className=" active-link text-[17px] md:text-[17px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] my-5  text-center font-[400] text-white">Contact</li>
    </ActiveLink>

    <div className=" group  relative text-[17px] md:text-[17px]  lg:text-[20px] xl:text-[20px] 2xl:text-[20px] my-5  text-center font-[400] text-white">
      <a href="#"> Mode</a>
      <div className="absolute left-[40%] md:left-[40%] lg:left-[0%] xl:left-[0%] 2xl:left-[0%]   hidden group-hover:inline-block">
        <ul className="  menu navbar-ul menu-sm  text-center  dropdown-content mt-[49px] 2xl:mt-10  z-[1] p-2  shadow bg-black/50   rounded-box w-52
   
    ">

          <li onClick={()=>setMode('Red')} className=" text-[17px] md:text-[17px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] my-2  text-center font-[400] text-white"><button className="hover:text-white hover:bg-blue-500" >Red-Blue mode</button></li>

          <li onClick={()=>setMode('Blue')} className=" text-[17px] md:text-[17px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] my-2  text-center font-[400] text-white"><button className="hover:text-white hover:bg-blue-500">Dark-Blue mode</button></li>

          <li onClick={()=>setMode('Green')} className=" text-[17px] md:text-[17px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] my-2  text-center font-[400] text-white"><button className="hover:text-white hover:bg-blue-500">Green-Blue mode</button></li>

          <li onClick={()=>setMode('Dark')} className=" text-[17px] md:text-[17px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] my-2  text-center font-[400] text-white"><button className="hover:text-white hover:bg-blue-500" >Dark mode</button></li>

        </ul>
      </div>

    </div>




  </>

  return (
    <div className="navbar bg-blue-500 lg:flex lg:justify-center  items-center  bg-opacity-[0] py-10 fixed z-10">
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost text-blue-500  lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className='menu navbar-ul menu-sm  dropdown-content mt-3 z-[1] p-2  shadow bg-black/50   rounded-box w-52'>
            {navLink}
          </ul>
        </div>

      </div>
      <div className="navbar-center hidden lg:flex  justify-center">
        <ul className="menu menu-horizontal px-1 navbar-ul  gap-10">
          {navLink}
        </ul>
      </div>

    </div>
  );
};

export default Navbar;