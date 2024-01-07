import React from 'react'
import { NavLink , Link} from 'react-router-dom'

function AppLayoutNav() {
  return (
    <div className='my-5'>
        <ul className='group flex bg-[#313131] py-1 rounded-md '>
            <li >
                <NavLink to={"cities"} className="px-7 py-[6px] rounded-md">cities</NavLink>
            </li>
            <li>
                <NavLink to={"countries"} className="px-5 py-[6px] rounded-md">countries</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default AppLayoutNav