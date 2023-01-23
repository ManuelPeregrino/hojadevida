import "/src/assets/styles/Header.css"
import Title from '../atoms/Title'
import Subtitle from "../atoms/Subtitle.jsx";
import ButtonLayout from "../molecules/ButtonLayout.jsx";
function Header() {

    return(

        <>
            <header className={"MainHeader"}>
                <Title cursiveText={"Pilgrim"}/>
                <Subtitle robotoText={"Manuel Alejandro Peregrino Clemente"}/>
                <Subtitle robotoText={"FullStack Software Developer"}/>
            </header>
        </>

    )

}

export default Header;