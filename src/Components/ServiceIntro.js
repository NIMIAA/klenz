import React from 'react';
import ServiceImage from '../Assets/serviceintroimg.png';
import ServiceImageProper from '../Assets/serviceintroproper.png';
import AboutIcon from '../Assets/aboutpageicon.png';

const ServiceIntro = () => {
  return (
    <div className='servicepage-intro'>
        <div className="servicepage-intro-image">
            <img src={ServiceImage}/>
        </div>
        <div className="servicepage-intro-image-proper">
            <img src={ServiceImageProper}/>
        </div>
        <div className="servicepage-intro-top">
            
                <div className="servicepage-intro-text">
                    <p>SERVICES</p>
                    <h2>DIVERSE PHOTOGRAPHY OFFERINGS</h2>
                    <p>Unlock the full spectrum of professional photography services tailored to your vision. From timeless portraits to captivating event coverage, I bring a unique blend of creativity and technical expertise to each project.</p>
                </div>
        
            
        <div className="servicepage-intro-bottom">
            <div className="intro-bottom-icon">
                <img src={AboutIcon}/>
            </div>
            <div className="intro-bottom-text">
                <h6>SCROLL DOWN TO <br /> SEE ALL SERVICES</h6>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ServiceIntro;