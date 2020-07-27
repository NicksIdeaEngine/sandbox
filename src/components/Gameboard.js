/* eslint-disable */
import React from 'react'

const Gameboard = ({ boardState, resetBoard }) => {
  return (
    <div>
      <div>{boardState}</div>
      <button type="button" onClick={resetBoard}>
        reset
      </button>
    </div>
  )
}

export default Gameboard
