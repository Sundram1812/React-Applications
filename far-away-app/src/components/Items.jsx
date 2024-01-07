/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from "./Item";

function Items({items, onDeleteItem, onHandlePacked, onClearList}) {

  const [sortBy, setSortBy]=useState('input');

  let sortedItems;
  if(sortBy === 'input') sortedItems=items;

  if(sortBy === 'name') {
    sortedItems= items.slice().sort((a,b)=>a.name.localeCompare(b.name));
  }

  if(sortBy === 'packed'){
    sortedItems=items.slice().sort((a,b)=>Number(a.isPacked)-Number(b.isPacked))    
  }

  return (
    <div className=" w-4/12 mx-auto flex flex-col justify-between h-[370px]">
      <ul className=" flex gap-14 mt-8 flex-wrap">
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} deleteItem={onDeleteItem} onHandlePacked={onHandlePacked} />
        ))}
      </ul>

      <div className="flex justify-center items-center gap-8">
          <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} 
          className="min-w-[15rem] w-[16rem] rounded-2xl py-1 px-1 font-semibold text-[.9em] font-roboto bg-orange-200 cursor-pointer">

            <option value="input">SORTED BY INPUT ORDER</option>
            <option value="name">SORTED BY NAME</option>
            <option value="packed">SORTED BY PACKED STATUS</option>
          </select>

          <button 
          onClick={onClearList}
          className="min-w-[6rem] w-[8rem] rounded-2xl py-1 px-1 font-semibold text-[.9em] font-roboto bg-orange-200"
          >
            Clear List
          </button>
      </div>
      
    </div>
  );
}

export default Items;
