import React, { Component } from 'react';

import classes from './Person.css';

class Person extends Component {
    
    constructor (props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
      }
    
      componentWillMount() {
        console.log('[Person.js] Inside Component Will Mount' );
      }
    
      componentDidMount() {
        console.log('[Person.js] Indside Component Did Mount');
      }
      
    
    render () {
        console.log('[Person.js] Inside Render');
        return (
            <div className={classes.Person}>
                <p onClick={this. props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
} 

export default Person;