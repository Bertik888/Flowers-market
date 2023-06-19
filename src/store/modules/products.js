import { getProducts } from '@/api/products'

const state = () => ({
  products: []
})

const mutations = {
  SET_PRODUCTS(state, payload) {
    state.products = payload
  }
}

const actions = {
  async getProducts({ commit }) {
    getProducts()
      .then(response => {
        commit('SET_PRODUCTS', response)
      })
  }
}

const getters = {
  productsAction: state => {
    return state.products.filter(item => item.sale > 0)
  },
  productsSeason: state => {
    return state.products.filter(item => item.cat_id === 101)
  },
  productsPresent: state => {
    return state.products.filter(item => item.cat_id === 102)
  }
  
}

export default {
  namespaced: true,
  state,      //data
  mutations,  //изменение данных state
  actions,    //methods
  getters     //computed
}