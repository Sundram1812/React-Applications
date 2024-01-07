import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/FakeAuthContext'

function ProtectedRoute({children}) {
    const{authenticated}=useAuth();
    const navigate=useNavigate();

    useEffect(()=>{
        if(!authenticated) navigate("/")
    },[authenticated,navigate])

  return children
}

export default ProtectedRoute