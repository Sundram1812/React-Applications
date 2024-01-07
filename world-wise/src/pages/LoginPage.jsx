import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppNav from '../components/AppNav'
import { useAuth } from "../contexts/FakeAuthContext";


function LoginPage() {

    const[email,setEmail]=useState("sundram62048@gmail.com");
    const[password,setPassword]=useState("12345");
    const navigate=useNavigate()
    const {login, authenticated}=useAuth();

    function handleSubmit(e){
        e.preventDefault();
        if(email && password) login(email,password);
    }

    useEffect(()=>{
        if(authenticated) navigate("/app",{replace:true})
    },[authenticated,navigate])



  return (
    <div className=" min-h-[100vh] bg-[#212121]">
        <AppNav/>

        <div
            onSubmit={handleSubmit}
             className='flex justify-center items-center py-4 bg-[#313131] w-[30%]  rounded-md mx-auto my-10'>
            <form className='gap-6 w-[85%]' >

                <div className='flex flex-col my-3 w-[95%]'>
                    <label className='text-white font-semibold my-1'>Email Address:</label>
                    <input type="text" 
                    placeholder='username'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className='w-full py-1 rounded-md px-3 outline-none font-semibold'/>
                </div>
                
                <div className='flex flex-col my-3 w-[95%]'>
                    <label className='text-white font-semibold my-1'>Password:</label>
                    <input type="password" 
                    placeholder='Password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className='w-full py-1 rounded-md px-3 outline-none font-semibold'/>
                </div>

                <button 
                className=' px-4 py-2 rounded-lg bg-green-600 text-white font-bold my-3'
                >
                    Login
                </button>

            </form>
        </div>
    </div>
  )
}

export default LoginPage