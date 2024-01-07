import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const FAKE_USER={
    name:"sundram",
    email:"sundram62048@gmail.com",
    password:"12345"
}

const AuthContext = createContext();

const initialState = {
  user: null,
  authenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      };

    case "logout":
      return {
        ...state,
        authenticated: false,
        user: null,
      };

    default:
      return "";
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user, authenticated } = state;

  function login(email, password) {
    console.log(email,password)
    if(FAKE_USER.email===email && FAKE_USER.password===password) {
        dispatch({type:'login', payload:FAKE_USER});
    }
  }
  function logout() {
    dispatch({type:'logout'})
  }

  return (
    <AuthContext.Provider 
        value={{ login, logout, user, authenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(){
    const context=useContext(AuthContext);
    if(context===undefined)throw new Error("AuthContext was used outside the CitiProvider");
    return context;
}


export {AuthProvider, useAuth}
