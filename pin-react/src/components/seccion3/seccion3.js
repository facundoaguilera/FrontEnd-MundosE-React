import react from "react";

function Section3(){
    return(
        <section class="s3" id="s3">
            <div class="s3Content">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <p><h2 class="s2h2">Sed ut perspiciatis </h2></p>
                        <p><h1 class="s2h1">Nemo Enim </h1></p>
                        <p><h2 class="s2h2">Sed ut perspiciatis unde omnis iste natus error sit <br/>
                            voluptatem accusantium doloremque laudantium,  <br/>
                            totam rem aperiam. 
                           </h2>
                        </p>
                      </div>
                      <div class="carousel-item">
                        <p><h2 class="s2h2">Sed ut perspiciatis 2</h2></p>
                        <p><h1 class="s2h1">Nemo Enim 2</h1></p>
                        <p><h2 class="s2h2">Sed ut perspiciatis unde omnis iste natus error sit 2<br/>
                            voluptatem accusantium doloremque laudantium, 2 <br/>
                            totam rem aperiam. 2
                           </h2>
                        </p>
                     </div>
                      <div class="carousel-item">
                        <p><h2 class="s2h2">Sed ut perspiciatis 3</h2></p>
                        <p><h1 class="s2h1">Nemo Enim 3</h1></p>
                        <p><h2 class="s2h2">Sed ut perspiciatis unde omnis iste natus error sit 3 <br/>
                            voluptatem accusantium doloremque laudantium, 3 <br/> 
                            totam rem aperiam. 3
                           </h2>
                        </p>
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>

    )
}

export default Section3;