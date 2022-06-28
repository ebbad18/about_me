import React, { useState } from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {FaUserAlt} from 'react-icons/fa'
import {MdLibraryBooks} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'
import {MdMessage} from 'react-icons/md'


const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (
  <nav>
    <a href="/#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHome /></a>
    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>< FaUserAlt /></a>
    <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} > <MdLibraryBooks /></a>
    <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdMessage /></a>

  </nav>
  )
}

export default Nav