import React from "react";
import AppNav from "../components/AppNav";

function Pricing() {
  return (
    <div className=" min-h-[100vh] bg-[#212121]">
      <AppNav />

      <div className="flex justify-center w-8/12 mx-auto items-center my-6">
        {/* left */}
        <div >
          <h2 className="text-white font-semibold text-[1.5rem] font-roboto">Simple pricing.</h2>
          <h2 className="text-white font-semibold text-[1.5rem] font-roboto ">
            Just <span>&#36;</span>9/month.
          </h2>
          <p className="text-white my-3 w-[80%]
           font-manrope">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            ratione enim eligendi in quaerat quis illo cum tenetur error quod!
          </p>
          <button className="px-4 py-2 rounded-md text-white uppercase font-semibold bg-green-600 my-3 font-manrope">Start tracking now</button>
        </div>

        {/* right */}
        <div className=" basis-[35rem]">
          <img src="../../public/img-2.jpg" alt="" className="w-full"/>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
