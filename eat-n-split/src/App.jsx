import { useState } from "react";
import "./App.css";
import Friends from "./components/Friends";
import AddFriend from "./components/AddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import initialFriends from "./data.js";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [expenses, setExpenses] = useState(null);

  function handleShowAddButton() {
    setShowAddFriend((prev) => !prev);
  }

  function handleAddNewFriend(newFriend) {
    setFriends((prev) => [...prev, newFriend]);
  }

  function handleSelectedFriend(friend) {
    console.log(friend);
    setSelectedFriend(friend);
    setShowAddFriend((prev) => (prev ? false : false));
  }

  function handleExpenses(balance, id) {
    console.log("balance :" + balance);
    let updatedFriends = [];
    updatedFriends = friends.map((friend) =>
      friend.id === id
        ? ((friend.balance = friend.balance + balance), friend)
        : friend
    );
    setFriends(updatedFriends);
    // setSelectedFriend(null);
  }

  return (
    <div className=" w-10/12 mx-auto min-h-[100vh] flex justify-around pt-16 ">
      <div className="gap-2 flex flex-col w-full max-w-[40%]">
        <Friends
          friendsList={friends}
          handleSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && (
          <AddFriend
            handleAddNewFriend={handleAddNewFriend}
            onShowAddButton={handleShowAddButton}
          />
        )}

        <div className="w-full flex justify-end px-4">
          <Button onClick={handleShowAddButton}>
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
      </div>

      <div className="w-full max-w-[40%]">
        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            handleExpenses={handleExpenses}
            key={selectedFriend.id}
          />
        )}
      </div>
    </div>
  );
}

export default App;
