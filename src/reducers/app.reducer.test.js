import reducer from './app.reducer'
import {
  ADD_NEW_USER,
  EDIT_USER,
  SELECT_USER
}  from '../actions/app.actions'
import {
  REMOVE_USER,
  ADD_USER,
  UPDATE_USER
} from '../actions/users.actions'


describe('app reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual(
        {
          selected: null,
          editing:  false
        }
      )
  })

  it('should handle ADD_NEW_USER', () => {
    expect(reducer({}, { type: ADD_NEW_USER }))
      .toEqual(
        {
          selected: null,
          editing:  true
        }
      )

    expect(reducer(
      {
        selected: 115,
        editing:  false
      },
      { type: ADD_NEW_USER }
    )).toEqual(
      {
        selected: null,
        editing:  true
      }
    )
  })

  it('should handle EDIT_USER', () => {
    expect(reducer(
      {
        selected: null,
        editing:  false
      },
      {
        type:  EDIT_USER,
        value: 110
      }
    )).toEqual(
      {
        selected: 110,
        editing:  true
      }
    )
  })

  it('should handle SELECT_USER', () => {
    expect(reducer(
      {
        selected: null,
        editing:  true
      },
      {
        type:  SELECT_USER,
        value: 110
      }
    )).toEqual(
      {
        selected: 110,
        editing:  false
      }
    )
  })
})

it('should handle REMOVE_USER', () => {
  expect(reducer(
    {
      selected: 120,
      editing:  true
    },
    {
      type: REMOVE_USER
    }
  )).toEqual(
    {
      selected: null,
      editing:  false
    }
  )
})

it('should handle ADD_USER and UPDATE_USER', () => {
  const initialState = {
    selected: null,
    editing:  true
  }

  expect(reducer(
    initialState,
    {
      type: ADD_USER,
      id:   110
    }
  )).toEqual(
    {
      selected: 110,
      editing:  false
    }
  )

  expect(reducer(
    initialState,
    {
      type: UPDATE_USER,
      id:   110
    }
  )).toEqual(
    {
      selected: 110,
      editing:  false
    }
  )
})
