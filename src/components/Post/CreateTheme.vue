<template>
  <div class="card w-50 mx-auto mt-5 mainColor">
    <div class="card-title mainColor">
      <h2 class="mt-3 mainColor">Тема</h2>
    </div>
    <div class="card-body mainColor">
      <div class="createTheme mb-3 ">
        <form action="#" method="POST" class="mainColor">

          <div class="form-text ">
            <div v-if="errorMessage"  class="alert alert-danger d-flex align-items-center pb-0" role="alert">
              <ul>
                <li><b>{{ errorMessage }}</b></li>
              </ul>
            </div>
          </div>

          <div class="row g-3 mainColor">
            <div class="col mainColor">
              <label for="title" class="form-label mainColor">Имя</label>
              <input type="text" class="form-control " id="title" placeholder="Ведите название Темы" v-model="title">
            </div>
            <div class="col mainColor">
              <label for="titleUpdate" class="form-label mainColor">Обновленное имя</label>
              <input type="text" class="form-control " id="titleUpdate" placeholder="Ведите новое название Темы" v-model="titleUpdate">
            </div>
          </div>

          <button type="submit" class="btn btn-secondary mt-3 me-3 createButton" @click.prevent="createTheme">Создать</button>
          <button type="submit" class="btn btn-outline-primary mt-3 me-3" @click.prevent="updateTheme">Обновить</button>
          <button type="submit" class="btn btn-outline-danger mt-3" @click.prevent="deleteTheme">Удалить</button>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import api from "@/api/api";
import CardAdmin from "@/components/CardAdmin";
export default {
  name: "CreateTheme",
  data() {
    return {
      title: null,
      titleUpdate: null,
      errorMessage: null,
    }
  },
  methods: {
    createTheme() {
      api.get('sanctum/csrf-cookie').then(res => {
        api.post('api/v1/admin/theme/create', {
          title: this.title,
        }).then(res => {
          console.log(res)
        }).catch(error => {
          const key = Object.keys(error.response.data.errors)[0]
          this.errorMessage = error.response.data.errors[key][0]
        })
      })
    },
    updateTheme() {
      api.get('sanctum/csrf-cookie').then(res => {
        api.post('api/v1/admin/theme/update', {
          title: this.title,
          titleUpdate: this.titleUpdate,
          _method: 'PUT'
        }).then(res => {
          console.log(res)
        }).catch(error => {
          const key = Object.keys(error.response.data.errors)[0]
          this.errorMessage = error.response.data.errors[key][0]
        })
      })
    },
    deleteTheme(){
      api.get('sanctum/csrf-cookie').then(res => {
        api.post('api/v1/admin/theme/delete', {
          title: this.title,
          _method: 'DELETE'
        }).then(res => {
          console.log(res)
        }).catch(error => {
          const key = Object.keys(error.response.data.errors)[0]
          this.errorMessage = error.response.data.errors[key][0]
        })
      })
    }
  },
  components: {
    CardAdmin
  }
}
</script>

<style scoped>

.mainColor {
  background-color: #232323;
}

.createButton {
  background-color: #42b983;
}

</style>