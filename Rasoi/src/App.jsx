import React from 'react'
import Nevbar from './Components/Nevbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Contacts from './Pages/Contacts'
import About_us from './Components/Icon/About_us'

const App = () => {
  return (
    <div className=' p-5 bg-amber-100'>
      <Nevbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Contacts' element={<Contacts/>}/>
      <Route path='/About_us' element={<About_us/>}/>
    </Routes>
    </div>
  )
}

export default App