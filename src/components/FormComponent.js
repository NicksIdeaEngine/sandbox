/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function FormComponent(props) {
  return (
    <main>
      <form>
        <div>
          <h3>Give Us All Your Information</h3>
          <input
            placeholder="First Name"
            name="firstName"
            value={props.firstName}
            onChange={props.handleChange}
          />
          <br />
          <input
            placeholder="Last Name"
            name="lastName"
            value={props.lastName}
            onChange={props.handleChange}
          />
          <br />
          <input
            placeholder="Age"
            name="age"
            value={props.age}
            onChange={props.handleChange}
          />
          <br />
          <label htmlFor="genderSelector1">
            <input
              type="radio"
              name="gender"
              id="genderSelector1"
              value="male"
              checked={props.gender === 'male'}
              onChange={props.handleChange}
            />
            Male
          </label>
          <label htmlFor="genderSelector2">
            <input
              type="radio"
              name="gender"
              id="genderSelector2"
              value="female"
              checked={props.gender === 'female'}
              onChange={props.handleChange}
            />
            Female
          </label>
          <label htmlFor="genderSelector3">
            <input
              type="radio"
              name="gender"
              id="genderSelector3"
              value="other"
              checked={props.gender === 'other'}
              onChange={props.handleChange}
            />
            Other
          </label>
          <br />
          <h3>Select Your Destination</h3>
          <select
            name="destination"
            value={props.destination}
            onChange={props.handleChange}
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
            checked={props.shellfish}
            onChange={props.handleChange}
          />
          Shellfish
        </label>
        <label htmlFor="dietSelection2">
          <input
            type="checkbox"
            name="pineapple"
            value="pineapple"
            id="dietSelection2"
            checked={props.pineapple}
            onChange={props.handleChange}
          />
          Pineapple
        </label>
        <label htmlFor="dietSelection3">
          <input
            type="checkbox"
            name="peanuts"
            value="peanuts"
            id="dietSelection3"
            checked={props.peanuts}
            onChange={props.handleChange}
          />
          Peanuts
        </label>
        <label htmlFor="dietSelection4">
          <input
            type="checkbox"
            name="staples"
            value="staples"
            id="dietSelection4"
            checked={props.staples}
            onChange={props.handleChange}
          />
          Staples
        </label>
        <label htmlFor="dietSelection5">
          <input
            type="checkbox"
            name="swamp"
            value="swamp"
            id="dietSelection5"
            checked={props.swamp}
            onChange={props.handleChange}
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
        {props.firstName}
        &nbsp;
        {props.lastName}
      </p>
      <p>
        Your age:&nbsp;
        {props.age}
      </p>
      <p>
        Your gender:&nbsp;
        {props.gender}
      </p>
      <p>
        Your destination:&nbsp;
        {props.destination}
      </p>
      <p>
        Your allergies:
        <ul>
          <li>
            Shellfish?&nbsp;
            {props.shellfish ? 'Yes' : 'No'}
          </li>
          <li>
            Pineapple?&nbsp;
            {props.pineapple ? 'Yes' : 'No'}
          </li>
          <li>
            Peanuts?&nbsp;
            {props.peanuts ? 'Yes' : 'No'}
          </li>
          <li>
            Staples?&nbsp;
            {props.staples ? 'Yes' : 'No'}
          </li>
          <li>
            Swamp?&nbsp;
            {props.swamp ? 'Yes' : 'No'}
          </li>
        </ul>
      </p>
    </main>
  );
}

export default FormComponent;
