import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesCoontext";
import { useUrlPosition } from "../hooks/useUrlPosition";
import BackButton from "./BackButton";
import CountryCodeToEmoji from "./CountryCodeToEmoji";
import Message from "./Message";
const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export const flagemojiToPNG = (flag) => {
  const countryFlag = flag.toLowerCase();

  return (
    <img src={`https://flagcdn.com/24x18/${countryFlag}.png`} alt="flag" />
  );
};

function Form() {
  const [lat, lng] = useUrlPosition();

  const navigate=useNavigate();
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [geocodingError, setGeocodingError] = useState("");
  const[country,setCountry]=useState("")
  const navigation = useNavigate();
  const{createCity, isLoading}=useCities()

  async function handleSubmit(e){
    e.preventDefault();
    if(!cityName || !date) return;

    const newCity={
        cityName,
        country,
        emoji,
        date,
        notes,
        position: {
            lat,
            lng
        }
    }

    console.log(newCity)
    await createCity(newCity);
    navigate("/app/cities")
  }

  useEffect(() => {
    if (!lat && !lng) return;
    async function fetchCityData() {
      try {
        setIsLoadingGeocoding(true);
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();
        // console.log(data);

        if (!data.countryCode)
          throw new Error(
            "👋 That doesn't seem to be a city. Click somewhere else 😉"
          );
        setCountry(data.countryName || "")
        setCityName(data.city || data.locality || "");
        console.log(data.countryCode)
        // setEmoji(flagemojiToPNG(data.countryCode));
        console.log("loggggggg   "+data.countryCode);
        setEmoji(data.countryCode);

      } catch (err) {
        setGeocodingError(err.message);

      } finally {
        setIsLoadingGeocoding(false);
      }
    }
    setGeocodingError("");
    fetchCityData();
  }, [lat, lng]);

  if (isLoadingGeocoding) return <p>Loading....</p>;

  if (!lat && !lng)
    return <Message message="Start by clicking somewhere on the map`" />;

  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-4 bg-[#313131] w-[75%] py-4 px-6 rounded-md ${isLoading ? " opacity-30" : " opacity-100"} `}
    >
      <div className="flex flex-col gap-1 relative">
        <label htmlFor="cityName">City name</label>
        <input
          type="text"
          id="cityName"
          value={cityName}
          onChange={() => {}}
          readOnly
          className=" py-1 px-2 rounded-md font-sans font-semibold text-[#313131]"
        />

        {/* <p className=" absolute right-3 bottom-2">{emoji}</p> */}
        <p className=" absolute right-3 bottom-2">
            <CountryCodeToEmoji countryCode={emoji}/>
        </p>
      </div>

      <div className="flex flex-col gap-1 ">
        <label htmlFor="visitedTime">When did you go to ?</label>
        <DatePicker
          id="visitedTime"
          className="w-full py-1 px-2 rounded-md font-sans font-semibold text-[#313131] outline-none "
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat={"dd/MM/yy"}
        />
      </div>

      <div className="flex flex-col gap-1 ">
        <label htmlFor="about">Notes aboute your trip to</label>
        <textarea
          name=""
          id="about"
          cols="30"
          rows="2"
          onChange={(e)=>setNotes(e.target.value)}
          className=" rounded-md font-sans font-semibold text-[#313131] px-3 py-1"
        ></textarea>
      </div>

      <div className="flex justify-between">
        <button
          className="bg-[#11ab11] px-4 py-1 rounded-md text-[.8em] font-bold"
        >
          ADD
        </button>

        <BackButton />
      </div>
    </form>
  );
}

export default Form;
