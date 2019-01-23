import actionFactory, { action, idValueAction } from './actionFactory'


it('Should compose action object correctly', () => {
  expect(actionFactory('key1', 'key2')('actionType')('value1', 'value2')).toEqual({
    type: 'actionType',
    key1: 'value1',
    key2: 'value2'
  })
})

it('Should compose action object correctly', () => {
  expect(actionFactory('key1', 'key2')('actionType')('value1', 'value2', 'value3')).toEqual({
    type: 'actionType',
    key1: 'value1',
    key2: 'value2'
  })
})

it('Should compose action object correctly', () => {
  expect(actionFactory('key1', 'key2')('actionType')('value1', 'value3', 'value2')).toEqual({
    type: 'actionType',
    key1: 'value1',
    key2: 'value3'
  })
})

it('Should compose action with value object correctly', () => {
  expect(action('actionType')('value')).toEqual({
    type:  'actionType',
    value: 'value'
  })
})

it('Should compose action with value and id object correctly', () => {
  expect(idValueAction('actionType')('id', 'value')).toEqual({
    type:  'actionType',
    value: 'value',
    id:    'id'
  })
})