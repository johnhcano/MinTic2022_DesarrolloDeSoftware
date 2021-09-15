<template>
  <div>
    <h1>Calculadora Básica</h1>
    <v-text-field
      label="Número 1"
      :rules="rules"
      hide-details="auto"
      v-model="n1"
    ></v-text-field>
    <v-text-field
      label="Número 2"
      :rules="rules"
      hide-details="auto"
      v-model="n2"
    ></v-text-field>
    <br />
    <v-btn 
        color="primary" 
        elevation="13" 
        rounded 
        small
        @click="suma()"
    >Sumar</v-btn>
    <v-btn 
        color="primary" 
        elevation="13" 
        rounded 
        small
        @click="resta()"
    >Restar</v-btn>
    <br />
    <span>{{ respuesta }}</span>
  </div>
</template>

<script>
export default {
  name: "CalculadoraBasica",
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