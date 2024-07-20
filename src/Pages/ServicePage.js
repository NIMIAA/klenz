import React from 'react';
import Navbar from '../Components/Navbar';
import Frequently from '../Components/Frequently';
import Labelslide from '../Components/Labelslide';
import Footer from '../Components/Footer';
import ServiceIntro from '../Components/ServiceIntro';
import Servicelist from '../Components/Servicelist';

const ServicePage = ({ toggleTheme, theme }) => {
  return (
    <div className='services'>
        <Navbar toggleTheme={toggleTheme} theme={theme}/>
        <ServiceIntro/>
        <Servicelist/>
        <Frequently/>
        <Labelslide/>
        <Footer/>
    </div>
  )
}

export default ServicePage;