const createBucketlistItem = require('./createBucketlistItem')
const createBucketlist = require('../bucketlists/createBucketlist')
const models = require('../../models')

const testBucket = {
  id: '436hygvnbhj',
  name: 'New One',
  description: 'Some bucketlist',
  createdBy: 'basedHokage',
}

const somethingElse = {
  id: '236hygvnbhj',
  bucketlistId: '436hygvnbhj',
  name: 'New One',
  description: 'Some bucketlist',
  done: false,
}
describe('####CreateBucketlistItem', () => {
  beforeEach(async () => {
    models.BucketlistItems.destroy({
      where: {},
      truncate: true,
    })
    await createBucketlist(testBucket)
    await createBucketlistItem(somethingElse)
  })
  afterEach(async () => {
    models.Bucketlists.destroy({
      where: {},
      truncate: true,
    })
  })
  test('Should notify the user if the bucketlist already exists', async () => {
    // TODO
    const someOtherItem = {
      id: '236hygvnbhj',
      bucketlistId: '436hygvnbhj',
      name: 'New One',
      description: 'Some bucketlist',
      done: false,
    }
    const createdBucketlistItem = await createBucketlistItem(someOtherItem)
    expect(createdBucketlistItem).toHaveProperty('error')
  })
  test('Given the correct payload, creates a bucketlist', async () => {
    const correctPayload = {
      id: '536hygvnbhj',
      bucketlistId: '436hygvnbhj',
      name: 'Another One',
      description: 'Some bucketlist',
      done: false,
    }
    const createdItem = await createBucketlistItem(correctPayload)
    expect(createdItem.name).toBe('Another One')
  })
})
