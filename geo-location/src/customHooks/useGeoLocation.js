import { useEffect , useState} from 'react';

export function useGeoLocation(){
    const[isLoading, setIsLoading]=useState(false);
    const[count,setCount]=useState(0)
    const [position, setPosition]=useState('')
    const [error, setError]=useState('')


    useEffect(()=>{

        if(!navigator.geolocation) return setError("Your browser does not support geolocation");
        setIsLoading(true)
        navigator.geolocation.getCurrentPosition((pos)=>{
          setPosition({
            lat:pos.coords.latitude,
            lng:pos.coords.longitude
          })
          setIsLoading(false)
        })
        
    },[count])

    function handleClick(){
        setCount((prev)=>prev+1)
    }

    return {isLoading, count,position,handleClick,error}
}