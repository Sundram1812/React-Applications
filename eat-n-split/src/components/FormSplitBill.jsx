import React from "react";
import { useState } from "react";
import Button from "./Button";
import Friend from "./Friend";

function FormSplitBill({ selectedFriend, handleExpenses }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [whoPay, setWhoPay] = useState("user");

  let balance = whoPay === "user" ? bill - myExpense : -myExpense;

  function handleSubmit(e) {
    e.preventDefault();
    if (bill === 0 || myExpense === 0) return;
    console.log(bill);
    console.log("Paid by " + whoPay);
    handleExpenses(balance, selectedFriend.id);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-orange-200 px-6 py-6 rounded-md "
      >
        <h2 className="text-[1.5em] font-bold">
          SPLIT A BILL WITH{" "}
          <span className=" uppercase"> {selectedFriend.name} </span>
        </h2>

        <div className="flex justify-between items-center flex-wrap">
          <label htmlFor="" className="text-[1.2em] font-semibold">
            💰Bill value
          </label>
          <input
            type="number"
            value={bill !== 0 ? bill : ""}
            onChange={(e) => setBill(Number(e.target.value))}
            className="outline outline-orange-400 rounded-md py-1"
          />
        </div>

        <div className="flex justify-between items-center flex-wrap">
          <label htmlFor="" className="text-[1.2em] font-semibold">
            🧍Your expense
          </label>
          <input
            type="number"
            value={myExpense !== 0 ? myExpense : ""}
            onChange={(e) =>
              setMyExpense(
                Number(e.target.value) > bill
                  ? myExpense
                  : Number(e.target.value)
              )
            }
            className="outline outline-orange-400 rounded-md py-1"
          />
        </div>

        <div className="flex justify-between items-center flex-wrap">
          <label htmlFor="" className="text-[1.2em] font-semibold">
            🧑🏻‍🤝‍🧑🏻{selectedFriend.name}'s expense
          </label>
          <input
            type="text"
            value={bill - myExpense ? Math.abs(bill - myExpense) : ""}
            readOnly
            className="outline outline-orange-400 rounded-md py-1"
          />
        </div>

        <div className="flex justify-between items-center flex-wrap">
          <label htmlFor="" className="text-[1.2em] font-semibold">
            🤑Who is paying the bill
          </label>
          <select
            onChange={(e) => setWhoPay(e.target.value)}
            value={whoPay}
            className="outline outline-orange-400 rounded-md cursor-pointer"
          >
            <option value="user">You</option>
            <option value="friend" className="capitalize">
              {selectedFriend.name}
            </option>
          </select>
        </div>

        <Button>Split Bill</Button>
      </form>
    </div>
  );
}

export default FormSplitBill;
