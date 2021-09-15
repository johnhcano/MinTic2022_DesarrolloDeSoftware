<template>
  <div>
    <h1>Calculadora Básica</h1>
    <v-text-field
      type="number"
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
    
    <v-btn
      color="primary"
      elevation="18"
      rounded
      @click="suma()"
    >Sumar</v-btn>
    
    <v-btn
      color="primary"
      elevation="18"
      rounded
      @click="resta()"
    >Restar</v-btn>
    <br />
    <span>{{ resultado }}</span>
  </div>
</template>

<script>
export default {
  name: "CalculadoraBasica",
  data: () => {
    return {
      n1: null,
      n2: null,
      resultado: "",
      rules: [
        value => !!value || 'Requerido.',
        value => (value && value.length >= 3) || 'Min 3 caracteres',
        //validar que sea solo número.
        /*<v-text-field type="number" :rules="numberRule"></v-text-field>

numberRule: (v) => {
   v => !!v || 'campo requerido',
   v => Number(v) > 0 || 'valor tiene que ser mayor a 0',
},*/
      ],
    };
  },
  methods: {
    suma() {
      this.resultado = parseFloat(this.n1) + parseFloat(this.n2);
    },
    resta() {
      this.resultado = parseFloat(this.n1) - parseFloat(this.n2);
    },
  },
};
</script>

<style>
</style>