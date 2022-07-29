import React from 'react'
import './footer.css'
import {AiOutlineTwitter} from 'react-icons/ai'
import{AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Hillary</a>
      <ul className='permalinks'>
        <li><a href="#"> HOME</a></li> 
        <li><a href="#about"> HOME</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contacts"> Contacts</a></li>

      </ul>
      <div className="footer__socials">
        <a href="http://twitter.com"><AiOutlineTwitter/></a>
        <a href="http://linkedin.com"> <AiFillLinkedin/></a>
        <a href="http://instagram.com"> <AiOutlineInstagram/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Hillary Mutethia All right Reserved</small>
      </div>
    </footer>
  )
}

export default footer