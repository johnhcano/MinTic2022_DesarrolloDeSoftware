<template>
  <div>
    <!--    <h2>Personajes Futurama</h2>-->
    <h2>Arqueros Selección Colombia de los 90's</h2>

    <!--      
      <li v-for="item in personajes" :key="item.Name"> 
        {{ item.Name }} - {{ item.Planet}} - {{ item.Status }}
      </li>
-->
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nombre</th>
            <th class="text-left">Apellido</th>
            <th class="text-left">Edad</th>
            <th class="text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in personajes" :key="item.id">
            <td>{{ item.nombre }}</td>
            <td>{{ item.apellido }}</td>
            <td>{{ item.edad }}</td>
            <td>{{ item.email }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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
    },
  },
};
</script>

<style>
</style>