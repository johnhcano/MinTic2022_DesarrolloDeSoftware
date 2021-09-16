<template>
  <div>
    <titulo />
    <h1>Calculadora Básica</h1>
    <input type="number" v-model="n1" />
    <br />
    <input type="number" v-model="n2" />
    <br />
    <v-btn
      color="primary"
      elevation="15"
      rounded
      x-large
      @click="suma()"
    >Sumar</v-btn>
    <v-btn
      color="primary"
      elevation="15"
      rounded
      x-large
      @click="resta()"
    >Restar</v-btn>
    <br />
    {{ resp }}
  </div>
</template>

<script>
import Titulo from "./Titulo.vue";

export default {
  name: "CalculadoraBasica",
  components: {
    Titulo,
  },
  data: () => {
    return {
      n1: null,
      n2: null,
      resp: "",
    };
  },
  methods: {
    suma() {
      this.resp = parseFloat(this.n1) + parseFloat(this.n2);
    },
    resta() {
      this.resp = parseFloat(this.n1) - parseFloat(this.n2);
    },
  },
};
</script>

<style>
</style>