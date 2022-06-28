const sequelize = require('../db')
const {
  DataTypes
} = require('sequelize')

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'USER'
  },
})

const Room = sequelize.define('room', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    defaultValue: 'Room'
  },
  players_count: {
    type: DataTypes.INTEGER,
    defaultValue: 4
  },
})

// // User
// User.hasOne(Room)
// Room.belongsTo(User)

// Room
Room.hasMany(User)
User.belongsTo(Room)

// export
module.exports = {
  User,
  Room
}