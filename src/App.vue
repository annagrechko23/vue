<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import "./assets/ripple.scss";
import "./assets/style.scss";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style scoped>
nav {
  height: 100%;
  margin-bottom: 20px;
}
</style>