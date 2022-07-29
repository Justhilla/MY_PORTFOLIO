import React from 'react'
import './header.css'
import CTA from './CTA'
import HILLA from '../../assets/ME.jpg'
import HeaderSocials from './headerSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1>Hillary Mutethia</h1>
        <h5 className="text-light"> Fullstack Developer</h5>
         <CTA/>
         <HeaderSocials/>
         <div className="me">
<img src={HILLA} alt="" id='hillary1' />
        </div>
<a href="#contant" className='scroll__down'> Scroll Down </a>
     </div>
    </header>
  )
}

export default header