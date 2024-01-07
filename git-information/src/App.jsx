import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetGitInfo from './components/GetGitInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' px-10 py-5 bg-[#313131] inline-block m-4 shadow-[5px_5px_0px_0px_#008000]'>
      <GetGitInfo/>
    </div>
  )
}

export default App
