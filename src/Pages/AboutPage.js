import React from 'react';
import Navbar from '../Components/Navbar';
import Testimonial from '../Components/Testimonial';
import Labelslide from '../Components/Labelslide';
import Footer from '../Components/Footer';
import AboutIntro from '../Components/AboutIntro';
import Biography from '../Components/Biography';
import Journey from '../Components/Journey';

const AboutPage = ({ toggleTheme, theme }) => {
  return (
    <div className='about'>
        <Navbar toggleTheme={toggleTheme} theme={theme}/>
        <AboutIntro/>
        <Biography/>
        <Journey/>
        <Testimonial/>
        <Labelslide/>
        <Footer/>
    </div>
  )
}

export default AboutPage;