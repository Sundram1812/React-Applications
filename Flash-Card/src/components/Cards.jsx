import { useState } from "react";
import Card from './Card'

function Cards() {

    const [selectedId, setSelectedId] = useState(null);

    const questions = [
        {
          id: 3457,
          question: "What language is React based on?",
          answer: "JavaScript"
        },
        {
          id: 7336,
          question: "What are the building blocks of React apps?",
          answer: "Components"
        },
        {
          id: 8832,
          question: "What's the name of the syntax we use to describe a UI in React?",
          answer: "JSX"
        },
        {
          id: 1297,
          question: "How to pass data from parent to child components?",
          answer: "Props"
        },
        {
          id: 9103,
          question: "How to give components memory?",
          answer: "useState hook"
        },
        {
          id: 2002,
          question:
            "What do we call an input element that is completely synchronised with state?",
          answer: "Controlled element"
        }
      ];


    function handleClick(id) {
      setSelectedId(id);
    }
    



  return (
    <div className="w-11/12 h-[100%] mx-auto flex flex-wrap justify-center gap-5">
        {
            questions.map((question)=>{
              {/* 
               return( <div
                key={question.id}
                className={`${ selectedId === question.id ? " bg-yellow-600":"bg-gray-200" } h-[12rem] w-[30%] flex justify-center items-center rounded-md px-5 cursor-pointer transition-all duration-500`}
                onClick={()=>handleClick(question.id)}
                >
                    {selectedId !== question.id ? <span>{question.question}</span> : <span >{ question.answer}</span> }
                </div>) 
                
              */}

                
                {/* USING COMPONENTS */}
                return <Card key={question.id} ques={question} selectedId={selectedId} setSelectedId={setSelectedId} handleClick={handleClick}/>
            })
        }
    </div>
  )
}

export default Cards