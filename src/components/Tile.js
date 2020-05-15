/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import color from '../colors/gruvbox-light.scss';

const TileContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5px;
  border: 0.2em solid ${color.purple};
  width: 3.5em;
  height: 3.5em;
  background-color: ${color.bg2};
`;

const CandidateContainer = styled.div`
  display: inline-flex;
  width: 3.5em;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CandidateText = styled.div`
  font-size: 0.75em;
  flex: 1 33%;
  width: 32%,
  position: relative;
`;

class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { id, candidates } = this.props;
    return (
      <TileContainer type="button" id={id} candidates={candidates}>
        {candidates}
      </TileContainer>
    );
  }
}

Tile.propTypes = {
  id: PropTypes.string.isRequired,
  candidates: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  ).isRequired,
};

export default Tile;
