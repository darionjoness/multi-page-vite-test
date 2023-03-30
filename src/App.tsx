import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Links from './Links'
import Home from './Home'
import About from './About'


function App() {


  return (
    <div className="App">
      <Links />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
     </Routes>
    </div>
  )
}

export default App
