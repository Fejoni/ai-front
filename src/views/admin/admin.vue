<template>
  <h1>Admin</h1>
  <div class="container">
    <CreateTheme></CreateTheme>
    <CreateSubject></CreateSubject>
  </div>
</template>

<script>
import CreateTheme from "@/components/Post/CreateTheme";
import CreateSubject from "@/components/Post/CreateSubject";
import Aside from "@/components/layouts/Aside";
export default {
  name: "admin",
  components: {
    CreateTheme, CreateSubject
  }

}
</script>

<style scoped>

</style>