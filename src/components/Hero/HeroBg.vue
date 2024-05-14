<template>
  <div class="hero-bg">
    <img src="@/assets/stars.svg" alt="" class="bg-stars" />
    <img src="@/assets/heroellipse.png" alt="" class="ellipse" />
    <iframe
      src="https://lottie.host/embed/38fcef8d-1a3d-4452-bcde-62bccf271816/lUJiaBMjVu.json"
      class="orbits"
    ></iframe>
    <div class="moon">
      <div></div>
    </div>
    <img src="@/assets/bigorbit.svg" alt="" class="big-orbit" />
    <div class="bg-text">
      <p>Transparent</p>
      <p>Fair</p>
      <p>Adventure</p>
    </div>
  </div>
</template>

<style scoped>
.hero-bg {
  height: 100vh;
  background: linear-gradient(238.93deg, #78309a 1.44%, #3d0b6e 10.52%, #141217 23.29%);
}
.bg-stars {
  height: 100%;
}
.ellipse {
  position: absolute;
  z-index: 110;
  height: 100vh;
  top: 0;
  left: 0;
}
.orbits {
  position: absolute;
  width: 500px;
  height: 500px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 70px auto 0;
  border: none;
  z-index: 100;
}
.moon {
  width: 250px;
  height: 250px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 200px auto;
  overflow: hidden;
  border-radius: 50%;
  z-index: 150;
}
.big-orbit {
  width: 90%;
  height: 450px;
  position: absolute;
  top: 30px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 60px auto;
  z-index: 105;
}
.moon::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
}
.moon > div {
  width: 485%;
  height: 100%;
  animation: spin 2s linear infinite;
  background: url('@/assets/moonanimation.png');
}
@keyframes spin {
  to {
    transform: translateX(-50%);
  }
}
.bg-text {
  width: 320px;
  position: absolute;
  top: 380px;
  left: calc(50% - 400px);
  z-index: 120;
}
.bg-text > p {
  font-family: 'Zen Tokyo Zoo', sans-serif;
  font-size: 25px;
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-color: #8e23fd;
  text-decoration-thickness: 2px;
  text-underline-offset: 7px;
  background: #ffffff;
  background: linear-gradient(to bottom, #ffffff 0%, #ffffff 10%, #8e23fd 10%, #8009fd 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 0px 20px #7d00ff;
  padding-bottom: 30px;
}
.bg-text > p:nth-child(1) {
  text-align: left;
}
.bg-text > p:nth-child(2) {
  width: 360px;
  text-align: center;
}
.bg-text > p:nth-child(3) {
  text-align: right;
}
@media screen and (min-width: 1251px) {
  .big-orbit {
    width: 95%;
    height: 500px;
    margin: 30px auto;
  }
  .bg-text {
    top: 390px;
    left: calc(50% - 430px);
    width: 350px;
  }
  .bg-text > p {
    font-size: 28px;
  }
  .bg-text > p:nth-child(2) {
    width: 400px;
  }
}
</style>
