import React from 'react';
import PortfolioPageImg from '../Assets/PortfolioIntroimg.png';
import AboutImageProper from '../Assets/aboutimageproper.png';
import AboutIcon from '../Assets/aboutpageicon.png';

const PortfolioIntro = () => {
  return (
    <div className='portfoliopage-intro'>
        <div className="portfoliopage-intro-image">
            <img src={PortfolioPageImg} alt="" />
        </div>
        <div className="portfoliopage-intro-image-proper">
            <img src={AboutImageProper}/>
        </div>
        <div className="portfoliopage-intro-top">
            
                <div className="portfoliopage-intro-text">
                    <h3>PORTFOLIO</h3>
                    <h2>VISUAL POETRY IN PIXELS</h2>
                    <p>Step into a visual journey that encapsulates the essence of my lens. Each photograph in this portfolio is a narrative, a frozen moment in time, and a testament to the artistry and passion poured into every frame. Explore the diverse tapestry of stories I've had the privilege to capture and witness the world through my lens.</p>
                </div>

        
            
        <div className="potfoliopage-intro-bottom">
            <div className="intro-bottom-icon">
                <img src={AboutIcon}/>
            </div>
            <div className="intro-bottom-text">
                <h6>SCROLL DOWN TO <br /> SEE THE WORKS</h6>
            </div>
        </div>
        </div>
    </div>
  )
}

export default PortfolioIntro;