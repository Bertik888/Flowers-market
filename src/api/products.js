import { request } from '@/utils/request'

// возвращает список всех товаров
export const getProducts = () => new Promise((resolve, reject) => {
  request('GET', '/api/products/')
    .then((response) => {
      resolve(response)
    })
    .catch((error) => {
      reject(error)
    })
})

// возвращает объект товара по его id
export const getProductById = (id) => new Promise((resolve, reject) => {
  request('GET', `/api/products/${id}`)
    .then((response) => {
      resolve(response)
    })
    .catch((error) => {
      reject(error)
    })
})
