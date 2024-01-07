import React from "react";
import { Link, Outlet } from "react-router-dom";
import AppLayoutNav from "./AppLayoutNav";
import AppNav from "./AppNav";

function SideBar() {
  return (
    <>
      <div className=" bg-[#212121] basis-[55rem] h-screen flex flex-col items-center text-white">
        <Link to={"/"}>
          <img src="../../public/logo.png" alt="" className=" w-[10rem] mb-3 mt-10" />
        </Link>
        <AppLayoutNav/>
        <Outlet/>

        <footer className=" mt-auto mb-3">
          <p className="text-[.8em]">
            &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
          </p>
        </footer>
      </div>
    </>
  );
}

export default SideBar;
