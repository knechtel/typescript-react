import React, { useState } from 'react';
import axios from 'axios';
import { CLIENT_ALL } from './util/url';


const App = () => {

  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const sendLoginAndPassword = (): void => {
    axios.get(CLIENT_ALL, {
      auth: {
        username: "maiquel",
        password: "123",
      }
    }).then(res => {
      const data = res.data;
      console.log(data)
    })
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
          <td><input type="text" value={password} onChange={(e) => { handlerPassword(e) }} /></td>
        </tr>
        <input type="submit" onClick={() => { sendLoginAndPassword() }} />
      </table>
    </div>
  )
};

export default App;


