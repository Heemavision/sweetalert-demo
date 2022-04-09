<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>Vue-Sweetalert2 Demo</h2>
    <SweetAlert />
  </div>
</template>

<script>
import SweetAlert from "./components/SweetAlert.vue";

export default {
  name: "App",
  components: {
    SweetAlert,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
