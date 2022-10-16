import "./Register.css"
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';


const Register = () => {

    const history = useNavigate()
  
    const [user, setUser] = useState({
      username : "",
      email : "",
      password : ""
    });
  
    // Handle Inputs
    const handleInput = (event) =>{
      let name = event.target.name;
      let value = event.target.value;
  
      setUser({...user, [name]:value});
    }
  
    // Handle Submit
    const handleSubmit = async (event)=>{
      event.preventDefault();
      // Object DeStructuring
      // Store Object Data into Variables
      const {username, email, password} = user;
      try {
        //It is Submitted on port 3000 by default
        // Which is Front End but we need to 
        // Submit it on Backend which is on 
        // Port 3001. So we need Proxy.
        const res = await fetch('/register', {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            username, email, password
          })
        })
        console.log(res.status)
        if(res.status === 400 || !res){
          window.alert("Already Used Details")
        }else{
          // You need to Restart the Server for Proxy Works
          // Now Try Again
          window.alert("Registered Successfully");
          history.push('/login')
        }
      } catch (error) {
        console.log(error);
      }
    }
    
        return (
            <div className="login">
                <h1>Register</h1>
                <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Enter your Username"></input>
                <input type="text" name="You are" value={user.Youare} onChange={handleChange} placeholder="Who you are?"></input>
                <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
                <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
                <div className="button" onClick={login}>Register</div>
                <div>or</div>
                <div className="button" onClick={() => history.push("/login")}>Login</div>
            </div>
        )
    }
    

export default Register
