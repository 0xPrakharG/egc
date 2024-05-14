<script setup>
import ProfileRight from '@/components/MobileProfile/Sections/ProfileRight.vue'
</script>

<template>
  <div class="profile-container">
    <div class="profile">
      <ProfileRight />
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
}
.profile {
  margin: 130px auto;
  width: 95%;
  height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
}
@media screen and (min-width: 651px) {
  .profile {
    width: 75%;
  }
}
@media screen and (min-width: 801px) {
  .profile {
    width: 60%;
  }
}
</style>
