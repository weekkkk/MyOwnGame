const {
  Room
} = require('../models/models')
const ApiError = require('../error/ApiError')
const Emitter = require('events')

class RoomController {
  async remove(req, res, next) {
    try {
      const {
        id
      } = req.body

      const isSuccess = await Room.remove({
        id
      })

      return res.json(isSuccess)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async create(req, res, next) {
    try {
      const {
        name,
        players_count,
      } = req.body

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
    let {
      name,
      players_count,
      page,
      limit,
    } = req.query
    page = page || 1
    limit = limit || 10
    let rooms
    let offset = page * limit - limit
    if (!name && !players_count) {
      rooms = await Room.findAll({
        limit,
        offset
      })
    }
    if (!name && players_count) {
      rooms = await Room.findAll({
        where: {
          players_count
        },
        limit,
        offset
      })
    }
    if (name && !players_count) {
      rooms = await Room.findAll({
        where: {
          name
        },
        limit,
        offset
      })
    }
    if (name && players_count) {
      rooms = await Room.findAll({
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

  async addPlayer(req, res) {
    const {
      player_id,
      room_id
    } = req.body

    const room = await Room.findOne({
      where: {
        id: room_id
      }
    })
    if (player_id && room && !room.players.includes(player_id)) {
      room.players.push(player_id)
      const updRoom = await Room.update({
        players: room.players
      }, {
        where: {
          id: room.id
        }
      })
    }

    return res.json(room);
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

  async updateAnswerPlayers(req, res) {
    const {
      room_id,
      player_id
    } = req.query

    let room = await Room.findOne({
      where: {
        id: room_id
      }
    })

    room.answered_players.push(player_id)

    const updRoom = await Room.update({
      answered_players: room.answered_players
    }, {
      where: {
        id: room.id
      }
    })

    this.emit(eventName, answeredPlayers);

    return res.json(updRoom)
  }
}

let roomController = new RoomController()

module.exports = roomController