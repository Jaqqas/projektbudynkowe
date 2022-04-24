import React from "react";
import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="Kontener">

        <div className="login">
            <h2>Logowanie</h2>
            <label>Login:</label>
            <input type="text"  name="login" placeholder="login..."/>
            <label>Haslo:</label>
            <input type="password"  name="password" placeholder="haslo..."/>
            <button>Zaloguj</button>
        </div>

        <div className="register">
            <h2>Rejestracja</h2>
            <label>Login:</label>
            <input type="text"  name="login" placeholder="login..."/>
            <label>Haslo:</label>
            <input type="password"  name="password" placeholder="haslo..."/>
            <button>Zarejestruj</button>
        </div>
      </div>
    </div>
  );
}

export default App;
