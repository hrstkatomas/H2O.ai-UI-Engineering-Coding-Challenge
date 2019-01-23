import { action, idValueAction } from '../helpers/actionFactory'

export const ADD_USER = 'ADD_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const REMOVE_USER = 'REMOVE_USER'


export const addUser = action(ADD_USER)
export const updateUser = idValueAction(UPDATE_USER)
export const removeUser = action(REMOVE_USER)
