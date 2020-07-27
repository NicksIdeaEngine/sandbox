/* eslint-disable */
import React from 'react'
// import PropTypes from 'prop-types'

const createNewTile = ({ test = '0', idNum = 1, row = 1, column = 1 } = {}) => {
  const id = `tile-${idNum}`

  return (
    <div key={id} id={id} row={row} column={column}>
      {test}
    </div>
  )
}

const createNewRow = ({ test = '1', row = 1 } = {}) => {
  let idNum = (row - 1) * 3
  let column = 1

  return (
    <div id={`row-${row}`} key={`row-${row}`}>
      {Array.from(Array(3), () => {
        const newTile = createNewTile({ test, idNum, row, column })
        idNum += 1
        column += 1
        return newTile
      })}
    </div>
  )
}

const createEmptyBoard = ({ propTest = '5' } = {}) => {
  let row = 1
  let test = '44'

  if (propTest !== undefined) {
    test = propTest
  } else {
    test = '2'
  }

  return Array.from(Array(3), () => {
    const newRow = createNewRow({ test, row })
    row += 1
    return newRow
  })
}

export default createEmptyBoard
