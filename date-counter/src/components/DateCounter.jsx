import { useState } from "react";

function DateCounter() {
  const [step, setStep] = useState(1);
  const [stepType, setStepType]=useState('btn');
  const [count, setCount] = useState(0);

  let date=new Date("october 13 2023");
  date.setDate(date.getDate() + count)


  

  return (
    <div className="flex flex-col justify-center items-center gap-6 w-[300px] border border-black bg-gray-200 rounded-md p-1 mx-auto">


    {/* Top buttons */}
      <div className="flex items-center gap-4 w-full">
       { stepType ==='btn'?
        (
          <button
          onClick={()=>setStepType('sldr')}
          className="px-16 py-2 bg-blue-600 text-white font-bold rounded-lg w-full"
          >For Slider Step</button>
        ) :
        (
          <button
          onClick={()=>setStepType('btn')}
          className="px-16 py-2 bg-blue-600 text-white font-bold rounded-lg w-full"
          >For Button Step</button>
        )
        }
        
      </div>
      
      <div className="w-full">
        {      
            stepType==='btn' ? (
            
            <div className="flex items-center justify-between w-full gap-6">
              <button 
              onClick={()=>setStep((prev)=>prev-1)}
              className="border border-black px-6 py-1 rounded-md font-bold bg-blue-600">
                -
              </button>
              <p className="text-[1.3em]">Step:{step}</p>
              <button 
              onClick={()=>setStep((prev)=>prev+1)}
              className="border border-black px-6 py-1 rounded-md font-bold bg-blue-600">
                +
              </button>
            </div>
            ) :

            (
            <div className="flex items-center">
              <input 
              onChange={(e)=>setStep(Number(e.target.value))}
              className="cursor-pointer w-full"
              type="range" value={step} />
              <span className="font-bold text-purple-600">{step}</span>
            </div>
            )
        }
      </div>


      {/* Count Section */}
      <div className="flex items-center gap-2 w-full justify-between">
        <button 
        onClick={()=>setCount((prev)=>prev-step)}
        className="border border-black px-6 py-1 rounded-md font-bold bg-blue-600">
          -
        </button>
        {/* <p className="text-[1.3em]">Count:{count}</p> */}
        <span className="font-bold">Count :</span>
        <input
          type="text"
          value={count} 
          className="outline outline-black rounded-lg px-2 w-24"
          onChange={(e)=>setCount(Number(e.target.value))}
        />

        <button 
        onClick={()=>setCount((prev)=>prev+step)}
        className="border border-black px-6 py-1 rounded-md font-bold bg-blue-600">
          +
        </button>
      </div>

      {/* Date printing */}
      <p className="text-[1.3em] font-semibold">
        {
           count > 0 ? 
           (<span>{`${count} days from today is ${date.toDateString()}`}</span>) :
           count === 0 ? (<span>{`Today is ${date.toDateString()}`}</span>) :
          (<span>{ `${Math.abs(count)} days ago from today is ${date.toDateString()}`}</span>)
        }
      </p>

      <div className="w-full">
        {  (count !== 0 || step !==1) ?     
          <button
          onClick={()=>{setStep(1) ,setCount(0)}}
          className="px-24 py-2 bg-blue-600 text-white font-bold rounded-lg w-full"
          >
          Reset</button>  : null      
        }
      </div>

    </div>
  );
}

export default DateCounter;
