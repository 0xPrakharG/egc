<template>
  <div class="verifiable-bg">
    <div class="ellipse-gradient">
      <img src="@/assets/verifiable-ellipse.png" alt="" class="" />
    </div>
    <img src="@/assets/stars.svg" alt="" class="verifiable-stars" />
  </div>
</template>

<style scoped>
.verifiable-bg {
  background: #141217;
  height: 100vh;
}
.ellipse-gradient {
  position: absolute;
  top: 0;
  right: 0;
}
.ellipse-gradient > img {
  width: 300px;
}
.verifiable-stars {
  height: 100%;
}
</style>
