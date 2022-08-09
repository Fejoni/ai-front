<template>
  <router-link to="/admin/posts" class="text-decoration-none btn btn-outline-primary mb-3 me-3 btn-sm">Посты</router-link>
  <h1>Admin</h1>
  <div class="container">
    <CreateTheme></CreateTheme>
    <CreateSubject></CreateSubject>
  </div>
</template>

<script>
import CreateTheme from "@/components/Post/CreateTheme";
import CreateSubject from "@/components/Post/CreateSubject";
import Aside from "@/components/layout/Aside";
export default {
  name: "admin",
  components: {
    CreateTheme, CreateSubject
  }

}
</script>

<style scoped>

</style>