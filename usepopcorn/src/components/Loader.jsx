import React from 'react'
import "../App.css"

function Loader() {
  return (
    <div className="flex justify-center ">
        {/* <div class="custom-loader"></div> */}
        <p className=' uppercase font-semibold py-6 text-white'>Loading...</p>
    </div>
  )
}

export default Loader