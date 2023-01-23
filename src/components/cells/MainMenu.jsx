import "../../assets/styles/MainMenu.css"
import Presentation from "../../assets/images/Presentation.jpeg"
import ButtonLayout from "../molecules/ButtonLayout.jsx"
import Subtitle from "../atoms/Subtitle.jsx";
function MainMenu() {

    const buttonTitle = [
        {name: "English Language Fluency"},
        {name: "Spanish Language Fluency"},
        {name: "CSS Language Fluency"}
    ]

    return(

        <div className="MenuDisplay">
                <aside>
                    <img src={Presentation}/>
                    <Subtitle robotoText={"My Skills:"}/>
                    <ButtonLayout ButtonAmmount={buttonTitle}/>
                </aside>
        </div>

    )
}

export default MainMenu;