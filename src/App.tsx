import React, { Component } from 'react';
import './App.css'
import { CLIENT_ALL } from './util/url'; 
//const logo: string = require("./logo.svg").default;
import axios from 'axios';
class App extends Component {

  async componentDidMount() : Promise<void> {
     await axios.get(CLIENT_ALL, {
        auth: {
          username: "maiquel",
          password: "123",
        }}).then(res => {
        const data = res.data;
        console.log(data)
      })
  }
  render() {
    return (
      <div className="App">
        <table>
        <tr>
          <td>Login</td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>senha</td>
          <td><input type="text"/></td>
        </tr>
        <input type="submit"/>
        </table>
        
      </div>
    );
  }
}

export default App;
