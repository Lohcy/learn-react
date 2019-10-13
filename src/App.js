import React, { Component } from 'react';
import './App.css';
// import Radiun, { StyleRoot } from 'radium';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 'sdsadasdas', name: 'umesh', age: 12 },
      { id: 'dasdarew', name: 'manish', age: 19 },
      { id: 'ERDasdSARQER', name: 'devansh', age: 14 }
    ],
    otherState: 'some other value',
    showPerson: false
  }

  switchNameHandler = (newName) => {
    // console.log("clickeddd");
    this.setState(
      {
        persons: [
          { name: newName, age: 9 },
          { name: 'aashish', age: 19 },
          { name: 'Aditi', age: 14 }
        ]
      }
    );
  }

  nameChangeHandler = (event) => {
    this.setState(
      {
        persons: [
          { name: 'max', age: 1 },
          { name: event.target.value, age: 78 },
          { name: 'cool', age: 26 }
        ]
      }
    );

  };
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  newChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px, solid blue',
      padding: '8px',
      cursor: 'pointer',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    }

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.newChangedHandler(event, person.id)}
            />
          })}
        </div>
      );

      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    let classes = []

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
      // <StyleRoot>
      <div className="App" >
        <h1>Hi, I'm React JS developer</h1>
        <p className={classes.join('')}>This is really working ! </p>
        <button
          style={style}
          // onClick={() => this.switchNameHandler("Maximilium")}
          onClick={this.togglePersonHandler}
        >Toggle Persons</button>
        {persons}
      </div>
      // </StyleRoot>
    );
    // return React.createElement('div', { className: "App" }, React.createElement('h1', null, 'Hi, I\'m React App.'));
  }
}

export default App;
