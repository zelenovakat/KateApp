import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Title = props => {
  const { children } = props
  return <TitlePrimary>{children}</TitlePrimary>
}

Title.propTypes = {
  children: PropTypes.string
}

export default Title

const TitlePrimary = styled.h1`
  font-size: 25px;
  font-weight: normal;
`
