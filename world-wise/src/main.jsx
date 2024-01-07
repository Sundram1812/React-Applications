import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesCoontext.jsx";
import { AuthProvider } from "./contexts/FakeAuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <CitiesProvider>
    <AuthProvider>
      
        <App />
      
    </AuthProvider>
  </CitiesProvider>
  </BrowserRouter>
);
