import React from 'react'

function CalculatedValue({calculatedAmount}) {

    console.log(calculatedAmount)
  return (
    <div>
        <p className='font-bold text-purple-700'>{calculatedAmount}</p>
    </div>
  )
}

export default CalculatedValue