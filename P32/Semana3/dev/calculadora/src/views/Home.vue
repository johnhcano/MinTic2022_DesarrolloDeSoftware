<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <calculadora-basica />
  </div>
</template>

<script>
// @ is an alias to /src
import CalculadoraBasica from '../components/CalculadoraBasica.vue'

export default {
  name: 'Home',
  components: {
    CalculadoraBasica
  }
}
</script>