import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg' 

import AVTR2 from '../../assets/avatar2.jpg' 
import AVTR3 from '../../assets/avatar3.jpg' 
import AVTR4 from '../../assets/avatar4.jpg' 

// import Swiper core and required modules
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

  

const testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review For My Client </h5>
      <h2> Testimonials</h2>
      <Swiper className="container testimonials__container">
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Client one " />
            </div>
            <h5 className='client__name'> CLIENT NAME </h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sed dolorem quas! Fugiat dolorem laudantium ratione eaque eligendi natus iste quas odit quaerat rem eos consectetur officiis culpa, sequi fugit?</small>
          
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Client one " />
            </div>
            <h5 className='client__name'> CLIENT NAME </h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sed dolorem quas! Fugiat dolorem laudantium ratione eaque eligendi natus iste quas odit quaerat rem eos consectetur officiis culpa, sequi fugit?</small>
          
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Client one " />
           </div>
           <h5 className='client__name'> CLIENT NAME </h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sed d
            olorem quas! Fugiat dolorem laudantium ratione
             eaque eligendi natus iste quas odit quaerat rem eos consectetur officiis culpa, sequi fugit?</small>
          
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Client one " />
            </div>
            <h5 className='client__name'> CLIENT NAME </h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sed dolorem quas! Fugiat dolorem laudantium ratione eaque eligendi natus iste quas odit quaerat rem eos consectetur officiis culpa, sequi fugit?</small>

        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default testimonials