import React from 'react'

function WatchedMovie({movie,watchedMovie,setWatchedMovie}) {


  function handleClick(){
    let remaingList=watchedMovie.filter((watched)=>watched.imdbID !== movie.imdbID)
    remaingList ? setWatchedMovie(remaingList) : ""

    // localStorage.setItem('watched',JSON.stringify(remaingList))
  }

  return (
    <div className='relative flex gap-6 items-center border-b-2 border-[#616161] pb-4'>
        <img src={movie.Poster} alt="" className='w-[60px]'/>
        <div className='flex flex-col gap-4 w-full'>
            <p>{movie.Title}</p>
            <div className='flex flex-wrap gap-1 sm:gap-4'>
                <p>⭐{movie.imdbRating}</p>
                <p>🌟{movie.userRating}</p>
                <p>⌛{movie.Runtime}</p>

            </div>
        </div>


        <div className='absolute bottom-4 right-1  flex justify-center items-center h-[25px] pb-[2px] w-[25px] bg-[#414141] rounded-full'>
            <button 
              onClick={handleClick}
              className='text-[.8em] text-red-600 font-bold'
            >
              x
            </button>
        </div>
    </div>
  )
}

export default WatchedMovie