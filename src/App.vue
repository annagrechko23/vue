<template>
  <div id="app">
    <appHeader />
		<router-view/>
  </div>
</template>

<script>
import appHeader from "./components/layout/Header.vue";
import "./assets/ripple.scss";
import "./assets/style.scss";

export default {
  name: "app",
  components: {
    appHeader
  }
};
</script>

<style scoped>
nav {
  height: 100%;
  margin-bottom: 20px;
}
</style>