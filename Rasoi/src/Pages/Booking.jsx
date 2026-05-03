import React, { useState } from 'react'
import { X } from 'lucide-react';

const Booking = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
    
    {/* ====== YOUR ORIGINAL CODE (UNCHANGED) ====== */}
    <div className=' flex flex-row gap-5 w-full mt-15'>

        <div className='px-5 ml-10 w-1/2'>
          <div className=' px-3 py-20 flex flex-col w-full'>
          
          <div>
            <h1 className='text-6xl font-mutton font-semibold bg-gradient-to-bl from-muttonTop to-muttonDown bg-clip-text text-transparent'>
              Turn this holy day into
            </h1>
          </div>

          <div>
            <h1 className='text-6xl font-mutton font-semibold bg-gradient-to-bl from-muttonTop to-muttonDown bg-clip-text text-transparent'>
              beautiful family
            </h1>
          </div>

          <div>
            <h1 className='text-6xl font-mutton font-semibold bg-gradient-to-bl from-muttonTop to-muttonDown bg-clip-text text-transparent'>
              memories with us.
            </h1>
          </div>

          <div>
            <h1 className=' text-nevtext font-thin font-mutton2 text-6xl mt-2'></h1>
          </div>

          <div className=' flex flex-row mt-35 gap-15 items-center'>
            <div>
              <button 
                onClick={() => setOpen(true)}
                className=' bg-gradient-to-r from-aboutBtn to-nevtext px-10 py-2 font-semibold text-2xl rounded-2xl text-black'
              >
                Book Now
              </button>
            </div>
          </div>

        </div>
        </div>

        <div className=' w-1/2  flex items-center justify-center'>
          <img src="public/Family.svg" alt="Food" className=' w-200'/>
        </div>

      </div>


    {/* ====== MODAL (ADDED) ====== */}
    {open && (
      <div className="fixed inset-0 backdrop-blur-md bg-black/30 flex items-center justify-center z-50">
        
        <div className="md:px-8 bg-white/5 backdrop-blur-xl rounded-2xl p-6 w-[700px] shadow-2xl relative animate-fadeIn">
          
          <div className=' flex flex-row items-center justify-between'>

            <div><img src="public/Logo.svg" alt="" className='w-20' /></div>
            <div><h2 className="text-4xl font-bold mb-4 text-center font-mutton font-semibold bg-gradient-to-bl from-muttonTop to-muttonDown bg-clip-text text-transparent">Book a Table</h2></div>
          
            <div><button onClick={() => setOpen(false)}className="absolute top-2 right-3 text-nevtext hover:text-aboutBtn text-xl"><X /></button></div>
          </div>

          <form className="space-y-3">

            <div className='w-full flex flex-row gap-2 '>
              <div className='w-1/2 '><input type="text"placeholder="Your Name"className="w-full border-2 p-2 rounded-lg text-nevtext font-sans font-semibold text-lg tracking-wide"/></div>

              <div className='w-1/2 '><input type="text"placeholder="Your Mail ID"className="w-full border-2 p-2 rounded-lg text-nevtext font-sans font-semibold text-lg tracking-wide"/></div>
            </div>

            <div className='w-full flex flex-row gap-2 '>
              <div className='w-1/2 '><input type="text"placeholder="Contact Number"className="w-full border-2 p-2 rounded-lg text-nevtext font-sans font-semibold text-lg tracking-wide"/></div>

              <div className='w-1/2 '><input type="text"placeholder="Purpose"className="w-full border-2 p-2 rounded-lg text-nevtext font-sans font-semibold text-lg tracking-wide"/></div>
            </div>

            <div className='w-full flex flex-row gap-2'>
              <div className='w-1/3'><input type="date"className="w-full border-2 p-2 rounded-lg text-nevtext font-sans font-semibold text-lg tracking-wide"/></div>
              <div className='w-1/3'><input type="time" placeholder="Time" className="w-full border-2 p-2 rounded-lg text-nevtext font-sans font-semibold text-lg tracking-wide" /></div>
              <div className='w-1/3'><input type="text" placeholder="Guests"className="w-full border-2 p-2 rounded-lg text-nevtext font-sans font-semibold text-lg tracking-wide"/></div>
            </div>

            <textarea placeholder='Massage . . . . .' className='w-full border-2 p-2 rounded-lg  text-nevtext font-sans font-semibold text-lg tracking-wide' />

            <div className=' flex items-center justify-center'><button className="bg-gradient-to-r from-aboutBtn to-nevtext px-10 py-2 font-semibold text-2xl rounded-2xl text-black">Confirm Booking</button></div>
          </form>
        </div>
      </div>
    )}

    </>
  )
}

export default Booking