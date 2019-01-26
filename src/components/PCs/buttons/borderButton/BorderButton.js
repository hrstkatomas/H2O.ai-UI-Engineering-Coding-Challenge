import React from 'react'
import PropTypes from 'prop-types'

import Button from '../button/Button'

import styles from './BorderedButton.scss'


export default function BorderedButton(props) {
  return (
    <Button
      className={styles.borderedButton}
      {...props}
    />
  )
}

BorderedButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onClick: PropTypes.func.isRequired
}
