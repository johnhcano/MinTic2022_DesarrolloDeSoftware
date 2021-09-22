<template>
  <div>
    <h2>Personajes Futurama</h2>
    <ul>
      <li v-for="item in personajes" :key="item.Name">
        {{ item.Name }} - {{ item.Planet}} - {{ item.Status }}
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
    //Acceder a las actions del store
    store.dispatch("getPersonajes");
  },
  computed: {
    personajes: () => {
      return store.state.personajes;
    }
  }
}
</script>

<style>

</style>