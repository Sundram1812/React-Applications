import React from "react";
import WatchedMovieList from "./WatchedMovieList";
import Button from "./Button";
import { useState } from "react";

function WatchedMovieBox({children}) {
  const [isOpen1, setIsOpen1]=useState(true);

  function handleClick(){
      setIsOpen1((prev)=>!prev)
  }

  return (
  <div className="relative w-full sm:w-[48%] bg-[#212121] rounded-md h-[70vh] overflow-scroll">
      {isOpen1 ? children : ""}      
      <Button onClick={handleClick}><span>{ isOpen1 ? "-" : "+"}</span></Button>
  </div>
  );
}

export default WatchedMovieBox;
