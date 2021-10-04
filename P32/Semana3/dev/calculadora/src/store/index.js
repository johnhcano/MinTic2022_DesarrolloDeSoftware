import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personajes: []
  },
  mutations: {
    setPersonajes(state, payload) {
      state.personajes = payload;
    }
  },
  actions: {
    //Obtener Personajes
    async getPersonajes({ commit }) {
      //const peticion = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters');
      const peticion = await fetch('http://localhost:3000/users');
      const data = await peticion.json();
      console.log(data);
      commit('setPersonajes', data);
    },
    //Agregar Personajes
    async setPersonajes({ commit }, personajes) {
      const peticion = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(personajes)
      });      
    },
    //Eliminar Personajes
    async deletePersonajes({ commit }, personajes) {
      const peticion = await fetch('http://localhost:3000/users', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(personajes)
      });      
    }
  },
  modules: {
  }
})
