import { getCategories } from '@/api/categories'

const state = () => ({
  categories: []
})

const mutations = {
  SET_CATEGORIES(state, payload) {
    state.categories = payload
  }
}

const actions = {
  async getCategories({ commit }) {
    getCategories()
      .then(response => {
        commit('SET_CATEGORIES', response)
      })
  }
}

const getters = {
  menuCategories: state => {
    const menu = []
    const getChildren = (arr, id) => {
      
      const children = []
      arr.forEach(item => {
        if (item.parent_id === id) {
          children.push({ 
            id: item.id,
            name: item.name,
            link: '', 
            children: getChildren(arr, item.id)            
          })
        }
      })
      return children
    } 
    state.categories.forEach(item => {
      if (item.parent_id === 0) {
        const children = getChildren(state.categories, item.id)
        menu.push({ 
          id: item.id,
          name: item.name,
          link: '',
          children          
        })
      }
    })

    return [
      { 
        id: 'menu-1',
        link: '',
        name: 'Каталог товаров',
        children: menu    
      },
      {
        id: 'menu-2',
        link: '',
        name: 'Форум',
        children: []
      },
      {
        id: 'menu-3',
        link: '',
        name: 'Отзывы',
        children: []
      },
      {
        id: 'menu-4',
        link: '',
        name: 'Акции',
        children: []
      },
      {
        id: 'menu-5',
        link: '',
        name: 'Новости',
        children: []
      },
      {
        id: 'menu-6',
        link: '',
        name: 'Информация',
        children: [
          {
            id: 'submenu-1',
            link: '',
            name: 'О нас',
            children: []
          },
          {
            id: 'submenu-2',
            link: '',
            name: 'Политика конфиденциальности',
            children: []
          },
          {
            id: 'submenu-3',
            link: '',
            name: 'Возврат товара',
            children: []
          },
          {
            id: 'submenu-4',
            link: '',
            name: 'Связаться для сотрудничества',
            children: []
          },
          {
            id: 'submenu-5',
            link: '',
            name: 'Карта сайта',
            children: []
          }
        ]
      }  
    ]
  }
}

export default {
  namespaced: true,
  state,      //data
  mutations,  //изменение данных state
  actions,    //methods
  getters     //computed
}