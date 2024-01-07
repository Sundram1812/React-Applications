import React from "react";
import AppNav from "../components/AppNav";

function Product() {
  return (
    <div className="min-h-[100vh] bg-[#212121]">
      <AppNav />

      <div className="flex justify-around gap-10 w-8/12 mx-auto items-center my-6">
        {/* left */}
        <div className=" basis-[65rem]">
          <img src="../../public/img-1.jpg" alt="" className="" />
        </div>

        {/* right */}
        <div>
          <h2 className="text-white font-bold text-[2rem] font-roboto">
            About WorldWide
          </h2>

          <p className="text-white my-3 w-[90%] font-manrope">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde
            architecto, ipsum quibusdam pariatur quas iusto provident dolores.
            Repellat, aut cum totam rem esse cupiditate iste labore, ex vero
            possimus quia nisi libero 
          </p>

          <p className="text-white my-3 w-[80%] font-manrope">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            ratione enim eligendi in quaerat quis illo cum tenetur error quod!
            possimus quia nisi libero 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
