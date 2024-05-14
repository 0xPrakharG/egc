<template>
  <div style="position: relative">
    <section class="verification-bg"></section>
  </div>
</template>

<style scoped>
.verification-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url('@/assets/verification-bg.png');
  background-size: cover;
  overflow: hidden;
  z-index: -999;
}
span {
  position: absolute;
  top: 100px;
  left: 0;
  animation: animate 2s linear infinite;
}
span::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -300px;
  transform: translateY(-50%);
  opacity: 0.2;
  width: 300px;
  height: 4px;
  background: linear-gradient(90deg, #fff, transparent);
}
@keyframes animate {
  0% {
    transform: rotate(225deg) translateX(0);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotate(225deg) translateX(calc(-100vh - 300px));
  }
}
span:nth-child(1) {
  top: 0;
  left: 1200px;
  right: initial;
  animation-delay: 1s;
  animation-duration: 2s;
}
span:nth-child(2) {
  top: 0;
  left: 100px;
  right: initial;
  animation-delay: 3.5s;
  animation-duration: 3s;
}
span:nth-child(3) {
  top: 0;
  left: 170px;
  right: initial;
  animation-delay: 4s;
  animation-duration: 2.25s;
}
span:nth-child(4) {
  top: 0;
  left: 900px;
  right: initial;
  animation-delay: 3.25s;
  animation-duration: 2.75s;
}
span:nth-child(5) {
  top: 0;
  left: 270px;
  right: initial;
  animation-delay: 4.35s;
  animation-duration: 2.4s;
}
span:nth-child(6) {
  top: 0;
  left: 600px;
  right: initial;
  animation-delay: 3.1s;
  animation-duration: 3.2s;
}
span:nth-child(7) {
  top: 0;
  left: 350px;
  right: initial;
  animation-delay: 3.8s;
  animation-duration: 3.1s;
}
span:nth-child(8) {
  top: 0;
  left: 700px;
  right: initial;
  animation-delay: 4.8s;
  animation-duration: 2.8s;
}
span:nth-child(9) {
  top: 0;
  left: 1000px;
  right: initial;
  animation-delay: 5s;
  animation-duration: 2.67s;
}
span:nth-child(10) {
  top: 0;
  left: 450px;
  right: initial;
  animation-delay: 5.4s;
  animation-duration: 3.45s;
}
span:nth-child(11) {
  top: 250px;
  left: 0;
  right: initial;
  animation-delay: 6.1s;
  animation-duration: 3.7s;
}
span:nth-child(12) {
  top: 380px;
  left: 0;
  right: initial;
  animation-delay: 5.9s;
  animation-duration: 3.1s;
}
span:nth-child(13) {
  top: 10px;
  left: 0;
  right: initial;
  animation-delay: 5s;
  animation-duration: 2.1s;
}
span:nth-child(14) {
  top: 550px;
  left: 0;
  right: initial;
  animation-delay: 6.4s;
  animation-duration: 2.6s;
}
</style>
