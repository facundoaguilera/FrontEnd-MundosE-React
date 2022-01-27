import react from "react";
import s5image from "../../styles/images/contact-image.png"; 
function Section5(){
    return(
        <section class="s5">
            
            <div class="s5Content">
              
                    <div class="s5Form">
                        <div class="s5title">
                          <h1 class="S2Title">  <p>Get in touch</p>
                            <p class="S2Subtitle">We are hiring!</p>
                          </h1>
                    </div>
                        <input type="text" name="nombre" id="nombre" placeholder="Name"/>
                        <input type="text" name="Email" id="Email" placeholder="Email"/>
                        <input type="number" name="Phone" id="Phone" placeholder="Phone"/>
                        <input type="text" name="Message" id="Message" placeholder="Message"/>
                        <button class="ReadMore"><p>
                          Send
                        </p>

                        </button>
                    </div>
                    <div class="s5img" id="boton2">
                        <img src={s5image} alt=""/>
                    </div>
            </div>
            
        </section>

    )
}

export default Section5;