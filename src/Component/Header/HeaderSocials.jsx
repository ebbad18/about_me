import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImTwitter} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ebbad-siddique-380a24216/" target="blank"><BsLinkedin /></a>
        <a href="https://twitter.com/ebbad_siddique" target="blank"><ImTwitter /></a>
        <a href="https://www.instagram.com/ebbad.js/" target="blank"><BsInstagram /></a>

    </div>
  )
}

export default HeaderSocials