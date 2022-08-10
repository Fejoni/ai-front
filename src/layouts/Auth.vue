<template>
  <Header></Header>
  <div class="container">
    <div class="row">
      <section class="content">
        <slot/>
      </section>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layouts/Header";

export default {
  name: "Auth",
  components: {
    Header
  }
}
</script>

<style scoped>

</style>