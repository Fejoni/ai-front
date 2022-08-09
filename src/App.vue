<template>
  <Header></Header>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <Aside></Aside>
      </div>
      <div class="col-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>

* {
  color: white;
  background-color: #101010;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

nav a:hover {
  color: #949494;
}

</style>
<script>
import Header from "@/components/layout/Header";
import Aside from "@/components/layout/Aside";

export default {
  name: "App",

  components: {
    Header, Aside
  },
}

</script>
