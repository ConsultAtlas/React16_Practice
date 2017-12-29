import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import "./Person/Person.css";

class App extends Component {
  state = {
    persons: [
      {
        name: 'Max',
        age: 28
      },
      {
        name: 'Manu',
        age: 29 
      },
      {
        name: 'Stephanie',
        age: 27
      }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log("was clicked")
    // DON'T DO THIS: this.state.persons[0].name = "Maximillian"
    this.setState( {
      persons: [
        {name: newName, age: "28"},
        {name: "Manu", age: "29"},
        {name: "Stephanie", age: "27"}
      ],
      otherState: 'some other value',
      showPersons: false
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: "Max", age: "28"},
        {name: event.target.value, age: "29"},
        {name: "Stephanie", age: "27"}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hey I am a React App!</h1>
        <p>This is really working!</p>
        <button className="button" onClick={this.togglePersonsHandler} >Toggle Persons</button>
        {this.state.showPersons ? 
          <div>
            <Person  
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
            <Person  
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max!")}
            changed={this.nameChangedHandler}>Hobbies: racing.</Person>
            <Person  
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
          </div> : null
        }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi! I am a React App!'));
  }
};

export default App;
