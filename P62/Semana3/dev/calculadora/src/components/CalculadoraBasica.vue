<template>
  
    <div>
      <h1>Calculadora Básica</h1>
      <input type="number" v-model="n1"/>
      <input type="number" v-model="n2"/>
      <br />
      <button @click="suma()">Sumar</button>
      <button @click="resta()">Restar</button>
      <br />
      <span>{{ respuesta }}</span>
      
    </div>
</template>

<script>
export default {
    name: 'CalculadoraBasica',
    data:()=>{
        return {
            n1: null,
            n2: null,
            respuesta: ""
        }
    },
    methods:{
        suma(){
            this.respuesta = parseInt(this.n1) + parseInt(this.n2);
        },
        resta(){
            this.respuesta = parseInt(this.n1) - parseInt(this.n2);
        }
    }
}
</script>

<style>

</style>