import React from 'react';




function RaisonsSection() {
    return ( 
        <>
        <section className="raisons">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h2 className="raisons-title">03 Raisons de choisir <span style={{color:"#C33131"}}>Média Intelligence</span></h2>
                        <img src="public/static/img/medium-shot-male-flight-attendant-posing 1.png" alt="" />
                    </div>



                    <div className="col-md-7">
                        <div className="discover-btn-container">
                            <button className="discover-btn">
                            Discover More &nbsp;&nbsp;
                            <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                        <div className="row raisons-content mt-5">
                            <div className="col-2 count-num">
                            01
                            </div>
                            <div className="col-10">
                            <h2>Expertise Avérée</h2>
                            <p className="mt-3">Nous mettons à votre service une équipe d'experts chevronnés en recherche média, commerciale et digitale.</p>
                            </div>
                        </div>

                        <hr style={{border:"1px solid #000000"}}/>


                        <div className="row raisons-content mt-4">
                            <div className="col-2 count-num">
                            02
                            </div>
                            <div className="col-10">
                            <h2>Solutions Personnalisées</h2>
                            <p className="mt-3">Nous comprenons que chaque entreprise a des besoins uniques. C'est pourquoi nous offrons des solutions sur mesure, adaptées spécifiquement à vos objectifs et défis.</p>
                            </div>
                        </div>

<hr style={{border:"1px solid #000000"}}/>

                        <div className="row raisons-content mt-4" style={{borderBottom:"0px solid white"}}>
                            <div className="col-2 count-num">
                            03
                            </div>
                            <div className="col-10">
                            <h2>Approche Innovante</h2>
                            <p className="mt-3">Nous utilisons les dernières technologies et techniques de recherche pour vous fournir des analyses de pointe et des données pertinentes.</p>
                            </div>
                        </div>
                        </div>




                        

                </div>
            </div>
            </section>
        </>
     );
}

export default RaisonsSection;