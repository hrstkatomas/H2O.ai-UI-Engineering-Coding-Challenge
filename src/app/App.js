import React, { Component } from 'react'
import { connect } from 'react-redux'

import Contacts from '../components/contacts/Contacts'
import ContactDetail from '../components/contactDetail/ContactDetail'

import styles from './App.scss'


class App extends Component {
  render() {
    return (
      <div className={styles.grid}>
        <Contacts />
        <ContactDetail />
      </div>
    )
  }
}


const mapStateToProps = state => state

export default connect(mapStateToProps)(App)
