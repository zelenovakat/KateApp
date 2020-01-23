import React from 'react'
import PropTypes from 'prop-types';


const Title = ({ children, ...props }) => {

  return (
    <h1 {...props}>{children}</h1>

  )
}

Title.propTypes = {children: PropTypes.string}

export default Title





