import { useEffect } from "react"

export function useBackKey(key,action){
    useEffect(()=>{
        function callback(e){
            if(e.code === key){
                action()
            }
        }
        document.addEventListener('keydown', callback)

        // clean up function
        return ()=>{
            document.removeEventListener('keydown',callback)
        }

    },[action,key])
}