import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

function NavBar({movie,setQuery, query}) {

  const inputEle=useRef(null);

  useEffect(()=>{
    function callback(e){
      if(document.activeElement === inputEle.current) return;

      if(e.code === 'Enter'){
        inputEle.current.focus();
        setQuery('');
      }
    }

    document.addEventListener('keydown',callback);

    return ()=>document.addEventListener('keydown',callback)
  },[])


  return (
    <div>
        <nav className='flex justify-between items-center px-4 py-3 bg-indigo-500 w-[95%] mx-auto rounded-lg my-6'>
            <div className='flex items-center gap-2'>
                <span className='text-[2em]'>🍿</span>
                <span className='text-[1.5em]'>usePopcorn</span>
            </div>

            <input
                type="text"
                placeholder='Search movie...'
                onChange={(e)=>setQuery(e.target.value)}
                value={query}
                className='bg-indigo-600 py-1 px-3 font-semibold outline-none text-[1.2em] rounded-lg w-[45%] focus:duration-500 focus:shadow-md focus:shadow-black focus:transition-all focus:-translate-y-1'
                ref={inputEle}
             />

            <p className='text-[1.5em]'>Found <span className='font-bold'>{movie.length}</span> top results</p>
        </nav>
    </div>
  )
}

export default NavBar