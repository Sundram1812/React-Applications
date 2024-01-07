/* eslint-disable react/prop-types */
function Item({ item , deleteItem, onHandlePacked}) {

  return (
    <li className="flex items-center gap-3 text-white font-roboto ">
      {/* <span className="text-[1.2em]"> </span> */}

      <input type="checkbox" value={item.isPacked}
       onChange={()=>onHandlePacked(item.id)}
       className="accent-orange-600"
      />

      <span className={`${item.isPacked ? "line-through":null} text-[1.2em]`}>
        {item.quantity} {item.name}
      </span>
      <button onClick={()=>deleteItem(item.id)} className="text-[.7em]">❌</button>
    </li>
  );
}

export default Item;
