<template>
  <h1>{{ id }}</h1>
  <ol>
    <li ><p>{{ post.title }}</p></li>
    <li><p>{{ post.body }}</p></li>
    <li><p>{{ subject.title }}</p></li>
    <li><p>{{ post.created_at }}</p></li>
    <li><p>{{ user.name }}</p></li>
    <li><p>{{ user.email }}</p></li>
  </ol>
</template>

<script>
import api from "@/api/api";

export default {
  name: "ViewPost",

  data() {
    return {
      id: this.$route.params.id,
      post: {
        title: null,
        body: null,
        created_at: null
      },
      subject: {
        title: null
      },
      user: {
        name: null,
      },
    }
  },

  mounted() {
    api.get('sanctum/csrf-cookie').then(res => {
      api.get(`api/v1/site/post/view/${this.id}`).then(res2 => {
        this.post.title = res2.data.data[0].title
        this.post.body = res2.data.data[0].body
        this.post.created_at = res2.data.data[0].created_at
        this.subject.title = res2.data.data[0].subject.title
        this.user.name = res2.data.data[0].user.name
        console.log(res2.data.data[0].id)
      })
    })
  }
}
</script>

<style scoped>

</style>