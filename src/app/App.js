import React, { Component } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

import Contacts from '../components/contacts/Contacts'

import RemoveButton from '../components/PCs/buttons/removeButton/RemoveButton'
import BorderedButton from '../components/PCs/buttons/borderButton/BorderButton'
import Icon from '../components/PCs/icon/Icon'

import styles from './App.scss'


class App extends Component {
  render() {
    return (
      <div className={styles.grid}>
        <Contacts />
        <div>
          <RemoveButton />
          <BorderedButton>
            <Icon name="plus"/>
          </BorderedButton>
          <BorderedButton>
            Edit
          </BorderedButton>
        
        
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam eget nisl. Suspendisse sagittis ultrices augue. Maecenas aliquet accumsan leo. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Maecenas sollicitudin. Quisque tincidunt scelerisque libero. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Integer imperdiet lectus quis justo. Duis risus. Duis pulvinar. Et harum quidem rerum facilis est et expedita distinctio. Nullam faucibus mi quis velit. Praesent in mauris eu tortor porttitor accumsan. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Curabitur bibendum justo non orci. Etiam posuere lacus quis dolor.
          Integer in sapien. Etiam commodo dui eget wisi. Etiam quis quam. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Aenean vel massa quis mauris vehicula lacinia. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Nunc auctor. Phasellus et lorem id felis nonummy placerat. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. In rutrum. Phasellus faucibus molestie nisl. Pellentesque sapien. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Vivamus luctus egestas leo. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Cras pede libero, dapibus nec, pretium sit amet, tempor quis.
          Donec quis nibh at felis congue commodo. Praesent dapibus. Nunc dapibus tortor vel mi dapibus sollicitudin. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nulla pulvinar eleifend sem. Ut tempus purus at lorem. Phasellus et lorem id felis nonummy placerat. Nunc tincidunt ante vitae massa. Phasellus rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris tincidunt sem sed arcu. Mauris dictum facilisis augue. Phasellus rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Pellentesque arcu. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla non arcu lacinia neque faucibus fringilla.
          In rutrum. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Donec quis nibh at felis congue commodo. Pellentesque ipsum. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Mauris tincidunt sem sed arcu. Praesent in mauris eu tortor porttitor accumsan. Duis condimentum augue id magna semper rutrum. Fusce aliquam vestibulum ipsum. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Proin mattis lacinia justo. Fusce tellus. Aliquam erat volutpat. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Nulla est.
          Pellentesque ipsum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed convallis magna eu sem. Donec iaculis gravida nulla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nullam eget nisl. Integer in sapien. Phasellus faucibus molestie nisl. Nullam rhoncus aliquam metus. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nulla quis diam.
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => state

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
