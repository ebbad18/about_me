import React from 'react'
import Header from './Component/Header/Header';
import Nav from './Component/Nav/Nav';
import About from './Component/About/About'
import Experience from './Component/Experience/Experience'
import Services from './Component/Services/Services'
import Portfolio from './Component/Portfolio/Portfolio'
import Testimonial from './Component/Testimonial/Testimonial'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import './index.css';

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonial />
    <Contact />
    <Footer />
    </>
  
  )
}

export default App