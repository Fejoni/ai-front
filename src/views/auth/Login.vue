<template>

  <div class="container">
    <main>
      <div class="login__recovery mainColor">
        <div class="login__recovery__block mainColor">
          <div class="login__recovery__name mainColor">
            <div class="logo mainColor">
              <img class="mainColor logoImg" :src="logoAuth" alt="logo">
              <h3 class="mainColor logoText">Assistant-IT</h3>
            </div>
            <p class="mainColor">Войдите в свой аккаунт</p>
          </div>
          <form action="#" method="POST" class="mainColor">
            <div class="mainColor" v-if="errorMessage">{{ errorMessage }}</div>
            <input class="mainColor" v-model="email" type="email" placeholder="E-mail">
            <input class="mainColor" v-model="password" type="password" placeholder="Password">
            <button class="btn btn-danger mainColor" type="submit" @click.prevent="login">Войти</button>
          </form>
          <a class="mainColor" href="#">Забыли пароль ?</a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import logoAuth from "@/assets/logoAuth.svg";
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

  setup() {
    return {
      logoAuth
    };
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
            this.$router.push({name: 'about'})
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
        this.$router.push({name: 'Home'})
      })
    }
  }
}
</script>

<style scoped>

.logoText {
  font-weight: 500;
  font-size: 23px;
  line-height: 23px;
}

.logoImg {
  position: relative;
  right: 67px;
}

input {
  outline: none;
}

.mainColor {
  background-color: #191919;
}

main {
  margin-top: 35px;
}

.login__recovery {
  background: #252525;
  border-radius: 10px;
  width: 316px;
  height: 490px;
  margin: 0 auto;
  padding: 10px;
}

.login__recovery__block {
  width: 100%;
  text-align: center;
  height: 100%;
  background: #191919;
  border-radius: 10px;
}

.login__recovery__name {
  margin: 0;
  padding-top: 63px;
  color: #FFFFFF;
}

.login__recovery__name p {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #949494;
  padding-top: 10px;
  margin: 0;
}

.login__recovery__block {
  position: relative;
}

.login__recovery__block input {
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

.login__recovery__block button {
  width: 196px;
  height: 30px;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: #FFFFFF;
  background: #00BA78;
  border-radius: 15px;
  border: 0;
  margin-top: 30px;
}

.login__recovery__block a {
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
  color: #D6D6D6;
  right: 37px;
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
  content: '';
  width: 15px;
  height: 15px;
  background: #000000;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  transition: 0.2s;
}

input[type="checkbox"]:checked + label::before {
  content: '\2713';
}

@media (max-width: 700px) {
  .login__recovery {
    width: 290px;
    height: 435px;
  }
}

</style>