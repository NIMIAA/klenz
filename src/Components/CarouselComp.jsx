import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import ServiceHighlightImage from '../Assets/services-image.png';
import ListBullet from '../Assets/klenz-list-bullet.svg';
import Prev from '../Assets/prev.png';
import Next from '../Assets/next.png';

const CarouselComp = () => {
    const carouselRef = useRef(null);

    const items = [
        {
            service: 'EVENT',
            desc: "Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.",
            highlight1:'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS AND MORE.',
            highlight2:'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS AND MORE.',
            highlight3:'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS AND MORE.',
            highlight4:'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS AND MORE.',
            image: ServiceHighlightImage,
        },
        {
            service: 'EVENT',
            desc: "Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.",
            highlight1:'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS AND MORE.',
            highlight2:'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS AND MORE.',
            highlight3:'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS AND MORE.',
            highlight4:'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS AND MORE.',
            image: ServiceHighlightImage,
        },
        {
            service: 'EVENT',
            desc: "Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.",
            highlight1:'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS AND MORE.',
            highlight2:'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS AND MORE.',
            highlight3:'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS AND MORE.',
            highlight4:'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS AND MORE.',
            image: ServiceHighlightImage,
        },
        {
            service: 'EVENT',
            desc: "Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.",
            highlight1:'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS AND MORE.',
            highlight2:'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS AND MORE.',
            highlight3:'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS AND MORE.',
            highlight4:'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS AND MORE.',
            image: ServiceHighlightImage,
        },
        {
            service: 'EVENT',
            desc: "Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.",
            highlight1:'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS AND MORE.',
            highlight2:'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS AND MORE.',
            highlight3:'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS AND MORE.',
            highlight4:'COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS AND MORE.',
            image: ServiceHighlightImage,
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