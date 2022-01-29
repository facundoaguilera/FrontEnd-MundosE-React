import React,{useState} from "react";
import Section5 from "./seccion5";
import Formulario from "./Formulario";
import s5image from "../../styles/images/contact-image.png"; 
import logo from "../../styles/images/top-logo.png"


function Section5F(){
    
   
    return (
        // <div>
        //     
        //     {/* {<Section5/>} */} original
        // </div>
        <footer class="s5" id="s5">
            
            <div class="s5Content">
              
                    <div class="s5Form">
                        <div class="s5title">
                          <h1 class="S2Title">  <p>Get in touch</p>
                            <p class="S2Subtitle">We are hiring!</p>
                          </h1>
                        </div>
                        <Formulario/>
                    </div>
                    <div class="s5img">
                        <img src={s5image} alt=""/>
                    </div>
            </div>
            <div className="piePag">
                            <div>2020 © All rights reserved.</div>
                            <div><img src={logo} alt="logo"/></div>
            </div>
            
        </footer>
    )
        
    
}
export default Section5F;
