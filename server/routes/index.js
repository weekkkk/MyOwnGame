const Router = require('express')
const router = new Router()

const roomRouter = require('./roomRouter')
const userRouter = require('./userRouter')
const questionRouter = require('./questionRouter')

router.use('/room', roomRouter)
router.use('/user', userRouter)
router.use('/question', questionRouter)

module.exports = router