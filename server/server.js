const express = require('express')
const http = require('http')
const DataBase = require('./products')()
const port = 3008

const app = express()
app.use(express.json());
const server = http.createServer(app)

// запрашиваем список всех товаров
app.get('/api/products/', (request, response) => {
  // отдаем первоначальные данные
  response.status(200).json(DataBase.getProducts())
})

// запрашиваем товар по его id
app.get('/api/products/:product_id', (request, response) => {
  // вычленяем id из запроса
  const product_id = request.params?.product_id
  // получаем товар по его id
  const product = DataBase.getProductById(product_id)
  // если товар найден, отправляем его в ответе
  if (product) {
    response.status(200).json(product)
  } else {
    // если товара нет, отправляем 404 ошибку
    response.status(404).send('Not found')
  }
})

// запрашиваем список товаров в корзине
app.get('/api/basket/', (request, response) => {
  // отдаем список товаров из корзины
  response.status(200).json(DataBase.getBasket())
})

// добавляем продукт в корзину
app.post('/api/basket/', (request, response) => {
  //  вычленяем из запроса id и count
  const { id, count } = request.body

  // валидируем запрос, если id или count не передавали, то возвращаем ошибку с ее описанием
  if (!id) {
    response.status(400).send('Не указан обязательный параметр id')
  } else if (!count) {
    response.status(400).send('Не указан обязательный параметр count')
  } else {
    // добавляем в корзину продукт, в ответе вернется добавленный продукт
    const addedProduct = DataBase.addToBasket({ id, count })
    // возвращаем в ответе добавленный продукт в корзину
    response.status(200).json(addedProduct)
  }
})

// запрашиваем список категорий
app.get('/api/categories/', (request, response) => {
  // отдаем список категорий
  response.status(200).json(DataBase.getCategories())
})

// запрашиваем список фаворитов
app.get('/api/favorites/', (request, response) => {
  // отдаем список фаворитов
  response.status(200).json(DataBase.getFavorites())
})

// добавляем продукт в фавориты
app.post('/api/favorites/', (request, response) => {
  //  вычленяем из запроса id
  const { id } = request.body

  // валидируем запрос, если id не передавали, то возвращаем ошибку с ее описанием
  if (!id) {
    response.status(400).send('Не указан обязательный параметр id')
  } else {
    // изменяем список фаворитов, в ответ придет измененный список
    const favorites = DataBase.changeFavorites(id)
    // возвращаем в ответе измененный список
    response.status(200).json(favorites)
  }
})


server.listen(port, () => {
  console.log(`Server has been started on port ${port}...`)
})
