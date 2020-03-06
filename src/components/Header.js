/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>
          Welcome,&nbsp;
          {this.props.username}
        </p>
      </header>
    );
  }
}

export default Header;
