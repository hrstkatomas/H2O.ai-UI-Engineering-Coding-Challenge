import data from './mock.json'


export default function createInitialStore() {
  const users = data.reduce(
    ({ allIds, byId }, { id, ...userDetails }) => ({
      allIds: [ ...allIds, id ],
      byId:   { ...byId, [id]: userDetails }
    }),
    { allIds: [], byId: {} }
  )

  return { users }
}
