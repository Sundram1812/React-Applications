import { useReducer } from "react";
import "./App.css";
import Button from "./components/Button";

const DEPOSIT_BALANCE = 150;
const WITHDRAW_BALANCE = 50;
const LOAN_BALANCE = 5000;

const initialState = {
  // active
  accountStatus: "inactive",
  balance: 0,
  loan: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        balance: 500,
        accountStatus: "active",
      };
    case "deposit":
      return {
        ...state,
        balance: state.balance + DEPOSIT_BALANCE,
      };
    case "withdraw":
      return {
        ...state,
        balance:
          state.balance >= 50
            ? state.balance - WITHDRAW_BALANCE
            : state.balance,
      };
    case "takeLoan":
      return {
        ...state,
        loan: state.loan < 5000 ? state.loan + LOAN_BALANCE: state.loan ,
        balance: state.loan < 5000 ?  state.balance + LOAN_BALANCE : state.balance
      };
    case "payLoan":
      return {
        ...state,
        loan: state.loan >= 5000 ? state.loan - LOAN_BALANCE : state.loan,
        balance: state.balance - state.loan,
      };
    case "closeAccount":
      return {
        balance: state.balance === 0 ? 0 : state.balance,
        loan: state.loan === 0 ? 0 : state.loan,
        accountStatus:
          state.balance === 0 && state.loan === 0
            ? "inactive"
            : state.accountStatus,
      };

    default:
      throw new Error("Unkonwn Action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { accountStatus, balance, loan } = state;

  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <div className="my-4">
        <p className="text-white">Balance:{balance}</p>
        <p className="text-white">Loan:{loan}</p>
      </div>
      <Button
        accountStatus={accountStatus === "inactive" ? false : true}
        dispatch={dispatch}
        buttonType={"openAccount"}
      >
        Open account
      </Button>
      <Button
        accountStatus={accountStatus !== "active" }
        dispatch={dispatch}
        buttonType={"deposit"}
      >
        Deposit 150
      </Button>
      <Button
        accountStatus={accountStatus !== "active"}
        dispatch={dispatch}
        buttonType={"withdraw"}
      >
        Withdraw 50
      </Button>
      <Button
        accountStatus={accountStatus !== "active"}
        dispatch={dispatch}
        buttonType={"takeLoan"}
      >
        Request a loan of 5000
      </Button>
      <Button
        accountStatus={accountStatus !== "active"}
        dispatch={dispatch}
        buttonType={"payLoan"}
      >
        Pay loan
      </Button>
      <Button
        accountStatus={accountStatus !== "active"}
        dispatch={dispatch}
        buttonType={"closeAccount"}
      >
        Close account
      </Button>
    </div>
  );
}

export default App;
