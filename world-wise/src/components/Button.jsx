import React from 'react'

function Button({children,handleClick}) {
  return (
    <div>
        <button 
        onClick={handleClick}
        className=' bg-[#414141] px-3 py-1 rounded-md text-[.7em] font-bold'>{children}</button>
    </div>
  )
}

export default Button