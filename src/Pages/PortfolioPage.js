import React from 'react';
import Navbar from '../Components/Navbar';
import Frequently from '../Components/Frequently';
import Footer from '../Components/Footer';
import PortfolioIntro from '../Components/PortfolioIntro';
import Labelslide from '../Components/Labelslide';
import Portfolio from '../Components/Portfolio';

const PortfolioPage = ({ toggleTheme, theme }) => {
  return (
    <div className='portfolio'>
        <Navbar toggleTheme={toggleTheme} theme={theme}/>
        <PortfolioIntro/>
        <Portfolio/>
        <Frequently/>
        <Labelslide/>
        <Footer/>
    </div>
  )
}

export default PortfolioPage;