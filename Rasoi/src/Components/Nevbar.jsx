import React from 'react'
import Logo from './Icon/Logo'
import Nev from './Icon/nev'
import About_us from './Icon/About_us'

const Nevbar = () => {
  return (
    <div className=' bg-amber px-3 py-0.5 rounded-xl md:px-8 bg-white/5 backdrop-blur-xl shadow-lg text-amber-950 flex flex-row items-center justify-between sticky top-0 w-full z-50 h-18 '>
      <Logo/>
      <Nev/>
      <About_us/>
    </div>
  )
}

export default Nevbar