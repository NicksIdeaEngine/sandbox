/* eslint-disable */
import React from 'react'
import styled from '@emotion/styled'

import color from './assets/palettes/material.scss'
import gruv from './assets/palettes/gruvbox-light.scss'

import Gameboard from './components/Gameboard'
import Menu from './components/Menu'

import useBoardState from './utils/useBoardState'

const AppContainer = styled.div`
  margin: 0 auto;
  padding: 2em;
  width: 50em;
  height: 35em;
  border: 0.2em solid ${color.blue500};
`

function App() {
  const { boardState, resetBoard } = useBoardState()

  return (
    <AppContainer className="app-container">
      <Gameboard boardState={boardState} resetBoard={resetBoard} />
      <Menu boardState={boardState} resetBoard={resetBoard} />
    </AppContainer>
  )
}

export default App
