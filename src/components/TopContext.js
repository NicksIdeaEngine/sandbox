/* eslint-disable */
import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'

const MyContext = createContext()

class MyProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'nick',
      age: 31,
      cool: true,
    }
  }

  render() {
    const { name, age, cool } = this.state
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growOlder: () => this.setState({ age: age + 1 }),
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = (props) => (
  <div className="family">
    <Person />
  </div>
)

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>inside the context: {context.state.name}</p>
              <p>inside the context: {context.state.age}</p>
              <button onClick={context.growOlder}>go up</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

class TopContext extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <Family />
        </div>
      </MyProvider>
    )
  }
}

export default TopContext
