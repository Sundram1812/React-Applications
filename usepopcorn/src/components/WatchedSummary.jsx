import React from "react";

function WatchedSummary({children}) {
  // console.log(children)
  // console.log(children)

  let imdbAvg=0;
  let userAvg=0;
  let totalTime=0;

  children.map((movie)=>{
    imdbAvg +=Number(movie.imdbRating);
    userAvg +=movie.userRating;
    totalTime +=Number(movie.Runtime.split(" ")[0])
  })

  // console.log(imdbAvg)

  return (
    <div className="flex flex-col sm:gap-4 shadow-lg shadow-[#111111] pt-4 pl-6 pb-4 w-full py-2 px-3 ">
      <p className=" font-bold">MOVIE YOU WATCHED</p>
      <div className="flex gap-2">
        #️⃣<span>{children.length} movies</span>
        <div className="flex gap-1 sm:gap-3">
          <p>⭐{imdbAvg/children.length ? (imdbAvg/children.length).toFixed(2) : 0.0}</p>
          <p>🌟{userAvg/children.length ? (userAvg/children.length).toFixed(2) : 0.0}</p>
          <p>⌛{totalTime || 0.0} min</p>
        </div>
      </div>
    </div>
  );
}

export default WatchedSummary;
