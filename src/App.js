<<<<<<< HEAD
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
=======
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
>>>>>>> 4442f8b... Post restore commit
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
      logged: true,
    };
  }

  render() {
    let wordDisplay;
    if (this.state.logged) {
      wordDisplay = 'in';
    } else {
      wordDisplay = 'out';
    }

    return (
      <div>
        <p>{wordDisplay}</p>
=======
      loading: false,
      character: {},
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://swapi.co/api/people/1')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          character: data,
        });
      });
  }

  render() {
    const text = this.state.loading ? 'Loading...' : this.state.character.name;
    return (
      <div>
        <p>Here&apos;s some text!</p>
        <p>{text}</p>
        <p>more text</p>
>>>>>>> 4442f8b... Post restore commit
      </div>
    );
  }
}

export default App;
