import React,{useState} from "react";
import Formulario from "./Formulario";
import s5image from "../../styles/images/contact-image.png"; 
import logo from "../../styles/images/top-logo.png"


function Section5(){
    
   
    return (
        // <div>
        //     
        //     {/* {<Section5/>} */} original
        // </div>
        <footer className="s5" id="s5">
            
            <div className="s5Content">
              
                    <div className="s5Form">
                        <div className="s5title">
                          <h1 className="S2Title">  <p>Get in touch</p>
                            <p className="S2Subtitle">We are hiring!</p>
                          </h1>
                        </div>
                        <Formulario/>
                    </div>
                    <div className="s5img">
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
export default Section5;
