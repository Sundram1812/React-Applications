import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import { useGeoLocation } from './customHooks/useGeoLocation';

function App() {
  const {isLoading, count,position,handleClick,error}=useGeoLocation();
  const {lat,lng}=position;


  return (
    <div className='flex flex-col gap-5'>
      <button 
        onClick={handleClick}
        className='py-2 px-4 bg-purple-700 text-white font-bold w-[200px]'
      >
        Get My Position
      </button>
    {
      count===0 ? "" : 
      isLoading ? <p>Loading...</p> :
      <a href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}>
        Your GPS position:
        <span className='text-blue-600 underline'>{position.lat},{position.lng}</span>
      </a>
    }

    <p>You requested position {count} times</p>
    </div>
  )
}

export default App
