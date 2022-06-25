<template>
<div>
  <form action="#">
    <input v-model="email" type="email" placeholder="email">
    <input v-model="password" type="password" placeholder="password">
    <button type="submit" @click.prevent="login">Проверить</button>
  </form>
  <button type="submit" @click.prevent="get">Получить</button>
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
            email: 'egor3k3@mail.ru',
            password: 'egor3k3@mail.ru',
          }).then(res2 => {
            console.log(res2)
          })
        })
    },
    get() {
      api.get('http://ai.test:8000/api/get').then(res3 => {
        console.log(res3)
      })
    }
  }
}
</script>

<style scoped>

</style>