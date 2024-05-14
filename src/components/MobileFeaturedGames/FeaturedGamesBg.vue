<template>
  <div class="featured-games-bg">
    <div class="ellipse-gradient">
      <img src="@/assets/featuredellipse.png" alt="" class="" />
    </div>
    <img src="@/assets/stars.svg" alt="" class="featured-stars" />
  </div>
</template>

<style scoped>
.featured-games-bg {
  background: #141217;
  height: 100vh;
}
.ellipse-gradient {
  position: absolute;
  top: 0;
  left: 0;
  margin: 220px 0 0 -200px;
}
.ellipse-gradient > img {
  width: 400px;
  height: 150px;
  transform: rotateZ(-40deg);
}
.featured-stars {
  height: 100%;
}
</style>
