import React from 'react'

function Input({amount,handleAmount}) {

  return (
    <div>

        <div>
            <input 
                type="number" 
                value={amount !== 0 && amount !== '-' ? amount : ''}
                placeholder='enter here'
                onChange={(e)=>handleAmount(Math.abs(Number(e.target.value)))}
                className={"border-2 border-purple-700 font-bold px-3 py-1 rounded-xl outline-none text-purple-700"}
            />
        </div>
       
    </div>
  )
}

export default Input