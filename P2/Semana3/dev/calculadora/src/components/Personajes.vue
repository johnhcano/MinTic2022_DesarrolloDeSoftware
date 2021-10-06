<template>
  <div>
    <h1>Personajes</h1>

    <!--------- Inicio API Futurama ---->    
    <ul>
      <li v-for="item in personajes" :key="item.Name">
        {{ item.Name }} - {{ item.Planet }}
      </li>
    </ul>
    <!--------- Fin API Futurama ---->    

    <hr />
    <br />

    <!--------- Inicio Formulario Insertar Documento---->
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="nombre"
        :counter="10"
        :rules="nombreRules"
        label="Nombre"
        required
      >{{ nombre }}</v-text-field>

      <v-text-field
        v-model="apellido"
        :counter="10"
        :rules="apellidoRules"
        label="Apellido"
        required
      ></v-text-field>

      <v-text-field
        v-model="edad"
        :rules="edadRules"
        label="edad"
        type="number"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn color="primary" class="mr-4" @click="insertarUsuario()">Agregar</v-btn>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validate
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

      <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn>
    </v-form>
    <!--------- Fin Formulario Insertar Documento------>
    <br />
    <!--------- Inicio Tabla Documentos------>
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
          <tr v-for="usuario in users" :key="usuario._id">
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.apellido }}</td>
            <td>{{ usuario.edad }}</td>
            <td>{{ usuario.email }}</td>
            <td>
              <v-btn
                @click="eliminarUsuario(usuario._id)"
                color="error"
                elevation="2"
                rounded
                small
                >Eliminar</v-btn
              >
              <v-btn color="primary" elevation="2" rounded small
                >Actualizar</v-btn
              >
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <!--------- Fin Tabla Documentos ------>

    <hr />
    <br />

    <!--------- Inicio Tarjetas con los jugadores------>
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
    <!--------- Fin Tarjetas con los jugadores------>
  </div>
</template>

<script>
import store from "../store/index.js";

export default {
  data: () => ({
    valid: true,
    nombre: "",
    nombreRules: [
      (v) => !!v || "Nombre es obligatorio",
      (v) => (v && v.length <= 10) || "Nombre debe ser menor a 10 caracteres",
    ],
    apellido: "",
    apellidoRules: [
      (v) => !!v || "Apellido es obligatorio",
      (v) => (v && v.length <= 10) || "Apellido debe ser menor a 10 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail es obligatorio",
      (v) => /.+@.+\..+/.test(v) || "E-mail debe ser válido",
    ],
    edad: "",
    edadRules: [(v) => !!v || "edad es obligatorio"],
    checkbox: false,
    return: {
      nombre: null,
      apellido: null,
      edad: null,
      email: null
    },
  }),
  methods: {
    eliminarUsuario(id) {
      let obj = { id };
      store.dispatch("deleteUsers", obj).then(() => {
        store.dispatch("getUsers");
      });
    },
    insertarUsuario(){
      let obj = { nombre: this.nombre, 
                  apellido: this.apellido, 
                  edad: this.edad, 
                  email: this.email };
      store.dispatch("setUsers", obj).then(() => {
        store.dispatch("getUsers");
      });
      this.nombre = "";
      this.apellido = "";
      this.edad = "";
      this.email = "";
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
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