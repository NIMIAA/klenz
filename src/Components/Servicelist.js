import React from 'react';
import ListBullet from '../Assets/klenz-list-bullet.svg';
import AboutServiceImg from '../Assets/serviceaboutimage.png';
import EventPhoto from '../Assets/EventPhoto.png';
import CommercialPhoto from '../Assets/CommercialPhoto.png';
const Servicelist = () => {
  return (
    <div className='services-container'>
        <hr />
        <div className="service-outline">
            <div className="our-service">
                <div className="service-about">
                    <h3>PORTRAIT PHOTOGRAPHY</h3>
                    <p>Our portrait photography service is all about showcasing your unique personality. Whether you need a professional headshot, a family portrait, or a personal photoshoot, we create images that reflect your true self. We work closely with you to bring out your best angles and expressions, ensuring every portrait tells your story.</p>
                    <div className="project-link">
                    <a href="#">VIEW PROJECT</a>
                    </div>
                </div>
                <div className="service-about-image">
                    <img src={AboutServiceImg} alt="" />
                    <button></button>
                </div>
            </div>
            <hr />
            <div className="service-details">
                <div className="service-price">
                    <p>Individual Session</p>
                    <div className="booking">
                        <h1>$250</h1>
                        <div className="project-link">
                        <a href="#">BOOK A CALL</a>
                        </div>
                    </div>
                </div>
                <div className="service-highlight-container">
                    <ul className='list'>
                        <li>
                            <img src={ListBullet} alt="" />
                            IDEAL FOR CAPTURING YOUR UNIQUE PERSONALITY AND STYLE.
                        </li>
                        <li>
                            <img src={ListBullet} alt="" />
                            INCLUDES A 2-HOUR PHOTOSHOOT AND 20 PROFESIONALLY EDITED IMAGES
                        </li>
                        <li>
                            <img src={ListBullet} alt="" />
                            ADDITIONAL IMAGES CAN BE PURCHASED AT $10 EACH.
                        </li>
                    
                    </ul>

                </div>
                
            </div>
            <hr />
            <div className="service-details">
                <div className="service-price">
                    <p>Family Session</p>
                    <div className="booking">
                        <h1>$400</h1>
                        <div className="project-link">
                        <a href="#">BOOK A CALL</a>
                        </div>
                    </div>
                </div>
                <div className="service-highlight-container">
                    
                    <ul className='list'>
                        <li>
                            <img src={ListBullet} alt="" />
                            PERFECT FOR CREATING LASTING MEMORIES WITH YOUR LOVED ONES.
                        </li>
                        <li>
                            <img src={ListBullet} alt="" />
                            INCLUDES A 3-HOUR PHOTOSHOOT AND 30 PROFESSIONALLY EDITED IMAGES.
                        </li>
                        <li>
                            <img src={ListBullet} alt="" />
                            ADDITIONAL IMAGES CAN BE PURCHASED AT $10 EACH.
                        </li>
                    
                    </ul>

                </div>
                
            </div>
            <hr />
            <div className="service-details">
                <div className="service-price">
                    <p>Couple Session</p>
                    <div className="booking">
                        <h1>$250</h1>
                        <div className="project-link">
                        <a href="#">BOOK A CALL</a>
                        </div>
                    </div>
                </div>
                <div className="service-highlight-container">
                    
                    <ul className='list'>
                        <li>
                            <img src={ListBullet} alt="" />
                            CELEBRATE YOUR LOVE STORY WITH AN INTIMATE PHOTOSHOOT.
                        </li>
                        <li>
                            <img src={ListBullet} alt="" />
                            INCLUDES A 2.5-HOUR PHOTOSHOOT AND 25 PROFESSIONALLY EDITED IMAGES.
                        </li>
                        <li>
                            <img src={ListBullet} alt="" />
                            ADDITIONAL IMAGES CAN BE PURCHASED AT $10 EACH.
                        </li>
                    
                    </ul>

                </div>
                
            </div>
        </div>
        <hr />
        <div className="service-outline">
            <div className="our-service">
                <div className="service-about">
                    <h3>EVENTS PHOTOGRAPHY</h3>
                    <p>Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day..</p>
                    <div className="project-link">
                    <a href="#">VIEW PROJECT</a>
                    </div>
                </div>
                <div className="service-about-image">
                    <img src={EventPhoto} alt="" />
                    <button></button>
                </div>
            </div>
            <hr />
            <div className="service-details">
                <div className="service-price">
                    <p>Wedding Photography</p>
                    <div className="booking">
                        <h1>$1,500</h1>
                        <div className="project-link">
                        <a href="#">BOOK A CALL</a>
                        </div>
                    </div>
                </div>
                <div className="service-highlight-container">
                    
                    <ul className='list'>
                        <li>
                            <img src={ListBullet} alt="" />
                            CAPTURE THE MAGIC OF YOUR SPECIAL DAY.
                        </li>
                        <li>
                            <img src={ListBullet} alt="" />
                            INCLUDES FULL-DAY COVERAGE, A SECOND PHOTOGRAPHER, AND 300+ PROFESSIONALLY EDITED IMAGES.
                        </li>
                        <li>
                            <img src={ListBullet} alt="" />
                            CUSTOMIZABLE PACKAGES ARE AVAILABLE TO SUIT YOUR SPECIFIC WEDDING NEEDS.
                        </li>
                    
                    </ul>

                </div>
                
            </div>
            <hr />
            <div className="service-details">
                <div className="service-price">
                    <p>Party Coverage</p>
                    <div className="booking">
                        <h1>$800</h1>
                        <div className="project-link">
                        <a href="#">BOOK A CALL</a>
                        </div>
                    </div>
                </div>
                <div className="service-highlight-container">
                    
                    <ul className='list'>
                        <li>
                            <img src={ListBullet} alt="" />
                            PRESERVE THE FUN AND EXCITEMENT OF YOUR EVENT.
                        </li>
                        <li>
                            <img src={ListBullet} alt="" />
                            INCLUDES UP TO 4 HOURS OF COVERAGE AND 150+ PROFESSIONALLY EDITED IMAGES.
                        </li>
                        <li>
                            <img src={ListBullet} alt="" />
                            ADDITIONAL HOURS CAN BE ADDED AT $150 PER HOUR.
                        </li>
                    
                    </ul>

                </div>
                
            </div>
            <hr />
            <div className="service-details">
                <div className="service-price">
                    <p>Corporate Events</p>
                    <div className="booking">
                        <h1>Custom Pricing</h1>
                        <div className="project-link">
                        <a href="#">BOOK A CALL</a>
                        </div>
                    </div>
                </div>
                <div className="service-highlight-container">
                    
                    <ul className='list'>
                        <li>
                            <img src={ListBullet} alt="" />
                            TAILORED SOLUTIONS FOR CORPORATE GATHERINGS, CONFERENCES, AND SEMINARS.
                        </li>
                        <li>
                            <img src={ListBullet} alt="" />
                            CONTACT US FOR A PERSONALIZED QUOTE BASED ON YOUR EVENT'S REQUIREMENTS.
                        </li>
                    </ul>

                </div>
                
            </div>
        </div>
        <hr />
        <div className="service-outline">
            <div className="our-service">
                <div className="service-about">
                    <h3>COMMERCIAL PHOTOGRAPHY</h3>
                    <p>In the world of business, a compelling image can make all the difference. Our commercial photography service is designed to enhance your brand's visual identity. We create striking images for your products, services, and marketing campaigns that leave a lasting impact on your audience.</p>
                    <div className="project-link">
                    <a href="#">VIEW PROJECT</a>
                    </div>
                </div>
                <div className="service-about-image">
                    <img src={CommercialPhoto} alt="" />
                    <button></button>
                </div>
            </div>
            <hr />
            <div className="service-details">
                <div className="service-price">
                    <p>Product Photography</p>
                    <div className="booking">
                        <h1>$500</h1>
                        <div className="project-link">
                        <a href="#">BOOK A CALL</a>
                        </div>
                    </div>
                </div>
                <div className="service-highlight-container">
                    
                    <ul className='list'>
                        <li>
                            <img src={ListBullet} alt="" />
                            SHOWCASE YOUR PRODUCTS IN THE BEST LIGHT.
                        </li>
                        <li>
                            <img src={ListBullet} alt="" />
                            INCLUDES A HALF-DAY PHOTOSHOOT, 20 PROFESSIONALLY EDITED PRODUCT IMAGES, AND HIGH-RESOLUTION FILES.
                        </li>
                        <li>
                            <img src={ListBullet} alt="" />
                            ADDITIONAL IMAGES CAN BE PURCHASED AT $20 EACH.
                        </li>
                    
                    </ul>

                </div>
                
            </div>
            <hr />
            <div className="service-details">
                <div className="service-price">
                    <p>Real Estate Photography</p>
                    <div className="booking">
                        <h1>$700</h1>
                        <div className="project-link">
                        <a href="#">BOOK A CALL</a>
                        </div>
                    </div>
                </div>
                <div className="service-highlight-container">
                    
                    <ul className='list'>
                        <li>
                            <img src={ListBullet} alt="" />
                            HIGHLIGHT THE BEAUTY OF YOUR PROPERTIES.
                        </li>
                        <li>
                            <img src={ListBullet} alt="" />
                            INCLUDES INTERIOR AND EXTERIOR SHOTS, A 2-HOUR PHOTOSHOOT, AND 25 PROFESSIONALLY EDITED IMAGES.
                        </li>
                        <li>
                            <img src={ListBullet} alt="" />
                            ADDITIONAL IMAGES CAN BE PURCHASED AT $20 EACH.
                        </li>
                    
                    </ul>

                </div>
                
            </div>
            <hr />
            <div className="service-details">
                <div className="service-price">
                    <p>Brand Photography</p>
                    <div className="booking">
                        <h1>Custom Pricing</h1>
                        <div className="project-link">
                        <a href="#">BOOK A CALL</a>
                        </div>
                    </div>
                </div>
                <div className="service-highlight-container">
                    
                    <ul className='list'>
                        <li>
                            <img src={ListBullet} alt="" />
                            CRAFT A VISUAL NARRATIVE THAT ALIGNS WITH YOUR BRAND IDENTITY.
                        </li>
                        <li>
                            <img src={ListBullet} alt="" />
                            CONTACT US TO DISCUSS YOUR BRAND PHOTOGRAPHY NEEDS AND RECEIVE A PERSONALIZED QUOTE.
                        </li>
                    </ul>

                </div>
                
            </div>
        </div>
       
    </div>
  )
}

export default Servicelist;