import React from "react";
import { NavLink , Link} from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className="flex justify-between items-center  w-11/12 mx-auto py-8">
      <div>
        <Link to={"/"}><img src="../../public/logo.png" alt="logo" className="w-[200px]" /></Link>
      </div>

      <ul className="flex gap-8 items-center">
        <li className=" font-bold text-white">
          <NavLink to={"/"}>Home</NavLink>
        </li>

        <li className=" font-bold text-white">
          <NavLink to={"/product"}>Product</NavLink>
        </li>

        <li className=" font-bold text-white">
          <NavLink to={"/pricing"}>Pricing</NavLink>
        </li>

        <Link 
          to={"/login"} 
          className="px-5 py-2 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700 transition-all duration-500"
        >
         Login
        </Link>


      </ul>
    </nav>
  );
}

export default AppNav;
