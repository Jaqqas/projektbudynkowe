import React, {useState} from "react";
import "./App.css";
import Axios from 'axios';

function App() {

    const[loginReg, setLoginReg] = useState("");
    const[passwordReg, setPasswordReg] = useState("");

    const[login2, setLogin] = useState("");
    const[password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    const register = () => {
        Axios.post('http://localhost:3001/register',
            {login: loginReg,
            password: passwordReg,
            }).then((Response) =>{
                console.log(Response);
        })
    };

    const login = () => {
        Axios.post('http://localhost:3001/login',
            {login: login2,
                password: password,
            }).then((Response) =>{
                if(Response.data.message){
                    setLoginStatus(Response.data.message)
                } else {
                    setLoginStatus(Response.data[0].login)
                }
            console.log(Response);
        });
    };


    return (
    <div className="App">

      <div className="kontener">

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

        <div className="login">
            <h2>Logowanie</h2>
            <label>Login:</label>
            <input
                type="text"
                name="login"
                placeholder="login..."
                onChange={(e) =>{
                    setLogin(e.target.value);
                }}
            />
            <label>Haslo:</label>
            <input
                type="password"
                name="password"
                placeholder="haslo..."
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <button onClick={login}>Zaloguj</button>
            <h1>{loginStatus}</h1>
        </div>



      </div>

    </div>
  );
}

export default App;
