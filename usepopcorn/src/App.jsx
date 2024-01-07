import "./App.css";
import NavBar from "./components/NavBar";
import MovieBox from "./components/MovieBox";
import WatchedMovieBox from "./components/WatchedMovieBox";
import MovieList from "./components/MovieList";
import WatchedMovieList from "./components/WatchedMovieList";
import { useState } from "react";
import WatchedSummary from "./components/WatchedSummary";
import { useEffect } from "react";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import SelectedMovieDetails from "./components/SelectedMovieDetails";
import { useLocalStorageState } from "./customHooks/useLocalStorageState";

// const key="f84fc31d";
const key="4d70640d";
let watchedAllMovie=[];

function App() {
  const[tempMovie, setTempMovie]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [error, setError]=useState('');
  const [query,setQuery]=useState('');
  const[selectedId, setSelectedId]=useState(null);
  // const [watchedMovie, setWatchedMovie]=useState(watchedAllMovie);

  const [watchedMovie, setWatchedMovie]=useLocalStorageState([],"watched")

  // for cleaning up data fetching
  const controller=new AbortController();

  function handleSelectedMovie(id){
    setSelectedId((prevId)=> prevId === id ? null : id)
  }
  

  function handleAddMovie(newMovie, isExist){
    !isExist ? setWatchedMovie((prev)=>[...prev,newMovie]) : "";
    setSelectedId(null)  
  }


    useEffect(()=>{
      async function fetchMovie(){

        try {
          setIsLoading(true)
          setError('')
          const res= await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${query}` ,{signal: controller.signal});

          if(!res.ok) throw new Error("something wents wrong with fetching movie data");
          const data= await res.json();

          if(data.Response==='False') throw new Error(`Movie Not Found`);

          setTempMovie(data.Search)
          setIsLoading(false)
          setError("")
          
        } catch (error) {

          if(error.message === "AbortError"){
            setError(error.message)
          }

        } finally {
          setIsLoading(false)
        }


        if(query.length < 3){
          setTempMovie([])
          setError('')
          return
        }
    }

      setSelectedId(null)
      fetchMovie();

      // cleanup 
      return ()=>{
        controller.abort();
      }


    },[query])



  return (
    <div className="text-white">
      <NavBar movie={tempMovie} setQuery={setQuery} query={query}/>

      <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col sm:flex-row justify-between gap-5">
        <MovieBox >
          {isLoading && <Loader/>}
          {!isLoading && !error && <MovieList onSelectedId={handleSelectedMovie}>{tempMovie}</MovieList>}
          {error && <ErrorMessage message={error}/>}
        </MovieBox>

        <WatchedMovieBox >
          {
            selectedId ? <SelectedMovieDetails selectedId={selectedId} setSelectedId={setSelectedId} watchedMovie={watchedMovie} handleAddMovie={handleAddMovie}/> :
            <>
              <WatchedSummary>{watchedMovie}</WatchedSummary>
              <WatchedMovieList watchedMovie={watchedMovie} setWatchedMovie={setWatchedMovie}>{watchedMovie}</WatchedMovieList>
            </>
          }
        </WatchedMovieBox>
      </div>
    </div>
  );
}

export default App;
