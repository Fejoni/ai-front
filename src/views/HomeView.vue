<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <button type="submit" @click.prevent="get">Получить</button>
  <h1>fsdfds</h1>
</template>

<script>
import api from "@/api/api";


// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      name: null,
    }
  },
  components: {
    HelloWorld
  },
  methods: {
  },
  mounted() {
  }
}
</script>
