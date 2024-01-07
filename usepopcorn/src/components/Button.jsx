import React from 'react'

function Button({children,onClick}) {
  return (

    <div onClick={onClick} className="absolute top-2 right-2">  
      <button 
          className='text-[1.3em] h-[30px] w-[30px] flex items-center justify-center
          pb-1 text-[#717171] cursor-pointer font-semibold bg-[#111111] rounded-full'
          >
          {children}
      </button>

    </div>
  )
}

export default Button;