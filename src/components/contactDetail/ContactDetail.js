import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


import EditableLabel
  from '../PCs/editableLabel/EditableLabel'
import EditableSegment
  from '../PCs/editableSegment/EditableSegment'
import LabeledEditableLabel
  from '../PCs/labeledEditableLabel/LabeledEditableLabel'
import BorderedButton
  from '../PCs/buttons/borderButton/BorderButton'
import Icon from '../PCs/icon/Icon'

import {
  addNewUser,
  editUser
} from '../../actions/app.actions'
import {
  createUserAsync,
  updateUser
} from '../../actions/users.actions'

import styles from './ContactDetail.scss'


class ContactDetail extends Component {
  static propTypes = {
    user:       PropTypes.object,
    editing:    PropTypes.bool.isRequired,
    editUser:   PropTypes.func.isRequired,
    addNewUser: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.firstName = createRef()
    this.lastName = createRef()
    this.phone = createRef()
    this.email = createRef()
    this.address = createRef()
    this.note = createRef()
  }

  componentDidUpdate(prevProps) {
    const { user } = this.props
    if (user && user.id === prevProps.user?.id) {
      this.firstName.current.value = user.firstName
      this.lastName.current.value = user.lastName
      this.email.current.value = user.email
      this.phone.current.value = user.phone
      this.address.current.value = user.address
      this.note.current.value = user.note
    }
  }


  getValues = () => ({
    firstName: this.firstName.current.value,
    lastName:  this.lastName.current.value,
    email:     this.email.current.value,
    phone:     this.phone.current.value,
    address:   this.address.current.value,
    note:      this.note.current.value
  })

  createUser = () => {
    const { createUserAsync } = this.props
    createUserAsync(this.getValues())
  }

  editUser = ({ id }) => {
    const { updateUser } = this.props
    updateUser(id, this.getValues())
  }

  render() {
    const {
      user, editing, editUser, addNewUser
    } = this.props
    // {"id":15,"firstName":"Kerrill","lastName":"Gradley","email":"kgradleye@youku.com","phone":"613-179-9636","address":"9641 Harper Lane","note":"VP Quality Control"},
    return (
      <div className={styles.detail}>
        {(user || editing) && (
        <>
          <div>
            <LabeledEditableLabel
              label="first name"
              value={user?.firstName || ''}
              edit={editing}
              reference={this.firstName}
            />
            <LabeledEditableLabel
              label="last name"
              value={user?.lastName || ''}
              edit={editing}
              reference={this.lastName}
            />
          </div>

          <table>
            <tbody>
              <tr>
                <td>phone</td>
                <td>
                  <EditableLabel
                    label="phone"
                    value={user?.phone || ''}
                    edit={editing}
                    reference={this.phone}
                  />
                </td>
              </tr>

              <tr>
                <td>email</td>
                <td>
                  <EditableLabel
                    label="email"
                    value={user?.email || ''}
                    edit={editing}
                    reference={this.email}
                  />
                </td>
              </tr>

              <tr>
                <td>address</td>
                <td>
                  <EditableSegment
                    label="address"
                    value={user?.address || ''}
                    edit={editing}
                    reference={this.address}
                  />
                </td>
              </tr>

              <tr>
                <td>note</td>
                <td>
                  <EditableSegment
                    label="note"
                    value={user?.note || ''}
                    edit={editing}
                    reference={this.note}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </>
        )}

        <BorderedButton
          className={styles.addButton}
          onClick={addNewUser}
        >
          <Icon name="plus" />
        </BorderedButton>

        {editing && (
          <BorderedButton
            className={styles.editButton}
            onClick={() => user
              ? this.editUser(user)
              : this.createUser()
            }
          >
            {'Done'}
          </BorderedButton>
        )}


        {user && !editing && (
          <BorderedButton
            className={styles.editButton}
            onClick={() => editUser(user.id)}
          >
            {'Edit'}
          </BorderedButton>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    app: { selected, editing },
    users: { byId }
  } = state

  return { user: byId[selected], editing }
}

export default connect(
  mapStateToProps,
  {
    addNewUser,
    editUser,
    createUserAsync,
    updateUser
  }
)(ContactDetail)
