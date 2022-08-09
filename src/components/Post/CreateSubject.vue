<template>
  <div class="card w-50 mx-auto mt-5 mainColor">
    <div class="card-title mainColor">
      <h2 class="mt-3 mainColor">Тематика</h2>
    </div>
    <div class="card-body mainColor">
      <form action="#" method="POST" class="mainColor">
        <div class="form-text mainColor">
          <div v-if="errorMessage"  class="alert alert-danger d-flex align-items-center pb-0" role="alert">
            <ul>
              <li><b>{{ errorMessage }}</b></li>
            </ul>
          </div>
        </div>
        <div class="row g-3 mb-3 mainColor">
          <div class="col mainColor">
            <label for="title" class="form-label mainColor">Имя тематики</label>
            <input type="text" class="form-control" id="title" placeholder="Ведите название Тематики" v-model="title">
          </div>
          <div class="col mainColor">
            <label for="theme_id" class="form-label mainColor">ID темы</label>
            <input type="text" class="form-control" id="theme_id" placeholder="Ведите ID Темы" v-model="theme_id">
          </div>
        </div>
        <div class="row g-3 mainColor">
          <div class="col mainColor">
            <label for="titleUpdate" class="form-label mainColor">Новое имя тематики</label>
            <input type="text" class="form-control" id="titleUpdate" placeholder="Ведите название Тематики" v-model="titleUpdate">
          </div>
          <div class="col mainColor">
            <label for="theme_idUpdate" class="form-label mainColor">Новый ID темы</label>
            <input type="text" class="form-control" id="theme_idUpdate" placeholder="Ведите ID Темы" v-model="theme_idUpdate">
          </div>
        </div>
        <button type="submit" class="btn btn-secondary mt-3 me-3 createButton" @click.prevent="createSubject">Создать</button>
        <button type="submit" class="btn btn-outline-primary mt-3 me-3" @click.prevent="updateSubject">Обновить</button>
        <button type="submit" class="btn btn-outline-danger mt-3" @click.prevent="deleteSubject">Удалить</button>
      </form>
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
import CardAdmin from "@/components/CardAdmin";
export default {
  name: "CreateSubject",
  data() {
    return {
      title: null,
      titleUpdate: null,
      theme_id: null,
      theme_idUpdate: null,
      errorMessage: null,
    }
  },
  methods: {
    createSubject() {
      api.get('sanctum/csrf-cookie').then(res => {
        api.post('api/v1/admin/subject/create', {
          title: this.title,
          theme_id: this.theme_id
        }).then(res => {
          console.log(res)
        }).catch(error => {
          const key = Object.keys(error.response.data.errors)[0]
          this.errorMessage = error.response.data.errors[key][0]
        })
      })
    },
    deleteSubject() {
      api.get('sanctum/csrf-cookie').then(res => {
        api.post('api/v1/admin/subject/delete', {
          title: this.title,
          _method: 'DELETE'
        }).then(res => {
          console.log(res)
        }).catch(error => {
          const key = Object.keys(error.response.data.errors)[0]
          this.errorMessage = error.response.data.errors[key][0]
        })
      })
    },
    updateSubject() {
      api.get('sanctum/csrf-cookie').then(res => {
        api.post('api/v1/admin/subject/update', {
          title: this.title,
          titleUpdate: this.titleUpdate,
          theme_id: this.theme_id,
          theme_idUpdate: this.theme_idUpdate,
          _method: 'PUT'
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