import React from "react";
import Button from "./Button";
import { useState } from "react";

function MovieBox({children}) {

  const [isOpen, setIsOpen]=useState(true);

  function handleClick(){
      setIsOpen((prev)=>!prev)
  }

  return (
    <div className="relative w-full sm:w-[48%] bg-[#212121] py-6 rounded-md h-[70vh] overflow-scroll">
      {isOpen ? children : ""} 

     
      <Button onClick={handleClick}>
        <span>{ isOpen ? "-" : "+"}</span>
      </Button>
  
    </div>
  );
}

export default MovieBox;
