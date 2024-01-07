import React from "react";

function Button({ children, onClick }) {
  return (
    <div className="self-end pb-2">
      <button
        onClick={onClick}
        className="px-4 py-1 rounded-md bg-orange-500 text-white "
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
