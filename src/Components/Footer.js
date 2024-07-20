import React from 'react';
import Facebook from '../Assets/facebookicon.png';
import Twitter from '../Assets/twittericon.png';
import Linkedin from '../Assets/linkedinicon.png'
import Left from '../Assets/footerimage.png';
import Right from '../Assets/footerimage2.png';
import { HashLink as Link } from 'react-router-hash-link';
const Footer = () => {
  return (
    <>
   
    <div className="footer">

    
        <div className='footer-container'>
            <div className="footer-edge">
                <div className="edge-image"><img src={Left} alt="" /></div>
                <div className="edge-image-ii"><img src={Right} alt="" /></div>
            </div>
            <div className="footer-main">
                <div className="footer-left">
                    <h3>STUNNING PHOTOGRAPHY BY</h3>
                    <h1>KLENZ PICTURES</h1>
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
                <div className="footer-right">
                    <div className="footer-right-link">
                        <div className="right-links">
                            <h5>HOME</h5>
                            <Link smooth to='/about'>ABOUT ME</Link>
                            <Link smooth to='/portfolio'>MY WORKS</Link>
                            <Link smooth to='/testimonial'>TESTIMONIALS</Link>
                        </div>
                        <div className="right-links">
                            <h5>CLIENTS</h5>
                            <a href="">KLOVESTO</a>
                            <a href="">NUKEWAY</a>
                            <a href="">CLOVEN'S</a>
                            <a href="">MENVOL</a>
                        </div>
                    </div>
                    <div className="footer-right-link">
                    <div className="right-links">
                            <h5>PORTFOLIO</h5>
                            <a href="">EVENTS</a>
                            <a href="">PORTRAIT</a>
                            <a href="">BRANDING</a>
                            <a href="">COMMERCIALE</a>
                            <a href="">WEDDING</a>
                        </div>
                        <div className="right-links">
                            <h5>SERVICES</h5>
                            <a href="">PORTRAITS</a>
                            <a href="">EVENTS</a>
                            <a href="">COMMERCIAL</a>
            
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <div className="footer-foot">
                <div className="footer-foot-left">
                    <a href=""><p>Terms & Conditions | Privacy Policy</p></a>
                </div>
                <div className="footer-foot-right">
                    <p>2024 Klenz Picture photography. All rights reserved</p>
                </div>
            </div>
            
           
            </>
  )
}

export default Footer;