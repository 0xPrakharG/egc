<template>
  <div class="featured-games-bg">
    <div class="ellipse-gradient">
      <img src="@/assets/featuredellipse.png" alt="" class="" />
    </div>
    <img src="@/assets/stars.svg" alt="" class="featured-stars" id="introduction" />
  </div>
</template>

<style scoped>
.featured-games-bg {
  background: #141217;
  height: 100vh;
}
.ellipse-gradient {
  position: absolute;
  top: -30px;
  left: 130px;
  margin: 150px 0 0 -200px;
}
.ellipse-gradient > img {
  width: 500px;
  height: 250px;
  transform: rotateZ(-20deg);
}
.featured-stars {
  height: 100%;
}
</style>
