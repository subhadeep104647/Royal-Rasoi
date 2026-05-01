import React from 'react'
import { Link } from 'react-router-dom'
import About from '../../Pages/About'

const About_us = () => {
  return (
    <div>
      <button className=' bg-white text-green-950 text-lg font-semibold tracking-wide rounded-lg px-3 py-1 '><Link to='/About'>About</Link></button>
    </div>
  )
}

export default About_us