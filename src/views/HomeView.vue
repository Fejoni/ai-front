<template>
  <main class="col-xl-10">
    <section>
      <div class="post__description">
        <div class="basic__information">
          <div class="post__title">
            <p>
              Luminous Team | Холодки 70/30 | Автокрипт (FUD 0-3/26) | Не
              забираем запросов в какоми...
            </p>
          </div>
          <div class="post__language">
            <div class="php">
              <p>PHP</p>
            </div>
            <div class="javascript">
              <p>JavaScript</p>
            </div>
          </div>
        </div>
        <div class="block__user">
          <div class="report"></div>
          <div class="user__information">
            <div class="user__photo"></div>
            <div class="user__row">
              <p class="user__name">Fejoni</p>
              <p class="user__data">Только что</p>
            </div>
          </div>
        </div>
      </div>
      <div class="post__description">
        <div class="basic__information">
          <div class="post__title">
            <p>
              Luminous Team | Холодки 70/30 | Автокрипт (FUD 0-3/26) | Не
              забираем запросов в какоми...
            </p>
          </div>
          <div class="post__language">
            <div class="php">
              <p>PHP</p>
            </div>
            <div class="javascript">
              <p>JavaScript</p>
            </div>
          </div>
        </div>
        <div class="block__user">
          <div class="report"></div>
          <div class="user__information">
            <div class="user__photo"></div>
            <div class="user__row">
              <p class="user__name">Fejoni</p>
              <p class="user__data">Только что {{ info }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import api from "@/api/api";


export default {
  name: 'HomeView',
  data() {
    return {
      name: null,
    }
  },
  components: {

  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style scoped>

main {
  padding-top: 25px;
  display: flex;
}

aside {
  width: 196px;
  height: auto;
  background: #191919;
  border-radius: 15px;
  padding: 20px 0;
}

aside button {
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

.post__selection__input span:hover {
  background: #313131;
  border-radius: 10px;
}

.post__selection__input input {
  width: 25px;
  height: 25px;
  border: none;
}

.post__selection__input span {
  display: flex;
  padding: 5px 10px;
}

.mail span p {
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: center;
}

.mail span {
  padding: 32px 0 0 20px;
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
}

section {
  width: auto;
  background: #191919;
  border-radius: 15px;
  padding: 0 20px 20px 20px;
}

.post__language {
  display: flex;
  margin: 4px 0 0 8px;
}

.post__title {
  padding: 0;
}

.post__title p {
  padding: 0 0 0 8px;
  margin: 0;
}

.post__language p {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin: 0;
}

.php {
  background: #00ba78;
  border-radius: 5px;
  padding: 5px;
}

.javascript {
  background: #ba0000;
  border-radius: 5px;
  padding: 5px;
  margin-left: 5px;
}

.user__photo {
  width: 35px;
  height: 35px;
  background: white;
  border-radius: 50%;
  margin-right: 15px;
}

.user__name,
.user__data {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #949494;
  text-align: left;
  margin: 0;
  padding: 0 0 2px 5px;
}

.user__information {
  display: flex;
}

.post__description {
  border-radius: 10px;
  padding: 16px 0;
  display: flex;
  margin-top: 20px;
}

.post__description:hover {
  background: #313131;
}
</style>
