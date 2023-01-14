import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { CLIENT_ALL, TOKEN } from './util/url';


const App = () => {
  const navegate = useNavigate();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const sendLoginAndPassword = (): void => {
    axios.post(TOKEN, {
      username: login,
      password: password

    }
    ).then((response) => {
      if (response.status === 200) {
        navegate("/test")
      }      

    }, (error) => {
      console.log(error);
    });
    console.log(login + " -  " + password);


  };

  const handleLogin = (event: { target: { value: any; }; }) => {
    setLogin(event.target.value);
  }
  const handlerPassword = (event: { target: { value: any; }; }) => {
    setPassword(event.target.value);
  }

  return (
    <div>
      <table>
        <tr>
          <td>Login</td>
          <td><input type="text" value={login} onChange={(e) => { handleLogin(e) }} /></td>
        </tr>
        <tr>
          <td>senha</td>
          <td><input type="password" value={password} onChange={(e) => { handlerPassword(e) }} /></td>
        </tr>
        <input type="submit" onClick={() => { sendLoginAndPassword() }} />
      </table>
    </div>
  )
};

export default App;


