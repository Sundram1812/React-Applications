import React from 'react'
import { useState } from 'react'
import TabBtn from './TabBtn'
import Tab from './Tab'
import DiffrenetContent from './DiffrenetContent'

function TabContents({content}) {

    const [tab,setTab]=useState(0)

  return (
    <div className='flex flex-col items-baseline w-6/12 mx-auto gap-2'>
        <div className=' flex items-center gap-3 justify-center mt-10'>
            <TabBtn num={0} tab={tab} setTab={setTab}/>
            <TabBtn num={1} tab={tab} setTab={setTab} />
            <TabBtn num={2} tab={tab} setTab={setTab} />
            <TabBtn num={3} tab={tab} setTab={setTab} />
        </div>

        <div className='border border-green-600 rounded-md p-5 bg-blue-50'>
            {tab<=2 ? <Tab key={content[tab].summary} content={content[tab]}/> : <DiffrenetContent key={10}/>}
        </div>
    </div>

  )
}

export default TabContents