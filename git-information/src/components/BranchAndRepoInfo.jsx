import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'


function BranchAndRepoInfo({repoName}) {
    const [branchName, setBranchName]=useState('');
    const [loading, setLoading]=useState(false)

  useEffect(()=>{
    async function getInfo(){
        try {
            setLoading(true)
            const resp=await fetch(`https://api.github.com/repos/Sundram1812/${repoName}/branches`);
            
            const data=await resp.json();
            console.log(data)
            setLoading(false)
            setBranchName(data[0].name);
            console.log(data[0]);

        } catch (error) {
            console.log(error)
        }
    }

    getInfo();
  },[repoName]);

  
  return (
    <div>
        {
          loading ? <p>Loading...</p> :
          <>
            <p className=' pt-3'>Repository Name:= {repoName}</p>
            <p>BranchName:= {branchName}</p>
            <div className=' h-[2px] bg-[#008000]'></div>
          </>
        }

    </div>
  )
}

export default BranchAndRepoInfo