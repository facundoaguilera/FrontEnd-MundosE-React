import react from "react";
import slider1 from "../../styles/images/slider-1.png"
import slider2 from "../../styles/images/section3-image.png"
import slider3 from "../../styles/images/section4-image.png"
import Header from "./header";

function Carrusel(){
    return(
    
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img id="slider" src={slider1} class="d-block w-100" alt="slider1"/>
        </div>
        <div class="carousel-item">
          <img id="slider" src={slider2} class="d-block w-100" alt="slider2"/>
        </div>
        <div class="carousel-item">
          <img id="slider" src={slider3} class="d-block w-100" alt="slider3"/>
        </div>
      </div>
      
    </div>
    
    )
}

export default Carrusel;