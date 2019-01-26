import React from 'react'
import PropTypes from 'prop-types'


// use font awesome icon names
export default function Icon({ name }) {
  return (
    <i className={`fas fa-${name}`} />
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
}
