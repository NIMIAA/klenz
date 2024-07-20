import React from 'react';
import AboutImage from '../Assets/about-image.png';
import { HashLink as Link } from 'react-router-hash-link';
import Bullet from '../Assets/klenz-bullet.svg';
import Facebook from '../Assets/facebookicon.png';
import Twitter from '../Assets/twittericon.png';
import Linkedin from '../Assets/linkedinicon.png';

const About = () => {
  return (
    <div className='about-container' id='aboutme'>
        <div className='about-head'>
            <div className='about-head-text'>
                <p className='grey-text'>ABOUT</p>
                <h2 className='subheading'>I AM KLENZ</h2>
            </div>
            <div className='about-head-button'>
                <Link smooth to="/about" className='primary-btn btn-link'> Know More -{'>'}</Link>
            </div>
        </div>
        <hr />
        <div className='about-info'>
          <div className='about-image'>
            <img src={AboutImage} alt="" />
          </div>
          <div className='about-intro'>
            <div className='about-introduction'>
              <h3><img className='bullet' src={Bullet}/>Introduction</h3>
              <p>My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time, and to share the world's beauty as I see it. Based in the enchanting landscapes of the Nigeria, I find inspiration in every corner of this diverse and vibrant country. Join me as we embark on a visual odyssey, where each photograph tells a story, and every frame is a piece of my heart.</p>
            </div>
            <div className='about-contact-info'>
              <h3><img className='bullet'src={Bullet} alt="" />Contact Information</h3>
              <div className="about-contact">
              <div className='about-contact-left'>
                <p>Email</p>
                <p>klenz@gmail.com</p>
                
              </div>
              <div className='about-contact-right'>
                <p>Phone Number</p>
                <p>+00 000000000</p>
              </div>
              </div>
              <div className="about-contact">
              <div className="about-contact-left">
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
                <div className="about-contact-right">
                <button className='secondary-btn'>Let's Work</button>
                <button className='secondary-btn'>Download CV</button>
                </div>
            </div>
              </div>
          </div>
        </div>
    </div>
  )
};

export default About;