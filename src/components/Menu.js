/* eslint-disable */
import React from 'react'

const Menu = ({ boardState, resetBoard }) => {
  return (
    <div>
      <div>{boardState}</div>
      <button type="button" onClick={resetBoard}>
        reset
      </button>
    </div>
  )
}

export default Menu
