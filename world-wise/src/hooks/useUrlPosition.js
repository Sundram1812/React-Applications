import React from 'react'
import { useSearchParams } from 'react-router-dom';

export function useUrlPosition() {
    const [searchParam, setSearchParam] = useSearchParams();
    let lat = searchParam.get("lat");
    let lng = searchParam.get("lng");

    return [lat,lng]
}

