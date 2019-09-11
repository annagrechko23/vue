<template>
  <div id="app">
    <Header />
		<!-- <router-view/> -->
  </div>
</template>

<script>
import Header from "./pages/Header.vue";
import "./assets/ripple.scss";
import "./assets/style.scss";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style scoped>
nav {
  height: 100%;
  margin-bottom: 20px;
}
</style>