import React from 'react';
import Navbar from '../Components/Navbar';
import Testimonial from '../Components/Testimonial';
import Labelslide from '../Components/Labelslide';
import Footer from '../Components/Footer';
import ContactIntro from '../Components/ContactIntro';
import ContactForm from '../Components/ContactForm';

const Contact = ({ toggleTheme, theme }) => {
  return (
    <div>
        <Navbar toggleTheme={toggleTheme} theme={theme}/>
        <ContactIntro/>
        <ContactForm/>
        <Testimonial/>
        <Labelslide/>
        <Footer/>
    </div>
  )
}

export default Contact;