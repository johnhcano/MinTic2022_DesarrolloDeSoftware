<template>
  <div>
    <h1>Personajes</h1>
    <ul>
      <li v-for="item in personajes" :key="item.id"> <!--item.Name-->
          {{ item.nombre }} {{ item.apellido }} - Edad:{{ item.edad }}
          <!--{{ item.Name }} - {{ item.Age }}-->
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
    },
    computed: {
        personajes: () => {
            return store.state.personajes;
        }
    }

};
</script>

<style>
</style>