import { BsFacebook,BsLinkedin } from 'react-icons/bs';
import {GrInstagram } from 'react-icons/gr';


const Footer = () => {
    return (
<footer className="footer footer-center p-4  text-white/60 mt-40 py-[50px]
bg-black/30  ">


<div className=' flex gap-3 pb-10 border-b-[1px] border-white/60
w-[50%] mx-auto  justify-center'>
  <a href="https://www.facebook.com/tonu.tonmoy.3">
  <BsFacebook className='text-[30px] text-blue-500 '/>
  </a>

  <a href="https://www.instagram.com/show_mik_arefin_tonmoy/">
  <GrInstagram className='text-[30px] text-blue-500 '/>
  </a>

  <a href="">
  <BsLinkedin className='text-[30px] text-blue-500 '/>
  </a>
</div>

  <section>
    <p className="]   font-[400]  ">Copyright © 2023 <span className="text-blue-500">
    Showmik Arifen Tonmoy</span>. All right reserved  </p>
  </section>
</footer>
    );
};

export default Footer;