<template>
  <div>
    <h1>Personajes</h1>
    <ul>
      <li v-for="item in personajes" :key="item.Name">
        {{ item.Name }} - {{ item.Planet }}
      </li>
    </ul>

    <hr />

    <v-simple-table dark>
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
          <tr v-for="usuario in users" :key="usuario._id">
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.apellido }}</td>
            <td>{{ usuario.edad }}</td>
            <td>{{ usuario.email }}</td>
            <td>
                <v-btn color="primary" elevation="2" rounded small>Eliminar</v-btn> 
                <v-btn color="primary" elevation="2" rounded small>Actualizar</v-btn>
            </td>

          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <hr />
    <br />
    <v-card
      v-for="usuario in users"
      :key="usuario._id"
      class="mx-auto"
      max-width="344"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">OVERLINE</div>
          <v-list-item-title class="text-h5 mb-1">
            {{ usuario.nombre }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ usuario.apellido }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn outlined rounded text> Button </v-btn>
      </v-card-actions>
    </v-card>
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
    },
  },
};
</script>

<style>
</style>