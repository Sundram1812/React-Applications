/* eslint-disable react/prop-types */
function Button({onclick,children}) {
  return (
    <div>
        <button
            onClick={onclick}
            className="py-2 px-6 bg-purple-600 rounded-3xl text-white font-bold hover:bg-purple-700 transition-all duration-500"
        >
            {children}
        </button>
    </div>
  )
}

export default Button