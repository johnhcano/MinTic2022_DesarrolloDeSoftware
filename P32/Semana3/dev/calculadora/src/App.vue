<template>
  <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
    <calculadora-basica />
  </div>
</template>

<script>
import CalculadoraBasica from './components/CalculadoraBasica.vue'

export default {
  name: 'App',
  components: {
    CalculadoraBasica
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
