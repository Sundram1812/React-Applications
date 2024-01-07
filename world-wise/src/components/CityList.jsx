import React from 'react'
import { useCities } from '../contexts/CitiesCoontext'
import CityItem from './CityItem'
import Message from './Message'

function CityList() {

  const {cities,isLoading}=useCities();
  console.log(cities)
  if(!cities.length) return <Message message={"Please Click On map to select your city !!"}/>
  return (
    <div className={` h-full  ${!isLoading && "overflow-y-scroll"} `}>
      {
        isLoading ? (<p>Loading...</p>):
        <ul>
          {
            cities.map((city)=>{
              return <CityItem key={city.id} city={city} />
            })
          }
        </ul>
      }
    </div>
  )
}

export default CityList