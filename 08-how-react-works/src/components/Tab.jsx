import React from 'react'
import { useState } from 'react'

function Tab({content}) {

    const[isShow,setIsShow]=useState(true);
    const[likeCount, setLikeCount]=useState(0);

    console.log("RENDER");

    function handleSuperLike(){

        //------------ This will not work-----------------
        // setLikeCount(likeCount+1);
        // setLikeCount(likeCount+1);
        // setLikeCount(likeCount+1);

        

        //--------- this will work --------------------
        // setLikeCount(likeCount+3)

        // --------------------OR----------------------

        // setLikeCount((prev)=>prev+1);
        // setLikeCount((prev)=>prev+1);
        // setLikeCount((prev)=>prev+1);

        setLikeCount((prev)=>prev+3)
    }

    function handleUndo(){
        setLikeCount(0);
        console.log(likeCount)
        setIsShow(true)
    }

    function handleUndoLater(){
        setTimeout(()=>{
            setLikeCount(0);
            setIsShow(true);
        },2000)
    }

  return (
    <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-2'>
            <h2 className='text-[1.3em] font-bold text-blue-700'>{content.summary}</h2>
            {isShow &&<p className='font-semibold'>{content.details}</p>}
        </div>

        <div className='flex justify-between items-center'>
            <button onClick={()=>setIsShow((prev)=>!prev)} className=' underline text-blue-700 font-semibold'>
                {isShow ? "Hide " : "Show "} Details
            </button>
            <div className='flex justify-center items-center gap-2'>
                <p>{likeCount}</p>
                <p>❣️</p>
                <button
                    onClick={()=>setLikeCount((prev)=>prev+1)} 
                    className='px-1 pb-1 bg-orange-700 rounded-md text-white'>+</button>

                <button
                    onClick={handleSuperLike} 
                    className='px-1 pb-1 bg-orange-700 rounded-md text-white cursor-pointer'
                    >
                    +++
                </button>

            </div>
        </div>

        <div className='flex gap-3 pt-3'>
            <button 
            onClick={handleUndo}
            className='px-4 py-2 rounded-md  text-white font-semibold bg-blue-900'>Undo</button>


            <button
            onClick={handleUndoLater} 
            className='px-4 py-2 rounded-md  text-white font-semibold bg-blue-900'>Undo in 2s</button>
        </div>
    </div>
  )
}

export default Tab