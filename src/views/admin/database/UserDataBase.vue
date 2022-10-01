<template>
  <table class="table">
    <thead>
    <tr class="backgroundColor">
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">E-mail</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="oUser in oUsers" class="backgroundColor">
      <td>{{ oUser.id }}</td>
      <td>{{ oUser.name }}</td>
      <td>{{ oUser.email }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import api from "@/api/api";

export default {
  name: "DataBaseUser",

  data() {
    return {
      oUsers: []
    }
  },

  mounted() {
    api.get('sanctum/csrf-cookie').then(res => {
      api.get('api/v1/site/user/get/full/data').then(res2 => {
        this.oUsers = res2.data.data
      })
    })
  }
}
</script>

<style scoped>
.backgroundColor {
  background: #191919;
}
</style>