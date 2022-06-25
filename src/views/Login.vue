<template>
<div>
  <form action="#">
    <input v-model="email" type="email" placeholder="email">
    <input v-model="password" type="password" placeholder="password">
    <button class="btn btn-danger" type="submit" @click.prevent="login">Проверить</button>
  </form>
  <button type="submit" @click.prevent="get">Получить</button>
  <button type="submit" @click.prevent="logout">Выйти</button>
</div>
</template>

<script>
import axios from "axios";
import api from "@/api/api";

export default {
  name: "Login",

  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    login() {
        api.get('http://ai.test:8000/sanctum/csrf-cookie').then(res => {
          return api.post('http://ai.test:8000/login', {
            email: this.email,
            password: this.password,
          }).then(res2 => {
            console.log(res2)
          })
        })
    },
    get() {
      api.get('http://ai.test:8000/api/get').then(res3 => {
        console.log(res3)
      })
    },
    logout() {
      api.post('http://ai.test:8000/logout')
    }
  }
}
</script>

<style scoped>

</style>