import { request } from '@/utils/request'

// возвращает список фаворитов
export const getFavorites = () => new Promise((resolve, reject) => {
  request('GET', '/api/favorites/')
    .then((response) => {
      resolve(response)
    })
    .catch((error) => {
      reject(error)
    })
})

// Изменяем список фаворитов, в ответ возвращает измененный список
export const changeFavorites = (id) => new Promise((resolve, reject) => {
  request('POST', '/api/favorites/', id)
    .then((response) => {
      resolve(response)
    })
    .catch((error) => {
      reject(error)
    })
})
