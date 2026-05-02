import React from 'react'
import { Link } from 'react-router-dom'
import About from '../../Pages/About'

const About_us = () => {
  return (
    <div>
      <div></div>
      <div><button className=' bg-white text-aboutBtn text-lg font-semibold tracking-wide rounded-lg px-3 py-1 shadow-lg shadow-gray-900/50 '><Link to='/About'>About</Link></button></div>
    </div>
  )
}

export default About_us