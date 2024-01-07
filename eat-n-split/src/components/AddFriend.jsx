import React from "react";
import { useState } from "react";
import Button from "./Button";

function AddFriend({ handleAddNewFriend, onShowAddButton }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();

    const frnd = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    if (!name) return;

    handleAddNewFriend(frnd);
    onShowAddButton();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-orange-200 pt-4 pb-1 flex flex-col gap-4 w-full rounded-md px-4"
    >
      <div className="flex justify-between flex-wrap">
        <label htmlFor="friendName " className="text-[1.2em] font-semibold ">
          Friend name
        </label>
        <input
          id="friendName"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" rounded-lg outline-orange-200 px-3 py-1"
        />
      </div>

      <div className="flex justify-between flex-wrap">
        <label htmlFor="friendName " className="text-[1.2em] font-semibold ">
          Profile Photo
        </label>
        <input
          id="friendName"
          type="text"
          placeholder="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className=" rounded-lg outline-orange-200 px-3 py-1"
        />
      </div>
      <Button>add</Button>
    </form>
  );
}

export default AddFriend;
