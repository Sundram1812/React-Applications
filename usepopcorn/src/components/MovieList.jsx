import React from "react";
import Movie from "./Movie";

function MovieList({children,onSelectedId}) {

  return (
    <div className="flex flex-col">
      {children.map((movie) => {
        return <Movie key={movie.imdbID} onSelectedId={onSelectedId} >{movie}</Movie>;
      })}
    </div>
  );
}

export default MovieList;
