import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personajes: [],
    users: []
  },
  mutations: {
    setPersonajes(state, payload) {
      state.personajes = payload
    },
    setUsers(state, payload){
      state.users = payload;
    }
  },
  actions: {  
    async getPersonajes({commit}){
      const peticion = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters');
      const data = await peticion.json();
      console.log(data);
      commit('setPersonajes', data);
    },
    async getUsers({commit}){
      const peticion = await fetch('http://localhost:3000/users');
      const data = await peticion.json();
      console.log(data);
      commit('setUsers', data);
    },
    async deleteUsers({commit}, users){
      const peticion = await fetch('http://localhost:3000/users', {
        method: 'DELETE',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(users)
      });
    },
    async setUsers({commit}, users){
      const peticion = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(users)
      });
    },
    async updateUsers({commit}, users){
      const peticion = await fetch('http://localhost:3000/users', {
        method: 'PUT',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(users)
      });
    }

  },
  modules: {
  }
})
