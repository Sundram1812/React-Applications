import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bill from './components/Bill'
import Review from './components/Review'
import BillInfo from './components/BillInfo'

function App() {
  const [bill, setBill] = useState(0)
  const [percent1, setPercent1]=useState(0);
  const [percent2, setPercent2]=useState(0);
  const totalPercent=bill*(percent1+percent2)/2/100;

  function handleBill(price){
    setBill(price);
  }

  function handleReset(){
    setBill('')
    setPercent1(0)
    setPercent2(0)
  }
  
  return (
      <div className='flex flex-col gap-4'>
        <Bill onBill={handleBill} bill={bill}/>
        <Review percent={percent1} setPercent={setPercent1}> How did you like the service ?</Review>
        <Review percent={percent2} setPercent={setPercent2}> How did your friend like the service ?</Review>
        <BillInfo totalBill={bill} totalTip={totalPercent}/>
        {bill ? <button onClick={handleReset}>Reset</button> : ""}
      </div>
  )
}

export default App
