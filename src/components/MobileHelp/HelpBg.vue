<template>
  <div style="position: relative;">
    <div class="help-bg">
      <div class="help-bg-base">
        <img src="@/assets/left-leaves-mob.png" alt="" />
        <img src="@/assets/right-leaves-mob.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.help-bg {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: url('@/assets/help-mobile-bg.png');
  background-size: cover;
  overflow: hidden;
  z-index: -999;
}
.help-bg-base {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: self-end;
}
.help-bg-base > img {
  height: 30%;
}
</style>
