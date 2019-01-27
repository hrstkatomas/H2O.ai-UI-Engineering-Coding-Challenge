import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './WithLabel.scss'

export default function WithLabel(WrappedComponent) {
  return class extends Component {
    static propTypes = {
      label: PropTypes.string.isRequired,
      edit:  PropTypes.bool.isRequired
    }

    render() {
      const { label, edit } = this.props
      return (
        <div className={styles.withLabel}>
          <WrappedComponent {...this.props} />

          <div 
            className={`
              ${styles.label}
              ${edit ? styles.visible : styles.hidden}
            `}
          >
            {label}
          </div>
        </div>
      )
    }
  }
}
