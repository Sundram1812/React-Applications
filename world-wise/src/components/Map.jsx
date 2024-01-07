import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useState } from "react";
import { useCities } from "../contexts/CitiesCoontext";
import { useEffect } from "react";
import { useGeolocation } from "../hooks/useGeolocation";
import { useUrlPosition } from "../hooks/useUrlPosition";
import CountryCodeToEmoji from "./CountryCodeToEmoji";
import User from "./User";
import { useAuth } from "../contexts/FakeAuthContext";
// import {AuthProvider} from "../contexts/FakeAuthContext"

function Map() {
  const navigate = useNavigate();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const { cities } = useCities();
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();
  const[mapLat,mapLng]=useUrlPosition()


  const {user,login,logout, authenticated}=useAuth()

  useEffect(() => {
    async function mapPosition() {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    }
    mapPosition();
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geolocationPosition)
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
  }, [geolocationPosition]);

  if(!authenticated) navigate("/login")

  return (
    <>
      <div className=" min-h-screen bg-[#313131] w-full text-white relative z-0">
        <User/>
        <div className=" absolute z-[100] bottom-3 left-[50%] translate-x-[-50%] text-[1.1rem]">
        { 
          !geolocationPosition&&       
          <button
              onClick={() => getPosition()}
              className="bg-green-600 px-3 pt-1 text-black font-balsam rounded-md"
            >
              {isLoadingPosition ? "LOADING...":"USE YOUR POSITION"}
            </button>
          }
        </div>

        <MapContainer
          center={mapPosition}
          // center={[mapLat,mapLng]}
          zoom={6}
          scrollWheelZoom={true}
          className=" h-full bg-[#212121] absolute w-full -z-10"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          {cities.map((city) => (
            <Marker
              position={[city.position.lat, city.position.lng]}
              key={city.id}
            >
              <Popup>
                <CountryCodeToEmoji countryCode={city.emoji}/>
                <span>{city.cityName} </span>
              </Popup>
            </Marker>
          ))}

          <ChangeCenter position={mapPosition} />
          <DetectClick />
        </MapContainer>
      </div>
    </>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default Map;
