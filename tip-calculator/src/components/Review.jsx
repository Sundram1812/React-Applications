import React from 'react'
import { useState } from 'react'

function Review({children,percent,setPercent}) {

    return (
        <div >
            <label htmlFor="review" className='text-white'>{children}</label>

            <select id="review" value={percent} onChange={(e)=>setPercent(Number(e.target.value))}>
                <option value="0">Dissatisfied (0%)</option>
                <option value="5"> It was okay (5%) </option>
                <option value="10"> It was good (10%) </option>
                <option value="20"> Absolutely Amazing! (20%) </option>
            </select>
        </div>
    )
}

export default Review