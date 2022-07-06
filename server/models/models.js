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
    unique: true,
  },
  password: {
    type: DataTypes.STRING
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "USER"
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
  players: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    defaultValue: []
  },
  theme: {
    type: DataTypes.STRING,
    defaultValue: 'Цари',
  },
  answered_players: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    defaultValue: []
  }
})

const Question = sequelize.define('question', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  text: {
    type: DataTypes.STRING,
    defaultValue: 'Каким был Петр?',
  },
  answer: {
    type: DataTypes.STRING,
    defaultValue: 'Первым'
  },
  answers: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: ['Первым', 'Вторым', 'Третим']
  },
  theme: {
    type: DataTypes.STRING,
    defaultValue: 'Цари',
  },
})

// // User
// User.hasOne(Room)
// Room.belongsTo(User)

// Room
// Room.hasMany(User)
// User.belongsTo(Room)

// Question.hasMany(Room)
// User.belongsTo(Question)

// export
module.exports = {
  User,
  Room,
  Question
}