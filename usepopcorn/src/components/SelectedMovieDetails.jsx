import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Loader from './Loader';
import MovieDetails from './MovieDetails';
const url="https://www.omdbapi.com/?apikey=f84fc31d&i="
const key="4d70640d";

function SelectedMovieDetails({selectedId,setSelectedId,watchedMovie,handleAddMovie}) {

    const[movie,setMovie]=useState({});
    const[isLoading,setIsLoading]=useState(false)

    useEffect(()=>{
        try {
            async function fetchSelectedMovie(){
                setIsLoading(true)
                let res= await fetch(`https://www.omdbapi.com/?apikey=${key}&i=${selectedId}`);
                let data=await res.json();
                // console.log(data);
                setMovie(data)
                setIsLoading(false);
            }
    
            fetchSelectedMovie();

        } catch (error) {
            console.log("error")
        } 
        
    },[selectedId])

    
    return (
        <div>
            { isLoading ? <Loader/> :<MovieDetails movie={movie} setSelectedId={setSelectedId} watchedMovie={watchedMovie} handleAddMovie={handleAddMovie}/>}
        </div>
    )
}

export default SelectedMovieDetails