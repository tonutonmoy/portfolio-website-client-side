import { Link } from "react-router-dom";

import ActiveLink from "../ActiveLink/ActiveLink";

const Navbar = () => {

    const navLink=< >
       <ActiveLink to='/'>
       <li className=" active-link text-[20px] font-[400] text-white">Home</li>
       </ActiveLink>

    
    <ActiveLink to='/skills'>
       <li className=" active-link text-[20px] font-[400] text-white">Skills</li>
       </ActiveLink>
    
  

       <ActiveLink to='/projects'>
       <li className=" active-link text-[20px] font-[400] text-white">Projects</li>
       </ActiveLink>

       <ActiveLink to='/resume'>
       <li className=" active-link text-[20px] font-[400] text-white">Resume</li>
       </ActiveLink>

       <ActiveLink to='/about'>
       <li className=" active-link text-[20px] font-[400] text-white">About</li>
       </ActiveLink>
         
       

      <ActiveLink to='/contact'>
      <li className=" active-link text-[20px] font-[400] text-white">Contact</li>
      </ActiveLink>

       
    </>

    return (
        <div className="navbar bg-blue-500 lg:flex lg:justify-center  items-center  bg-opacity-[0] py-10 fixed z-10">
  <div className=""> 
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul  tabIndex={0} className="menu navbar-ul menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLink}
      </ul>
    </div>
   
  </div>
  <div className="navbar-center hidden lg:flex justify-center">
    <ul className="menu menu-horizontal px-1 navbar-ul  gap-10">
     {navLink}
    </ul>
  </div>
 
</div>
    );
};

export default Navbar;