<template>
  <v-container>
    <encabezado />
    <v-row>
      <v-col>
        <h1 class="text-center">
          Calculadora Básica
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          label="Número 1"
          :rules="rules"
          hide-details="auto"
          v-model="n1"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          label="Número 2"
          :rules="rules"
          hide-details="auto"
          v-model="n2"
        ></v-text-field>
      </v-col>
    </v-row>
    <br />
    <v-row class="text-center">
      <v-col>
        <v-btn
            color="primary" 
            elevation="13" 
            rounded 
            small
            @click="suma()"
        >Sumar</v-btn>
      </v-col>
      <v-col>
        <v-btn 
            color="primary" 
            elevation="13" 
            rounded 
            small
            @click="resta()"
        >Restar</v-btn>
      </v-col>
      <v-col>
        <v-btn
            color="primary" 
            elevation="13" 
            rounded 
            small
        >Multiplicar</v-btn>
      </v-col>
      <v-col>
        <v-btn 
            color="primary" 
            elevation="13" 
            rounded 
            small
        >Dividir</v-btn>
      </v-col>
    </v-row>
    <br />
    <span>{{ respuesta }}</span>
  </v-container>
</template>

<script>
import Encabezado from './Encabezado.vue';

export default {
  name: "CalculadoraBasica",
  components: {
    Encabezado
  },
  data: () => {
    return {
      n1: null,
      n2: null,
      respuesta: "",
      rules: [
        value => !!value || 'Requerido.',
        value => (value && value.length >= 3) || 'Min 3 caracteres',
      ],
    };
  },
  methods: {
    suma() {
      this.respuesta = parseInt(this.n1) + parseInt(this.n2);
    },
    resta() {
      this.respuesta = parseInt(this.n1) - parseInt(this.n2);
    },
  },
};
</script>

<style>
</style>