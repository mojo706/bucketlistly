const bucketlistRouter = require('./bucketlistRoute')
const userRouter = require('./userRoute')

module.exports = app => {
  app.get('/api', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the Bucketlist API!',
    }),
  )

  app.use('/api/bucketlists', bucketlistRouter())
  app.use('/api/users', userRouter())
}
