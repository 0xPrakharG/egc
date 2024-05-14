<template>
  <div class="verifiable-bg">
    <div class="ellipse-gradient">
      <img src="@/assets/verifiable-ellipse.png" alt="" class="" />
    </div>
    <img src="@/assets/stars.svg" alt="" class="verifiable-stars" />
    <div class="planets-container">
      <img src="@/assets/planets.png" alt="" class="planets" />
    </div>
  </div>
</template>

<style scoped>
.verifiable-bg {
  background: linear-gradient(0.04deg, #31035f 0.03%, #141217 27.35%, #121115 99.97%);
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
.planets-container {
  width: 140%;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.planets {
  width: 100%;
  animation: rotate 30s linear infinite;
}
@keyframes rotate {
  10% {
    transform: rotate(36deg);
  }
  20% {
    transform: rotate(72deg);
  }
  30% {
    transform: rotate(108deg);
  }
  40% {
    transform: rotate(144deg);
  }
  50% {
    transform: rotate(180deg);
  }
  60% {
    transform: rotate(216deg);
  }
  70% {
    transform: rotate(252deg);
  }
  80% {
    transform: rotate(288deg);
  }
  90% {
    transform: rotate(324deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media screen and (min-width: 501px) {
  .planets-container {
    width: 130%;
  }
}
@media screen and (min-width: 601px) {
  .planets-container {
    width: 110%;
  }
}
@media screen and (min-width: 751px) {
  .planets-container {
    width: 90%;
  }
}
@media screen and (min-width: 851px) {
  .planets-container {
    width: 80%;
  }
}
</style>
