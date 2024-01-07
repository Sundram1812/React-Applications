import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'
import { useBackKey } from '../customHooks/useBackKey';

function NavBar({movie,setQuery, query}) {

  const inputEle=useRef(null);

  useBackKey("Enter", function(){
    if(document.activeElement === inputEle.current) return;
    inputEle.current.focus();
    setQuery('');
  })



  return (
    <div>
        <nav className='flex flex-col gap-2 sm:gap-0 sm:flex-row  justify-between items-center px-4 py-3 bg-indigo-500 w-[95%] mx-auto rounded-lg my-6'>
            <div className='flex items-center gap-2'>
                <span className='text-[2em]'>🍿</span>
                <span className='text-[1.5em]'>usePopcorn</span>
            </div>

            <input
                type="text"
                placeholder='Search movie...'
                onChange={(e)=>setQuery(e.target.value)}
                value={query}
                className='bg-indigo-600 py-1 px-3 font-semibold outline-none text-[1.2em] rounded-lg w-[80%] sm:w-[40%] focus:duration-500 focus:shadow-md focus:shadow-black focus:transition-all focus:-translate-y-1'
                ref={inputEle}
             />

            <p className='font-semibold'>Found <span className='font-bold'>{movie.length}</span> top results</p>
        </nav>
    </div>
  )
}

export default NavBar