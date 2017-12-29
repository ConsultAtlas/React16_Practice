import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";

class App extends Component {
  
  state = {
        oldUserName: "Zach3412"
  }

  userNameChangedHandler = (event) => {
    this.setState( {oldUserName: event.target.value}) // event.target points to the element that the event occured on. value is the property of the input element.
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UserInput 
          changed={this.userNameChangedHandler}
          currentName={this.state.oldUserName}/>
        <UserOutput userName={this.state.oldUserName}/>
        <UserOutput userName={this.state.oldUserName}/>
      </div>
    );
  }
}

export default App;
