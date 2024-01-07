import React from 'react'

function Section({firstCurrency,secondCurrency,handleFirstCurrency,handleSecondCurrency}) {
  return (
    <div className='flex gap-2 items-center'>


         <select 
         value={firstCurrency} 
         onChange={(e)=>handleFirstCurrency(e.target.value)}
         className={"border-2 border-purple-700 font-bold px-3 py-1 rounded-xl text-purple-700"}
         >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
        </select>

        <p className='font-bold text-purple-700 text-[1.4em]'>To</p>

        <select 
        value={secondCurrency} 
        onChange={(e)=>handleSecondCurrency(e.target.value)}
        className={"border-2 border-purple-700 font-bold px-3 py-1 rounded-xl text-purple-700"}
        >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
        </select>
    </div>
  )
}

export default Section