<template>
  <v-app>
    <v-app-bar>
      <v-btn
        color="primary"
        elevation="12"
        rounded
        small
        @click="navegar()"
      >About</v-btn>
      <v-btn
        color="primary"
        elevation="12"
        rounded
        small
        @click="inicio()"
      >Home</v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  methods: {
    navegar(){
      this.$router.push("/about");
    },
    inicio(){
      this.$router.push("/");
    }
  }
}
</script>
<style>

</style>
