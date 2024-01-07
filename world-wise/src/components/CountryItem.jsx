import React from 'react'
import CountryCodeToEmoji from './CountryCodeToEmoji'

function CountryItem({countryItem}) {

  console.log(countryItem)
  return <li className='flex flex-col gap-1 items-center justify-center bg-[#313131] my-3 px-10 py-2 border-l-4 border-yellow-500 rounded-md'>

    <CountryCodeToEmoji countryCode={countryItem.emoji}/>
    <p>{countryItem.country}</p>
  </li>
  
}

export default CountryItem