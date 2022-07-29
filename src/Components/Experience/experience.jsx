import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
  <section id='experience'>
    <h5>Skills I Have </h5>
    <h2>My Experience</h2>
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__detail-icon'/><div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__detail-icon'/>
           <div> <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article><article className='experience__details'>
            <BsFillPatchCheckFill className='experience__detail-icon'/>
            <div>
              
            <h4>JAVASCRIPT</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article><article className='experience__details'>
            <BsFillPatchCheckFill className='experience__detail-icon'/>
            <div>
            <h4>BOOTSTRAP </h4>
            <small className='text-light'>INTERMIDIATE</small>
            </div>
          </article><article className='experience__details'>
            <BsFillPatchCheckFill className='experience__detail-icon'/>
            <div>
            <h4>REACT</h4>
            <small className='text-light'>INTERMIDIATE </small>
            </div>
          </article><article className='experience__details'>
            <BsFillPatchCheckFill className='experience__detail-icon'/>
            <div>
            <h4>TAILWIND</h4>
            <small className='text-light'>BEGINNER</small>
            </div>
          </article>
        </div>
      </div>
      <div className="experience__backend" >
      <h3>Backend Development</h3>
        <div className="experience__content">
        <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__detail-icon'/>
            <div>
            <h4>PYTHON</h4>
            <small className='text-light'>INTERMIDIATE </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__detail-icon'/>
            <div>
            <h4>NODEJS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__detail-icon'/>
            <div>
            <h4>PHP</h4>
            <small className='text-light'>INTERMEDIATE</small>
            </div>
          </article><article className='experience__details'>
            <BsFillPatchCheckFill className='experience__detail-icon'/>
            <div>
            <h4>MONGODB</h4>
            <small className='text-light'>BEGINNER</small>
            </div>
          </article><article className='experience__details'>
            <BsFillPatchCheckFill className='experience__detail-icon'/>
            <div>
            <h4>MYSQL</h4>
            <small className='text-light'>INTERMIDIATE </small>
            </div>
          </article>
        </div>
      </div>

      
    </div>
  </section>
  )
}

export default experience