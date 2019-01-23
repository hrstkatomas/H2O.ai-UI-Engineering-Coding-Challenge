// "What is this?", you might ask. Well let me explain
// it is actually really simple


// Examples:

// const simpleAction = actionFactory('value')
// Will produce simple redux action with type and value
// const simpleAction = type => value => ({ type, value })

// const containerIdValueAction = actionFactory('containerId', 'value')
// This will produce function like this
// const containerIdValueAction = type => (containerId, value) => ({ type, containerId, value })


// Examples 2:

// const simpleAction = actionFactory('value')('ACTION_NAME')
// This will produce clasical redux action function like this
// function simpleAction(value) {
//   return {
//     type:  'ACTION_NAME',
//     value: value
//   }
// }

const actionFactory = (...args) => type => (...values) => args.reduce(
  (acc, arg, i) => ({ ...acc, [arg]: values[i] }),
  { type }
)

export default actionFactory

// often used pattern of my actions
export const action = actionFactory('value')
export const idValueAction = actionFactory('id', 'value')
