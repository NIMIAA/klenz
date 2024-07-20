import React, {useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import Faces from '../Assets/portfolio-card-image1.png';
import Wedding from '../Assets/portfolio-card-image2.png';
import Product from '../Assets/portfolio-card-image3.png';
import PInnocense from '../Assets/portraitinnocense.png';
import EFestival from '../Assets/eventfestival.png';
import CBrand from '../Assets/commercialbrand.png';
import Arrow from '../Assets/linkarrow.png';
import Prev from '../Assets/prev.png';
import Next from '../Assets/next.png';

const Portfoliocards = () => {
    const [centerSlidePercentage, setCenterSlidePercentage] = useState(window.innerWidth <= 768 ? 100 : 33.3);
    const carouselRef = useRef(null); 

    useEffect(() => {
        const handleResize = () => {
          setCenterSlidePercentage(window.innerWidth <= 768 ? 100 : 33.3);
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    const cards = [
        {
            image: Faces,
            imagedesc: 'Faces of Resillience',
            imagedate: 'March 2022',
            link: 'VIEW PROJECT',
        },
        {
            image: Wedding,
            imagedesc: 'A Wedding Tale',
            imagedate: 'January 2023',
            link: 'VIEW PROJECT',
        },
        {
            image: Product,
            imagedesc: 'Product Elegance',
            imagedate: 'January 2023',
            link: 'VIEW PROJECT',
        },
        {
            image: PInnocense,
            imagedesc: 'Innocence Unveiled',
            imagedate: 'January 2023',
            link: 'VIEW PROJECT',
        },
        {
            image: EFestival,
            imagedesc: 'Festival of Colors',
            imagedate: 'March 2018',
            link: 'VIEW PROJECT',
        },
        {
            image: CBrand,
            imagedesc: 'Brand Storytelling',
            imagedate: 'May 2019',link: 'VIEW PROJECT',
        },
    ];
    const handlePrev = () => {
        carouselRef.current.decrement();
    };
    const handleNext = () => {
        carouselRef.current.increment();
    };
  return (
    <div className='portfolio-container'>
        <div className="portfolio-head">
            <div className="portfolio-head-text">
                <p className='grey-text'>PORTFOLIO</p>
                <h2 className='subheading'>EXPLORE MY PHOTOGRAPHY WORK</h2>
            </div>
            <div className="portfolio-head-button">
            <div className='carousel-nav'>
                <div className='carousel-btns' onClick={handlePrev}>
                    <img src={Prev}/>
                </div>
                <div className='carousel-btns' onClick={handleNext}>
                <img src={Next}/>
                </div>
            </div>
            <Link to="/services" className='primary-btn btn-link'> View All Works -{'>'}</Link>
            </div>
        </div>
        <hr />
        <Carousel
        ref={carouselRef}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        centerMode={true}
        centerSlidePercentage={centerSlidePercentage}
        // infiniteLoop
        // autoPlay
        // interval={9000}
        // stopOnHover
        emulateTouch
        swipeable
        useKeyboardArrows>
            {
                cards.map(card => (
                    <div className='services-slide'>
                    <div className='portfolio-info'>
                        <div className="portfolio-card">
                            <img src={card.image} alt="" />
                            <p className='light-grey'>{card.imagedesc}</p>
                            <div className="project-link">
                            <p className='grey-text'>{card.imagedate}</p>
                            <div>
                            <a href="#">{card.link}</a>
                            {/* <img src={Arrow}/> */}
                            </div>
                            </div>
                
                        </div>
                    </div>
                    </div>

                )
                )
            }
        </Carousel>
    </div>
  )
};

export default Portfoliocards;