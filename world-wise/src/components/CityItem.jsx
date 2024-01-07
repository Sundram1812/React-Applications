import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCities } from "../contexts/CitiesCoontext";
import CountryCodeToEmoji from "./CountryCodeToEmoji";

function CityItem({ city }) {
  const {id,position}=city;
  const {currentCity, getCityInfo,deleteCity}=useCities()
  const navigate=useNavigate()

  function handleClick(e){
    e.preventDefault();
    deleteCity(id)
  }
  
  return (
    <li >
      <Link 
      to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      className={`${currentCity.id=== id ? "border border-green-500":""} flex justify-between items-center w-[23rem] my-3 bg-[#313131] px-4 py-2 
      border-l-4 border-green-600 rounded-md mr-1`}
      >
        <div className="flex gap-4 items-center">
          <CountryCodeToEmoji countryCode={city.emoji}/>
          <h1>{city.cityName}</h1>
        </div>

        <div className="flex gap-4 items-center">
          <p>
            (
            {`${new Date()
              .getDay()
              .toLocaleString()} ${new Date().getDate()} ${new Date().getFullYear()}`}
            )
          </p>
          <div className="h-[20px] w-[20px] bg-[#212112] flex justify-center items-center rounded-full hover:bg-orange-500 transition-all duration-300 group ">
            <button 
            onClick={handleClick}
            className="pb-1 group-hover:text-black text-gray-500 font-bold transition-all duration-300">x</button>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default CityItem;
