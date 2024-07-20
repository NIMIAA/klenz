import React from 'react';
import PFaces from '../Assets/portraitsfaces.png';
import PInnocense from '../Assets/portraitinnocense.png';
import PElegance from '../Assets/portraitelegance.png';
import EWedding from '../Assets/eventwedding.png';
import ESummit from '../Assets/eventsummit.png';
import EFestival from '../Assets/eventfestival.png';
import CProduct from '../Assets/commercialproduct.png';
import CBrand from '../Assets/commercialbrand.png';
import CCulinary from '../Assets/commercialculinary.png';
import Arrow from '../Assets/linkarrow.png';

const Portfolio = () => {
  return (
    
    <div className="portfolio-container">
        <hr />
        <div className="portfolio-section">
        <div className="portfolio-head">
            <div className="portfolio-head-text">
                <h2>PORTRAIT PHOTOGRAPHY</h2>
            </div>
            <div className="portfolio-head-btn"></div>
        </div>

    <div className="portfoliopage-info">
    <div className="portfolio-card">
        <img src={PFaces} alt="" />
        <p>Faces of Resillience</p>
        <div className="project-link">
        <p>March 2022</p>
        <a href="#">VIEW PROJECT
        </a>
        <img src={Arrow}/>
        </div>
        
    </div>
    <div className="portfolio-card mobile-view-slide">
        <img src={PInnocense} alt="" />
        <p>Innocence Unveiled</p>
        <div className="project-link">
        <p>January 2023</p>
        <a href="">VIEW PROJECT
        </a>
        <img src={Arrow}/>
        </div>
        
    </div>
    <div className="portfolio-card mobile-view-slide">
        <img src={PElegance} alt="" />
        <p>Elegance In Monochrome</p>
        <div className="project-link">
        <p>January 2020</p>
        <a href="#">VIEW PROJECT
        </a>
        <img src={Arrow}/>
        </div>
        
    </div>

    </div>
        </div>
        <hr />
        <div className="portfolio-section">
        <div className="portfolio-head">
            <div className="portfolio-head-text">
                <h2>EVENTS PHOTOGRAPHY</h2>
            </div>
            <div className="portfolio-head-btn"></div>
        </div>

    <div className="portfoliopage-info">
    <div className="portfolio-card">
        <img src={EWedding} alt="" />
        <p>A Wedding Tale</p>
        <div className="project-link">
        <p>September 2021</p>
        <a href="#">VIEW PROJECT
        </a>
        <img src={Arrow}/>
        </div>
        
    </div>
    <div className="portfolio-card mobile-view-slide">
        <img src={ESummit} alt="" />
        <p>Corporate Excellence Summit</p>
        <div className="project-link">
        <p>November 2019</p>
        <a href="">VIEW PROJECT
        </a>
        <img src={Arrow}/>
        </div>
        
    </div>
    <div className="portfolio-card mobile-view-slide">
        <img src={EFestival} alt="" />
        <p>Festival of Colors</p>
        <div className="project-link">
        <p>March 2018</p>
        <a href="#">VIEW PROJECT
        </a>
        <img src={Arrow}/>
        </div>
        
    </div>

    </div>
        </div>
        <hr />
        <div className="portfolio-section">
        <div className="portfolio-head">
            <div className="portfolio-head-text">
                <h2>COMMERCIAL PHOTOGRAPHY</h2>
            </div>
            <div className="portfolio-head-btn"></div>
        </div>

    <div className="portfoliopage-info">
    <div className="portfolio-card">
        <img src={CProduct} alt="" />
        <p>Product Elegance</p>
        <div className="project-link">
        <p>August 2020</p>
        <a href="#">VIEW PROJECT
        </a>
        <img src={Arrow}/>
        </div>
        
    </div>
    <div className="portfolio-card mobile-view-slide">
        <img src={CBrand} alt="" />
        <p>Brand Storytelling</p>
        <div className="project-link">
        <p>May 2019</p>
        <a href="">VIEW PROJECT
        </a>
        <img src={Arrow}/>
        </div>
        
    </div>
    <div className="portfolio-card mobile-view-slide">
        <img src={CCulinary} alt="" />
        <p>Culinary Delights</p>
        <div className="project-link">
        <p>February 2017</p>
        <a href="#">VIEW PROJECT
        </a>
        <img src={Arrow}/>
        </div>
        
    </div>

    </div>
        </div>
    </div>
    
  )
}

export default Portfolio;