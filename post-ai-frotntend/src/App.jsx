import React from 'react'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'

import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
    
      <Route path='/login' element={<Login/>} />

      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default App