const createBucketlist = require('./createBucketlist')
const updateBucketlist = require('./updateBucketlist')
const models = require('../../models')

const correctPayload = {
  id: '236hygvnbhj',
  name: 'New One',
  description: 'Some bucketlist',
  createdBy: 'basedHokage',
}
describe('####UpdateBucketlist', () => {
  beforeEach(async () => {
    models.Bucketlists.destroy({
      where: {},
      truncate: true,
    })
    await createBucketlist(correctPayload)
  })
  afterEach(async () => {
    models.Bucketlists.destroy({
      where: {},
      truncate: true,
    })
  })
  test('Given the correct payload, updates a bucketlist', async () => {
    const newPayload = {
      id: '236hygvnbhj',
      name: 'New name',
      description: 'Some bucketlist',
      createdBy: 'basedHokage',
    }
    const updatedBucketlist = await updateBucketlist(newPayload.id, newPayload)
    expect(updatedBucketlist.name).toBe('New name')
  })
  test('Should throw an error if the payload is invalid', async () => {
    await expect(updateBucketlist(correctPayload.id, {})).rejects.toThrowError(
      'Execution Errors',
    )
  })
})
