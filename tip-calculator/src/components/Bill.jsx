import React from 'react'

function Bill({onBill,bill}) {
  return (
    <div className='text-white'>
        <label htmlFor="bill">How much was the bill ? </label>
        <input 
            type="text"
            id='bill'
            placeholder='Bill'
            value={bill}
            onChange={(e)=>onBill(Number(e.target.value))}
            className="text-black"
        />
    </div>
  )
}

export default Bill