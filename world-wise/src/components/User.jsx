import React from 'react'
import userImg from "../assets/my_pic.jpeg"
import Button from './Button'
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from 'react-router-dom';

function User() {
    const navigate=useNavigate()
    const {user,logout, authenticated}=useAuth();

    function handleClick(e){
        logout();
        navigate("/")
    }


  return (
    <div 
    className=' flex justify-center items-center px-4 py-2 rounded-md gap-5 absolute bg-[#313131] right-6 top-4 '>    
        <div className=' w-8 rounded-full'>
            <img src={userImg} alt="" className='object-contain ' />
        </div>
        <p className=' font-bold'>{authenticated&& user.name}</p>
        <Button handleClick={handleClick}>LOGOUT</Button>
    </div>
  )
}

export default User