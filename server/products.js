class DataBase {
  constructor() {
    this.products = [
      // АКЦИИ
      {
        id: 1,
        cat_id: 100,
        name: '101 красная роза',
        isTop: true,
        sale: 10,
        price: 5000,
        rating: 10,
        stock: 20,
        images: ['red-roses.png'],
        size: '50-60 см',
        material: 'Lorem ipsum dolor sit amet',
        other: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 2,
        cat_id: 100,
        name: '25 розовых пионовидных роз',
        isTop: true,
        sale: 15,
        price: 4000,
        rating: 0,
        stock: 2,
        images: ['pink-roses.png'],
        size: '50-60 см',
        material: 'Lorem ipsum dolor sit amet',
        other: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 3,
        cat_id: 100,
        name: 'Влюбленность',
        isTop: false,
        sale: 10,
        price: 6000,
        rating: 9,
        stock: 10,
        images: ['love-roses.png'],
        size: '50-60 см',
        material: 'Lorem ipsum dolor sit amet',
        other: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 4,
        cat_id: 100,
        name: 'Корзина все для тебя',
        isTop: true,
        sale: 20,
        price: 3000,
        rating: 5,
        stock: 1,
        images: ['basket-flowers.png'],
        size: '50-60 см',
        material: 'Lorem ipsum dolor sit amet',
        other: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 5,
        cat_id: 100,
        name: '101 красная роза',
        isTop: true,
        sale: 10,
        price: 5000,
        rating: 10,
        stock: 20,
        images: ['red-roses.png'],
        size: '50-60 см',
        material: 'Lorem ipsum dolor sit amet',
        other: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 6,
        cat_id: 100,
        name: '25 розовых пионовидных роз',
        isTop: true,
        sale: 15,
        price: 4000,
        rating: 0,
        stock: 2,
        images: ['pink-roses.png'],
        size: '50-60 см',
        material: 'Lorem ipsum dolor sit amet',
        other: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 7,
        cat_id: 100,
        name: 'Влюбленность',
        isTop: false,
        sale: 10,
        price: 6000,
        rating: 9,
        stock: 10,
        images: ['love-roses.png'],
        size: '50-60 см',
        material: 'Lorem ipsum dolor sit amet',
        other: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 8,
        cat_id: 100,
        name: 'Корзина все для тебя',
        isTop: true,
        sale: 20,
        price: 3000,
        rating: 5,
        stock: 1,
        images: ['basket-flowers.png'],
        size: '50-60 см',
        material: 'Lorem ipsum dolor sit amet',
        other: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },

      // СЕЗОННЫЕ
      {
        id: 9,
        cat_id: 101,
        name: 'Мечтательница',
        isTop: true,
        sale: 10,
        price: 5000,
        rating: 10,
        stock: 20,
        images: ['mechta.png'],
        size: '50-60 см',
        material: 'Lorem ipsum dolor sit amet',
        other: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 10,
        cat_id: 101,
        name: 'Корзина солнечного настроения',
        isTop: true,
        sale: 15,
        price: 4000,
        rating: 0,
        stock: 2,
        images: ['sun.png'],
        size: '50-60 см',
        material: 'Lorem ipsum dolor sit amet',
        other: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 11,
        cat_id: 101,
        name: 'Цветочная клумба',
        isTop: false,
        sale: 0,
        price: 6000,
        rating: 9,
        stock: 10,
        images: ['clumba.png'],
        size: '50-60 см',
        material: 'Lorem ipsum dolor sit amet',
        other: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 12,
        cat_id: 101,
        name: 'Корзина Дюймовочка',
        isTop: true,
        sale: 20,
        price: 3000,
        rating: 5,
        stock: 1,
        images: ['dumovochka.png'],
        size: '50-60 см',
        material: 'Lorem ipsum dolor sit amet',
        other: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },



      // ПОДАРКИ
      {
        id: 13,
        cat_id: 102,
        name: 'Торт Наполеон',
        isTop: true,
        sale: 10,
        price: 5000,
        rating: 10,
        stock: 20,
        images: ['napol.png'],
        size: '50-60 см',
        material: 'Lorem ipsum dolor sit amet',
        other: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 14,
        cat_id: 102,
        name: 'Киевский торт',
        isTop: true,
        sale: 15,
        price: 4000,
        rating: 0,
        stock: 2,
        images: ['kiev.png'],
        size: '50-60 см',
        material: 'Lorem ipsum dolor sit amet',
        other: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 15,
        cat_id: 102,
        name: 'Торт Левантинер',
        isTop: false,
        sale: 0,
        price: 6000,
        rating: 9,
        stock: 10,
        images: ['levant.png'],
        size: '50-60 см',
        material: 'Lorem ipsum dolor sit amet',
        other: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 16,
        cat_id: 102,
        name: 'Торт на день рождения',
        isTop: true,
        sale: 20,
        price: 3000,
        rating: 5,
        stock: 1,
        images: ['dr.png'],
        size: '50-60 см',
        material: 'Lorem ipsum dolor sit amet',
        other: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      








      // {
      //   id: 1,
      //   cat_id: 100,
      //   name: '101 красная роза',
      //   isTop: true,
      //   sale: 10,
      //   price: 5000,
      //   rating: 10,
      //   stock: 20,
      //   images: ['1_0.jpeg', '1_1.jpeg', '1_2.jpeg', '1_3.jpeg' ],
      //   size: '50-60 см',
      //   material: 'Lorem ipsum dolor sit amet',
      //   other: 'Lorem ipsum',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      // },
      // {
      //   id: 2,
      //   cat_id: 100,
      //   name: '25 розовых пионовидных роз',
      //   isTop: true,
      //   sale: 15,
      //   price: 4000,
      //   rating: 0,
      //   stock: 2,
      //   images: ['2_0.jpeg', '2_1.jpeg', '2_2.jpeg', '2_3.jpeg' ],
      //   size: '50-60 см',
      //   material: 'Lorem ipsum dolor sit amet',
      //   other: 'Lorem ipsum',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      // },
      // {
      //   id: 3,
      //   cat_id: 101,
      //   name: 'Влюбленность',
      //   isTop: false,
      //   sale: 0,
      //   price: 6000,
      //   rating: 9,
      //   stock: 10,
      //   images: ['3_0.jpeg', '3_1.jpeg', '3_2.jpeg', '3_3.jpeg' ],
      //   size: '50-60 см',
      //   material: 'Lorem ipsum dolor sit amet',
      //   other: 'Lorem ipsum',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      // },
      // {
      //   id: 4,
      //   cat_id: 200,
      //   name: 'Корзина все для тебя',
      //   isTop: true,
      //   sale: 20,
      //   price: 3000,
      //   rating: 5,
      //   stock: 1,
      //   images: ['4_0.jpeg', '4_1.jpeg', '4_2.jpeg', '4_3.jpeg' ],
      //   size: '50-60 см',
      //   material: 'Lorem ipsum dolor sit amet',
      //   other: 'Lorem ipsum',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      // },
      // {
      //   id: 5,
      //   cat_id: 201,
      //   name: 'Lorem ipsum dolor 5',
      //   isTop: false,
      //   sale: 0,
      //   price: 5000,
      //   rating: 10,
      //   stock: 30,
      //   images: ['5_0.jpeg', '5_1.jpeg', '5_2.jpeg', '5_3.jpeg' ],
      //   size: '50-60 см',
      //   material: 'Lorem ipsum dolor sit amet',
      //   other: 'Lorem ipsum',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      // }
    ]

    this.categories = [
      {
        id: 1,
        parent_id: 0,
        name: 'Букеты'
      },
      {
        id: 100,
        parent_id: 1,
        name: 'Букеты из роз'
      },
      {
        id: 101,
        parent_id: 1,
        name: 'Букеты из хризантем'
      },
      {
        id: 102,
        parent_id: 1,
        name: 'Букеты из альтромерии'
      },
      {
        id: 103,
        parent_id: 101,
        name: 'Букеты из гербер'
      },
      {
        id: 104,
        parent_id: 1,
        name: 'Букеты из ирисов'
      },
      {
        id: 105,
        parent_id: 1,
        name: 'Букеты из пионов'
      },
      {
        id: 106,
        parent_id: 1,
        name: 'Букеты из эустомы'
      },
      {
        id: 107,
        parent_id: 1,
        name: 'Букеты из тюльпонов'
      },
      {
        id: 108,
        parent_id: 1,
        name: 'Букеты из фрезий'
      },
      {
        id: 109,
        parent_id: 1,
        name: 'Букеты из орхидей'
      },
      {
        id: 110,
        parent_id: 1,
        name: 'Букеты из гортензии'
      },

      {
        id: 2,
        parent_id: 0,
        name: 'Розы'
      },
      {
        id: 200,
        parent_id: 2,
        name: 'Роза красная'
      },
      {
        id: 201,
        parent_id: 2,
        name: 'Роза желтая'
      },
      {
        id: 202,
        parent_id: 2,
        name: 'Роза синяя'
      },
      {
        id: 203,
        parent_id: 2,
        name: 'Роза белая'
      },
      {
        id: 204,
        parent_id: 2,
        name: 'Роза черная'
      },

      {
        id: 3,
        parent_id: 0,
        name: 'Цветы в коробке'
      },
      {
        id: 300,
        parent_id: 3,
        name: 'Цветы в коробке с пироженным Macarons'
      },
      {
        id: 301,
        parent_id: 3,
        name: 'Цветы в коробке сердце'
      },
      {
        id: 302,
        parent_id: 3,
        name: 'Цветы в прямоугольной коробке'
      },
      {
        id: 303,
        parent_id: 3,
        name: 'Цветы в шляпной коробке'
      },
      {
        id: 304,
        parent_id: 3,
        name: 'Розы в коробке'
      },
      {
        id: 305,
        parent_id: 3,
        name: 'Пионы в коробке'
      },

      {
        id: 4,
        parent_id: 0,
        name: 'Композиции'
      },
      {
        id: 400,
        parent_id: 4,
        name: 'Композиции в коробке'
      },
      {
        id: 401,
        parent_id: 4,
        name: 'Композиции без коробки'
      },
      {
        id: 402,
        parent_id: 4,
        name: 'Композиции в горшках'
      },

      {
        id: 5,
        parent_id: 0,
        name: 'Подарки'
      },
      {
        id: 500,
        parent_id: 5,
        name: 'Мягкие игрушки'
      },
      {
        id: 501,
        parent_id: 5,
        name: 'Открытки'
      },
      {
        id: 502,
        parent_id: 5,
        name: 'Подарок в форме сердца'
      },

      {
        id: 6,
        parent_id: 0,
        name: 'Подарочные корзины'
      },
      {
        id: 600,
        parent_id: 6,
        name: 'Подарочные композиции'
      },
      {
        id: 601,
        parent_id: 6,
        name: 'Корзины шоколада'
      },
      {
        id: 602,
        parent_id: 6,
        name: 'Корзины микс'
      },

      {
        id: 7,
        parent_id: 0,
        name: 'Букеты невесты'
      },
      {
        id: 700,
        parent_id: 7,
        name: 'Букеты l'
      },
      {
        id: 701,
        parent_id: 7,
        name: 'Букеты XL'
      },
      {
        id: 702,
        parent_id: 7,
        name: 'Букеты XXL'
      },

      {
        id: 8,
        parent_id: 0,
        name: 'Вкусные букеты'
      },
      {
        id: 800,
        parent_id: 8,
        name: 'Вкусные букеты l'
      },
      {
        id: 801,
        parent_id: 8,
        name: 'Вкусные букеты XL'
      },
      {
        id: 802,
        parent_id: 8,
        name: 'Вкусные букеты XXL'
      },
    ]

    this.basket = []

    this.favorites = []
  }

    // получаем список всех товаров
    getProducts() {
      return this.products
    }

    // получаем список всех товаров из корзины
    getBasket() {
      return this.basket
    }

    // получаем список категорий
    getCategories() {
      return this.categories
    }

    // получаем список фаворитов
    getFavorites() {
      return this.favorites
    }

    // получаем товар по его id
    getProductById(id) {
      return this.products.find(item => item.id === Number(id))
    }

    // получаем продукт из корзины по его id
    getProductInBasketById(id) {
      return this.basket.find(item => item.id === Number(id))
    }

    // Добавление в корзину
    addToBasket({ id, count }) {
      // смотрим присутствует ли уже в корзине данный товар
      const haveProductInBasket = this.getProductInBasketById(id)
      // если присутствует, добавляем count
      if (haveProductInBasket) {
          haveProductInBasket.count += count

          // возвращаем измененный товар
          return haveProductInBasket
      } else {
          // иначе ищем товар среди имеющегося, добавляем поле count и пушим в корзину
          const product = this.getProductById(id)
          product.count = count
          this.basket.push(product)

          // возвращаем добавленный товар
          return product
      }
    }

    // Изменяем список фаворитов
    changeFavorites(id) {
      const indexFavorite = this.favorites.findIndex(id)
      // если id присутствует в списке, то удаляем иго
      if (indexFavorite !== -1) {
          this.favorites.splice(indexFavorite, 1)
      } else {
          // иначе добавляем
          this.favorites.push(id)
      }

      // возвращаем измененный список
      return this.favorites
    }
}

module.exports = function() {
  return new DataBase()
}
