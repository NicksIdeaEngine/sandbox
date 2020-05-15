/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import color from '../colors/gruvbox-light.scss';
import Tile from './Tile';

const BoardSection = styled.section`
  display: flex;
  flex: 1;
  padding: 0;
  margin: 0;
`;

const BoardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  border: 0.2em solid ${color.red};
`;

const RowContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

class SudokuBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { currentBoard } = this.props;
    const fullBoard = currentBoard.map((rowOfTiles) => {
      const rowID = rowOfTiles.props.id;
      const rowContents = rowOfTiles.props.children;
      const tileBatch = rowContents.map((tile) => {
        const { id, candidates } = tile;
        return <Tile key={id} id={id} candidates={candidates} />;
      });
      return (
        <RowContainer key={rowID} id={rowID}>
          {tileBatch}
        </RowContainer>
      );
    });
    return (
      <BoardSection>
        <BoardContainer>{fullBoard}</BoardContainer>
      </BoardSection>
    );
  }
}

SudokuBoard.propTypes = {
  currentBoard: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
};

export default SudokuBoard;
