<template>
  <div>
    <!--    <h2>Personajes Futurama</h2> -->
    <h2>Arqueros Selección Colombia de los 90's</h2>

    <!--      
      <li v-for="item in personajes" :key="item.Name"> 
        {{ item.Name }} - {{ item.Planet}} - {{ item.Status }}
      </li>
    -->

    <br />

    <!-- Inicio formulario para creación y actualización -->
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="nombre"
        :counter="10"
        :rules="nombreRules"
        label="Nombre"
        required
      ></v-text-field>

      <v-text-field
        v-model="apellido"
        :counter="10"
        :rules="apellidoRules"
        label="Apellido"
        required
      ></v-text-field>

      <v-text-field
        v-model="edad"
        :counter="10"
        :rules="edadRules"
        label="Edad"
        type="number"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
        required
      ></v-text-field>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn v-if="id==null" rounded x-small color="primary" class="mr-4" @click="crearPersonaje">Agregar</v-btn>

      <v-btn v-if="id!=null" rounded x-small color="primary" class="mr-4" @click="actualizarPersonaje(id)">Actualizar</v-btn>

      <v-btn v-if="id!=null" rounded x-small color="error" class="mr-4" @click="btnCancelar">Cancelar</v-btn>

      <v-btn rounded x-small :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>

      <v-btn rounded x-small color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

      <v-btn rounded x-small color="warning" @click="resetValidation"> Reset Validation </v-btn>
    </v-form>
    <!-- Fin formulario para creación y actualización -->

    <br />

    <!-- Inicio tabla que muestra los documentos (registros) -->
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
              <v-btn
                color="error"
                elevation="8"
                class="mr-4"
                rounded
                x-small
                @click="eliminarPersonaje(item._id)"
                >Eliminar
              </v-btn>
              <v-btn
                color="primary"
                elevation="8"
                class="mr-4"
                rounded
                x-small
                v-on:click="btnActualizar(item._id, item.nombre, item.apellido, item.edad, item.email)"
                >Actualizar
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <!-- Fin tabla que muestra los documentos (Registros) -->
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
      (v) => (v && v.length <= 10) || "Nombre debe tener menos de 10 caracteres",
    ],
    apellido: "",
    apellidoRules: [
      (v) => !!v || "Apellido es obligatorio",
      (v) => (v && v.length <= 10) || "Apellido debe tener menos de 10 caracteres",
    ],
    edad: "",
    edadRules: [
      (v) => !!v || "Edad es obligatorio",
      (v) => (v > 0) || "El número debe ser mayor que cero",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "Email es obligatorio",
      (v) => /.+@.+\..+/.test(v) || "Email debe ser válido",
    ],
    checkbox: false,
    id: null,
  }),
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
        this.$refs.form.reset();
      });
    },
    actualizarPersonaje(id) {
      let obj = {
        id: id,
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        email: this.email,
      };
      store.dispatch("updatePersonajes", obj).then(() => {
        store.dispatch("getPersonajes");
        this.$refs.form.reset();
        this.id = null;
      });
    },
    btnActualizar(id, nombre, apellido, edad, email){
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.email = email;
    },
    btnCancelar(){
      this.$refs.form.reset();
      this.id = null;
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