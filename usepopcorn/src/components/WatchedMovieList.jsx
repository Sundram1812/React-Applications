import React from "react";
import WatchedMovie from "./WatchedMovie";
import WatchedSummary from "./WatchedSummary";

function WatchedMovieList({children ,watchedMovie, setWatchedMovie}) {
  return (
    <div className='flex flex-col gap-3 px-6 py-6'>
        
        {
          children.map((movie)=>{
                return <WatchedMovie key={movie.imdbID} movie={movie} watchedMovie={watchedMovie} setWatchedMovie={setWatchedMovie}/>
            })
        }
    </div>
  );
}

export default WatchedMovieList;
