import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useTheme } from '../contexts/ThemeContext';
import { Shop } from './Shop';

export default function Login() {
    const{user,login,logout}=useAuth();
    const{theme,toggleTheme}=useTheme();
// local state variable  to capure the user name
    const[name,setName]=useState("");
    // style
    const appStyle={
        background:theme==="light"?"#fff":"#222",
        color:theme==="light"?"#222":"#fff",
        minHeight:"100vh",
        padding:"20px"
    }
    if(user){
        return(
            <div style={appStyle}>
                <h2>Hi.{user}!</h2>
                <button onClick={logout}>Logout</button>
                <button onClick={toggleTheme}>Toggle</button>
                <Shop/>
            </div>
        )
    }
  return (
    <div style={appStyle}>
      <input type='text' placeholder='Enter your name' value={name} 
      onChange={(e)=>setName(e.target.value)}/>
      <button onClick={()=>login(name)}>Login</button>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}
