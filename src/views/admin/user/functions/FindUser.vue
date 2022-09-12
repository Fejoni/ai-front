<template>
  <h1 class="mb-5 mainColor">Найти пользователя</h1>
  <div class="card mainColor mb-5">
    <div class="card-header mainColor">
      Поиск по имени
    </div>
    <div class="card-body mainColor">
      <form action="#" method="POST" class="mainColor">
        <div class="mainColor" v-if="errorMessage">{{ errorMessage }}</div>
        <div class="mainColor" v-if="searchByName.dataUser.success">
          <ul class="mainColor">
            <li class="mainColor"><b class="textColor">ID:</b> {{ searchByName.dataUser.id }}</li>
            <li class="mainColor"><b class="textColor">Name:</b> {{ searchByName.dataUser.name }}</li>
            <li class="mainColor"><b class="textColor">E-mail:</b> {{ searchByName.dataUser.email }}</li>
          </ul>
        </div>
        <input type="text" v-model="searchByName.name" class="mb-3"><br>
        <button class="btn btn-success btn-sm myButton" type="submit" @click.prevent="findUserByName">Найти</button>
      </form>
      <div class="response">
        <p>{{ searchByName.response }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api";

export default {
  name: "FindUser",

  data() {
    return {
      errorMessage: null,
      searchByName: {
        dataUser: {
          id: null,
          name: null,
          email: null,
          success: false
        }
      }
    }
  },

  methods: {
    findUserByName() {
      api.get('sanctum/csrf-cookie').then(res => {
          api.post('api/v1/admin/user/find/userByName', {
            name: this.searchByName.name
          }).then(res2 => {
            console.log(res2)
            this.searchByName.dataUser.id = res2.data.data['id']
            this.searchByName.dataUser.name = res2.data.data['name']
            this.searchByName.dataUser.email = res2.data.data['email']
            this.searchByName.dataUser.success = true
          })
        }).catch(error => {
          const key = Object.keys(error.response.data.errors)[0]
          this.errorMessage = error.response.data.errors[key][0]
        })
    }
  },

  mounted() {
    api.get('sanctum/csrf-cookie').then(res => {
      api.get('api/v1/admin/user/data/3').then(res2 => {
        console.log(res2.data.data)
      })
    })
  }
}
</script>

<style scoped>

li {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.textColor {
  color: #00ba66;
}

.mainColor {
  color: white;
  background-color: #191919;
  border-color: #949494;
}

.customColor {
  color: white;
  background-color: #191919;
  border-color: #303030;
}

.card {
  max-width: 400px;
  margin: 0 auto;
}

.myButton {
  background-color: #00ba78;
  padding-right: 50px;
  padding-left: 50px;
  border-radius: 10px;
}

.myButton:hover {
  background-color: #00ba66;
}

input {
  outline:none;
  border-color: #303030;
}

</style>