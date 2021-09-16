<template>
  <div>
    <titulo />
    <h1>Calculadora Básica</h1>
    <input type="number" v-model="n1" />
    <br />
    <input type="number" v-model="n2" />
    <br />
    <button @click="suma()">Sumar</button>
    <button @click="resta()">Restar</button>
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