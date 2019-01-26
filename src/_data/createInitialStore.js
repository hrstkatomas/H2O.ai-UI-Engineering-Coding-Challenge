import data from './mock.json'


export default function createInitialStore() {
  const users = data.reduce(
    ({ allIds, byId }, user) => ({
      allIds: [ ...allIds, user.id ],
      byId:   { ...byId, [user.id]: user }
    }),
    { allIds: [], byId: {} }
  )

  return { users }
}
