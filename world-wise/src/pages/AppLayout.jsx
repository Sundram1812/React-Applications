import React from "react";
import SideBar from "../components/SideBar";
import Map from "../components/Map";


function AppLayout() {
  return (

    <div className="flex ">
      <SideBar />
      <Map />
    </div>
  );
}

export default AppLayout;
