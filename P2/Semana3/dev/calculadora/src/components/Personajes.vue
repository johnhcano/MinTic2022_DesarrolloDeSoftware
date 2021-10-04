<template>
  <div>
      <h1>Personajes</h1>
      <ul>
          <li v-for="item in personajes" :key="item.Name">
              {{ item.Name }} - {{ item.Planet }}
          </li>
      </ul>
      <ul>
          <li v-for="usuario in users" :key="usuario._id">
              {{usuario.nombre}} {{usuario.apellido}} {{usuario.edad}} {{usuario.email}}
          </li>
      </ul>
  </div>
</template>

<script>
import store from "../store/index.js";

export default {
    data: () => {
        return {};
    },
    methods: {},
    created: () => {
        //accede a las acciones del store
        store.dispatch("getPersonajes");
        store.dispatch("getUsers");
    },
    computed: {
        personajes: () => {
            return store.state.personajes;
        },
        users: () => {
            return store.state.users;
        }
    }
}
</script>

<style>
</style>