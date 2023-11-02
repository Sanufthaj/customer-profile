import React, { createContext, useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import Customer from "./components/Customer";

export const UserContext = createContext();

function App() {

  const [auth,setAuth] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>S A N U F  T H A J</h1>
      </header>
      
      <UserContext.Provider value={{auth,setAuth}}>
        { auth ? <Customer/> : <MainPage /> }
      </UserContext.Provider>

      <footer className="footer"> © Developed by Acabes International</footer>
    </div>
  );
}

export default App;
