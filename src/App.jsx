import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';
import './Style.css';
import './Media.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';
import ServicePage from './Pages/ServicePage';
import Contact from './Pages/Contact';
import Testimonial from './Components/Testimonial';


function App() {
  const [theme, setTheme] = useState(null);

  useEffect(()=> {
    document.documentElement.setAttribute('data-theme', theme);
  },
[theme]);
const toggleTheme = () => {
  setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
};

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home toggleTheme={toggleTheme} theme={theme}/>}/>
          <Route path='/home' element={<Home toggleTheme={toggleTheme} theme={theme}/>}/>
          <Route path='/about' element={<AboutPage toggleTheme={toggleTheme} theme={theme}/>}/>
          <Route path='/portfolio' element={<PortfolioPage toggleTheme={toggleTheme} theme={theme}/>}/>
          <Route path='/services' element={<ServicePage toggleTheme={toggleTheme} theme={theme}/>}/>
          <Route path='/contact' element={<Contact toggleTheme={toggleTheme} theme={theme}/>}/>
          <Route path='/testimonial' element={<Testimonial/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
