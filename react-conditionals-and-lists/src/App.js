import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';

class App extends Component {
  
  state = {
    userInput: ''
  }
  // User Input Field Event Handler
  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value})
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
        <hr />
        <input 
          type="text" 
          onChange={this.inputChangedHandler} 
          value={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}/>
      </div>
    );
  }
}

export default App;
