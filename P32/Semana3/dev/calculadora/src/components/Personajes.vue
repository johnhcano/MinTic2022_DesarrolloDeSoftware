<template>
  <div>
    <!--    <h2>Personajes Futurama</h2>-->
    <h2>Arqueros Selección Colombia de los 90's</h2>

    <!--      
      <li v-for="item in personajes" :key="item.Name"> 
        {{ item.Name }} - {{ item.Planet}} - {{ item.Status }}
      </li>
-->
    <br />
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nombre</th>
            <th class="text-left">Apellido</th>
            <th class="text-left">Edad</th>
            <th class="text-left">Email</th>
            <th class="text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in personajes" :key="item._id">
            <td>{{ item.nombre }}</td>
            <td>{{ item.apellido }}</td>
            <td>{{ item.edad }}</td>
            <td>{{ item.email }}</td>
            <td>
              <v-btn color="error" elevation="8" rounded small @click="eliminarPersonaje(item._id)">Eliminar</v-btn>
            </td>
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
    return {
      nombre: null,
      apellido: null,
      edad: null,
      email: null,
    };
  },
  methods: {
    eliminarPersonaje(id) {
      let obj = { id };
      store.dispatch("deletePersonajes", obj).then(() => {
        store.dispatch("getPersonajes");
      });
    },
    crearPersonaje() {
      let obj = {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        email: this.email,
      };
      store.dispatch("setPersonajes", obj).then(() => {
        store.dispatch("getPersonajes");
        this.nombre = null;
        this.apellido = null;
        this.edad = null;
        this.email = null;
      });
    },
  },
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