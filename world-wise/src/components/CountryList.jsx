import React from "react";
import { useCities } from "../contexts/CitiesCoontext";
import CountryItem from "./CountryItem";

function CountryList() {
  const {cities,isLoading}=useCities();
  
  if (isLoading) return <p>Loading...</p>;

  if (!cities.length) return <p>please select cities to click on map</p>;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((ele) => ele.country).includes(city.country))
      return [ ...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  console.log(countries);

  return (
    <ul className="text-white grid grid-cols-2 gap-x-4">
      {countries.map((countryItem) => {
        return <CountryItem countryItem={countryItem} />;
      })}
    </ul>
  );
}

export default CountryList;
