import React from 'react';
import AboutImage from '../Assets/aboutImage.png';
import AboutImageProper from '../Assets/aboutimageproper.png';
import AboutIcon from '../Assets/aboutpageicon.png';

const AboutIntro = () => {
  return (
    <div className='aboutpage-intro'>
        
        <div className="aboutpage-intro-image">
            <img src={AboutImage}/>
        </div>
        <div className="aboutpage-intro-image-proper">
            <img src={AboutImageProper}/>
        </div>
        <div className="aboutpage-intro-top">
            
                <div className="aboutpage-intro-text">
                    <p>ABOUT</p>
                    <h2>ABOUT KLENZ PICTURES</h2>
                </div>
                <div className="aboutpage-intro-columns">
                    <div className="intro-column-div">
                    <div className="intro-column">
                        <h2>15+</h2>
                        <p>Years in Business</p>
                    </div>
                    <div className="intro-column">
                        <h2>10+</h2>
                        <p>Photography Awards</p>
                    </div>
                    <div className="intro-column">
                        <h2>10,000+</h2>
                        <p>Social Media Followers</p>
                    </div>
                    </div>
                    <div className="intro-column-div">
                    <div className="intro-column">
                        <h2>500+</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className="intro-column">
                        <h2>05+</h2>
                        <p>International Shoots</p>
                    </div>
                    <div className="intro-column">
                        <h2>90+</h2>
                        <p>Client Retention Rate</p>
                    </div>
                    </div>
                </div>
        
            
        <div className="aboutpage-intro-bottom">
            
                <img src={AboutIcon}/>
           
            <div className="intro-bottom-text">
                <h6>SCROLL DOWN TO <br /> SEE MY JOURNEY</h6>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutIntro;