const Router = require('express')
const router = new Router()

const roomRouter = require('./roomRouter')
const userRouter = require('./userRouter')

router.use('/room', userRouter)
router.use('/user', roomRouter)

module.exports = router