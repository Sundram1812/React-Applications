import React from "react";
import { useState } from "react";
import Button from "./Button";

function Friend({ friend, handleSelectedFriend, selectedFriend }) {
  const [selected, setSelected] = useState(false);

  function handleClick() {
    handleSelectedFriend((prev) =>
      friend.id === selectedFriend?.id ? null : friend
    );
  }

  return (
    <div
      className={` ${
        friend.id === selectedFriend?.id ? "bg-orange-200" : ""
      } flex items-center justify-between w-full gap-12 hover:bg-orange-200 rounded-md py-3 px-3 pl-2`}
    >
      <div className="flex justify-center items-center gap-8">
        <img src={friend.image} alt={`pics`} className=" rounded-full" />
        <div>
          <h2 className="font-bold">{friend.name}</h2>
          {friend.balance < 0 ? (
            <p className="text-[.7em] text-red-500 font-bold">
              You owe {friend.name} ${Math.abs(friend.balance)}
            </p>
          ) : friend.balance === 0 ? (
            <p className="text-[.7em] font-bold">
              You and {friend.name} are even
            </p>
          ) : (
            <p className="text-[.7em] text-green-500 font-bold">
              {friend.name} Owe you ${friend.balance}
            </p>
          )}
        </div>
      </div>
      <Button onClick={handleClick}>
        {friend.id === selectedFriend?.id ? "close" : "Select"}
      </Button>
    </div>
  );
}

export default Friend;
