import React, {useState} from "react";
import "./App.css";
import {Axios} from "axios";

function App() {

    const[loginReg, setLoginReg] = useState("");
    const[passwordReg, setPasswordReg] = useState("");

    const register = () => {
        Axios.post('http://localhost:3001/register',
            {login: loginReg,
            password: passwordReg,
            }).then((Response) =>{
                console.log(Response);
        })
    };

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
            <input
                type="text"
                name="login"
                placeholder="login..."
                onChange={(e) =>{
                    setLoginReg(e.target.value);
                }}
            />
            <label>Haslo:</label>
            <input
                type="password"
                name="password"
                placeholder="haslo..."
                onChange={(e) => {
                    setPasswordReg(e.target.value);
                }}
            />
            <button onClick={register}>Zarejestruj</button>
        </div>
      </div>
    </div>
  );
}

export default App;
