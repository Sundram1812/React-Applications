import React from 'react'

function TabBtn({num,tab,setTab}) {
  return (
    <div>
        <button
         onClick={()=>setTab(num)}
         className={` ${num===tab ? "bg-blue-900 text-white" : "bg-gray-200 text-blue-900"} px-4 py-2 rounded-md   font-bold`}>Tab {num+1}</button>
    </div>
  )
}

export default TabBtn