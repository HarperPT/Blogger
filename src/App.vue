<template>
  <div id="app">
    <Header></Header>
    <router-link to="/"></router-link>
    <router-link to="/login"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Login,
    Home,
    Header,
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
