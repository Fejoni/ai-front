<template>
  <router-link to="/admin/posts" class="text-decoration-none btn btn-outline-primary btn-sm mb-3 me-3">Назад</router-link>

  <form action="#" method="post" class="mt-3">
    <div class="w-50" style="width: 50%; margin: 0 auto;">
      <div class="mb-3">
        <label for="subject_id" class="form-label h5">Тематика</label>
        <input v-model="subject_id" type="text" class="form-control" id="subject_id" placeholder="Фреймворки">
        <div id="themeHelp" class="form-text">Напишите ID нужную тематики</div>
      </div>
      <div class="mb-3">
        <label for="title" class="form-label h5">Заголовок</label>
        <input v-model="title" type="text" class="form-control" id="title">
        <div id="titleHelp" class="form-text">Сформулируйте в нескольких словах о чем ваша тема</div>
      </div>
      <div class="mb-3">
        <label for="body" class="form-label h5">Содержание</label>
        <textarea v-model="body" class="form-control" id="body" rows="5"></textarea>
      </div>
      <button @click.prevent="postCreate" type="submit" class="btn btn-secondary">Создать</button>
    </div>
  </form>
</template>

<script>
import api from "@/api/api";

export default {
  name: "PostCreate",

  data() {
    return {
      subject_id: null,
      title: null,
      body: null,
      errorMessage: null,
    }
  },

  methods: {
    postCreate() {
      api.get('sanctum/csrf-cookie').then(res => {
        api.post('api/v1/site/post/create', {
          title: this.title,
          body: this.body,
          subject_id: this.subject_id,
          user_id: JSON.parse(localStorage.getItem("user")).id,
        }).then(res => {
          console.log(res)
        }).catch(error => {
          const key = Object.keys(error.response.data.errors)[0]
          this.errorMessage = error.response.data.errors[key][0]
        })
      })
    }
  }
}
</script>

<style scoped>

</style>