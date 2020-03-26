/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-render-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import FormComponent from './FormComponent';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: 'Hank',
      lastName: 'Moosewaffle',
      age: '13.8',
      gender: 'other',
      destination: 'atlantis',
      shellfish: false,
      pineapple: false,
      peanuts: false,
      staples: false,
      swamp: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return <FormComponent handleChange={this.handleChange} {...this.state} />;
  }
}

export default Form;
