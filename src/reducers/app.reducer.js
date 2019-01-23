import {
  ADD_NEW_USER,
  EDIT_USER,
  SELECT_USER
} from '../actions/app.actions'

const defaultState = {
  selected: null,
  editing:  false
}


export default function app(state = defaultState, action) {
  switch (action.type) {
    case ADD_NEW_USER:
      return {
        ...state,
        selected: null,
        editing:  true
      }

    case EDIT_USER:
      return {
        ...state,
        selected: action.value,
        editing:  true
      }

    case SELECT_USER:
      return {
        ...state,
        selected: action.value,
        editing:  false
      }

    default:
      return state
  }
}
