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
    <img src="@/assets/bigorbit-mobile.svg" alt="" class="big-orbit" />
    <div class="bg-text">
      <p>Transparent</p>
      <p>Fair</p>
      <p>Adventure</p>
    </div>
    <div class="arrow">
      <img src="@/assets/scroll-arrow.svg" alt="" />
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
  z-index: 1;
  height: 100vh;
  top: 0;
  left: 0;
}
.orbits {
  width: 300px;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 100px auto 0;
  border: none;
  z-index: 100;
}
.moon {
  width: 140px;
  height: 140px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 230px auto;
  overflow: hidden;
  border-radius: 50%;
  z-index: 150;
}
.big-orbit {
  width: 380px;
  height: 550px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 25px auto;
  z-index: 100;
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
  width: 885%;
  height: 100%;
  animation: spin 3s linear infinite;
  background: url('@/assets/moonanimation.png');
}
@keyframes spin {
  to {
    transform: translateX(-50%);
  }
}
.bg-text {
  position: absolute;
  width: 170px;
  top: 350px;
  left: calc(50% - 185px);
  z-index: 120;
}
.bg-text > p {
  font-family: 'Zen Tokyo Zoo', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0.20999999344348907px;
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-color: #8e23fd;
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
  background: #ffffff;
  background: linear-gradient(to bottom, #ffffff 0%, #ffffff 5%, #8e23fd 5%, #8009fd 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 0px 20px #7d00ff;
  padding-bottom: 20px;
}
.bg-text > p:nth-child(1) {
  text-align: left;
}
.bg-text > p:nth-child(2) {
  width: 190px;
  text-align: center;
}
.bg-text > p:nth-child(3) {
  text-align: right;
}
.arrow {
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
}
.arrow > img {
  height: 60px;
}
@media screen and (min-width: 651px) {
  .orbits {
    width: 350px;
  }
  .big-orbit {
    width: 450px;
  }
  .moon {
    width: 160px;
    height: 160px;
    margin: 220px auto;
  }
  .bg-text {
    top: 365px;
    left: calc(50% - 250px);
    width: 220px;
  }
  .bg-text > p {
    font-size: 18px;
    padding-bottom: 25px;
  }
  .bg-text > p:nth-child(2) {
    width: 250px;
  }
}
</style>
