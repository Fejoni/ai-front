<template>
  <div class="container">
    <main>
      <div class="register__recovery mainColor">
        <div class="register__recovery__block mainColor">
          <div class="register__recovery__name mainColor">
            <div class="logo mainColor">
              <img class="mainColor logoImg" :src="logoAuth" alt="logo">
              <h3 class="mainColor logoText">Assistant-IT</h3>
            </div>
            <p class="mainColor">Присоединиться к форуму</p>
          </div>
          <form action="#" method="POST" class="mainColor">
            <div class="mainColor" v-if="errorMessage">{{ errorMessage }}</div>
            <input class="mainColor" v-model="name" type="text" placeholder="Login">
            <input class="mainColor" v-model="email" type="email" placeholder="E-mail">
            <input class="mainColor" v-model="password" type="password" placeholder="Password">
            <button class="btn btn-danger mainColor" type="submit" @click.prevent="register">Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import logoAuth from "@/assets/logoAuth.svg";
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

  setup() {
    return {
      logoAuth
    };
  },

  methods: {
    register() {
      api.get('sanctum/csrf-cookie').then(res => {
        api.post('register', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password,
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

input {
  outline: none;
}

.logoImg {
  position: relative;
  right: 67px;
}

.mainColor {
  background-color: #191919;
}
main {
  margin-top: 35px;
}

.register__recovery {
  background: #252525;
  border-radius: 10px;
  width: 316px;
  height: 490px;
  margin: 0 auto;
  padding: 10px;
}

.register__recovery__block {
  width: 100%;
  text-align: center;
  height: 100%;
  background: #191919;
  border-radius: 10px;
}

.register__recovery__name {
  margin: 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  padding-top: 63px;
  color: #ffffff;
}

.logoText {
  font-weight: 500;
  font-size: 23px;
  line-height: 23px;
}

.register__recovery__name p {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #949494;
  padding-top: 10px;
  margin: 0;
}

.register__recovery__block {
  position: relative;
}

.register__recovery__block input {
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  margin-top: 20px;
  color: #949494;
  background: none;
  padding: 10px 10px 10px 0;
  border: 0;
  border-bottom: 1px solid white;
}

.register__recovery__block button {
  width: 196px;
  height: 30px;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: #ffffff;
  background: #00ba78;
  border-radius: 15px;
  border: 0;
  margin-top: 30px;
}

.register__recovery__block a {
  display: block;
  position: absolute;
  bottom: 38px;
  width: 100%;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  text-decoration: none;
  color: #949494;
}

label {
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: #d6d6d6;
  left: 13px;
  position: relative;
  margin-top: 20px;
}
input[type="checkbox"] {
  display: none;
}

label {
  padding-left: 20px;
}
label::before {
  content: "";
  width: 15px;
  height: 15px;
  background: #000000;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  transition: 0.2s;
}

input[type="checkbox"]:checked + label::before {
  content: "\2713";
}

@media (max-width: 700px) {
  .register_recovery {
    width: 290px;
    height: 435px;
  }
}
</style>