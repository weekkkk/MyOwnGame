import {
  $authHost,
  $host
} from "./index";
// import jwt_decode from "jwt-decode";

export const createRoom = async (room) => {
  const {
    data
  } = await $authHost.post('api/room', room)
  return data
}

export const fetchRooms = async (name, players_count, page, limit = 5) => {
  const {
    data
  } = await $host.get('api/room', {
    params: {
      name,
      players_count,
      page,
      limit
    }
  })
  return data
}

export const fetchOneRoom = async (id) => {
  const {
    data
  } = await $host.get('api/room/' + id)
  return data
}

export const addPlayerToRoom = async (player_id, room_id) => {
  const {
    data
  } = await $authHost.put('api/room', {
    player_id: player_id,
    room_id: room_id,
  })
  return data
}