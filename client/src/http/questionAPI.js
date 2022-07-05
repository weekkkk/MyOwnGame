import {
  $authHost,
  $host
} from "./index";

export const create = async (question) => {
  const {
    data
  } = await $authHost.post('api/question', question)
  return data
}

export const getAllByTheme = async (theme) => {
  const {
    data
  } = await $host.get('api/question', {
    params: {
      theme
    }
  })
  return data
}