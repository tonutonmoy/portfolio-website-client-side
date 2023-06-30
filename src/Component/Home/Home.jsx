
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeProject from "../HomeProject/HomeProject";
import HomeSkills from "../HomeSkills/HomeSkills";
import HomeContact from "./HomeContact/HomeContact";



const Home = () => {


    const title= document.getElementById('title')

    title.innerText='Home' 
   

    return(


    <div >


       <HomeBanner></HomeBanner>

       <HomeAbout></HomeAbout>

       <HomeSkills></HomeSkills>

       <HomeProject></HomeProject>

       <HomeContact></HomeContact>
    </div>
    );
 
};

export default Home;