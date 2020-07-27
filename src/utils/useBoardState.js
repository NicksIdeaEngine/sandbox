/* eslint-disable */
import { useState } from 'react'
import createEmptyBoard from '../lib/createEmptyBoard'

const useBoardState = () => {
  const [boardState, setBoardState] = useState(createEmptyBoard())

  const resetBoard = (e) => {
    console.log(boardState)
    console.log(e.target)
    setBoardState(createEmptyBoard({ propTest: '9' }))
    console.log(boardState)
  }

  return { boardState, resetBoard }
}

export default useBoardState
