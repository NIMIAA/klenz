import React from 'react';
import Facebook from '../Assets/facebookicon.png';
import Twitter from '../Assets/twittericon.png';
import Linkedin from '../Assets/linkedinicon.png';
import Abstract from '../Assets/abstract-card.png';
import { AiFillStar } from 'react-icons/ai';

const Testimonial = () => {
  return (
    <div className='testimonial-container'>
        <p className='grey-text'>TESTIMONIALS</p>
        <h2 className='subheading'>WHAT MY CLIENTS SAY</h2>
        <div className="testimonial-head">
           
            <div className="testimonial-head-text">
            
                <p className='grey-text'>Total Reviews</p>
                <p className='light-grey'>323</p>
            </div>
            <div className="testimonial-head-button">
                <button className='primary-btn'>View All Testimonies -{'>'}</button>
            </div>
        </div>
        <hr />

        <div className="testimonial-info">
            <div className="review-highlight">
              
                    <div className="review-highlight-header">
                        <div className="username">
                            <h5>Tope Johnson</h5>
                            <p>Lagos, Nigeria</p>
                        </div>
                        <div className="user-socials">
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
                    </div>
                    <div className="review">
                        <AiFillStar color='#ffdf00'/>
                        <AiFillStar color='#ffdf00'/>
                        <AiFillStar color='#ffdf00'/>
                        <AiFillStar color='#ffdf00'/>
                        <AiFillStar color='#ffdf00'/>
                        

                        <h5>Klenz photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing.</h5>
                    </div>
                        
            
                    
            </div>
            <div className="review-highlight mobile-view-slide">
              
                    <div className="review-highlight-header">
                        <div className="username">
                            <h5>Emeka Imela</h5>
                            <p>Rivers, Nigeria</p>
                        </div>
                        <div className="user-socials">
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
                    </div>
                    <div className="review">
                        <AiFillStar color='#ffdf00'/>
                        <AiFillStar color='#ffdf00'/>
                        <AiFillStar color='#ffdf00'/>
                        <AiFillStar color='#ffdf00'/>
                        <AiFillStar color='#ffdf00'/>
                        

                        <h5>Klenz has an incredible talent for making every event feel effortless, and the results speak for themselves.</h5>
                    </div>
                        
            
                    
            </div>
            <div className="review-highlight mobile-view-slide">
              
                    <div className="review-highlight-header">
                        <div className="username">
                            <h5>Samantha Davis</h5>
                            <p>USA, Califirnia</p>
                        </div>
                        <div className="user-socials">
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
                    </div>
                    <div className="review">
                        <AiFillStar color='#ffdf00'/>
                        <AiFillStar color='#ffdf00'/>
                        <AiFillStar color='#ffdf00'/>
                        <AiFillStar color='#ffdf00'/>
                        <AiFillStar color='#ffdf00'/>
                        

                        <h5>I was blown away by Klenz’s ability to capture the essence of our wedding day. Hes photographs are our memories.</h5>
                    </div>
                        
            
                    
            </div>
           
                
        </div>
        <div className='testimonial-bottom'>
            <h1 className='klenz-logo-text'>KLENZ PICTURES</h1>
        </div>

        </div>
    
  )
};

export default Testimonial;