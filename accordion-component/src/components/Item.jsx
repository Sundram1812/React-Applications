/* eslint-disable react/prop-types */
function Item({ index,title , onOpen ,isCurrOpen, children}) {
  return (
    <div className="text-white w-full">
      <li className=" w-[93%] shadow-[#111111_0px_3px_8px] ">
        {
          <div
            onClick={()=>onOpen(index)}
            className={` flex items-baseline justify-between w-full cursor-pointer
             ${isCurrOpen===index ? " border-t-4 border-green-600 " : "" } pb-4 font-roboto`}
            >
            <div className="flex items-baseline">
              <span className={`mx-4 font-extrabold text-[1.1em] ${isCurrOpen===index ? "text-green-500" : "text-gray-300"} `}>
                0{index + 1}
              </span>

              <div>
                <p className={`pt-5 pb-3 font-bold ${isCurrOpen===index ? "text-green-500" : "text-gray-100"}`}>
                  {title}
                </p>

                <p className="PY-4 text-[.8em]">{isCurrOpen===index && children}</p>
              </div>
            </div>

            <span className="text-[1.5em] font-bold mr-3">
              {isCurrOpen===index ? "-" : "+"}
            </span>
          </div>
        }
      </li>
    </div>
  );
}

export default Item;

// !showAnswer ?
// (
//     <div onClick={handleClick} className="flex justify-between items-baseline cursor-pointer py-4 font-roboto">
//         <div className="flex">
//             <span className="mx-4 font-extrabold text-[1.1em] text-gray-400">0{index+1}</span>
//             <h2>{children.title}</h2>
//         </div>
//         <span className="text-[1.5em] font-bold mr-3">+</span>
//     </div>
// ) :
// (
//     <div onClick={handleClick} className=" flex items-baseline justify-center w-full cursor-pointer border-t-4 border-green-600 pb-4 font-roboto" >

//         <span className="mx-4 font-extrabold text-[1.1em] text-green-500">0{index+1}</span>

//         <div>
//             <p className="py-4 text-green-600 font-bold">{children.title}</p>
//             <p className="PY-4">{children.text}</p>
//         </div>

//         <span className="text-[1.5em] font-bold mr-3">-</span>

//     </div>
// )
