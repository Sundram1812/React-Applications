/* eslint-disable react/prop-types */
import { useState } from "react";

function Form({onAddItems}) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleClick() {

    if (!item) return;

    const data = {
      quantity: quantity,
      name: item,
      isPacked: false,
      id: Date.now(),
    };

    onAddItems(data);
    setItem("");
    setQuantity(1);
  }

  return (
    <div>
      <div className=" flex gap-5 justify-center items-center bg-orange-500 h-12 py-8 font-roboto">
        <p className=" text-[1.2em]">What do need for your 😍 trip ?</p>

        <form onSubmit={handleSubmit} className="flex gap-3">
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="px-4 py-1 rounded-2xl font-semibold cursor-pointer"
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
              return (
                <option key={num} value={num}>
                  {num}
                </option>
              );
            })}
          </select>

          <input
            type="text"
            placeholder={"items..."}
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="px-4 font-semibold rounded-2xl"
          />

          <button
            onClick={handleClick}
            className="px-6 py-1 bg-blue-400 rounded-2xl font-semibold text-white"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
