import React from 'react';
import Arrow from '../Assets/arrowRight.png';
import Navbar from '../Components/Navbar';
import About from '../Components/About';
import CarouselComp from '../Components/CarouselComp';
import Portfolio from '../Components/Portfoliocards'
import BannerBackground from '../Assets/home-banner-background.png';
import HomeImage from '../Assets/HomeImage.png';
import HomeImageMobile from '../Assets/HomeImage-mobile.png';
import Testimonial from '../Components/Testimonial';
import Labelslide from '../Components/Labelslide';
import Frequently from '../Components/Frequently';
import Footer from '../Components/Footer';


const Home = ({ toggleTheme, theme }) => {
  return (
    <div className='home'>
    <Navbar toggleTheme={toggleTheme} theme={theme}/>
    <div className='homepage'>
    <div className='homepage-left-text'>
      <p className='grey-text'>STUNNING PHOTOGRAPHY BY</p>
      <h1>KLENZ PICTURES</h1>
    </div>
    <div className='homepage-background-image'>
      <img src={BannerBackground} alt="" />
    </div>
    <div className='homepage-right-text'>
      <h2>LET'S 
        <button className='special-btn'>
          <img src={Arrow}/>
        </button>
        <br/> WORK TOGETHER</h2>
    </div>
    </div>
    <div className='homepage-label'>
        <Labelslide/>
    </div>
     <div className='homepage-image'>
        <img src={HomeImage}/>
      </div> 
      <div className='homepage-image-mobile'>
        <img src={HomeImageMobile}/>
      </div>  
      <About/>
      <CarouselComp/>
      <Portfolio/>
      <Frequently/>
      <Testimonial/>
      <Labelslide/>
      <Footer/>
    </div>
  );
};

export default Home;