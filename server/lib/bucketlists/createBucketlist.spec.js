const createBucketlist = require('./createBucketlist')
const models = require('../../models')

const testBucket = {
  id: '436hygvnbhj',
  name: 'New One',
  description: 'Some bucketlist',
  createdBy: 'basedHokage',
}
describe('####CreateBucketlist', () => {
  beforeEach(async () => {
    models.Bucketlists.destroy({
      where: {},
      truncate: true,
    })
    await createBucketlist(testBucket)
  })
  afterEach(async () => {
    models.Bucketlists.destroy({
      where: {},
      truncate: true,
    })
  })
  test('Should notify the user if the bucketlist already exists', async () => {
    const correctPayload = {
      id: '236hygvnbhj',
      name: 'New One',
      description: 'Some bucketlist',
      createdBy: 'basedHokage',
    }
    const duplicateBucketlist = await createBucketlist(correctPayload)
    expect(duplicateBucketlist).toHaveProperty('error')
  })
  test('Given the correct payload, creates a bucketlist', async () => {
    // TODO
    const somethingElse = {
      id: '436hygvnbhj',
      name: 'Just a test',
      description: 'Some bucketlist',
      createdBy: 'basedHokage',
    }
    const createdBucketlist = await createBucketlist(somethingElse)
    expect(createdBucketlist.id).toBe('436hygvnbhj')
  })
  test('Given an incorrect payload, should throw an error', async () => {
    const incorrectPayload = {
      name: 'Another One',
      description: 'Some bucketlist',
      createdBy: 'basedHokage',
    }
    await expect(createBucketlist(incorrectPayload)).rejects.toThrowError(
      'Execution Errors',
    )
  })
})
