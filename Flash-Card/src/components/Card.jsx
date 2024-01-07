/* eslint-disable react/prop-types */

function Card({ ques , handleClick,selectedId,}) {
  return (
      <div
        className={`${ selectedId === ques.id ? " bg-yellow-600":"" } 
        h-[15rem] w-[30%] flex justify-center items-center bg-gray-200 rounded-md px-5 
        cursor-pointer transition-all duration-500 font-roboto font-bold`}
        onClick={()=>handleClick(ques.id)}
        >
        {selectedId !== ques.id ? <span>{ques.question}</span> : <span >{ ques.answer}</span> }
      </div>
  );
}

export default Card;
