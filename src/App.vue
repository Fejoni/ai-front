<template>
  <nav>
    <router-link to="/login">login</router-link> |
    <router-link to="/home">home</router-link> |
    <router-link to="/about">about</router-link> |
    <button type="submit" @click="logout">Выйти</button>
  </nav>
  <router-view/>
</template>

<style>
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
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import api from "@/api/api";

export default {
  name: "App",

  methods: {
    logout() {
      api.post('http://ai.test:8000/logout').then(res => {
        localStorage.removeItem('isLoggedIn')
        this.$router.push({name: 'home'})
      })
    }
  }
}

</script>
