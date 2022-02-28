import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import{BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const footer = () => {
  return (
    <section id='footer'>
      <a href="#" className='footer__logo'>Syed Hadi Alvi</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><BsFacebook/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://twitter.com"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Syed Hadi Alvi. All rights reserved.</small>
      </div>
    </section>
  )
}

export default footer