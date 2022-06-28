const uuid = require('uuid')
const path = require('path')
const {
  Room
} = require('../models/models')
const ApiError = require('../error/ApiError')

class RoomController {
  async create(req, res, next) {
    try {
      const {
        name,
        players_count,
      } = req.body
      // const {
      //   img
      // } = req.files
      // let fileName = uuid.v4() + '.jpg'
      // img.mv(path.resolve(__dirname, '..', 'static', fileName))

      const room = await Room.create({
        name,
        players_count
      })

      return res.json(room)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    const {
      name,
      players_count,
      limit,
      page
    } = req.query
    page = page || 1
    limit = limit || 10
    let rooms
    let offset = page * limit - limit
    if (!name && !players_count) {
      rooms = await Device.findAll({
        limit,
        offset
      })
    }
    if (!name && players_count) {
      rooms = await Device.findAll({
        where: {
          players_count
        },
        limit,
        offset
      })
    }
    if (name && !players_count) {
      rooms = await Device.findAll({
        where: {
          name
        },
        limit,
        offset
      })
    }
    if (name && players_count) {
      rooms = await Device.findAll({
        where: {
          name,
          players_count
        },
        limit,
        offset
      })
    }
    return res.json(rooms);
  }

  async getOne(req, res) {
    const {
      id
    } = req.params
    const room = await Room.findOne({
      where: {
        id
      }
    }, )
    return res.json(room)
  }
}

module.exports = new RoomController()