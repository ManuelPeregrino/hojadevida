import Subtitle from "../atoms/Subtitle.jsx";
import "../../assets/styles/Body.css"
import MainMenu from "./MainMenu.jsx";
import Text from "./Text.jsx";
import Icon from "../atoms/Icon.jsx";
import Whatsapp from "../../assets/images/whatsapp.png"
import Instagram from "../../assets/images/instagram.png"
import Facebook from "../../assets/images/facebook.png"

function Body() {

    const AboutMe = "I'm a Software Engineer Student at Universidad Politecnica de Chiapas." +
        "My main focus is UI/UX design with investigation purposes. Mainly for AI and Deep Learning."

    const ProfessionalExperience = "I have been an English Teacher since 2019. I've trained more than 40 students across all ages in Mexico."

    const PersonalKnowledge = "I have experience using digital Design Tools such as Figma, Canva, Paint Tool SAI and Corel Draw" + "I have knowledge in 3D Modeling and printing" +
        "and have been working in several personal woodworking and engineering projects"

    return(

        <div className= "DisplayedInfo">
            <MainMenu/>
            <main>
                <Subtitle robotoText={"About Me"}/>
                <Text text={AboutMe}/>
                <Subtitle robotoText={"Professional Experience"}/>
                <Text text={ProfessionalExperience}/>
                <Subtitle robotoText={"Personal Knowledge"}/>
                <Text text={PersonalKnowledge}/>
                <Subtitle robotoText={"Contact Me!!!"}/>
                <div className={"ContactBox"}>
                    <a href={"https://www.facebook.com/manuelalejandro.peregrinoclemente/"}><Icon icon={Facebook}/></a>
                    <a href={"tel: 9612458375"}><Icon icon={Whatsapp}/></a>
                    <a href={"https://www.instagram.com/pilgrim_src/"}></a><Icon icon={Instagram}/>
                </div>

            </main>
        </div>

    );

}

export default Body;