import './App.css'
import Avatar from './components/Avatar'
import Content from './components/Content'
import Skills from './components/Skills'

function App() {

  return (
    <div className=' border-4 border-white text-white min-w-[200px] w-[30%] max-h-[70%] pb-3 bg-gray-800 ml-6 mt-6'>
      <Avatar/>
      <div className=' px-8 flex flex-col gap-4 justify-center '>
        <h2 className=' text-lg font-bold pt-3'>Full stack developer</h2>
        <Content/>
        <Skills/>
      </div>
    </div>
    
  )
}

export default App
