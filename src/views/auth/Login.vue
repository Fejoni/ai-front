<template>
<div>
  <form action="#" method="POST">
    <div v-if="errorMessage">{{ errorMessage }}</div>
    <input v-model="email" type="email" placeholder="email">
    <input v-model="password" type="password" placeholder="password">
    <button class="btn btn-danger" type="submit" @click.prevent="login">Проверить</button>
  </form>
  <button type="submit" @click.prevent="get">Получить</button>
  <button type="submit" @click.prevent="logout">Выйти</button>
  <p>Почта: {{ name }}</p>
</div>
</template>

<script>
import api from "@/api/api";

export default {
  name: "Login",

  data() {
    return {
      email: null,
      password: null,
      name: null,
      errorMessage: null,
    }
  },
  methods: {
    login() {
        api.get('sanctum/csrf-cookie').then(res => {
          return api.post('login', {
            email: this.email,
            password: this.password,
          }).then(res2 => {
            return api.get('api/v1/user').then(res3 => {
              localStorage.setItem('user', JSON.stringify(res3.data))
              localStorage.setItem('isLoggedIn', 'true')
              this.$router.push({ name: 'about' })
            })
          }).catch(error => {
            const key = Object.keys(error.response.data.errors)[0]
            this.errorMessage = error.response.data.errors[key][0]
          })
        })
    },
    get() {
      api.get('api/v1/user').then(res3 => {
        this.name = res3.data.email
      })
    },
    logout() {
      api.post('logout').then(res => {
        localStorage.removeItem('isLoggedIn')
        this.$router.push({ name: 'Home' })
      })
    }
  }
}
</script>

<style scoped>

</style>