import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

// import color from '../assets/palettes/material.scss'
// import gruv from '../assets/palettes/gruvbox-light.scss'

const roboto = "'Roboto', sans-serif;"
const fira = "'Fira Code', sans-serif;"
const montserrat = "'Montserrat', sans-serif;"

const MainContainer = styled.main`
  .app-container {
    display: flex;
    flex-wrap: wrap;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${roboto};
    margin-bottom: 1rem;
    font-weight: 100;
    text-rendering: optimizeLegibility;
    line-height: 1.1;
  }

  h1 {
    font-size: 3.25rem;
  }

  h2 {
    font-size: 2.62671rem;
  }

  h3 {
    font-size: 2.18316rem;
  }

  h4 {
    font-size: 1.38316rem;
  }

  h5 {
    font-size: 1.38316rem;
  }

  h6 {
    font-size: 1.38316rem;
  }

  p {
    margin-bottom: 0.5em;
    font-family: ${montserrat};
    font-weight: 300;
  }

  li {
    font-family: ${fira};
    font-weight: 300;
  }
`

const MainStyles = ({ children }) => (
  <MainContainer className="main-container">{children}</MainContainer>
)

MainStyles.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainStyles
