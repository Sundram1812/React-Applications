import React from "react";
import { Link } from "react-router-dom";
import AppNav from "../components/AppNav";
import { useAuth } from "../contexts/FakeAuthContext";

function Homepage() {

  const {user,login,logout, authenticated}=useAuth();
  
  return (
    <div className="min-h-[100vh] bg-[#212121] " id="home-page">
      <AppNav />

      <div className="flex flex-col h-full items-center justify-center my-12">
        <h2 className="text-white text-[3rem]  leading-10 text-center font-roboto">
          You travel the world.
        </h2>
        <h2 className="text-white text-[3rem]  text-center leading-tight font-roboto">
          WorldWise keeps track of your adventures.
        </h2>
        <p className="text-white w-[80%] text-center my-4 font-manrope">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </p>

        <Link
          to={authenticated ? "/app/cities" :"/login"}
          className="text-white font-semibold px-4 py-2 rounded-md bg-green-700 uppercase my-10"
        >
          Start Tracking Now
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
