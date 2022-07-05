const Router = require('express')
const router = new Router()
const questionController = require('../controllers/questionController')

router.post('/', questionController.create)
router.get('/', questionController.getAllByTheme)

module.exports = router