const createBucketlist = require('./createBucketlist')
const deleteBucketlist = require('./deleteBucketlist')
const models = require('../../models')

const correctPayload = {
  id: '236hygvnbhj',
  name: 'New One',
  description: 'Some bucketlist',
  createdBy: 'basedHokage',
}
describe('####DeleteBucketlist', () => {
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
  test('Should delete a given bucketlist given an existing Id', async () => {
    const newPayload = {
      id: '236hygvnbhj',
    }
    const response = await deleteBucketlist(newPayload.id)
    expect(response.message).toBe('Bucketlist successfully deleted')
  })
  test('Should throw an error if there are any execution errors', async () => {
    await expect(deleteBucketlist({})).rejects.toThrowError('Execution Errors')
  })
})
