import React from 'react'

function BillInfo({totalBill, totalTip}) {
  return (
    <div>
        <p className='text-white font-extrabold text-[1.5em]'>
            { totalBill ? `You Pay  $${totalBill + totalTip} ($${totalBill} "+" $${totalTip}tip)` : ""}
        </p>
    </div>
  )
}

export default BillInfo