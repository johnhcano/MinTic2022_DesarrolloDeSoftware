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
    //Obtener/Consultar personajes
    async getPersonajes({ commit }) {
      //const peticion = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters');
      const peticion = await fetch('http://localhost:3000/users');
      const data = await peticion.json();
      console.log(data);
      commit('setPersonajes', data);
    },
    //Eliminar personaje mediante su id
    async deletePersonajes({ commit }, personajes) {
      const peticion = await fetch('http://localhost:3000/users', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(personajes)
      });
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
    //Actualizar Personajes
    async updatePersonajes({ commit }, personajes) {
      const peticion = await fetch('http://localhost:3000/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(personajes)
      });
    },

  },
  modules: {
  }
})
