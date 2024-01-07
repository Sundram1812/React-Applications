import datas from "../data";
import Item from "./Item";
import { useState } from "react";

function Items() {
  console.log(datas);
  const [isCurrOpen, setIsCurrOpen] =useState(null);

  function handleToggle(num){
    
    setIsCurrOpen((prev)=>prev===num ? null : num)
    console.log(num);
  }

  return (
    <div>
      <ul className="flex flex-col items-center justify-center gap-8 w-full pt-8">
        {datas.map((data, index) => {
          return <Item key={index} title={data.title} isCurrOpen={isCurrOpen} index={index} onOpen={handleToggle}>
            {data.text}
          </Item>;
        })}
        
        <Item key={'xyz'} title={"Test"} isCurrOpen={isCurrOpen} index={3} onOpen={handleToggle}>  

          <p className="font-semibold text-[1.2em]">Allows React developers to:</p>
          <ul className="ml-6 my-3">
            <li className=" list-disc">up UI into components</li>
            <li className=" list-disc">Make components reusuable</li>
            <li className=" list-disc">Place state efficiently</li>
          </ul>   

        </Item>

      </ul>
    </div>
  );
}

export default Items;
