import react from "react";
import logo from "../../styles/images/top-logo.png"
import Carrusel from "./Carrusel";
import Button from "../Button";
function Header(){
    return(
        <header className="header" id="header">
            <Carrusel/>
            <div className= "flex-container">
                <div className="logo"> 
                    <img src={logo} alt="logo"/>
                </div>
                <nav className="menu">
                    <ul className="listaFlex">
                            <li><a href="#header">Home</a></li>
                            <li><a href="#s2">About</a></li>
                            <li><a href="#s3">Products</a></li>
                            <li><a href="#s4">Services</a></li>
                            <li><a href="#s5">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="textoFlex">
                <h1 className="Titulo">
                 Sed ut perspiciatis<br/>
                 unde omnis iste natus
                </h1> 
                <h2 className="Titulo2">
                    <p>Sed ut perspiciatis unde omnis iste natus error </p>
                    <p>sit voluptatem accusantium doloremque.</p>
                </h2>
                
            </div>
            {/* <button onclick="location.href='#s2'" type="button" className="ReadMore" id="readMore">
         Read More</button> */}
            <div className="ReadMore" id="readMore"> <a href="#s2" >Read More </a>
            {/* <Button  id="readMore" >Read more</Button></a> */}
            {/* <button id="readMore" className="ReadMore"><p>Read more</p>
            
            </button>      */}
            </div>
        </header>

    )
}

export default Header;