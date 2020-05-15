/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import styled from '@emotion/styled';
import color from '../colors/gruvbox-light.scss';
import SudokuBoard from './SudokuBoard';
import buildBoard from '../lib/buildBoard';

const GameContainer = styled.main`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  border: 0.2em solid ${color.green};
`;

class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBoard: buildBoard(),
    };
  }

  render() {
    const { currentBoard } = this.state;
    return (
      <GameContainer>
        <SudokuBoard currentBoard={currentBoard} />
      </GameContainer>
    );
  }
}

export default GameBoard;
