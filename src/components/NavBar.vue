<template>
  <div class="navbar">
    <router-link to="/" class="logo">
      <img src="@/assets/img/logo.png" v-bind:alt="name" />
    </router-link>
    <router-link to="/" class="logo-text">Lovely Gifts</router-link>
    <router-link to="/gifts">Gifts</router-link>
    <router-link to="/gallery">Gallery</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="#" class="cart">
      <img src="@/assets/img/cart.png" alt="Cart" />
    </router-link>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "NavBar",
  router,
  data: () => ({
    name: process.env.VUE_APP_NAME
  })
};
</script>

<style scoped lang="less">
.navbar {
  font-family: "Muli", sans-serif;
  width: 100%;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 30px;
  a {
    margin: 0 15.5px;
    text-decoration: none;
    color: #333;
    font-weight: 500;
  }
  .logo {
    img {
      height: 75px;
      position: relative;
      top: 25px;
    }
  }
  .logo-text {
    margin-right: auto;
    font-weight: 800;
    font-size: 1.3rem;
  }
  .cart {
    img {
      height: 32px;
    }
  }
}
</style>
