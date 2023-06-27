import HomeAbout from "../HomeAbout/HomeAbout";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeProject from "../HomeProject/HomeProject";
import HomeSkills from "../HomeSkills/HomeSkills";



const Home = () => {

    return(

    <div >
       <HomeBanner></HomeBanner>
       <HomeAbout></HomeAbout>

       <HomeSkills></HomeSkills>

       <HomeProject></HomeProject>
    </div>
    );
 
};

export default Home;