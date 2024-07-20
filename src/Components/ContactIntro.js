import React from 'react';
import ContactImage from '../Assets/ContactImage.png';
import ContactImageProper from '../Assets/ContactImageProper.png';
import Facebook from '../Assets/facebookicon.png';
import Twitter from '../Assets/twittericon.png';
import Linkedin from '../Assets/linkedinicon.png';

const ContactIntro = () => {
  return (
    
        <div className='contactpage-intro'>
        <div className="contactpage-intro-image">
            <img src={ContactImage}/>
        </div>
        <div className="contactpage-intro-image-proper">
            <img src={ContactImageProper}/>
        </div>
        <div className="contactpage-intro-top">
            
                <div className="contactpage-intro-text">
                    <h3>CONTACT ME</h3>
                    <p>Step into a world of timeless photography with Klenz Pictures. Explore our range of photography services, each crafted to tell your unique story through captivating images. Whether it's the magic of portraits, the emotion of events, or the allure of commercial photography, we're here to bring your vision to life.</p>
                </div>
        
            
        <div className="contactpage-intro-bottom">
            <div className="intro-bottom-icon">
            <button className='socials-button'>
                  <div className="socials">
                  <img src={Facebook} alt="" />
                  </div>
                  <div className="socials">
                  <img src={Twitter} alt="" />
                  </div>
                  <div className="socials">
                  <img src={Linkedin} alt="" />
                  </div>
            </button>
            </div>
            <div className="contact-bottom-text">
                <h6>SCROLL DOWN TO <br /> SEND ME A MESSAGE</h6>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ContactIntro;