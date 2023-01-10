import React, { Component } from 'react';
import './App.css'
//const logo: string = require("./logo.svg").default;

class App extends Component {
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
