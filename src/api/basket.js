import { request } from '@/utils/request'

// возвращает список товаров в корзине
export const getBasket = () => new Promise((resolve, reject) => {
  request('GET', '/api/basket/')
    .then((response) => {
      resolve(response)
    })
    .catch((error) => {
      reject(error)
    })
})

// добавляет в корзину товар, в ответ возвращает добавленый товар
export const addToBasket = ({ id, count }) => new Promise((resolve, reject) => {
  request('POST', '/api/basket/', { id, count })
    .then((response) => {
      resolve(response)
    })
    .catch((error) => {
      reject(error)
    })
})
