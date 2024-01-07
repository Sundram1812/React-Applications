import React from 'react'

function ErrorMessage({message}) {
  return (
    <div className='flex h-full justify-center pt-8 px-5 text-center'>
        <p><span>⛔</span> {message}</p>
    </div>
  )
}

export default ErrorMessage