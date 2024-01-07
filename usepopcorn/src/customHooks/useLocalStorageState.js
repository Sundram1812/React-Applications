import { useEffect , useState} from "react";

export function useLocalStorageState(initialState,key){
    const [value, setVlaue]=useState(()=>{
        const localValue=localStorage.getItem(key);
        return localValue ? JSON.parse(localValue) : initialState;
      });


    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
    },[value,key])

    return [value, setVlaue]
}