import React from "react";

function Movie({ children ,onSelectedId}) {

  function handleClick(){
    onSelectedId(children.imdbID)
    // document.title=`Movie | ${children.Title}`;
  }

  return (
    <div
     onClick={handleClick}
     className="flex gap-6 items-center border-b transition-all duration-500 border-[#313131] cursor-pointer hover:bg-[#313131] px-6 py-4">
      <img src={children.Poster} alt="image Unavailable" className="w-[60px]" />

      <div className="flex flex-col gap-3">
        <p>{children.Title}</p>
        <p>{children.Year}</p>
      </div>
    </div>
  );
}

export default Movie;
