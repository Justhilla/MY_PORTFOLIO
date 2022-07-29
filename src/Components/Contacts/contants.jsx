import React from 'react'
import './contants.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiFillTwitterCircle} from 'react-icons/ai'
import{AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const contants = () => {
const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_0qrx44j', 'template_1lzercr', form.current, 'rMUtrYPIqngV4CSlE')
  e.target.reset()

    
};

    

  return (
    <section id='Contacts' >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="container__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icons'/>
            <h4> Email</h4>
            <h5>hillarymutehia@gmail.com</h5>
            <a href="mailto:hillarymutethia119@gmail.com">Send a message </a>
          </article>
          <article className="contact__option">
            <AiFillTwitterCircle className='contact__option-icons'/>
            <h4>Twitter</h4>
            <h5>DM Me On Twitter</h5>
            <a href="https://twitter.com/just_hilla">Send a message </a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icons'/>
            <h4>WhatsApp</h4>
            <h5>07******4664</h5>
            <a href="https://api.whatsapp.com/send?phone+254769515695">Send a message </a>
          </article>
        </div>
        {/**END OF CONTACT OPTION  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" id=""  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit'className='btn btn-primary' > Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default contants