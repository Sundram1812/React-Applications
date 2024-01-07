import React from "react";
import { useEffect } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useCities } from "../contexts/CitiesCoontext";
import BackButton from "./BackButton";
import CountryCodeToEmoji from "./CountryCodeToEmoji";
const BASE_URL = "http://localhost:9000";

function City() {
  const { id } = useParams();

  const [searchParam, setSearchParam] = useSearchParams();
  const { currentCity, getCityInfo, isLoading } = useCities();
  const navigation = useNavigate();

  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");
  // console.log(currentCity.emoji);

  useEffect(() => {
    getCityInfo(id);
  }, [id]);

  if (isLoading) return <p>Loading....</p>;

  return (
    <div
      className={` bg-[#313131] flex flex-col gap-4 p-3 py-4 w-[70%] rounded-lg font-manrope text-gray-300 `}
    >
      <div>
        <p className="text-[.7em]">CITY NAME</p>
        <div className="flex gap-2 items-center">
          {/* <p className='text-[1.2em]'>{currentCity.emoji}</p> */}
          <CountryCodeToEmoji countryCode={currentCity.emoji} />
          <p className=" font-bold">{currentCity.cityName}</p>
        </div>
      </div>

      <div>
        <p className="text-[.7em]">
          YOU WENT TO{" "}
          <span className=" text-orange-500 font-bold">
            {currentCity.cityName && currentCity.cityName.toUpperCase()}
          </span>{" "}
          ON
        </p>
        <p>{currentCity.date}</p>
      </div>

      <div>
        <p className="text-[.7em] text-white">YOUR NOTES</p>
        <p>{currentCity.notes}</p>
      </div>

      <div>
        <p className="text-[.7em]">LEARN MORE</p>
        <Link to={""} className="text-orange-400">
          Check out {currentCity.cityName} on Wikipedia <span>&rarr;</span>
        </Link>
      </div>

      <BackButton />
    </div>
  );
}

export default City;
