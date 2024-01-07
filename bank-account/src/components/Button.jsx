import React from 'react'

function Button({children, buttonType,accountStatus,dispatch}) {
  return (
    <div className='my-2'>
        <button 
            disabled={accountStatus}
            onClick={()=>dispatch({type:buttonType})}
            className={`px-6 py-2 rounded-lg  ${accountStatus ? "bg-transparent":"bg-[#313131]"} text-white border-2 border-[#313131]
            ${!accountStatus ? "hover:bg-[#212121]" : ""} transition-all duration-500  `}
        >
            {children}
        </button>
    </div>
  )
}

export default Button