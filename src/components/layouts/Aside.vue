<template>

  <div class="aside col-xl-2">
    <aside>
      <button type="button" class="button">Создать пост</button>
      <div class="post__selection">
        <div class="post__selection__input">
              <span>
                <input
                    class="form-check-input mt-0 border-white bg-dark"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                />
                <p class="post__selection__text">Все обсуждения</p>
              </span>
        </div>
        <div class="post__selection__input">
              <span>
                <input
                    class="form-check-input mt-0 border-white bg-dark"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                />
                <p class="post__selection__text">Мои темы</p>
              </span>
        </div>
      </div>
      <div class="language__selection">
        <p class="language__selection__name">Основы</p>
        <div class="post__selection__input">
              <span>
                <input
                    class="form-check-input mt-0 border-white bg-dark"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                />
                <p class="post__selection__text">Все обсуждения</p>
              </span>
        </div>
        <div class="post__selection__input">
              <span>
                <input
                    class="form-check-input mt-0 border-white bg-dark"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                />
                <p class="post__selection__text">Все обсуждения</p>
              </span>
        </div>
        <div class="post__selection__input">
              <span>
                <input
                    class="form-check-input mt-0 border-white bg-dark"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                />
                <p class="post__selection__text">Все обсуждения</p>
              </span>
        </div>
      </div>
    </aside>
    <aside class="technical__section">
      <div class="language__selection">
        <p class="language__selection__name">Технический раздел</p>
        <div class="mail">
              <span>
                <p class="gray">Почта для жалоб</p>
                <p class="white">egor3k3@mail.ru</p>
              </span>
        </div>
        <span class="creators">
              <p>Forum software by Fejoni<br> and L0gan74 @2022 Fejoni</p>
            </span>
      </div>
    </aside>
  </div>

  <!--<ul>-->
  <!--  <li v-for="aside in asides" :key="aside">-->
  <!--    {{aside.title }} - {{ aside.id }}-->
  <!--    <ul>-->
  <!--      <li v-for="subject in aside.subjects" :key="subject" style="color: #191919">-->
  <!--        {{subject.title}}-->
  <!--      </li>-->
  <!--    </ul>-->
  <!--  </li>-->
  <!--</ul>-->
</template>

<script>
import api from "@/api/api";

export default {
  name: "Aside",

  data() {
    return {
      asides: []
    }
  },

  mounted() {
    api.get('sanctum/csrf-cookie').then(res => {
      api.get('api/v1/site/aside/get').then(res2 => {
        this.asides = res2.data.data
        console.log(res2.data.data)
      }).catch(error => {
        console.log(Object.keys(error.response.data.errors)[0])
      })
    })
  }
}

</script>

<style scoped>

aside {
  margin-top: 25px;
  width: 196px;
  height: auto;
  background: #191919;
  border-radius: 15px;
  padding: 20px 0;
}

aside .button {
  width: 156px;
  height: 30px;
  background: #00ba78;
  border-radius: 10px;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: #ffffff;
  border: none;
}

.post__selection {
  padding-top: 25px;
  background-color: #191919;
}

.post__selection__input {
  padding: 5px 10px 0 10px;
  background-color: #191919;
}

.post__selection__input span:hover {
  background: #313131;
  border-radius: 10px;
}

.post__selection__text:hover {
  background-color: #313131;
}


.post__selection__input input {
  width: 25px;
  height: 25px;
  border: none;
}

.post__selection__input span {
  display: flex;
  padding: 5px 10px;
  background-color: #191919;
}

.post__selection__text {
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #ffffff;
  margin: 0;
  position: relative;
  top: 5px;
  left: 10px;
  background-color: #191919;
}

.language__selection__name {
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: #949494;
  padding: 15px 0 10px 20px;
  margin: 0;
  background-color: #191919;
}

.technical__section {
  margin-top: 20px;
}

.mail {
  text-align: left;
  background-color: #191919;
}

.mail span p {
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: center;
  background-color: #191919;
}

.mail span {
  padding: 32px 0 0 20px;
  background-color: #191919;
}

.gray {
  color: #949494;
  margin: 0;
  padding: 0 0 2px 20px;
}

.white {
  color: #ffffff;
  padding: 0 0 2px 20px;
}

.basic__information {
  margin-right: 35px;
}

.block__user {
  padding: 7px 13px 0 0;
}

.creators p {
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: left;
  color: #949494;
  padding-left: 20px;
  background-color: #191919;
}

.language__selection {
  background-color: #191919;
}
</style>