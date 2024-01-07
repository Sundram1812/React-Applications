import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import BranchInfo from './BranchInfo';
// URL for branches
// https://api.github.com/repos/Sundram1812/Blog-Template/branches

function GetGitInfo() {

    const [userData, setUserData]=useState({});
    const [isLoading, setIsLoading]=useState(false);

    useEffect(()=>{
        async function getGitInfo(){
            setIsLoading(true)
            const resp=await fetch("http://localhost:8080/");
            const data=await resp.json();
            console.log(data);
                setUserData(data);
                setIsLoading(false)
        }
        getGitInfo();
    },[]);

    
  return (
    <div>
    {
        isLoading ? <p>Loading...</p> :
        <>
          <img  src={userData.avatar_url} alt="" height={"100px"} width={"100px"} className='border border-red-500 rounded-full' />
          <p>{userData.id}</p>
          <p>{userData.login}</p>
          <BranchInfo repoUrl={userData.repos_url}/>
        </>
  }    
    </div>
  )
}

export default GetGitInfo