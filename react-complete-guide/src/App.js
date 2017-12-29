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
    
    let persons = null;

      if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map(person => {
              return <Person 
              name={person.name}
              age={person.age} />
            })}
          </div>
        )
      }
    
    return (

      <div className="App">
        <h1>Hey I am a React App!</h1>
        <p>This is really working!</p>
        <button className="button" onClick={this.togglePersonsHandler} >Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi! I am a React App!'));
  }
};

export default App;
