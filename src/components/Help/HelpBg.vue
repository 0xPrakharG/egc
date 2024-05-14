<template>
  <div class="help-bg">
    <div class="help-bg-base">
      <img src="@/assets/leftleaves.png" alt="" />
      <img src="@/assets/rightleaves.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
.help-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url('@/assets/helppage-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  z-index: -2;
}
.help-bg-base {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: self-end;
}
</style>
