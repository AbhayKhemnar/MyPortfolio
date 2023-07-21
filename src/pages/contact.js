import React from 'react'
import './contact.css'
import { Link } from 'react-router-dom'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import ContactForm from './contactForm'


function Contact() {
 
  return (
    <div>
        <div className='contact-header'>
          <h1>Contact Me</h1>
        </div>

        <div className='contact-hero'>

        <div className='contact-form'>
        <ContactForm className={"form"}/>
        </div>

     
      <div className='contact-details'>
        <h3>Contact me</h3>
        <h4>Mob: +91 9284138491</h4>
        <h4>Email: abhaykhemnar07@gmail.com</h4>
        <h4>LinkedIn: <Link to= "https://www.linkedin.com/in/abhay-khemnar-ab73b7259/">Click Here</Link></h4>

        <div className='social-media'>
          <h2>Connect with me</h2>
          <Link to="https://www.facebook.com/abhay.khemnar"><BsFacebook/></Link>   
          <Link to="https://www.instagram.com/abhay.khemnar/"><BsInstagram/></Link>
          <Link to="https://www.linkedin.com/in/abhay-khemnar-ab73b7259/"><BsLinkedin/></Link>
        </div>
      </div>

        </div>
    </div>
  )
}

export default Contact