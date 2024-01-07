import React from "react";
import { useState } from "react";
import AddFriend from "./AddFriend";
import Button from "./Button";
import Friend from "./Friend";
import friends from "../data.js";

function Friends({ friendsList, handleSelectedFriend, selectedFriend }) {
  const [isAddFriend, setIsAddFriend] = useState(false);

  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex flex-col items-center px-4">
        {friends &&
          friendsList.map((friend) => {
            return (
              <Friend
                key={friend.id}
                friend={friend}
                handleSelectedFriend={handleSelectedFriend}
                selectedFriend={selectedFriend}
              />
            );
          })}
      </div>

      {/* <div className='w-full'> */}
      {isAddFriend && <AddFriend handleNewFriend={handleNewFriend} />}
      {/* <AddFriend handleNewFriend={handleNewFriend}/> */}
      {/* </div> */}
    </div>
  );
}

export default Friends;
