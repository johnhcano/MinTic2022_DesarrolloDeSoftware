<template>
  <v-app>
    <v-main>
      <calculadora-basica />
    </v-main>
  </v-app>
</template>

<script>
import CalculadoraBasica from './components/CalculadoraBasica.vue';


export default {
  name: 'App',

  components: {
    CalculadoraBasica
    
  },

  data: () => ({
    //
  }),
};
</script>
