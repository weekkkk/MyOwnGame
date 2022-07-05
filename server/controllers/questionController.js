const {
  Question
} = require('../models/models')
const ApiError = require('../error/ApiError')

class QuestionController {
  async create(req, res, next) {
    try {
      const {
        text,
        answer,
        answers,
        theme
      } = req.body

      const question = await Question.create({
        text,
        answer,
        answers,
        theme
      })

      return res.json(question)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAllByTheme(req, res) {
    const {
      theme
    } = req.query
    const questions = await Question.findAll({
      where: {
        theme
      },
    })
    return res.json(questions)
  }
}

module.exports = new QuestionController()