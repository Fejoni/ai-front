<template>

  <div id="app">
    <!--Динамический компонент-->
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<style>

* {
  color: white;
  background-color: #101010;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
<script>


export default {
  name: "App",

  computed: {
    //Это самое вычисляемое свойство
    layout(){
      //Вернем имя шаблона из роута или дефолтное значение
      //(шаблон для страниц, для которых мы не указали шаблон)
      return this.$route.meta.layout || "default-layout"
    }
  }
  // components: {
  //   Header, Aside
  // },
}

</script>
