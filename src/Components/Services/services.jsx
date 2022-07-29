import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>Service I Offer</h5>
      <h2>SERVICES</h2>
       <div className="container services__container">
<article className='service'>
  <div className="service__head">
    <h3>UX/UI Design </h3>
  </div>
  <ul className='service__list'>
    <li><BiCheck className='service__list-icon'/>
    <p>User Research </p>
    </li>
    <li><BiCheck className='service__list-icon'/>
    <p>Research Analysis</p>
    </li>
    <li><BiCheck className='service__list-icon'/>
    <p>Design idealition and execution</p>
    </li>
    <li><BiCheck className='service__list-icon'/>
    <p>Creating sketches,high and low fidelity wireframe and prototype</p>
    </li>
    <li><BiCheck className='service__list-icon'/>
    <p>Usabitity Test </p>
    </li>
  </ul>
</article>
<article className='service'>
  <div className="service__head">
    <h3>SOFTWARE HANDLING</h3>
  </div>
  <ul className='service__list'>
    <li><BiCheck className='service__list-icon'/>
    <p>Research, design and write new software programs</p>
    </li>
    <li><BiCheck className='service__list-icon'/>
    <p>Investigate new technologies</p>
    </li>
    <li><BiCheck className='service__list-icon'/>
    <p>Evaluate the software and systems that make computers and hardware work</p>
    </li>
    <li><BiCheck className='service__list-icon'/>
    <p>Develop existing programs by analysing and identifying areas for modification</p>
    </li>
    <li><BiCheck className='service__list-icon'/>
    <p>Maintenance and performance of software systems</p>
    </li>
  </ul>
</article>
<article className='service'>
  
  <div className="service__head">
    <h3>HARDWARE AND NETWORKING  </h3>
  </div>
  <ul className='service__list'>
    <li><BiCheck className='service__list-icon'/>
    <p>Build a simple home network.</p>
    </li>
    <li><BiCheck className='service__list-icon'/>
    <p>Create a fully connected LAN.</p>
    </li>
    <li><BiCheck className='service__list-icon'/>
    <p>Configure basic network security.</p>
    </li>
    <li><BiCheck className='service__list-icon'/>
    <p>Simple risk and vurlernability analysis</p>
    </li>
    <li><BiCheck className='service__list-icon'/>
    <p>Build a simple computer network using Cisco devices.</p>
    </li>
  </ul>
</article>
       </div>
    </section>
  )
}

export default services