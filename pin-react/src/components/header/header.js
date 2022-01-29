import react from "react";
import logo from "../../styles/images/top-logo.png"
import Carrusel from "./Carrusel";
function Header(){
    return(
        <header class="header" id="header">
            <Carrusel/>
            <div class= "flex-container">
                <div class="logo"> 
                    <img src={logo} alt="logo"/>
                </div>
                <nav class="menu">
                    <ul class="listaFlex">
                            <li><a href="#header">Home</a></li>
                            <li><a href="#s2">About</a></li>
                            <li><a href="#s3">Products</a></li>
                            <li><a href="#s4">Services</a></li>
                            <li><a href="#s5">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div class="textoFlex">
                <h1 class="Titulo">
                 Sed ut perspiciatis<br/>
                 unde omnis iste natus
                </h1> 
                <h2 class="Titulo2">
                    <p>Sed ut perspiciatis unde omnis iste natus error </p>
                    <p>sit voluptatem accusantium doloremque.</p>
                </h2>
                
            </div>
            <button id="readMore" class="ReadMore"><p>Read more</p>
              
                </button>     
        </header>

    )
}

export default Header;