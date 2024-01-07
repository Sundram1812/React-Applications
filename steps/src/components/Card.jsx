import { useState } from "react";
import Button from "./Button";

function Card() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const titleList = [
    "Learn React🥰",
    "Apply for jobs🙊",
    "Invest your Income🤑",
  ];

  function handleNext() {
    step < 3 && setStep((prev) => prev + 1);
  }

  function handlePrevious() {
    step > 1 && setStep((prev) => prev - 1);
  }

  return (
    <div className="relative ">
      <div className="absolute -right-8 -top-6">
        {isOpen ? (
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="bg-purple-500 py-1 px-3 rounded-full text-white font-bold shadow-[0_3px_10px_purple]"
          >
            X
          </button>
        ) : (
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="bg-purple-500 py-2 px-4 rounded-3xl text-white font-bold shadow-[0_3px_10px_purple]"
          >
            show
          </button>
        )}
      </div>

      {isOpen && (
        <div className="px-16 py-4 flex flex-col gap-10">
          <div className=" w-full flex justify-between ">
            <p
              className={`${
                step > 0 ? "bg-purple-600 text-white" : "bg-white"
              } h-10 w-10 flex justify-center items-center rounded-full bg-purple-600 font-bold shadow-[0_3px_10px_purple]`}
            >
              1
            </p>

            <p
              className={`${
                step > 1 ? "bg-purple-600 text-white" : "bg-white"
              } h-10 w-10 flex justify-center items-center rounded-full font-bold shadow-[0_3px_10px_purple]`}
            >
              2
            </p>

            <p
              className={`${
                step > 2 ? "bg-purple-600 text-white" : "bg-white"
              } h-10 w-10 flex justify-center items-center rounded-full font-bold shadow-[0_3px_10px_purple]`}
            >
              3
            </p>
          </div>

          <p className="font-bold text-[1.5em] text-gray-600">
            Step {step}: {titleList[step - 1]}
          </p>

          <div className="flex justify-between items-center flex-wrap gap-4">
            <Button onclick={handlePrevious}>
              <span>👈 Previous</span>
            </Button>

            <Button onclick={handleNext}>
              <span>Next 👉</span>
            </Button>

          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
