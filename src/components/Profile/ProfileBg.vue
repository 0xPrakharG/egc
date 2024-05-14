<template>
  <div class="profile-bg">
    <div class="blue-grad">
      <div class="white-grad">
        <img src="@/assets/login-earth.png" alt="" class="earth" />
      </div>
      <div class="pink-grad"></div>
    </div>
  </div>
</template>

<style scoped>
.profile-bg {
  width: 100%;
  height: 100vh;
  background: url('@/assets/login-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
}
.blue-grad {
  height: 100%;
  width: 100%;
  background: radial-gradient(20% 25% at 72% 36%, #00e5f482 1%, #ff000000 90%);
  background-size: 200% 200%;
  animation: gradient 10s ease infinite;
}
@keyframes gradient {
  0% {
    background-position: 70% 50%;
  }
  50% {
    background-position: 90% 10%;
  }
  100% {
    background-position: 70% 50%;
  }
}
.white-grad {
  height: 100%;
  width: 100%;
  background: radial-gradient(10% 18% at 17% 82%, #ffffff4f 1%, #ff000000 99%);
  background-size: 200% 200%;
  animation: white 10s ease infinite;
}
@keyframes white {
  0% {
    background-position: 20% 70%;
  }
  50% {
    background-position: 5% 30%;
  }
  100% {
    background-position: 20% 70%;
  }
}
.earth {
  position: absolute;
  bottom: 0;
  right: 0;
  animation: earth 20s linear infinite;
}
@keyframes earth {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
.pink-grad {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-image: radial-gradient(22% 33% at 33% 82%, #7800c1 1%, #ff000000 99%);
  background-size: 100% 100%;
  z-index: 10;
}
</style>
