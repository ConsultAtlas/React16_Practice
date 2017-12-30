import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import "./Person/Person.css";

class App extends Component {
  state = {
    persons: [
      {
        name: 'Max',
        age: 28,
        id: 0
      },
      {
        name: 'Manu',
        age: 29,
        id: 1 
      },
      {
        name: 'Stephanie',
        age: 27,
        id: 2
      }
    ]
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [this.state.persons];
    persons[personIndex] = person;
    
    this.setState({persons: persons});
  }

  deletePersonsHandler = (personsIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personsIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  
  render() {
    
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      color: 'white',
    };

    let persons = null;

      if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
              click={() => this.deletePersonsHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
            })}
          </div>
        );

        style.backgroundColor = 'red';

      };
    
    let classes = [];
    if (this.state.persons.lenght <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.lenght <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hey I am a React App!</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className="button" onClick={this.togglePersonsHandler} >Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi! I am a React App!'));
  }
};

export default App;
