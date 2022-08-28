<template>
  <Header></Header>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <AdminAside></AdminAside>
      </div>
      <div class="col-10 mainSetting">
        <section class="content mainColor mt-3">
          <slot />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layouts/Header";
import AdminAside from "@/components/layouts/AdminAside";

export default {
  name: "Admin",

  components: {
    Header, AdminAside
  }
}
</script>

<style scoped>

.mainColor {
  background: #191919;
}

.mainSetting {
  background: #191919;
  border-radius: 10px;
  border: 1px solid #313131;
}
</style>