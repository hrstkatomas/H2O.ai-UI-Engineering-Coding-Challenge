import React, { Component } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

class App extends Component {
  render() {
    console.log(this.props)

    return (
      <div>
        <h1>Hello H2O</h1>
      </div>
    )
  }
}


const mapStateToProps = state => state

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
