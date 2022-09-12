<template>
  <form action="#" method="POST">
    <label for="user_id">user_id</label><br>
    <input type="text" id="user_id" v-model="userContacts.user_id"><br><br>

    <label for="gitOrBit">gitOrBit</label><br>
    <input type="text" id="gitOrBit" v-model="userContacts.gitOrBit"><br><br>

    <label for="telegram">telegram</label><br>
    <input type="text" id="telegram" v-model="userContacts.telegram"><br><br>

    <label for="skype">skype</label><br>
    <input type="text" id="skype" v-model="userContacts.skype"><br><br>

    <label for="vk">vk</label><br>
    <input type="text" id="vk" v-model="userContacts.vk"><br><br>

    <label for="discord">discord</label><br>
    <input type="text" id="discord" v-model="userContacts.discord"><br><br>

    <button type="submit" @click.prevent="updateUserContacts">Обновить</button>
  </form>
</template>

<script>
import api from "@/api/api";

export default {
  name: "Poligon",

  data() {
    return {
      userContacts: {
        user_id: JSON.parse(localStorage.getItem("user")).id,
        gitOrBit: null,
        telegram: null,
        skype: null,
        vk: null,
        discord: null,
      }
    }
  },

  methods: {
    updateUserContacts() {
      api.get('sanctum/csrf-cookie').then(res => {
        api.post('api/v1/site/user/contacts/update', {
          user_id: this.userContacts.user_id,
          gitOrBit: this.userContacts.gitOrBit,
          telegram: this.userContacts.telegram,
          skype: this.userContacts.skype,
          vk: this.userContacts.vk,
          discord: this.userContacts.discord,
        }).then(res2 => {
          console.log(res2)
        })
      })
    }
  },

  mounted() {
    api.get('sanctum/csrf-cookie').then(res => {
      api.get(`api/v1/site/user/contacts/get/${this.userContacts.user_id}`).then(res2 => {
        this.userContacts.discord = res2.data.data[0].discord
        this.userContacts.gitOrBit = res2.data.data[0].gitOrBit
        this.userContacts.skype = res2.data.data[0].skype
        this.userContacts.telegram = res2.data.data[0].telegram
        this.userContacts.vk = res2.data.data[0].vk
      })
    })
  }
}
</script>

<style scoped>

</style>