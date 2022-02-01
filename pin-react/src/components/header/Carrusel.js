import react from "react";
import slider1 from "../../styles/images/slider-1.png"
import slider2 from "../../styles/images/Coron.png"
import slider3 from "../../styles/images/estrellas.jpeg"
import Header from "./header";

function Carrusel(){
    return(
    
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img id="slider" src={slider1} className="d-block w-100" alt="slider1"/>
        </div>
        <div className="carousel-item">
          <img id="slider" src={slider2} className="d-block w-100" alt="slider2"/>
        </div>
        <div className="carousel-item">
          <img id="slider" src={slider3} className="d-block w-100" alt="slider3"/>
        </div>
      </div>
      
    </div>
    
    )
}

export default Carrusel;