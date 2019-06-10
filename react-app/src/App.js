import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Monia', age: 24},
      {name: 'test', age: 11}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Test 1', age: 6},
        {name: 'Test 2', age: 56},
        {name: 'test 3', age: 31}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, Im a react app</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].name} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].name}>My hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;
