import React from 'react';
import HeroCard from './HeroCard';

function Hero() {
    return ( 
        <div className="hero-section">
        <div className="left-half">
          <div className="content-wrapper ml-3">
            <div className="hero-heading">Media Intelligence</div>
            <div className="hero-description">
              Votre partenaire stratégique en recherche et intelligence d'affaires. Spécialisés dans la recherche média, commerciale et digitale, nous mettons à votre disposition notre expertise pour vous fournir des informations précises et pertinentes.
            </div>

            
            <div className="d-flex align-items-center hero-button-stats">
            <button className="hero-button">
                En savoir plus &nbsp;&nbsp;
                <i class="fa-solid fa-arrow-right"></i>
              </button>
              <div className="hero-stats d-flex align-items-center">
                <div className="stat-item">
                  <img src="static/img/hero/Ellipse_1456.png" alt="Person 1" className="stat-image"/>
                  <img src="static/img/hero/Ellipse 1457.png" alt="Person 1" className="stat-image" style={{marginLeft:"-30px"}}/>
                  <img src="static/img/hero/Ellipse 1458.png" alt="Person 1" className="stat-image"  style={{marginLeft:"-30px"}}/>
                  <div className="stat-text">
                    <div className="stat-bold">100+</div>
                    <div className="stat-subtext">Clients Entreprises</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="right-half">
          <img src="static/img/i-need-you-all-see-this-presentation-shot-team-businesspeople-gathered-around-laptop-office 1.png" alt="Right Side" />
        </div>
      </div>





    );
}

export default Hero;