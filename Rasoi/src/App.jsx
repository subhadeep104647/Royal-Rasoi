import React from 'react'
import Nevbar from './Components/Nevbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Contacts from './Pages/Contacts'
import About_us from './Components/Icon/About_us'
import Cart from './Pages/Cart'

const App = () => {
  return (
    <div className='p-5 bg-[url(/public/Body.svg)] bg-cover'>
      <Nevbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Contacts' element={<Contacts/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/About_us' element={<About_us/>}/>
    </Routes>
    </div>
  )
}

export default App