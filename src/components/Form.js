/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

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
    return (
      <main>
        <form>
          <div>
            <h3>Give Us All Your Information</h3>
            <input
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <br />
            <input
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <br />
            <input
              placeholder="Age"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="genderSelector1">
              <input
                type="radio"
                name="gender"
                id="genderSelector1"
                value="male"
                checked={this.state.gender === 'male'}
                onChange={this.handleChange}
              />
              Male
            </label>
            <label htmlFor="genderSelector2">
              <input
                type="radio"
                name="gender"
                id="genderSelector2"
                value="female"
                checked={this.state.gender === 'female'}
                onChange={this.handleChange}
              />
              Female
            </label>
            <label htmlFor="genderSelector3">
              <input
                type="radio"
                name="gender"
                id="genderSelector3"
                value="other"
                checked={this.state.gender === 'other'}
                onChange={this.handleChange}
              />
              Other
            </label>
            <br />
            <h3>Select Your Destination</h3>
            <select
              name="destination"
              value={this.state.destination}
              onChange={this.handleChange}
            >
              <option value="australia">Australia</option>
              <option value="new_york">New York</option>
              <option value="atlanta">Atlanta</option>
              <option value="atlantis">Atlantis</option>
              <option value="space">Space</option>
              <option value="mars">Mars</option>
            </select>
            <br />
          </div>
          <h3>Select Dietary Restrictions</h3>
          <label htmlFor="dietSelection1">
            <input
              type="checkbox"
              name="shellfish"
              value="shellfist"
              id="dietSelection1"
              checked={this.state.shellfish}
              onChange={this.handleChange}
            />
            Shellfish
          </label>
          <label htmlFor="dietSelection2">
            <input
              type="checkbox"
              name="pineapple"
              value="pineapple"
              id="dietSelection2"
              checked={this.state.pineapple}
              onChange={this.handleChange}
            />
            Pineapple
          </label>
          <label htmlFor="dietSelection3">
            <input
              type="checkbox"
              name="peanuts"
              value="peanuts"
              id="dietSelection3"
              checked={this.state.peanuts}
              onChange={this.handleChange}
            />
            Peanuts
          </label>
          <label htmlFor="dietSelection4">
            <input
              type="checkbox"
              name="staples"
              value="staples"
              id="dietSelection4"
              checked={this.state.staples}
              onChange={this.handleChange}
            />
            Staples
          </label>
          <label htmlFor="dietSelection5">
            <input
              type="checkbox"
              name="swamp"
              value="swamp"
              id="dietSelection5"
              checked={this.state.swamp}
              onChange={this.handleChange}
            />
            Swamp
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>
        <hr />
        <h3>Entered information:</h3>
        <p>
          Your name:&nbsp;
          {this.state.firstName}
          &nbsp;
          {this.state.lastName}
        </p>
        <p>
          Your age:&nbsp;
          {this.state.age}
        </p>
        <p>
          Your gender:&nbsp;
          {this.state.gender}
        </p>
        <p>
          Your destination:&nbsp;
          {this.state.destination}
        </p>
        <p>
          Your allergies:
          <ul>
            <li>
              Shellfish?&nbsp;
              {this.state.shellfish ? 'Yes' : 'No'}
            </li>
            <li>
              Pineapple?&nbsp;
              {this.state.pineapple ? 'Yes' : 'No'}
            </li>
            <li>
              Peanuts?&nbsp;
              {this.state.peanuts ? 'Yes' : 'No'}
            </li>
            <li>
              Staples?&nbsp;
              {this.state.staples ? 'Yes' : 'No'}
            </li>
            <li>
              Swamp?&nbsp;
              {this.state.swamp ? 'Yes' : 'No'}
            </li>
          </ul>
        </p>
      </main>
    );
  }
}

export default Form;
