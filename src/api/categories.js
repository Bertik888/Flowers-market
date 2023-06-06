import { request } from '@/utils/request'

// возвращает список категорий
export const getCategories = () => new Promise((resolve, reject) => {
  request('GET', '/api/categories/')
    .then((response) => {
      resolve(response)
    })
    .catch((error) => {
      reject(error)
    })
})
