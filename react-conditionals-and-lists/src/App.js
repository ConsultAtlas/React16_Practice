import React, { Component } from 'react';
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

  // deletes characters of text that we click on. Takes an input of index of the 
  // character that we want to delete.
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
    // here we create a copy of the userInput b/c we dont want to manipulate state 
    // directly. Using the .map() we seperate the sting of characters in userInput
    // into another array with each character as an element of the array. We use 
    // split() because what map() outputs is not really a javascript array. split
    // breaks the string up into units nad then map adds them to the new array.
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <CharComponent 
                character={ch} 
                // here, we add a key because that helps Ract keep track of all of
                // the characters in the list. We use the index as the key
                // because we do not have any better options.
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
        {/* We add the validation component and also pass the length of the userInput */}
        {/* as a prop so that it can be used in the validation component to conditionaly */}
        {/* show the correct validation message to the user. */}
        <Validation inputLength={this.state.userInput.length}/>
        {/* here we output charList as a javascript variable as it contains the Char */}
        {/* component with our list of characters coming from the new array we  */}
        {/* got using .map(). */}
        {charList}
      </div>
    );
  }
}

export default App;
