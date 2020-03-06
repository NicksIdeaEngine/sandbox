/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
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
      </div>
    );
  }
}

export default App;
