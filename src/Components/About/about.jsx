import React from 'react'
import './about.css'
import HILLARY from '../../assets/hillary1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know </h5>
      <h2> About me </h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-img'>
            <img src={HILLARY} alt="" />
          </div>
          </div>
          <div className='about__content'>
            <div className="about__cards">
              <article className='about__card'> 
              <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ years working experience </small>
              </article>
              <article className='about__card'> 
              <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>300 client worldwide  </small>
              </article>
              <article className='about__card'> 
              <BsFolderCheck className='about__icon'/>
                <h5>Projects</h5>
                <small>80+ completed projects </small>
              </article>
              
               </div>
                    <p>Am Hillary a fullstack developer. A growth-minded ,dynamic software engineer and solution analyist to the 
                      technology landscape currenty running an upcoming organisation called future.net,specializating in web app and websites and identifying 
                      growth opportunities and producing best software solution. 
                        </p>
         <a href="#Contacts" className='btn btn-primary'> Let's talk</a>
          </div>
        </div>
    
    </section>
  )
}

export default about