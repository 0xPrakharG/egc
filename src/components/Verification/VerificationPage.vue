<script setup>
import VerificationBg from './VerificationBg.vue'
import VerificationContainer from './VerificationContainer.vue'
</script>

<template>
  <div class="verification-page" style="position: relative">
    <VerificationBg />
    <div class="verification-container">
      <div class="verification-header">
        <img src="@/assets/rocket-emote.svg" alt="" />
        <h4>How we verify our games?</h4>
      </div>
      <VerificationContainer />
    </div>
  </div>
</template>

<style scoped>
.verification-page {
  height: 100%;
  width: 100%;
}
.verification-header {
  padding: 100px 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 15px;
  width: 100%;
}
.verification-header > img {
  width: 40px;
  height: 40px;
}
.verification-header > h4 {
  font-size: 36px;
  font-weight: 800;
  line-height: 40px;
  letter-spacing: 0.20999999344348907px;
  color: #fff;
}
</style>
