<template>
    <Header></Header>
    <div class="container">
      <div class="row">
        <div class="col-2">
          <Aside></Aside>
        </div>
        <div class="col-10">
          <section class="content">
            <slot />
          </section>
        </div>
      </div>
    </div>
</template>

<script>
import Header from "@/components/layouts/Header";
import Aside from "@/components/layouts/Aside";

export default {
  name: "Default",
  components: {
    Header, Aside
  }
}
</script>

<style scoped>

</style>