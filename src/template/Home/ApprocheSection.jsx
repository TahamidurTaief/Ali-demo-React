import React from 'react';
import ApprocheCard from './ApprocheCard';


function ApprocheSection() {
    return ( 
        <>
        <section className='service'>
            <div className="container">
                <div className="head">
                    <div className="icon"><i class="fa-solid fa-play"></i></div>
                    <h2>Débloquez le potentiel de votre<br />Business avec nos Experts</h2>
                </div>
            </div>

            <h2 className='approche-title'>Une approche<br />méthodologique Gagnante</h2>
        </section>
            <ApprocheCard />
            </>
    );
}

export default ApprocheSection;