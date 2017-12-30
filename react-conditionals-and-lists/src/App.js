import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  // our state for the project.
  state = {
    // this state property holds the text which the user types in our input field.
    userInput: ''
  }
  // User Input Field Event Handler
  inputChangedHandler = (event) => {
    // this sets the state above to be whatever the user enters in the input field.
    this.setState({userInput: event.target.value})
  }

  // deletes characters of text that we click on. Takes an input of index.
  deleteCharHandler = ( index ) => {
    // makes a copy of the userInput property of state and splits it into an array
    // of individual characters.
    const text = this.state.userInput.split('');
    // removes 1 (only) character from the text[] at the index of 'index'.
    text.splice( index , 1 );
    // creates a new array updatedText[] and then joins the array back into one string.
    const updatedText = text.join('');
    // Sets the state property of UserInput to the the new string we made, updatedText
    // which has the characters we clicked on deleted from the string.
    this.setState({userInput: updatedText});
  }
  
  render() {

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <CharComponent 
                character={ch} 
                key={index}
                clicked={() => this.deleteCharHandler(index)}/>;
    });

    return (
      // This will be out input field which the user will type in and from which we will
      // output their "text inputs".
      // We also setup two way binding between the paragraph element and the input
      // element with the props onChange and value. this mean that the p element
      // will always refelect the latest changes/additions in the in user input.
      <div>
      
        <input 
          type="text" 
          onChange={this.inputChangedHandler} 
          value={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
