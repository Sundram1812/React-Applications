import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useBackKey } from "../customHooks/useBackKey";
import StarRating from "../StarRating"

function MovieDetails({movie, setSelectedId , watchedMovie,handleAddMovie}) {
    const[ratingCount , setRatingCount]=useState(0);

    let ratingCountDecesion=useRef(null);

    let existMovie=watchedMovie.filter((cinema)=> cinema.imdbID === movie.imdbID)
    let exist=existMovie.length > 0 

    function handleRating(count){
        setRatingCount(count);
    }

    function handleBackClick(){
        setSelectedId(null);
    }

    function handleAddClick(){
        let newMovie={...movie,userRating:ratingCount,ratingCountDecesion}
        handleAddMovie(newMovie,exist)
    }

    useEffect(()=>{

        if(!movie.Title) return
        document.title=`Movie | ${movie.Title}`;

        // Cleaning Upp effect
        return ()=>{
            document.title=`🍿usePopcorn`;
        }
    },[movie])



    useBackKey('Escape',handleBackClick)

    // handling ratingCountDecesion
    useEffect(()=>{
        if(ratingCount)ratingCountDecesion.current=ratingCountDecesion.current +1;
    },[ratingCount])

  return (

    <div className=" relative">
        <div className="flex bg-[#313131] items-center">
            <img src={movie.Poster} alt={movie.Title} className="w-[10em]"/>

            <div className="flex flex-col gap-3 py-3 items-center px-5">
                <p className="text-[1.5em] leading-6 font-bold text-gray-100">{movie.Title}</p>

                <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
                    <p>{movie.Released} <span className="font-extrabold">.</span></p>
                    <p>{movie.Runtime}</p>
                </div>

                <p>{movie.Genre}</p>
                <p className="text-center">⭐ {movie.imdbRating} IMDb rating</p>

            </div>
        </div>

        <div className="flex flex-col items-center gap-4 justify-center sm:w-[80%] mx-auto bg-[#313131] min-h-[70px] py-4 rounded-md my-6">
            
             {exist ? <i>You rated with movie {existMovie[0].userRating} ⭐</i> :<StarRating maxRating='10' size={"20"} onRating={handleRating} />}
            { ratingCount > 0 ? <button onClick={handleAddClick} className="py-2 px-8 bg-purple-500 rounded-3xl font-bold w-[72%]">+ Add to list</button> : ""}
        </div>

        <div className="w-[80%] mx-auto py-3 fle flex-col">
            <i className="text-[.9em] my-4">{movie.Plot}</i>
            <p className="my-4">Starring {movie.Actors}</p>
            <p className="my-4"><span className="font-semibold">Directed by</span> {movie.Director}</p>
        </div>

        <div onClick={handleBackClick} className=" absolute left-2 top-2 h-[40px] w-[40px] flex justify-center items-center bg-white rounded-full">
            <button className="text-black text-[1.7em] pb-[3px]">
                &larr;
            </button>
        </div>
    </div>
  );
}

export default MovieDetails;
