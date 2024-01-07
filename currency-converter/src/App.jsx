import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'
import CalculatedValue from './components/CalculatedValue';
import Input from './components/Input'
import Section from './components/Section'

function App() {

  const[firstCurrency, setFirstCurrency]=useState('USD');
  const[secondCurrency, setSecondCurrency]=useState('INR');
  const[calculatedAmount, setCalculatedAmount]=useState('')
  const[amount,setAmount]=useState(0);
  const[isLoading,setIsLoading]=useState(false)


  const controller=new AbortController()


  function handleFirstCurrency(currency1){
      setFirstCurrency(currency1)
  }

  function handleSecondCurrency(currency2){
      setSecondCurrency(currency2)
  }

  function handleAmount(value){
    setAmount(value);
  }

  function handleClick(){
    setFirstCurrency('USD')
    setSecondCurrency('INR')
    setCalculatedAmount('')
    setAmount(0)
  }


  useEffect(()=>{
    async function fetchData(){
      try {
        if(amount==='') return;

        setIsLoading(true)
        let res=await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${firstCurrency}&to=${secondCurrency}`,{signal: controller.signal});
        let data=await res.json();
        setIsLoading(false);
        setCalculatedAmount(data.rates[secondCurrency])
        
      } catch (error) {
        console.log(error)
      }
    }

    if(firstCurrency === secondCurrency) return setCalculatedAmount(`${amount} ${firstCurrency}`)

    fetchData()
    
    // cleaning
    return ()=>{
      controller.abort();
    }

  },[amount,firstCurrency,secondCurrency])

  return (
    <div className='flex flex-col gap-4 w-[500px] mx-auto my-6'>
      <div className='flex justify-between gap-4'>
        <Input amount={amount} handleAmount={handleAmount} />
        <Section 
              firstCurrency={firstCurrency} 
              secondCurrency={secondCurrency} 
              handleFirstCurrency={handleFirstCurrency}
              handleSecondCurrency={handleSecondCurrency}
              />


            
      </div>

      <div className='border-2 border-purple-700 py-1 px-4 rounded-xl'>
        {amount === 0  ? <p className='font-bold text-purple-700'>Output</p> :
        isLoading ? <p className='text-purple-700 font-bold'>Loading...</p> : <CalculatedValue calculatedAmount={calculatedAmount}/>  }
      </div>

      <button 
      onClick={handleClick}
      className="py-2 px-6 bg-purple-700 text-bold text-white rounded-xl"
      >Reset</button>
    
    </div>

    
  )
}

export default App
