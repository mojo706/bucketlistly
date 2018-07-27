const createBucketlist = require('./createBucketlist')
const getBucketlist = require('./getBucketlist')
const models = require('../../models')

const correctPayload = {
  id: '236hygvnbhj',
  name: 'New One',
  description: 'Some bucketlist',
  createdBy: 'basedHokage',
}
describe('####GetBucketlist', () => {
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
  test('Should return a given bucketlist given an existing Id', async () => {
    const newPayload = {
      id: '236hygvnbhj',
    }
    const response = await getBucketlist(newPayload.id)
    expect(response.name).toBe('New One')
  })
})
