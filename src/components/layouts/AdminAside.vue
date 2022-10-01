<template>
  <div class="row">
    <div class="col-xl-2">
      <div class="aside-menu mainColor mainSetting">
        <div class="create-a__post mainColor">
          <router-link class="btn-route-list" to="/admin"><button type="button">Главная</button></router-link>
        </div>
        <div class="posts mainColor">
          <ul class="post-main post-guidance mainColor">
            <li class="mainColor"><router-link  class="aside-link mainColor" to="/admin/user">Пользователи</router-link></li>
            <li class="mainColor"><router-link  class="aside-link mainColor" to="/admin/database">База данных</router-link></li>
            <li class="mainColor"><router-link class="aside-link mainColor" to="/admin/posts">Посты</router-link></li>
            <li class="mainColor"><router-link class="aside-link mainColor" to="/admin/test/poligon">Полигон</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AdminAside",

  data() {
    return {}
  },
}

</script>

<style scoped>

.mainSetting {
  border: 1px solid #313131;
  border-radius: 10px;
}

.btn-route-list {
  color: white;
  background-color: #00ba78;
  text-decoration: none;
  font-size: 13px;
}

.mainColor {
  background-color: #191919;
}

.aside-menu {
  background: #191919;
  border-radius: 15px;
  width: 196px;
  height: auto;
  padding: 20px 5px;
}

.create-a__post {
  text-align: center;
  margin-bottom: 25px;
}

.create-a__post button {
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: #ffffff;
  width: 156px;
  height: 30px;
  background: #00ba78;
  border-radius: 10px;
  border: 0;
}

button:hover {
  transition: 1s;
  background: #00ba66;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
}

ul {
  padding: 0 !important;
}

ul li {
  list-style-type: none;
}

.aside-link {
  text-decoration: none;
  color: white;
  height: 100%;
  align-items: center;
  display: flex;
  padding-left: 10px;
  font-size: 13px;
  border-radius: 10px;
}

.name-post {
  padding: 0 0 10px 10px;
  margin: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: #949494;
  text-align: left;
}

.post-guidance li {
  height: 35px;
}

.post-guidance a::before {
  content: "";
  float: left;
  width: 25px;
  height: 25px;
  background: url("../../assets/logoAside.svg");
  left: 10px;
  margin-right: 10px;
  color: white;
}

.post-guidance li:hover {
  background: #313131;
  border-radius: 10px;
}

.aside-link:hover {
  color: #919191;
  background-color: #313131;
}

</style>