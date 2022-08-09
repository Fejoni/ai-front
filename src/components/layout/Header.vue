<template>
  <header>
    <div class="container mainColorHeader mb-4">
      <nav class="navbar navbar-expand-lg navbar-light mainColorHeader">
        <div class="container-fluid mainColorHeader">
          <button
              class="navbar-toggler "
              type="submit"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Переключатель навигации"
          >
            <span class=""><img src="@/assets/HamburgerIcon.svg"></span>
          </button>
          <div class="register-burger mainColorHeader">
            <a href="#">
              <router-link class="mainColorHeader" to="/login">
                <button type="submit" class="entrance">Войти</button>
              </router-link>
            </a>
            <a href="#">
              <router-link class="mainColorHeader" to="/register">
                <button style="background: #191919" type="submit" class="registration mainColorHeader">
                  Зарегестрироваться
                </button>
              </router-link>
            </a>
          </div>
          <div class="collapse navbar-collapse mainColorHeader" id="navbarTogglerDemo01">
            <router-link class="mainColorHeader" to="/home"><span class="mainColorHeader"><img class="logo" src="@/assets/logo.png">
                <p class="logo-text mainColorHeader">Assistant-IT</p></span>
            </router-link>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item mainColorHeader">
                <router-link to="/home"><a class="nav--link mainColorHeader" aria-current="page"
                                           href="#">Главная</a></router-link>
              </li>
              <li class="nav-item mainColorHeader">
                <router-link to="/about"><a class="nav--link mainColorHeader" href="#">Контакты</a></router-link>
              </li>
            </ul>
            <div class="register mainColorHeader">
              <a href="#" style="background: #191919">
                <router-link class="mainColorHeader" to="/login">
                  <button type="submit" class="entrance">Войти</button>
                </router-link>
              </a>
              <a href="#">
                <router-link class="mainColorHeader" to="/admin">
                  <button style="background: #191919" type="submit" class="registration mainColorHeader">
                    Админ
                  </button>
                </router-link>
              </a>
              <a style="background: #191919" href="#">
                <router-link class="mainColorHeader" to="/register">
                  <button style="background: #191919" type="submit" class="registration">Зарегистрироваться</button>
                </router-link>
              </a>
              <a style="background: #191919" href="#">
                <router-link class="mainColorHeader" to="/home">
                  <button style="background: #191919" type="submit" class="registration" @click="logout">Выйти</button>
                </router-link>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import api from "@/api/api";

export default {
  name: "header",

  data() {
    return {
      name: null,
    }
  },
  mounted() {
    api.get('api/v1/user').then(res => {
      this.name = res.data.name
    })
  },
  methods: {
    logout() {
      api.post('logout').then(res => {
        localStorage.removeItem('isLoggedIn')
        this.$router.push({name: 'home'})
      })
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #101010;
  font-family: "Roboto", sans-serif;
}

img {
  width: 100%;
  height: 100%;
  display: block;
}

a {
  text-decoration: none;
}

.mainColorHeader {
  background: #191919;
}

header {
  background: #191919;
}

.nav--link {
  margin-right: 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #949494;
}

.logo-text {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 25px;
  color: #ffffff;
}

.nav--link:hover {
  color: white;
}

.logo {
  width: 15px;
  height: 15px;
  position: relative;
  right: 6px;
}

.entrance {
  width: 86px;
  height: 30px;
  background: #00ba78;
  border-radius: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  border: 0;
  margin-right: 20px;
}

.registration {
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  align-items: center;
  text-align: center;
  color: #d6d6d6;
  border: 0;
  background: none;
}

.register-burger {
  display: none;
}

@media screen and (max-width: 991px) {
  .nav--link {
    margin-top: 10px;
  }

  .nav--link:nth-child(1) {
    margin-bottom: 15px;
  }

  .container-fluid {
    justify-content: space-around;
  }

  .logo-text {
    margin-top: 15px;
  }

  .logo {
    position: relative;
    top: 17px;
  }

  .register-burger {
    display: block;
  }

  .register {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .nav--link:nth-child(1) {
    margin-bottom: 10px;
  }

  .logo-text {
    margin-top: 10px;
  }

  .logo {
    position: relative;
    top: 11px;
  }
}
</style>