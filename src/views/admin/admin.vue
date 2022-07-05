<template>
  <h1>Admin</h1>
  <div class="createTheme">
    <form action="#" method="POST">
      <input type="text" name="title" placeholder="Ведите название Темы">
      <button type="submit" @click.prevent="get">Создать</button>
    </form>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  name: "admin",
  data() {
    return {
      theme: {
        title: null,
      },

    }
  },
  methods: {
    createTheme() {
      let data = this.theme.title
      api.get('http://ai.test:8000/api/admin/create/theme').then(res => {
        console.log(res)
      })
    },
    get() {
      api.get('http://ai.test:8000/api/get').then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>