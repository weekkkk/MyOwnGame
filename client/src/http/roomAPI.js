import {$authHost, $host} from "./index";
// import jwt_decode from "jwt-decode";

export const createRoom = async (room) => {
  const {data} = await $authHost.post('api/room', room)
  return data
}

export const fetchRooms = async (typeId, brandId, page, limit= 5) => {
  const {data} = await $host.get('api/room', {params: {
          typeId, brandId, page, limit
      }})
  return data
}

export const fetchOneRoom = async (id) => {
  const {data} = await $host.get('api/room/' + id)
  return data
}