import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BiCoffeeTogo} from 'react-icons/bi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uz2gh8f', '"template_v3pyrc6"', form.current, 'user_641J0AWGxx4qcKi835yDq')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jaysonjrhernandez05@gmail.com</h5>
            <a href="mailto:jaysonjrhernandez05@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>JaysonHJr</h5>
            <a href="https://messenger.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BiCoffeeTogo className='contact__option-icon'/>
            <h4>Buymeacoffee</h4>
            <h5></h5>
            <a href="https://www.buymeacoffee.com/jaysoneson05" target="_blank">Give some Coffee</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>*/}
      </div>
    </section>
  )
}

export default Contact
