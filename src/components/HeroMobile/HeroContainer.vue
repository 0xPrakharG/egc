<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="hero-center-text">
    <div class="center-container">
      <h1 class="hero-center-title">EasyGetCoin</h1>
      <p class="hero-center-info">Explore the future of blockchain gaming</p>
    </div>
  </div>
  <RouterLink to="/" class="join-now-btn"
    ><p>Join now</p>
    <img src="@/assets/chevronright.svg" alt=""
  /></RouterLink>
</template>

<style scoped>
.hero-center-text {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 180;
}
.center-container {
  width: 90%;
  text-align: center;
  margin: 255px auto;
}
.hero-center-title {
  font-weight: 600;
  font-size: 55px;
  line-height: 40px;
  color: #ffffff;
  margin-bottom: 10px;
}
.hero-center-info {
  font-weight: 300;
  font-size: 13px;
  color: #ffffff;
}
.join-now-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  background: linear-gradient(95.3deg, rgba(69, 6, 108, 0.54) 5.5%, rgba(134, 12, 210, 0.38) 94.5%);
  border: 1px solid #801ae5;
  border-radius: 30px;
  padding: 3px 3px 3px 20px;
  position: absolute;
  z-index: 500;
  bottom: 20%;
  right: 20px;
}
.join-now-btn > p {
  color: #ffffff;
  font-size: 18px;
  font-weight: 300;
}
.join-now-btn > img {
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 50%;
  background: #d9d9d9;
}
@media screen and (min-width: 651px) {
  .hero-center-title {
    font-size: 70px;
    line-height: 60px;
  }
  .hero-center-info {
    font-weight: 300;
    font-size: 18px;
    color: #ffffff;
  }
}
</style>
