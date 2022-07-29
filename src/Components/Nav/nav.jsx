import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdMiscellaneousServices} from 'react-icons/md'
import {AiFillMessage} from 'react-icons/ai'


const nav = () => { 
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#services"><MdMiscellaneousServices/></a>
      <a href="#Contants"><AiFillMessage/></a>
    </nav>
  )
}

export default nav