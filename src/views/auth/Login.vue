<template>
<div>
  <p class="h2">Login</p>
  <p v-if="loading">loading...</p>
  <p v-if="error" style="color:red">{{ error }}</p>
  <input type="email" placeholder="Email" v-model="user.email"><br/>
  <input type="password" placeholder="Password" v-model="user.password"> <br/>
  <button @click="login">Login</button>
</div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      user: {
        email: null,
        password: null
      },
      loading: false,
      error: null
    }
  },
  methods: {
    async login() {
      this.error = null;
      try {
        await this.$store.dispatch('login', this.user);
        await this.$router.push({ name: 'about' });
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>

</style>