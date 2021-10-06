<template>
  <div>
    <h1>Mejores Delanteros del Fútbol Internacional</h1>
    <br />
    <!-- Inicio Tabla con los jugadores (Personajes) -->
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Nombre</th>
            <th class="text-center">Apellido</th>
            <th class="text-center">Edad</th>
            <th class="text-center">Email</th>
            <th class="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in personajes" :key="item._id">
            <td>{{ item.nombre }}</td>
            <td>{{ item.apellido }}</td>
            <td>{{ item.edad }}</td>
            <td>{{ item.email }}</td>
            <td>
              <v-btn @click="eliminarPersonaje(item._id)" color="error" elevation="12" rounded x-small>Eliminar</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <!-- Fin tabla jugadores -->
  </div>
</template>

<script>
import store from "../store/index.js";

export default {
  data: () => {
    return {};
  },
  methods: {
    eliminarPersonaje(id){
      let obj = { id };
      store.dispatch("deletePersonajes", obj).then(()=>{
        store.dispatch("getPersonajes");
      });
    },
    insertarPersonaje(){

    }
  },
  created: () => {
    //dispatch: accede a las acciones del store
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