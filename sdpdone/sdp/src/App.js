import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Contact from './routes/Contact';
import { useEffect, useState } from 'react';
import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Training from './routes/Training';
import Login from './routes/login';
import Dashboard from './components/dashboard';
import ForgotPassword from './routes/forgotpassword';
import Relogin from './routes/relogin';
import Purchase from './routes/purchase';
function App() {
  // Check If User is Logged In
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/training' element={<Training />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/relogin' element={<Relogin />} />
        <Route path='/purchase' element={<Purchase />} />

      </Routes>
    </>
    
  );
}

export default App;
