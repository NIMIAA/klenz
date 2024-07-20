import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import ServiceHighlightImage from '../Assets/services-image.png';
import Image2 from '../Assets/services-image2.png';
import Image3 from '../Assets/portfolio-card-image1.png';
import ListBullet from '../Assets/klenz-list-bullet.svg';
import Prev from '../Assets/prev.png';
import Next from '../Assets/next.png';

const CarouselComp = () => {
    const carouselRef = useRef(null);

    const items = [
        {
            service: 'EVENT',
            desc: "Our event photography service is dedicated to capturing the magic of your special occasions. From weddings, corporate events, or milestone celebrations, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.",
            highlight1:'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS AND MORE.',
            highlight2:'CAPTURE THE MAGIC OF YOUR SPECIAL DAY.',
            highlight3:'PRESERVE THE FUN AND EXCITEMENT OF YOUR EVENT.',
            highlight4:'CORPORATE GATHERINGS, CONFERENCES, AND SEMINARS.',
            image: ServiceHighlightImage,
        },
        {
            service: 'PORTRAITS',
            desc: "Our portrait photography service is all about showcasing your unique personality. Whether you need a professional headshot, a family portrait, or a personal photoshoot, we create images that reflect your true self. We work closely with you to bring out your best angles and expressions, ensuring every portrait tells your story.",
            highlight1:'IDEAL FOR CAPTURING YOUR UNIQUE PERSONALITY AND STYLE.',
            highlight2:'PERFECT FOR CREATING LASTING MEMORIES WITH YOUR LOVED ONES.',
            highlight3:'CELEBRATE YOUR LOVE STORY WITH AN INTIMATE PHOTOSHOOT.',
            highlight4:'ADDITIONAL IMAGES CAN BE PURCHASED.',
            image: Image3,
        },
        {
            service: 'COMMERCIAL',
            desc: "In the world of business, a compelling image can make all the difference. Our commercial photography service is designed to enhance your brand's visual identity. We create striking images for your products, services, and marketing campaigns that leave a lasting impact on your audience.",
            highlight1:'SHOWCASE YOUR PRODUCTS IN THE BEST LIGHT.',
            highlight2:'HIGHLIGHT THE BEAUTY OF YOUR PROPERTIES.',
            highlight3:'CRAFT A VISUAL NARRATIVE THAT ALIGNS WITH YOUR BRAND IDENTITY.',
            highlight4:'INTERIOR AND EXTERIOR SHOTS, PROFESSIONALLY EDITED PRODUCT IMAGES.',
            image: Image2,
        },
        {
            service: 'EVENT',
            desc: "Our event photography service is dedicated to capturing the magic of your special occasions. From weddings, corporate events, or milestone celebrations, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.",
            highlight1:'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS AND MORE.',
            highlight2:'CAPTURE THE MAGIC OF YOUR SPECIAL DAY.',
            highlight3:'PRESERVE THE FUN AND EXCITEMENT OF YOUR EVENT.',
            highlight4:'CORPORATE GATHERINGS, CONFERENCES, AND SEMINARS.',
            image: ServiceHighlightImage,
        },
        {
            service: 'PORTRAITS',
            desc: "Our portrait photography service is all about showcasing your unique personality. Whether you need a professional headshot, a family portrait, or a personal photoshoot, we create images that reflect your true self. We work closely with you to bring out your best angles and expressions, ensuring every portrait tells your story.",
            highlight1:'IDEAL FOR CAPTURING YOUR UNIQUE PERSONALITY AND STYLE.',
            highlight2:'PERFECT FOR CREATING LASTING MEMORIES WITH YOUR LOVED ONES.',
            highlight3:'CELEBRATE YOUR LOVE STORY WITH AN INTIMATE PHOTOSHOOT.',
            highlight4:'ADDITIONAL IMAGES CAN BE PURCHASED.',
            image: Image3,
        },
        {
            service: 'COMMERCIAL',
            desc: "In the world of business, a compelling image can make all the difference. Our commercial photography service is designed to enhance your brand's visual identity. We create striking images for your products, services, and marketing campaigns that leave a lasting impact on your audience.",
            highlight1:'SHOWCASE YOUR PRODUCTS IN THE BEST LIGHT.',
            highlight2:'HIGHLIGHT THE BEAUTY OF YOUR PROPERTIES.',
            highlight3:'CRAFT A VISUAL NARRATIVE THAT ALIGNS WITH YOUR BRAND IDENTITY.',
            highlight4:'INTERIOR AND EXTERIOR SHOTS, PROFESSIONALLY EDITED PRODUCT IMAGES.',
            image: Image2,
        },
        
    ];

    const handlePrev = () => {
        carouselRef.current.decrement();
    };
    const handleNext = () => {
        carouselRef.current.increment();
    };
  return (
    <div className="service-container">
        <div className='service-head'>
            <div className='service-head-text'>
                <p className='grey-text'>SERVICES</p>
                <h2 className='subheading'>MY PHOTOGRAPHY SERVICES</h2>
            </div>
            <div className='service-head-button'>
            <div className='carousel-nav'>
                <div className='carousel-btns' onClick={handlePrev}>
                    <img src={Prev}/>
                </div>
                <div className='carousel-btns' onClick={handleNext}>
                <img src={Next}/>
                </div>
            </div>
            <Link to="/services" className='primary-btn btn-link'> View All Services -{'>'}</Link>
            </div>
        </div>
        <hr />

    <Carousel 
        ref={carouselRef}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        infiniteLoop={true}
        autoPlay
        interval={9000}
        stopOnHover
        emulateTouch
        swipeable
        useKeyboardArrows
        
        >
    
        {
                items.map(item => (
                    <div className="services-slide">
                        <div className="service-info">
                        <div className="service-overview">
                        <h2>{item.service}</h2>
                        <p>{item.desc}</p>
                        <div className="service-highlight-container">
                            <p>Services Hightlight</p>
                            <ul className='list'>
                                <li>
                                <img src={ListBullet} alt="jjjjj" />
                                {item.highlight1}
                                </li>
                                <li>
                                <img src={ListBullet} alt="" />
                                {item.highlight2}
                                </li>
                                <li>
                                <img src={ListBullet} alt="" />
                                {item.highlight3}
                                </li>
                                <li>
                                <img src={ListBullet} alt="" />
                                {item.highlight4}
                                </li>
                            </ul>
                        </div>

                        </div>
                        <div className="service-image">
                        <img src={item.image} alt="" />
                        </div>
                        </div>
                     </div>
                )

                )
        }

        
    </Carousel>
    </div>
  )
}

export default CarouselComp;