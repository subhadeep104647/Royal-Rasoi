import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../Pages/Home'
import Menu from '../../Pages/Menu'
import Contacts from '../../Pages/Contacts'

const Nev = () => {
  return (
    <div className=' flex flex-col items-center justify-baseline '>
      <div className=' flex flex-row items-center gap-10 text-base font-semibold tracking-wide bg-amber-300'>
        <Link to="/">Home</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/Contacts">Contacts Us</Link>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Nev