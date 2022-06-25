<template>
  <div id="app">
    <SwitchLanguageVue />
    <router-link to="/"></router-link>
    <router-link to="/login"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import SwitchLanguageVue from "./components/SwitchLanguage.vue";

export default {
  name: "app",
  components: {
    Login,
    Home,
    SwitchLanguageVue,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
