import React from 'react'
import Login from './Components/Login/index';
import SignUp from './Components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/index';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
