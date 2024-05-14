<template>
  <div class="hero-center-text">
    <div class="center-container">
      <h1 class="hero-center-title">EasyGetCoin</h1>
      <p class="hero-center-info">Explore the future of blockchain gaming</p>
    </div>
  </div>
  <a class="join-now-btn"
    ><p>Join now</p>
    <img src="@/assets/chevronright.svg" alt=""
  /></a>
</template>

<style scoped>
.hero-center-text {
  width: 100%;
  height: 100%;
  margin: auto;
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
  font-size: 90px;
  line-height: 75px;
  color: #ffffff;
  margin-bottom: 10px;
}
.hero-center-info {
  font-weight: 300;
  font-size: 22px;
  color: #ffffff;
}
.join-now-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  background: linear-gradient(95.3deg, rgba(69, 6, 108, 0.54) 5.5%, rgba(134, 12, 210, 0.38) 94.5%);
  border: 1px solid #801ae5;
  border-radius: 30px;
  padding: 3px 3px 3px 30px;
  position: absolute;
  bottom: 12%;
  right: 30px;
}
.join-now-btn > p {
  color: #ffffff;
  font-size: 24px;
  font-weight: 300;
}
.join-now-btn > img {
  width: 55px;
  height: 55px;
  padding: 15px;
  border-radius: 60px;
  background: #d9d9d9;
}
@media screen and (min-width: 1251px) {
  .hero-center-title {
    font-size: 100px;
    line-height: 65px;
    margin-bottom: 20px;
  }
  .hero-center-info {
    font-size: 24px;
  }
}
</style>
