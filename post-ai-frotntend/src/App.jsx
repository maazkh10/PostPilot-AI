import React from 'react'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'

import { Route, Routes } from 'react-router-dom'
function App() {

  return (
<>
<Routes>
      <Route path='/' element={<Dashboard />} />
    
      <Route path='/login' element={<Login/>} />

      <Route path='/signup' element={<Signup />} />
    </Routes>
<ToastContainer
position='top-center'
autoClose={4000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss 
draggable
pauseOnHover
theme='light'
 />
</>
  )
}

export default App