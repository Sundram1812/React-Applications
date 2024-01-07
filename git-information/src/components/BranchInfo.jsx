import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import BranchAndRepoInfo from './BranchAndRepoInfo';

function BranchInfo({repoUrl}) {

    const [repos, setRepos]=useState([]);
    const [isLoading, setIsLoading]=useState(false);

    useEffect(()=>{
        async function getRepo(){
            setIsLoading(true)
            const resp=await fetch(repoUrl);
            const data=await resp.json()
            setIsLoading(false);
            setRepos(data);
            console.log(data)
        }

        getRepo();
    }, [repoUrl])

  return (

    <div>
    {
        isLoading ? <p>Loading...</p> :
        <>
            <p className='bg-yellow-600 inline-block'>All Repository List : </p>
            <ul>
                {
                    repos.map((repo)=>{
                        {/* return <li>{repo.name}</li> */}
                        return <BranchAndRepoInfo repoName={repo.name}/>
                    })
                }
            </ul>
        </>
    }    
    </div>
  )
}

export default BranchInfo