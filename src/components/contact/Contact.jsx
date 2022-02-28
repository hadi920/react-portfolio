import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();



    emailjs.sendForm('service_ijecs5m', 'template_nnq72yu', form.current, 'FJNX8CzQeL8Wrk818')
     
    e.target.reset();
  };


  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container Contact__container">
        <div className="Contact__options">
          <article className="Contact_option">
            <MdOutlineMail className='Contact__option-icon'/>
            <h4>Email</h4>
            <h5>dummyemail@gmail.com</h5>
            <a href="mailto:dummyemail.com" target='_blank'>Send a Message</a>
          </article>
          <article className="Contact_option">
            <BsWhatsapp className='Contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Syed Hadi Alvi</h5>
            <a href="" target='_blank'>Send a Message</a>
          </article>
          <article className="Contact_option">
            <BsLinkedin className='Contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Syed Hadi Alvi</h5>
            <a href="https://www.linkedin.com/in/syed-hadi-alvi-3508121b7/" target='_blank'>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact