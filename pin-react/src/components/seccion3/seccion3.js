import react from "react";

function Section3(){
    return(
        <section className="s3" id="s3">
            <div className="s3Content">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div id="carousel-inner-s3" className="carousel-inner">
                      <div className="carousel-item active">
                        <p><h2 className="s2h2">Sed ut perspiciatis </h2></p>
                        <p><h1 className="s2h1">Nemo Enim </h1></p>
                        <p><h2 className="s2h2">Sed ut perspiciatis unde omnis iste natus error sit <br/>
                            voluptatem accusantium doloremque laudantium,  <br/>
                            totam rem aperiam. 
                           </h2>
                        </p>
                      </div>
                      <div className="carousel-item">
                        <p><h2 className="s2h2">Sed ut perspiciatis 2</h2></p>
                        <p><h1 className="s2h1">Nemo Enim 2</h1></p>
                        <p><h2 className="s2h2">Sed ut perspiciatis unde omnis iste natus error sit 2<br/>
                            voluptatem accusantium doloremque laudantium, 2 <br/>
                            totam rem aperiam. 2
                           </h2>
                        </p>
                     </div>
                      <div className="carousel-item">
                        <p><h2 className="s2h2">Sed ut perspiciatis 3</h2></p>
                        <p><h1 className="s2h1">Nemo Enim 3</h1></p>
                        <p><h2 className="s2h2">Sed ut perspiciatis unde omnis iste natus error sit 3 <br/>
                            voluptatem accusantium doloremque laudantium, 3 <br/> 
                            totam rem aperiam. 3
                           </h2>
                        </p>
                      </div>
                    </div>
                    <button id="controlPrev" className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button id="controlNext" className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>

    )
}

export default Section3;