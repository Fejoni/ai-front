<template>
  <router-link to="/admin" class="text-decoration-none btn btn-outline-primary btn-sm mb-3 me-3">Назад</router-link>
  <router-link to="/admin/post/create" class="text-decoration-none btn btn-outline-success mb-3 btn-sm">Создать пост
  </router-link>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <router-link :to="`/admin/post/${post.id}`">{{ post.title }}</router-link>
    </li>
  </ul>
</template>

<script>
import api from "@/api/api";

export default {
  name: "Post",

  data() {
    return {
      posts: [],
    }
  },

  mounted() {
    api.get('sanctum/csrf-cookie').then(res => {
      api.get('api/v1/site/post/list').then(res2 => {
        this.posts = res2.data.data
        console.log(res2.data.data)
      })
    })
  }
}
</script>

<style scoped>
</style>