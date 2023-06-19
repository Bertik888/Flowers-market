import { createStore } from 'vuex'
import categories from './modules/categories'
import products from './modules/products'


export default createStore({
  modules: {
    categories,
    products
  }
})
