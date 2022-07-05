<template>
  <form action="#" method="POST">
    <p v-if="errorMessage" class="alert-danger"> {{ errorMessage }} </p>
    <input type="text" name="name" placeholder="Имя" v-model="name"> <br>
    <input type="email" name="email" placeholder="Почта" v-model="email"> <br>
    <input type="password" name="password" placeholder="Пароль" v-model="password"> <br>
    <input type="password" name="password_confirmation" placeholder="Повторите пароль" v-model="password_confirmation"> <br><br>
    <button type="submit" @click.prevent="test">Зарегистрировать</button>
  </form>
</template>

<script>
import api from "@/api/api";

export default {
  name: "Register",
  data() {
    return {
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
      errorMessage: null,
    }
  },
  methods: {
    test() {
      api.get('http://ai.test:8000/sanctum/csrf-cookie').then(res => {
        api.post('http://ai.test:8000/register', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        }).then(res => {
          localStorage.setItem('isLoggedIn', 'true')
          this.$router.push({ name: 'about' })
        }).catch(error => {
          const key = Object.keys(error.response.data.errors)[0]
          this.errorMessage = error.response.data.errors[key][0]
        })
      })
    }
  }
}
</script>

<style scoped>

</style>