import { createStore } from 'vuex'

export default createStore({
  state: {
    catalog: [],
    cart: []
  },
  getters: {
    getCatalog: (state) => [...state.catalog],
    getCart: (state) => [...state.cart]
  },
  mutations: {
    setCatalog: (state, catalog) => { state.catalog = catalog },
    setCart: (state, cart) => { state.cart = cart },
    addToCart: (state, product) => {
      const index = state.cart.findIndex(item => item.id === product.id)
      console.log(index);
      if (index != -1) {
        state.cart[index].count++;
      } else {
        product.count = 1;
        state.cart.push(product)
      }
    },
    removeFromCart: (state, id) => {
      const index = state.cart.find((item) => item.id === id);
      state.cart.splice(index, 1)
    },
    clearCart: (state) => {
      state.cart = []
    }
  },
  actions: {
    loadCatalog({ commit }) {
      return fetch('/api/v1/catalog')
        .then(response => response.json())
        .then(data => {
          commit('setCatalog', data);
        })
    },
    loadCart({ commit }) {
      return fetch('/api/v1/cart')
        .then(response => response.json())
        .then(data => {
          commit('setCart', data);
        })
    },
    addToCart({ commit }, product) {
      return fetch('api/v1/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })
        .then(() => {
          commit('addToCart', product)
        })
    },
    removeFromCart({ commit }, id) {
      return fetch(`api/v1/cart/${id}`, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' }
      })
        .then(() => {
          commit('removeFromCart', id)
        })
    },
    clearCart({ commit }) {
      return fetch(`api/v1/cart/all`, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' }
      })
        .then(() => {
          commit('clearCart')
        })
    }
  },
  modules: {
  }
})
