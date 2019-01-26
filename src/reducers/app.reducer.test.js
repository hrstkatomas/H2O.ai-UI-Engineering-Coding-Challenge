import reducer from './app.reducer'
import {
  ADD_NEW_USER,
  EDIT_USER,
  SELECT_USER
}  from '../actions/app.actions'

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
