<template>
    <Header></Header>
    <div class="container">
      <div class="row">
        <div class="col-2">
          <Aside></Aside>
        </div>
        <div class="col-10 mainSetting">
          <section class="content mainColor">
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

.mainColor {
  background: #191919;
  border-color: #42b983;
}

.mainSetting {
  background: #191919;
  border-radius: 10px;
  border: 1px solid #313131;
}
</style>