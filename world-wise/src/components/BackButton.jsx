import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigation = useNavigate();

  return (
    <div>
      <button
        onClick={(e) =>{
            e.preventDefault();
            navigation(-1)}}
        className=" bg-[#212121] px-4 py-2 rounded-md text-[.8rem] font-bold"
      >
        <span>&larr;</span>
        <span>BACK</span>
      </button>
    </div>
  );
}

export default BackButton;
