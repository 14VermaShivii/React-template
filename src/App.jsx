import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { Login } from './Components/Login'
import { Signup } from './Components/Signup'
import { Forgotpassword } from './Components/Forgotpassword'

function App() {
  

  return (
    <>
 <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/forgotpassword' element={<Forgotpassword />} />
     </Routes>
     </BrowserRouter>
    
    </>
  )
}

export default App
