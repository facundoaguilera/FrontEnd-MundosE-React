import react from "react";
function Header(){
    return(
        <header class="header">
            <div class= "flex-container">
                <div class="logo"> 
                    <img src="./images/top-logo.png" alt=""/>
                </div>
                <ul class="listaFlex">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                </ul>
                
            </div>
            <div class="textoFlex">
                <h1 class="Titulo">
                 <p>Sed ut perspiciatis</p>
                 <p>  unde omnis iste natus</p>
                </h1> 
                <h2 class="Titulo2">
                    <p>Sed ut perspiciatis unde omnis iste natus error </p>
                    <p>sit voluptatem accusantium doloremque.</p>
                </h2>
                  
            </div>
            <button class="ReadMore"><p>Read more</p>
              
            </button>     
        </header>

    )
}

export default Header;